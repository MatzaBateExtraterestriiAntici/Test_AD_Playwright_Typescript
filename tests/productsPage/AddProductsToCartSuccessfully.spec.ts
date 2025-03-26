import { test } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage/steps/productsPageSteps';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "Products Page";

test.describe(`Tests for the area: '${areaName}' ( @products )`, () => {
  
  test(`Verify the contents of the Products page`, async ({ page }) => {
    const UI = new ProductsPage(page);

    await UI.GoToTheProductsPage();
    await UI.VerifyProductsPageContents();
    await UI.AddCertainCardToCart('Sauce Labs Onesie');
  });

  test(`Add a certain product to the cart`, async ({ page }) => {
    const UI = new ProductsPage(page);

    await UI.GoToTheProductsPage();
    await UI.VerifyProductsPageContents();
    await UI.AddCertainCardToCart('Sauce Labs Onesie');
  });

});