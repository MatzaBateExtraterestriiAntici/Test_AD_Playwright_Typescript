export interface iAboutPage {
    VerifyAboutPageContents(): Promise<void>;
    ClickOnTheHamburgerButton(): Promise<void>;
    GoToTheAboutPage(): Promise<void>;
    ClickOnTheAboutButton(): Promise<void>;
}