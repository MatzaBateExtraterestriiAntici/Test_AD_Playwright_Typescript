import { expect } from '@playwright/test';
import { Browser } from '../../Browser';

import { aboutPage_Repository as repoVars } from '../repository.js';
import { iAboutPage } from '../../../_interfaces/iAboutPage.js';

import { CustomActionsButtons } from '../../../_framework/customActionsButtons.js';

import { ProductsPage } from '../../productsPage/steps/productsPageSteps.js';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class AboutPage extends Browser implements iAboutPage {

  private _ProductsPage = new ProductsPage(this.page);

  private hamburgerButton = this.page.locator(repoVars.hamburger_button_ClassName);

  private sauceLabURL = "https://saucelabs.com/";

  async GoToTheAboutPage() {
    await this._ProductsPage.GoToTheProductsPage();
    await this.ClickOnTheHamburgerButton();

    await expect(this.page.locator(repoVars.navigation_Menu_About_Button_ID)).toBeVisible();
    await this.ClickOnTheAboutButton();
  }

  async ClickOnTheHamburgerButton() {
    await new CustomActionsButtons(this.page, this.hamburgerButton).clickOnButton(testVars.timeoutSmall, false); // Ensure 5 seconds load time for the click on the login
    await expect(this.page.locator(repoVars.navigation_Menu_ClassName)).toBeVisible();
  }

  async ClickOnTheAboutButton() {
    await new CustomActionsButtons(this.page, await this.page.locator(repoVars.navigation_Menu_About_Button_ID)).clickOnButton(testVars.timeoutSmall, false); // Ensure 5 seconds load time for the click on the login
    await this.page.waitForURL(this.sauceLabURL, { timeout: testVars.timeoutLarge });
  }

  async VerifyAboutPageContents() {
    await this.page.waitForURL(this.sauceLabURL, { timeout: testVars.timeoutLarge });
    await expect(this.page.locator(repoVars.sauceLab_Header_Image_ClassName).locator("img")).toBeVisible();
    await expect(await (this.page.locator(repoVars.sauceLab_Header_Image_ClassName).locator("img")).getAttribute('src')).toEqual(repoVars.sauceLab_Header_Image_Src);
  }

}