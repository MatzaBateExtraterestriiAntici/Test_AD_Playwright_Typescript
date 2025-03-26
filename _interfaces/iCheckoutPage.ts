export interface iCheckoutPage {
    AddProperCheckoutValuesAndContinue(firstName: string, lastName: string, postalCode: string): Promise<void>;
}