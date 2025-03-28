export interface iCartPage {
    // Method to go to the Carts page
    GoToTheCartsPage(): Promise<void>;
    // Method to navigate to the empty carts page
    NavigateToTheCartPageEmpty(): Promise<void>;
    // Method to verify the page contents
    VerifCartPageContents(): Promise<void>;
    // Method to add a certain item to the cart
    AddACertainItemToCart(nameOfProduct: string, priceOfProduct: string): Promise<void>;
    // Method to click on the checkout button
    ClickOnTheCheckoutButton(): Promise<void>;
}