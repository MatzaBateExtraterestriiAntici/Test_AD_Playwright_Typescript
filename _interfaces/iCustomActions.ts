// Custom Actions for BUTTONS (./_framework/customActionsButtons.ts)
export interface iCustomActionsButtons {
    clickOnButton(timeout: number): Promise<void>;
    clickOnButton(timeout: number, editable: boolean): Promise<void>;
}

// Custom Actions for INPUTS (./_framework/customActionsInputs.ts)
export interface iCustomActionsInputs {
    fillTextInsideInput(textToEnter: string, timeout: number): Promise<void>;
    fillTextInsideInputAndVerifyText(textToEnter: string, timeout: number): Promise<void>;
    typeTextInsideInput(textToEnter: string, delay: number): Promise<void>;
}

// Custom Actions for NAVIGATIONS (./_framework/customActionsNavigations.ts)
export interface iCustomActionsNavigations {
    navigateToURL(url: string, timeout: number): Promise<void>;
}

// Custom Actions for Dialogs (./_framework/customActionsDialogs.ts)
export interface iCustomActionsDialogs {
    accept(textForAccepting: string): Promise<void>;
    dismiss(): Promise<void>;
}

// Custom Actions for VARIOUS (./_framework/customActionsVarious.ts)
export interface iCustomActionsVarious {
    customPauseOnTest(timeout: number): Promise<void>;
}

// Custom Actions for DATABASE (./_framework/customActionsDatabase.ts)
export interface iCustomActionsDatabase {
    insertIntoTable(queryToUse: string, queryArray: (string|number)[]): Promise<[number,number]>;
    selectAllFromTable(tableName: string): Promise<any>;
    deleteFromTable(queryToUse: string, queryArray: (string|number)[]): Promise<any[]>;
}