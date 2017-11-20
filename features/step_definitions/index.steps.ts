import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../pages/app.page';

defineSupportCode(function ({ Given, Then, When, Before }) {
  let page;
  Before(() => {
    page = new AppPage();
  });

  Given('enter the first page', function () {
    page.navigateTo();
  });

  Then('title should be {string}', async function (title) {
    expect(await page.getParagraphText()).to.equal(title);
  });
})
