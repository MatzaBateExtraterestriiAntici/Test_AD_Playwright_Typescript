import { Page } from '@playwright/test';

import { screenShotsVariables as screenVars } from '../config/screenshotsVars.js';
import { iCustomActionsDialogs } from '../_interfaces/iCustomActions.js';

// Import and use the JSON file for test variables
import * as fs from 'fs';
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class CustomActionsDialogs implements iCustomActionsDialogs {

    private page: Page;

    // Constructor receives the element Page
    constructor(page: Page) {
        this.page = page;
    }

    async accept(textForAccepting: string = ''): Promise<void> {
        let dialogType: string;
        let dialogMessage: string;

        try { 
            this.page.on('dialog', async dialog => {
                // Wait for the "timeoutSmall" timeout
                await new Promise(resolve => setTimeout(resolve, testVars.timeoutSmall));
                
                // Get the dialog type and message
                dialogType = dialog.type().toLowerCase();
                dialogMessage = dialog.message();

                console.log(`Found the dialog of type: '${dialogType}'.`);
                console.log(`The message of the dialog is: '${dialogMessage}'.`);

                if (screenVars.performScreenshots) {
                    const screenshotName = `${screenVars.folderLocation}/Dialog_found_${Date.now()}.png`; 
                    await this.page.screenshot({ path: screenshotName, fullPage: true });
                }
                
                // Dialog types that can be encountered:
                //   - Alert
                //   - Confirmation
                //   - Prompt
                //   - Before unload
                if (['alert', 'confirm', 'beforeunload'].some(i => i.toLowerCase() === dialogType)) {
                    // Accept the dialog of varios types (no text sent)
                    await dialog.accept();
                } else if (dialogType === 'prompt') {
                    // Accept the prompt dialog and send the given text value
                    await dialog.accept(textForAccepting);
                };
            });
            console.log(`The dialog of type '${dialogType}' was accepted sucessfully.`);
        }
        catch (error) {
            console.log(`ERROR: Found while trying to accept the dialog of type '${dialogType}' with the message '${dialogMessage}'.`);
            console.log(error);
        }
    }
    
    async dismiss(): Promise<void> {
        let dialogType: string;
        let dialogMessage: string;

        try { 
            this.page.on('dialog', async dialog => {
                // Wait for the "timeoutSmall" timeout
                await new Promise(resolve => setTimeout(resolve, testVars.timeoutSmall));
                
                // Get the dialog type and message
                dialogType = dialog.type().toLowerCase();
                dialogMessage = dialog.message();

                console.log(`Found the dialog of type: '${dialogType}'.`);
                console.log(`The message of the dialog is: '${dialogMessage}'.`);

                if (screenVars.performScreenshots) {
                    const screenshotName = `${screenVars.folderLocation}/Dialog_found_${Date.now()}.png`; 
                    await this.page.screenshot({ path: screenshotName, fullPage: true });
                }
                
                // Dismiss the dialog
                await dialog.dismiss();
            });
            console.log(`The dialog of type '${dialogType}' was dismissed sucessfully.`);
        }
        catch (error) {
            console.log(`ERROR: Found while trying to dismiss the dialog of type '${dialogType}' with the message '${dialogMessage}'.`);
            console.log(error);
        }
    }
}