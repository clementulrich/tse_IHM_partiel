import { Routes } from '@angular/router';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: BikeListComponent },
    { path: 'bikes/:id', component: BikeDetailComponent },
    { path: 'cart', component: CartComponent }
];
