import { test, expect } from '@playwright/test';
import { Database } from '../../database/databaseSteps';

test.describe.configure({ mode: 'serial' });  // Forces sequential execution of each of the tests in the describe area below

test('Insert the first user into the "users" table and verify values', async () => {
    const DB = new Database();
    
    const queryArray = ['Alice Johnson', 'alice@example.com', 25];

    // Insert user and get the ID
    const userId: number = await DB.InsertNewUserInUsersTable(queryArray);

    // Verify that the user exists in the database
    const allRows = await DB.SelectAllEntriesFromAGivenTable('users');
    const user = allRows[0][0];

    // to change to use the userId got from the insert method (line 12)
    DB.VerifyFirstUserRowContents(user, queryArray);

});

test('Delete the first user from the "users" table', async () => {
    const DB = new Database();
    
    const queryArray = ['Alice Johnson', 'alice@example.com', 25];

    // Delete the user with a certain name in the users table
    let result = await DB.DeleteACertainUserInUsersTable(['name', 'like', queryArray[0]]);
    expect(result).toBeTruthy();
});