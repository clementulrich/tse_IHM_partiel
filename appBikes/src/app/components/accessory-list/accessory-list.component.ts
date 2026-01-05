import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeService } from '../../services/bike.service';
import { Accessory } from '../../models/accessory.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-accessory-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './accessory-list.component.html',
    styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent implements OnInit {
    bikeService = inject(BikeService);
    accessories$!: Observable<Accessory[]>;

    ngOnInit() {
        this.accessories$ = this.bikeService.getAccessories();
    }

    addToCart(accessory: Accessory) {
        this.bikeService.addToCart(accessory, 'accessory');
    }
}
