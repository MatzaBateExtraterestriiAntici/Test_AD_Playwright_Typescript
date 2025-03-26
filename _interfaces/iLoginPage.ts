export interface iLoginPage {
    LoginSuccessfully(): Promise<void>;
    VerifyLoginPageContents(): Promise<void>;
}