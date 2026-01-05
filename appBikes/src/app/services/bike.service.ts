import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../models/bike.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BikeService {
    private cartItems = signal<Bike[]>([]);

    readonly cart = this.cartItems.asReadonly();

    readonly cartTotal = computed(() => this.cartItems().reduce((acc, bike) => acc + bike.price, 0));

    readonly cartCount = computed(() => this.cartItems().length);

    constructor(private http: HttpClient) { }

    getBikes(): Observable<Bike[]> {
        return this.http.get<Bike[]>('/bikes.json');
    }

    getBikeById(id: number): Observable<Bike | undefined> {
        // Since we are loading from a static JSON, we might need to filter manually after fetch
        // In a real API, this would be a direct call.
        // For simplicity with static JSON, we can reuse getBikes and map
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

    addToCart(bike: Bike) {
        this.cartItems.update(items => [...items, bike]);
    }

    removeFromCart(bikeId: number) {
        this.cartItems.update(items => {
            const index = items.findIndex(i => i.id === bikeId);
            if (index > -1) {
                const newItems = [...items];
                newItems.splice(index, 1);
                return newItems;
            }
            return items;
        });
    }
}
