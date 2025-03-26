import { test } from '@playwright/test';
import { CartPage } from '../../pages/cartPage/steps/cartPageSteps';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "Cart Page";

test.describe(`Tests for the area: '${areaName}' ( @cart )`, () => {

  const nameOfProduct = "Sauce Labs Onesie";
  const priceOfProduct = "$7.99";

  test(`Navigate to the empty cart area`, async ({ page }) => {
    const UI = new CartPage(page);

    await UI.GoToTheCartsPage();
    await UI.NavigateToTheCartPageEmpty();
  });

  test(`Add one element to the cart and validate it`, async ({ page }) => {
    const UI = new CartPage(page);

    await UI.AddACertainItemToCart(nameOfProduct, priceOfProduct);
    await UI.ClickOnTheCheckoutButton();
  });

});