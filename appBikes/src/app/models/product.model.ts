export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: 'bike' | 'accessory'; // Main type selector
    sub_category?: string[]; // E.g. ['Electric', 'City'] for bikes
    brand?: string; // Optional (Bikes only mainly)
    stock?: number; // Optional
}
