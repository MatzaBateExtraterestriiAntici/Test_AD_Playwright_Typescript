import { test } from '@playwright/test';
import { CheckoutPage } from '../../pages/checkoutPage/steps/checkoutPage';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "Checkout Page";

test.describe(`Tests for the area: '${areaName}' ( @checkout )`, () => {

  const firstName = "Jane";
  const lastName = "Doe";
  const postalCode = "0123456789";

  const nameOfProduct = "Sauce Labs Onesie";
  const priceOfProduct = "$7.99";
  
  test(`Add necesarry client information and continue`, async ({ page }) => {
    const UI = new CheckoutPage(page);

    await UI.GoToTheCheckoutArea();
    await UI.AddProperCheckoutValuesAndContinue(firstName, lastName, postalCode);
    await UI.ValidateTheOverviewCheckoutPageValues(nameOfProduct, priceOfProduct);
  });

});