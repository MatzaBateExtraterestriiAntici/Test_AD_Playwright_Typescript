export interface iLoginPage {
    // Method to perform a successful login
    LoginSuccessfully(): Promise<void>;
    // Method to verify the login page contents
    VerifyLoginPageContents(): Promise<void>;
}