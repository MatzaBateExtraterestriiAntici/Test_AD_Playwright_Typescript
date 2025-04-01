export interface iDatabase {
    // Method to navigate to the About page
    InsertNewUserInUsersTable(queryArray: (string|number)[]): Promise<number>;
    SelectAllEntriesFromAGivenTable(tableName: string): Promise<any>;
    DeleteACertainUserInUsersTable(queryArray: (string|number)[]): Promise<any[]>;
    VerifyFirstUserRowContents(user: any, validationArray: any[]): void;
}