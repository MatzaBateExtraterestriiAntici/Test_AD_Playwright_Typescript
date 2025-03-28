export interface iCheckoutPage {
    // Method to go to the checkout area
    GoToTheCheckoutArea(): Promise<void>;
    // Method to add proper checkout values in all inputs for the user and continue
    AddProperCheckoutValuesAndContinue(firstName: string, lastName: string, postalCode: string): Promise<void>;
    // Method to validate that the proper values are registed on the checkout overview page
    ValidateTheOverviewCheckoutPageValues(nameOfProduct: string, priceOfProduct: string): Promise<void>;
    // Method to click on the Finish button
    ClickOnTheFinishButton(): Promise<void>;
}