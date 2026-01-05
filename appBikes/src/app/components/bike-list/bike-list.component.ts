import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Still importing for AsyncPipe if needed, or CurrencyPipe
import { RouterLink } from '@angular/router';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-bike-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './bike-list.component.html',
    styleUrl: './bike-list.component.css'
})
export class BikeListComponent implements OnInit {
    bikeService = inject(BikeService);
    bikes$!: Observable<Bike[]>;

    ngOnInit() {
        this.bikes$ = this.bikeService.getBikes();
    }

    addToCart(bike: Bike) {
        this.bikeService.addToCart(bike);
    }
}
