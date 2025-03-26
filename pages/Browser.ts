import { Page } from '@playwright/test';
import { iBrowser } from '../_interfaces/iBrowser';

import { CustomActionsNavigations } from '../_framework/customActionsNavigations';

// Import and use the JSON files for environment and test variables
import * as fs from 'fs';
const environmentConfigPath = './config/environmentVars.json';
const envVars = JSON.parse(fs.readFileSync(environmentConfigPath, 'utf8'));
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

export class Browser implements iBrowser {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async NavigateToTheLandingPage(): Promise<void> {
    await new CustomActionsNavigations(this.page).navigateToURL(envVars.baseURL, testVars.timeoutExtraLarge); // ⏳ Max wait for 15 seconds
  }
}