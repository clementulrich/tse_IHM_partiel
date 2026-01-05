import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BikeService } from '../../services/bike.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    bikeService = inject(BikeService);
    cartCount = this.bikeService.cartCount;
}
