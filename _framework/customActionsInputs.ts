import { Page, expect, Locator } from '@playwright/test';

import { screenShotsVariables as screenVars } from '../config/screenshotsVars.js';
import { iCustomActionsInputs } from '../_interfaces/iCustomActions.js';

// Import and use the JSON file for test variables
import * as fs from 'fs';
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class CustomActionsInputs implements iCustomActionsInputs {

    private page: Page;
    private locator: Locator;

    // Constructor receives the elements Page & locator
    constructor(page: Page, locator: Locator) {
        this.page = page;
        this.locator = locator;
    }

    // Regex explanation
    //// \s+ → Matches one or more whitespace characters (spaces, tabs, newlines) 
    //// g → Global flag (replaces all occurrences, not just the first)

    private async getTagName(locator) {
        return await locator.evaluate(node => node.tagName.toLowerCase());
    }

    // Custom action to write text into an element
    async fillTextInsideInput(textToEnter: string, timeout: number = 1000) {
        // In case we need to run the tests in "headless" mode, this action will obviously fail
        if (!testVars.headless){
            await this.locator.scrollIntoViewIfNeeded();
        }
        await expect(this.locator).toBeVisible();
        await expect(this.locator).toBeEditable();
        await this.locator.focus();
        await this.locator.fill(textToEnter, {force: true, timeout: timeout});
        console.log(`Entered the text  '${textToEnter}' into the input box: '${this.locator}'`);
        if (screenVars.performScreenshots) {
            const elementTagName = await this.getTagName(this.locator);
            const screenshotName = `${screenVars.snapshots_folder}/After_FillTextIn_${elementTagName.replace(/\s+/g, '_')}_${Date.now()}.png`; 
            await this.page.screenshot({ path: screenshotName, fullPage: true });
        }
    }

    async fillTextInsideInputAndVerifyText(textToEnter: string, timeout: number = 1000) {
        try { 
            await this.fillTextInsideInput(textToEnter, timeout);
            await expect(this.locator).toBeVisible();
            await expect(this.locator).toBeEditable();
            expect(await this.locator.inputValue()).toEqual(textToEnter);
            console.log(`Found the text  '${await this.locator.inputValue()}' into the input box: '${this.locator}'`);
        }
        catch (error) {
            console.log(`ERROR: Found the text  '${await this.locator.inputValue()}' into the input box: '${this.locator}'`);
            console.log(error);
            console.log('Retrying the entering of the text inside the input box...');
            await this.fillTextInsideInput(textToEnter, timeout);
        }
    }

    // Custom action to write text into an element (ONE LETTER AT A TIME)
    async typeTextInsideInput(textToEnter: string, delay: number = 300) {
        await expect(this.locator).toBeVisible();
        await expect(this.locator).toBeEditable();
        await this.locator.click({ button: "left", delay: 100 });
        await this.locator.type(textToEnter, { delay: delay });
        console.log(`Entered the text  '${textToEnter}' into the input box: '${this.locator}'`);
        if (screenVars.performScreenshots) {
            const elementTagName = await this.getTagName(this.locator);
            const screenshotName = `${screenVars.folderLocation}/After_TypeTextIn_${elementTagName.replace(/\s+/g, '_')}_${Date.now()}.png`;
            await this.page.screenshot({ path: screenshotName, fullPage: true });
        }
    }

}