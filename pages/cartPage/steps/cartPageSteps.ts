import { expect } from '@playwright/test';
import { Browser } from '../../Browser.js';

import { cartPage_Repository as repoVars } from '../repository.js';
import { iCartPage } from '../../../_interfaces/iCartPage.js';

import { ProductsPage } from '../../productsPage/steps/productsPageSteps.js';

import { CustomActionsButtons } from '../../../_framework/customActionsButtons.js';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class CartPage extends Browser implements iCartPage {

  private _ProductsPage = new ProductsPage(this.page);

  async GoToTheCartsPage() {
    await this._ProductsPage.GoToTheProductsPage();
    await this._ProductsPage.VerifyProductsPageContents();
    await this._ProductsPage.ClickOnTheCartButton();
  }

  async NavigateToTheCartPageEmpty() {

    await this.page.waitForURL(`${envVars.baseURL}cart.html`, { timeout: testVars.timeoutMedium });

    const allCards = this.page.locator(repoVars.cartItem_Element_ClassName);
    await expect(allCards).toHaveCount(0);

  }

  async VerifCartPageContents() {
    await this._ProductsPage.VerifyProductsPageContents();
  }

  async AddACertainItemToCart(nameOfProduct: string, priceOfProduct: string) {
    await this._ProductsPage.GoToTheProductsPage();
    await this._ProductsPage.VerifyProductsPageContents();
    await this._ProductsPage.AddCertainCardToCart(nameOfProduct);
    await this._ProductsPage.ClickOnTheCartButton();

    //await new CustomActionsVarious(this.page).customPauseOnTest(5000);
    await this.page.waitForURL(`${envVars.baseURL}cart.html`, { timeout: testVars.timeoutMedium });

    const allCards = await this.page.locator(repoVars.cartItem_Element_ClassName);
    await expect(allCards).toHaveCount(1);
  }

  async ClickOnTheCheckoutButton() {
    await new CustomActionsButtons(this.page, await this.page.locator(repoVars.cartItem_CheckoutButton_ClassName)).clickOnButton(testVars.timeoutSmall, false); // Ensure 5 seconds load time for the click on the login
    this.page.waitForURL(`${envVars.baseURL}checkout-step-one.html`, { timeout: testVars.timeoutMedium });
  }
}