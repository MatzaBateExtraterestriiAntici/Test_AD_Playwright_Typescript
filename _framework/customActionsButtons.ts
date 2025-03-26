import { Page, expect, Locator  } from '@playwright/test';

import { screenShotsVariables as screenVars } from '../config/screenshotsVars.js';
import { iCustomActionsButtons } from '../_interfaces/iCustomActions.js';

// Import and use the JSON file for test variables
import * as fs from 'fs';
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class CustomActionsButtons implements iCustomActionsButtons {

    private page: Page;
    private locator: Locator;

    // Constructor receives the elements Page & locator
    constructor(page: Page, locator: Locator) {
        this.page = page;
        this.locator = locator;
    }

    private async getTagName(locator) {
        return await locator.evaluate(node => node.tagName.toLowerCase());
    }

    // Overload signatures
    clickOnButton(timeout: number): Promise<void>;                           // Takes a single number parameter, returns void
    clickOnButton(timeout: number, editable: boolean): Promise<void>;        // Takes a number parameter and a boolean, returns void
 
    // Custom action to click an element
    async clickOnButton(timeout: number = 1000, editable: boolean = true) {
        if (screenVars.performScreenshots) {
            const elementTagName = await this.getTagName(this.locator);
            const screenshotName = `${screenVars.folderLocation}/Before_ClickOnButton_${elementTagName.replace(/\s+/g, '_')}_${Date.now()}.png`; 
            await this.page.screenshot({ path: screenshotName, fullPage: true });
        }
        if (!testVars.headless){
            await this.locator.scrollIntoViewIfNeeded();
        }
        await this.locator.focus();
        await expect(this.locator).toBeVisible();
        if (editable) { // work on overload method one or two
            await expect(this.locator).toBeEditable();
        }
        await this.locator.click({ timeout: timeout });
        console.log(`Clicked the element with the locator  '${this.locator}'`);
    }

}