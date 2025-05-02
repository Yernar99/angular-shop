import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private mockProducts: Product[] = [
        { id: 1, title: 'Ноутбук', price: 1000, category: 'tech', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Смартфон', price: 500, category: 'tech', image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Книга', price: 20, category: 'books', image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'Футболка', price: 15, category: 'clothes', image: 'https://via.placeholder.com/150' },
    ];

    getProducts(): Product[] {
        return this.mockProducts;
    }

    getCategories(): string[] {
        return [...new Set(this.mockProducts.map(p => p.category))];
    }
}