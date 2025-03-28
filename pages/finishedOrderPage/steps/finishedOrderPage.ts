import { expect } from '@playwright/test';
import { Browser } from '../../Browser.js';

import { finishedOrderPage_Repository as repoVars } from '../repository.js';
import { iFinishedOrderPage } from '../../../_interfaces/iFinishedOrderPage.js';

import { ProductsPage } from '../../productsPage/steps/productsPageSteps.js';
import { CartPage } from '../../cartPage/steps/cartPageSteps.js';
import { CheckoutPage } from '../../checkoutPage/steps/checkoutPage.js';

export class FinishedOrderPage extends Browser implements iFinishedOrderPage {

  private _ProductsPage = new ProductsPage(this.page);
  private _CartPage = new CartPage(this.page);
  private _CheckoutPage = new CheckoutPage(this.page);

  async ValidateTheFinishedOrderPage(firstName: string, lastName: string, postalCode: string, nameOfProduct: string, priceOfProduct: string) {
    await this._ProductsPage.GoToTheProductsPage();
    await this._ProductsPage.VerifyProductsPageContents();
    await this._CartPage.VerifCartPageContents();
    await this._CartPage.AddACertainItemToCart(nameOfProduct, '');
    await this._CartPage.ClickOnTheCheckoutButton();
    await this._CheckoutPage.AddProperCheckoutValuesAndContinue(firstName, lastName, postalCode);
    await this._CheckoutPage.ValidateTheOverviewCheckoutPageValues(nameOfProduct, priceOfProduct);
    await this._CheckoutPage.ClickOnTheFinishButton();

    await this.ValidateTheFinishedOrderPageValues();
  }

  //// PRIVATE METHODS

  private async ValidateTheFinishedOrderPageValues() {
    // Verify that the header text is the expected one
    await expect(await this.page.locator(repoVars.finishedOrder_Header_ClassName).textContent()).toEqual(repoVars.finishedOrder_Header_Text);
    // Verify that the title text is the expected one
    await expect(await this.page.locator(repoVars.finishedOrder_Title_ClassName).textContent()).toEqual(repoVars.finishedOrder_Title_Text);
    // Verify that the body text is the expected one
    await expect(await this.page.locator(repoVars.finishedOrder_BodyText_ClassName).textContent()).toEqual(repoVars.finishedOrder_BodyText_Text);
    // Verify that the image file used is the expected one
    await expect(await this.page.locator(repoVars.finishedOrder_Image_ClassName).getAttribute('src')).toBe(repoVars.finishedOrder_Image_Src);
  }

}