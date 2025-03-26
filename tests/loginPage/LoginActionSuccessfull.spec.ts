import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage/steps/loginPageSteps';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "Login Page";

test.describe(`Tests for the area: '${areaName}' ( @login )`, () => {
  
  test(`The area:  ${areaName} has proper elements ( @smokeTests )`, async ({ page }) => {
    const UI = new LoginPage(page);
    
    await UI.NavigateToTheLandingPage(); 
    await UI.VerifyLoginPageContents(); 
  });

  test(`Successfull login with random user`, async ({ page }) => {
    const UI = new LoginPage(page);
    
    await UI.NavigateToTheLandingPage(); 
    await UI.VerifyLoginPageContents(); 
    await UI.LoginSuccessfully();
  });
  
});