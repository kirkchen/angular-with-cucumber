import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price = 0;
  qty = 0;
  totalPrice = 0;

  Calculate(price, qty) {
    this.totalPrice = 480;
  }
}
