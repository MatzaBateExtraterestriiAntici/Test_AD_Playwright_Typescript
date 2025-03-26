import { Page } from '@playwright/test';

import { iCustomActionsVarious } from '../_interfaces/iCustomActions.js';

export class CustomActionsVarious implements iCustomActionsVarious {

    private page: Page;

    // Constructor receives the element Page
    constructor(page: Page) {
        this.page = page;
    }

    // Custom action to wait inside the test execution
    async customPauseOnTest(timeout: number = 1000) {
        await this.page.waitForTimeout(timeout); // Simple sleep for the 'timeout' value required
        console.log(`The execution of the test was paused for '${timeout}' seconds.`);
    }
}