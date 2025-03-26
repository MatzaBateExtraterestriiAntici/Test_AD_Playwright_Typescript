import { Page } from '@playwright/test';

import { screenShotsVariables as screenVars } from '../config/screenshotsVars.js';
import { iCustomActionsNavigations } from '../_interfaces/iCustomActions.js';

export class CustomActionsNavigations implements iCustomActionsNavigations {

    private page: Page;

    // Constructor receives the element Page
    constructor(page: Page) {
        this.page = page;
    }

    // Regex explanation
    //// \s+ → Matches one or more whitespace characters (spaces, tabs, newlines) 
    //// g → Global flag (replaces all occurrences, not just the first)

    // Custom action to write text into an element
    async navigateToURL(url: string, timeout: number = 1000) {
        if (screenVars.performScreenshots) {
            const screenshotName = `${screenVars.snapshots_folder}/Before_Navigation_${Date.now()}.png`; 
            await this.page.screenshot({ path: screenshotName, fullPage: true });
        }
        await this.page.goto(url);
        try {
            // Expect that the page has the proper URL value in the allocated time span
            await this.page.waitForURL(url, { timeout: timeout }); // ⏳ Max wait time
        } catch (error) {
            console.error(`Error: Current URL value is: '${this.page.url()}' while expected was '${url}'!`);
            console.error("More information: ", error);
            if (screenVars.performScreenshots) {
                const screenshotName = `${screenVars.snapshots_folder}/ERROR_on_Navigation_${Date.now()}.png`; 
                await this.page.screenshot({ path: screenshotName, fullPage: true });
            }
            // TO ADD : Send error message to the reporting assistant also !!!
            throw error;
        }
        if (screenVars.performScreenshots) {
            const screenshotName = `${screenVars.snapshots_folder}/After_Navigation_${Date.now()}.png`; 
            await this.page.screenshot({ path: screenshotName, fullPage: true });
        }
    }
}