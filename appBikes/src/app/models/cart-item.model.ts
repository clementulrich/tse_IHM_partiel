import { Bike } from './bike.model';
import { Accessory } from './accessory.model';

export type Product = Bike | Accessory;

export interface CartItem {
    product: Product;
    type: 'bike' | 'accessory';
}
