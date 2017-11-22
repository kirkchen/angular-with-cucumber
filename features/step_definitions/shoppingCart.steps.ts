import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';
import { ShoppingCartPage } from '../pages/shoppingCart.page';

defineSupportCode(function ({ Given, Then, When, Before }) {
  let page;
  Before(() => {
    page = new ShoppingCartPage();
  });

  Given('使用者進入購物車', async function () {
    await page.navigateTo();
  });

  Given('商品價格為 {string} 元', async function (price) {
    await page.setProductPrice(price);
  });

  Given('商品數量為 {string} 件', async function (qty) {
    await page.setProductQty(qty);
  });

  When('進行結帳',async function () {
    await page.clickCheckoutButton();
  });

  Then('總金額為 {string} 元', async function (totalPrice) {
    let actual = await page.getTotalPrice();

    expect(actual).to.equal(totalPrice);
  });
})
