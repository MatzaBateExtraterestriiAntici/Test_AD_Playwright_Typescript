import { test } from '@playwright/test';
import { FinishedOrderPage } from '../../pages/finishedOrderPage/steps/finishedOrderPage';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

const areaName = "Finished Order Page";

test.describe(`Tests for the area: '${areaName}' ( @order )`, () => {
  
  test(`Validate that a full purchase flow can be successfully executed ( @smokeTests )`, async ({ page }) => {
    const UI = new FinishedOrderPage(page);

    await UI.ValidateTheFinishedOrderPage();
  });

});