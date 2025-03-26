export interface iCartPage {
    GoToTheCartsPage(): Promise<void>;
    VerifCartPageContents(nameOfProduct: string, priceOfProduct: string): Promise<void>;
    NavigateToTheCartPageEmpty(): Promise<void>;
    ClickOnTheCheckoutButton(): Promise<void>;
}