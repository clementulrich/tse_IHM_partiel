import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BikeService {
    private cartItems = signal<CartItem[]>([]);

    readonly cart = this.cartItems.asReadonly();

    readonly cartTotal = computed(() => this.cartItems().reduce((acc, item) => acc + item.product.price, 0));

    readonly cartCount = computed(() => this.cartItems().length);

    constructor(private http: HttpClient) { }

    // Fetch bikes from the new { "bikes": [...] } element
    getBikes(): Observable<Product[]> {
        return this.http.get<{ bikes: any[] }>('/bikes.json').pipe(
            map(response => response.bikes.map(b => ({
                ...b,
                category: 'bike' // Ensure category is strictly set if missing, though JSON has it
            } as Product)))
        );
    }

    getAccessories(): Observable<Product[]> {
        return this.http.get<any[]>('/accessories.json').pipe(
            map(items => items.map(a => ({
                ...a,
                category: 'accessory'
            } as Product)))
        );
    }

    // New unified method for the single catalog page
    getAllProducts(): Observable<Product[]> {
        return forkJoin({
            bikes: this.getBikes(),
            accessories: this.getAccessories()
        }).pipe(
            map(results => [...results.bikes, ...results.accessories])
        );
    }

    getBikeById(id: number): Observable<Product | undefined> {
        return new Observable(observer => {
            this.getBikes().subscribe({
                next: (bikes) => {
                    const bike = bikes.find(b => b.id === id);
                    observer.next(bike);
                    observer.complete();
                },
                error: (err) => observer.error(err)
            });
        });
    }

    addToCart(product: Product) {
        // Type is now intrinsic to the product, but we keep the cart item structure if needed
        // Or we simplify. The previous code used { product, type }.
        // Let's infer type from product.category for backward compat if needed, 
        // or just use product.category.
        this.cartItems.update(items => [...items, { product, type: product.category }]);
    }

    removeFromCart(productId: number, type: 'bike' | 'accessory') {
        this.cartItems.update(items => {
            const index = items.findIndex(i => i.product.id === productId && i.type === type);
            if (index > -1) {
                const newItems = [...items];
                newItems.splice(index, 1);
                return newItems;
            }
            return items;
        });
    }
}
