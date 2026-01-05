import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../models/bike.model';
import { Accessory } from '../models/accessory.model';
import { CartItem, Product } from '../models/cart-item.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BikeService {
    private cartItems = signal<CartItem[]>([]);

    readonly cart = this.cartItems.asReadonly();

    readonly cartTotal = computed(() => this.cartItems().reduce((acc, item) => acc + item.product.price, 0));

    readonly cartCount = computed(() => this.cartItems().length);

    constructor(private http: HttpClient) { }

    getBikes(): Observable<Bike[]> {
        return this.http.get<Bike[]>('/bikes.json');
    }

    getAccessories(): Observable<Accessory[]> {
        return this.http.get<Accessory[]>('/accessories.json');
    }

    getBikeById(id: number): Observable<Bike | undefined> {
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

    addToCart(product: Product, type: 'bike' | 'accessory') {
        this.cartItems.update(items => [...items, { product, type }]);
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
