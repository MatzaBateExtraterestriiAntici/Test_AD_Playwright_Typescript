import { iCustomActionsDatabase } from '../_interfaces/iCustomActions.js';

import { Decryption } from '../_framework/crypto/decryption.js';

export class customActionsDatabase implements iCustomActionsDatabase {

    private mySQLModule = require('mysql2/promise');

    private decrypt = new Decryption();

    // Create the connection with the SQL DB
    private SQL = this.mySQLModule.createPool({
        host: 'localhost',
        user: this.decrypt.decryptString('U2FsdGVkX1+1oMmTtCeI8iMBYrwSFWKOjWS4Gce+YOI=').toString(),
        password: this.decrypt.decryptString('U2FsdGVkX19sRhFTFfItwvrDR2jdazf8iOMeupB4Hbk=').toString(),
        database: 'testDB',
        waitForConnections: true,
        connectionLimit: 1,
        queueLimit: 0
    });

    async insertIntoTable(queryToUse: string, queryArray: (string|number)[]): Promise<[number,number]> {
        try {
            const queryResult = await this.SQL.execute(queryToUse, queryArray);
            // Extract the inserted ID and affected rows value
            let insertedId = (queryResult[0] as any).insertId;
            let affectedRows = (queryResult[0] as any).affectedRows;
            console.log(`Inserted the user '${queryArray[0]}' and received the ID: '${insertedId}'.`)
            return [affectedRows, insertedId];
        }
        catch (error) {
            console.log(`ERROR: Action used was 'Insert' into database....`);
            console.log(error);
            return null;
        }
    }

    async selectAllFromTable(tableName: string): Promise<any> {
        const query = `SELECT * FROM ${tableName}`

        try {
            return await this.SQL.execute(query);
        }
        catch (error) {
            console.log(`ERROR: Action used was 'SELECT ALL FROM ${tableName}' table....`);
            console.log(error);
            return null;
        }
    }

    async deleteFromTable(queryToUse: string, queryArray: (string|number)[]): Promise<any[]> {
        try {
            const result = await this.SQL.execute(queryToUse, queryArray);
            // Extract the inserted ID
            let resultsHeader = result[0];
            console.log(`Deleted the user '${queryArray[2]}' and affected rows: '${resultsHeader.affectedRows}'.`)
            return resultsHeader;
        }
        catch (error) {
            console.log(`ERROR: Action used was 'Delete' from table....`);
            console.log(error);
            return null;
        }
    }
}