import * as CryptoJS from "crypto-js";

// Import and use the JSON file for test variables
import * as fs from 'fs';
const testConfigPath = './config/testingVars.json';
const testVars = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));

// Retrieve the value of the "DECRYPTION_KEY" from the testing variables configuration file
const decryptionKeyToBeUsed = testVars.DECRYPTION_KEY;

export class Decryption {
    // Decrypt the string recived
    decryptString(encryptedText: string): string {
        const bytes = CryptoJS.AES.decrypt(encryptedText, decryptionKeyToBeUsed);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}