export interface iFinishedOrderPage {
    ValidateTheFinishedOrderPage(firstName: string, lastName: string, postalCode: string): Promise<void>;
    ValidateTheFinishedOrderPageValues(): Promise<void>;
}