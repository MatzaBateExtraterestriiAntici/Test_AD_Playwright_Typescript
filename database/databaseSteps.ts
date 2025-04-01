import { expect } from '@playwright/test';

import { customActionsDatabase } from '../_framework/customActionsDatabase';
import { iDatabase } from '../_interfaces/iDatabase';

export class Database implements iDatabase {
    private _SQL = new customActionsDatabase();

    async InsertNewUserInUsersTable(queryArray: (string|number)[]): Promise<number> {  
        const tableToEdit = 'users';
        const queryToUse = `INSERT INTO ${tableToEdit} (name, email, age) VALUES (?, ?, ?)`;

        // Insert user and get the ID
        const queryResult = await this._SQL.insertIntoTable(queryToUse, queryArray);
        console.log(`Inserted user with ID: ${queryResult[1]}`);
        console.log(`Affected rows count: ${queryResult[0]}`);
        return queryResult[1];
    }

    async SelectAllEntriesFromAGivenTable(tableName: string): Promise<any> {
        // Return the query that shows all entries in the table
        return await this._SQL.selectAllFromTable(tableName);
    }

    async DeleteACertainUserInUsersTable(queryArray: any[]): Promise<any[]> {  
        const tableToDeleteFrom = 'users';
        const queryToUse = `DELETE FROM ${tableToDeleteFrom} WHERE ${queryArray[0]} ${queryArray[1]} '${queryArray[2]}'`;

        // Insert user and get the ID
        const result: any[any] = await this._SQL.deleteFromTable(queryToUse, queryArray);
        console.log(`Successfully deleted the user with '${queryArray[0]}' '${queryArray[1]}' '${queryArray[2]}'`);
        expect(result.affectedRows).toEqual(1);
        return result;
    }

    VerifyFirstUserRowContents(user: any, validationArray: any[]): void {
        // ✅ Validation assertions
        expect(user).toBeTruthy();
        expect(user.name).toBe(validationArray[0]);
        expect(user.email).toBe(validationArray[1]);
        expect(user.age).toBe(validationArray[2]);
        expect(user.created_at.getTime()).toBeLessThan(new Date().getTime());
    }
}