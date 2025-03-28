export interface iAboutPage {
    // Method to navigate to the About page
    GoToTheAboutPage(): Promise<void>;
    // Method to verify the contents of the About page
    VerifyAboutPageContents(): Promise<void>;
}