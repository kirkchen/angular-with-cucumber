import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ShoppingCartService
  ]
})
export class AppComponent {
  constructor(private shoppingCartService: ShoppingCartService) { }

  price = 0;
  qty = 0;
  level = "VIP";
  totalPrice = 0;

  Calculate(level, price, qty) {
    this.totalPrice = this.shoppingCartService.Calculate(level, price, qty);
  }
}
