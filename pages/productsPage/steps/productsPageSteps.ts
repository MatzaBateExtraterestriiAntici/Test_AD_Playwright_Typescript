import { expect } from '@playwright/test';
import { Browser } from '../../Browser';

import { productsPage_Repository as repoVars } from '../repository.js';
import { iProductsPage } from '../../../_interfaces/iProductsPage.js';
import { CustomActionsButtons } from '../../../_framework/customActionsButtons.js';

import { LoginPage } from '../../loginPage/steps/loginPageSteps.js';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class ProductsPage extends Browser implements iProductsPage {

    private inventoryContainer = this.page.locator(repoVars.inventory_Container_ClassName);

    private _LoginPage = new LoginPage(this.page);

    async GoToTheProductsPage() {   
        await this._LoginPage.NavigateToTheLandingPage(); 
        await this._LoginPage.VerifyLoginPageContents(); 
        await this._LoginPage.LoginSuccessfully();
    }

    async VerifyProductsPageContents() {   
        await this.page.locator(repoVars.productLabel_ClassName).waitFor({state: 'visible', timeout: testVars.timeoutMedium})

        await expect(this.inventoryContainer).toBeVisible();
        await expect(this.inventoryContainer).toHaveAttribute("class", repoVars.inventory_Container_ClassName.replace(/\./g, ''));

        const allCards = await this.page.locator('.inventory_item_name').all();
        expect(allCards).toHaveLength(6);
        
    }

    async AddCertainCardToCart(cardName: string) {
        await expect(this.page.locator(repoVars.cartIcon_Image_ClassName)).toBeVisible();
        await expect(this.page.locator(repoVars.cartIcon_ItemCount_ClassName)).toHaveCount(0);

        const allCards = await this.page.locator('.inventory_item_name').all();
        let buttonToAddToCart: any;
        for (const card of allCards) {
            const itemName = await card.textContent();
            if (itemName?.trim() === cardName) {
                buttonToAddToCart = await card
                    .locator('..') // First parent (parent of `.child`)
                    .locator('..') // Second parent (grandparent of `.child`)
                    .locator('..')
                    .locator('.pricebar')
                    .locator('.btn_primary.btn_inventory');
            }
        }
        buttonToAddToCart.click();

        await expect(this.page.locator(repoVars.cartIcon_Image_ClassName)).toBeVisible();
        await expect(this.page.locator(repoVars.cartIcon_ItemCount_ClassName)).toHaveCount(1);
    }

    async ClickOnTheCartButton() {
        await new CustomActionsButtons(this.page, this.page.locator(repoVars.cartIcon_Image_ClassName)).clickOnButton(testVars.timeoutSmall, false); // Ensure X seconds load time for the click on the login
        this.page.waitForURL(`${envVars.baseURL}cart.html`, { timeout: testVars.timeoutSmall });
    }
}