export interface iProductsPage {
    GoToTheProductsPage(): Promise<void>;
    VerifyProductsPageContents(): Promise<void>;
    AddCertainCardToCart(cardName: string): Promise<void>;
    ClickOnTheCartButton(): Promise<void>;
}