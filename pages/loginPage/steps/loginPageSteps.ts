import { expect } from '@playwright/test';
import { Browser } from '../../Browser';

import { loginPage_Repository as repoVars } from '../repository.js';
import { iLoginPage } from '../../../_interfaces/iLoginPage.js';
import { CustomActionsButtons } from '../../../_framework/customActionsButtons.js';
import { CustomActionsInputs } from '../../../_framework/customActionsInputs.js';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class LoginPage extends Browser implements iLoginPage {

    private userNameInput = this.page.locator(repoVars.userName_Input_ID);
    private passWordInput = this.page.locator(repoVars.password_Input_ID);
    private submitButton = this.page.locator(repoVars.submit_Button_ID);

    private loginUserNamesText = this.page.locator(repoVars.loginUserNames_Area_ID);
    private passWordToBeUsedText = this.page.locator(repoVars.loginPasswords_Area_ClassName);

    async VerifyLoginPageContents() {
        
        await this.page.locator(repoVars.loginLogo_ClassName).waitFor({state: 'visible', timeout: 3000})

        await expect(this.userNameInput).toBeEditable();
        await expect(this.userNameInput).toHaveAttribute("placeholder", repoVars.userName_Input_Placeholder);
        await expect(this.userNameInput).toHaveAttribute("type", repoVars.userName_Input_Type);

        await expect(this.passWordInput).toBeEditable();
        await expect(this.passWordInput).toHaveAttribute("placeholder", repoVars.password_Input_Placeholder);
        await expect(this.passWordInput).toHaveAttribute("type", repoVars.password_Input_Type);

        await expect(this.passWordInput).toBeVisible();
        await expect(this.submitButton).toBeEnabled(); // Defect in the site (it should be disabled...)

        await expect(this.loginUserNamesText).toBeVisible();
        var listOfStringsToBeContained = ["Accepted usernames are:", "standard_user", "locked_out_user", "problem_user", "performance_glitch_user"];
        for (const textToBeContained of listOfStringsToBeContained) {
            await expect(this.loginUserNamesText).toContainText(textToBeContained);
        }

        await expect(this.passWordToBeUsedText).toBeVisible();
        listOfStringsToBeContained = ["Password for all users:", "secret_sauce"];
        for (const textToBeContained of listOfStringsToBeContained) {
            await expect(this.passWordToBeUsedText).toContainText(textToBeContained);
        }
    }

    async LoginSuccessfully() {
        var userNameToUse = await this.GetRandomUserNameFromPage();
        while (userNameToUse == "locked_out_user") { // This user does not have priviledges to login, so here we'll simply retry the grab another user
            userNameToUse = await this.GetRandomUserNameFromPage();
        }
        //await new CustomActionsInputs(this.page, this.userNameInput).typeTextInsideInput(userNameToUse);
        await new CustomActionsInputs(this.page, this.userNameInput).fillTextInsideInputAndVerifyText(userNameToUse);
        
        const passwordToUse = await this.GetPassWordFromPage();
        await new CustomActionsInputs(this.page, this.passWordInput).fillTextInsideInputAndVerifyText(passwordToUse);

        const timeoutToUse = userNameToUse == 'performance_glitch_user' ? testVars.timeoutExtraLarge : testVars.timeoutMedium ; // In case the performance user is picked - extend the wait time to 30 seconds
        await new CustomActionsButtons(this.page, this.submitButton).clickOnButton(timeoutToUse); // Ensure 5 seconds load time for the click on the login
        
        await this.page.waitForURL(`${envVars.baseURL}inventory.html`, { timeout: timeoutToUse });
    }

    //// FUNCTION HELPERS AREA

    // Return a random user name to be used for login
    private async GetRandomUserNameFromPage() {
        await expect(this.userNameInput).toBeEditable();
        // Get the inner text for all users names
        const allUserNamesText = await this.loginUserNamesText.innerText();
        // Split the 'all users names' text by new lines to create a list
        const listOfUserNames = allUserNamesText.split('\n');
        // Remove the first element as that is the 'description text' not a valid user
        listOfUserNames.shift();
        // Remove the empty element from the list
        const finalListOfUserNames = listOfUserNames.filter(str => str !== "");
        // Return a random entry from the list
        return finalListOfUserNames[Math.floor(Math.random() * finalListOfUserNames.length)];
    }

    // Return the password value from the page
    private async GetPassWordFromPage() {
        await expect(this.passWordInput).toBeEditable();
        // Get the inner text for passwords
        const allPasswordsText = await this.passWordToBeUsedText.innerText();
        // Split the 'password' text by new lines to create a list and return the second element (always the passward value)
        return allPasswordsText.split('\n')[1];
    }
}