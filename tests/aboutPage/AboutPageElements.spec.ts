import { test } from '@playwright/test';

import { AboutPage } from '../../pages/aboutPage/steps/aboutPageSteps';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "About Page";

test.describe(`Tests for the area: '${areaName}' ( @about , @smokeTests )`, () => {
  
  test(`The area:  ${areaName} has proper elements`, async ({ page }) => {
    const UI = new AboutPage(page);
    
    await UI.GoToTheAboutPage();
    await UI.VerifyAboutPageContents(); 
  });

});