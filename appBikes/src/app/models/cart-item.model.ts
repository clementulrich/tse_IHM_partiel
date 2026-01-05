import { Product } from './product.model';

export interface CartItem {
    product: Product;
    type: 'bike' | 'accessory';
}
