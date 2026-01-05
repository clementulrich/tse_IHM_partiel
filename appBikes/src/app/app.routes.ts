import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'bikes/:id', component: BikeDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent }
];
