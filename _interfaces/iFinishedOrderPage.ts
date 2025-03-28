export interface iFinishedOrderPage {
    // Method to validate the finished order page
    ValidateTheFinishedOrderPage(firstName: string, lastName: string, postalCode: string, nameOfProduct: string, priceOfProduct: string): Promise<void>;
}