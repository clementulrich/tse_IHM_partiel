import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BikeService } from '../../services/bike.service';
import { Product } from '../../models/product.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    // Signals for filters
    searchQuery = signal('');
    maxPrice = signal(10000);
    showBikes = signal(true);
    showAccessories = signal(true);

    // Data signal
    products = signal<Product[]>([]);

    // Computed filtered products
    filteredProducts = computed(() => {
        const query = this.searchQuery().toLowerCase();
        const max = this.maxPrice();
        const bikes = this.showBikes();
        const accs = this.showAccessories();

        return this.products().filter(p => {
            // Type Filter
            if (p.category === 'bike' && !bikes) return false;
            if (p.category === 'accessory' && !accs) return false;

            // Price Filter
            if (p.price > max) return false;

            // Name Filter
            if (query && !p.name.toLowerCase().includes(query)) return false;

            return true;
        });
    });

    constructor(private bikeService: BikeService) { }

    ngOnInit() {
        this.bikeService.getAllProducts().subscribe(data => {
            this.products.set(data);
        });
    }

    addToCart(product: Product) {
        this.bikeService.addToCart(product);
    }
}
