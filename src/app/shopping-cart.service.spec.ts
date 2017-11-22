import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));

  it('VIP 會員，購買 200 元商品 3 件，總金額為 480 元', inject([ShoppingCartService], (service: ShoppingCartService) => {
    // Arrange
    const level = 'VIP';
    const price = 200;
    const qty = 3;
    const expected = 480;
    let actual = 0;

    // Act
    actual = service.Calculate(level, price, qty);

    // Assert
    expect(actual).toEqual(expected);
  }));
});
