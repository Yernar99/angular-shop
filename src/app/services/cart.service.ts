import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({providedIn: 'root'})
export class CartService {
    items: Product[] = [];

    /**
     * Добавляет товар в корзину.
     * @param {Product} product - Объект товара.
     */
    addToCart(product: Product) {
        this.items.push(product);
    }

    /**
     * Возвращает общую стоимость товаров в корзине.
     * @returns {number} - Общая стоимость.
     */
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
