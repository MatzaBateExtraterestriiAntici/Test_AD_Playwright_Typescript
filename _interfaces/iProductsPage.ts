export interface iProductsPage {
    // Method to go to the products page
    GoToTheProductsPage(): Promise<void>;
    // Method to verify that the products page has the proper contents
    VerifyProductsPageContents(): Promise<void>;
    // Method to add a certain product to the cart
    AddCertainCardToCart(cardName: string): Promise<void>;
    // Method to click on the cart button
    ClickOnTheCartButton(): Promise<void>;
}