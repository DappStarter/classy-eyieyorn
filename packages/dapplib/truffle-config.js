require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name razor toss coach just knee oppose gift'; 
let testAccounts = [
"0xa86bdbaba2d4783c791c41b0295889e4058a0b68a8057885e28d21ff13b715a6",
"0xaa82dc55738f8cba074a0cdde5aa114ba02f857e861eb2f3729e39beec2287cb",
"0x6bb656c0f432cde855034246160a8dc0c6c34c6adafce69a32534be49c033d47",
"0xeda57db1913f36bb535854a76997335f61e11fe4550674645521523d3483490b",
"0x61e9858e53888ca6ce4ee455290f5b4e0ac4408a6bf4b5523011360d69f13e95",
"0x34d1bc4245a7a738a4dc691357f792946ea17c5b59a441d1cd2bf05cc4425e85",
"0x19cfdac6546e2eae2587268acdd198e961c7a95c8aa35085d8aa9a2e6e4ee5a3",
"0xa4453c80c387f8253228ba42dfb7ea7a9d5848c47ab2ef11afa4babd2e13f2ee",
"0x53d0472e61e8e7c5f7ec771fa0a2c643bf75ad19438b199183433a6927b01285",
"0x562040d6273147cbe15361e31d54497958e184d423f57fd1d77870e950f6993b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
