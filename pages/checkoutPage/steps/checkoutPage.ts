import { expect } from '@playwright/test';
import { Browser } from '../../Browser.js';

import { checkoutPage_Repository as repoVars } from '../repository.js';
import { iCheckoutPage } from '../../../_interfaces/iCheckoutPage.js';

import { ProductsPage } from '../../productsPage/steps/productsPageSteps.js';
import { CartPage } from '../../cartPage/steps/cartPageSteps.js';

import { CustomActionsInputs } from '../../../_framework/customActionsInputs.js';
import { CustomActionsButtons } from '../../../_framework/customActionsButtons.js';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class CheckoutPage extends Browser implements iCheckoutPage {

  private _ProductsPage = new ProductsPage(this.page);
  private _CartPage = new CartPage(this.page);

  private firstNameInput = this.page.locator(repoVars.checkoutItem_FirstNameInput_ID);
  private lastNameInput = this.page.locator(repoVars.checkoutItem_LastNameInput_ID);
  private postalCodeInput = this.page.locator(repoVars.checkoutItem_PostalCodeInput_ID);
  
  async GoToTheCheckoutArea() {
    const nameOfProduct = "Sauce Labs Onesie";
    const priceOfProduct = "$7.99";

    await this._ProductsPage.GoToTheProductsPage();
    await this._ProductsPage.VerifyProductsPageContents();
    await this._CartPage.AddACertainItemToCart(nameOfProduct, priceOfProduct);
    await this._CartPage.ClickOnTheCheckoutButton();
  }

  async AddProperCheckoutValuesAndContinue(firstName: string, lastName: string, postalCode: string) {
    await this.setValueInsideInputBox(this.firstNameInput, firstName);
    await this.setValueInsideInputBox(this.lastNameInput, lastName);
    await this.setValueInsideInputBox(this.postalCodeInput, postalCode);

    await this.ClickOnTheContinueButton();
  }

  async ValidateTheOverviewCheckoutPageValues(nameOfProduct: string, priceOfProduct: string) {
    // Verify that the quantity for the element is "one"
    await expect(await this.page.locator(repoVars.checkoutItem_Overview_ElementQuantity_ClassName).textContent()).toEqual("1");
    // Verify that the name for the element is the expected one
    await expect(await this.page.locator(repoVars.checkoutItem_Overview_ElementName_ClassName).textContent()).toEqual(nameOfProduct);
    // Verify that the price for the element is the expected one
    await expect(await this.page.locator(repoVars.checkoutItem_Overview_ElementPrice_ClassName).textContent()).toEqual(priceOfProduct);
  }

  async ClickOnTheFinishButton() {
    await new CustomActionsButtons(this.page, this.page.locator(repoVars.checkoutItem_Overview_FinishButton_ClassName)).clickOnButton(testVars.timeoutSmall, false); // Ensure 5 seconds load time for the click on the login
    await this.page.waitForURL(`${envVars.baseURL}checkout-complete.html`, { timeout: testVars.timeoutMedium });
  }

  //// PRIVATE METHODS

  private async ClickOnTheContinueButton() {
    await new CustomActionsButtons(this.page, this.page.locator(repoVars.checkoutItem_ContinueButton_ClassName)).clickOnButton(testVars.timeoutSmall, false); // Ensure 5 seconds load time for the click on the login
    await this.page.waitForURL(`${envVars.baseURL}checkout-step-two.html`, { timeout: testVars.timeoutMedium });
  }

  private async setValueInsideInputBox(locatorToUse, textToEnter) {
    await new CustomActionsInputs(this.page, locatorToUse).fillTextInsideInputAndVerifyText(textToEnter, testVars.timeoutVerySmall);
  }
}