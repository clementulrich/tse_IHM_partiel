import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-bike-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './bike-detail.component.html',
    styleUrl: './bike-detail.component.css'
})
export class BikeDetailComponent {
    private route = inject(ActivatedRoute);
    private bikeService = inject(BikeService);

    bike: Signal<Bike | undefined> = toSignal(
        this.route.paramMap.pipe(
            switchMap(params => {
                const id = Number(params.get('id'));
                return this.bikeService.getBikeById(id);
            })
        )
    );

    addToCart() {
        const b = this.bike();
        if (b) {
            this.bikeService.addToCart(b);
        }
    }
}
