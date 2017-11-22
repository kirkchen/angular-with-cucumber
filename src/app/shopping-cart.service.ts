import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor() { }

  Calculate(level: string, price: number, qty: number): number {
    let totalPrice = price * qty;

    if (level === 'VIP' && totalPrice > 500) {
      totalPrice *= 0.8;
    }
    else if (level === 'Normal' && totalPrice > 1000 && qty > 3) {
      totalPrice *= 0.85;
    }

    return totalPrice;
  }
}
