import { browser, by, element } from 'protractor';

export class ShoppingCartPage {
  navigateTo() {
    return browser.get('/');
  }

  async setProductPrice(price: number){
    await element(by.css('input#price')).clear();
    await element(by.css('input#price')).sendKeys(price);
  }

  async setProductQty(qty: number){
    await element(by.css('input#qty')).clear();
    await element(by.css('input#qty')).sendKeys(qty);
  }

  async clickCheckoutButton(){
    await element(by.css('button#checkout')).click();
  }

  async getTotalPrice(){
    return await element(by.css('span#total-price')).getText();
  }
}
