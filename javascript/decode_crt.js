'use strict';
const fs = require('fs');
const path = require('path');
const { KJUR, KEYUTIL, X509 } = require('jsrsasign');

async function main() {
    try {
        // get certificate from the certfile
        const certLoaded = fs.readFileSync(path.resolve(__dirname, '../crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/msp/signcerts/peer0.org1.example.com-cert.pem'), 'utf8');

        const certObj = new X509();
        certObj.readCertPEM(certLoaded);
        console.log("Detail of certificate provided")
        console.log(certObj.getInfo())
        console.log("Public key:" + certObj.getPublicKeyHex())
        console.log("Signature:" + certObj.getSignatureValueHex())
        console.log("");

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

main();