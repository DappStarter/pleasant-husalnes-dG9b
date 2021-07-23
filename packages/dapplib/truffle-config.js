require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember attitude inflict arena breeze slogan'; 
let testAccounts = [
"0xcc664f179b489f400937ce70c6c98e1a9373c1c4f68d993754460f2776713ec5",
"0x2a37b3fa406b090fdd009b9e9acd55fdb7cc8202a391d6e1efa38757ac7cc35e",
"0x50006bc203875925a9ede0c18409693cf78e4e1afe351dde5f8a166e9d40c01d",
"0xafa26074fb88250c63b0c6992b92afd30dffb7fd43d3caed9ecd586ebab988cf",
"0xc5a98ad840e3491c23194532e22f0e81d1c74dd194dfdb01e267831e30298799",
"0x409ee06cb7d227b4c34cd9b7ee41074a06e7fe3097a7614a0b9cee0ffbf453de",
"0x867e909e5bf4c0605cb1b7c8cbec410e36cdd06c524989596877c73ee06ae1a4",
"0x1069f126b0546fb9625d319b34033a63f06114ce27f67ef8a7d10c1123f97a95",
"0x10dc280f2b2df2cec3681e160bb7642bb1a4e6657332b27d4b8f90cd4f327719",
"0x7cdd5bd257b7566ddf8d08281d0c4841782fdd1ebdd9c3a6468d43c5048f2ec1"
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
            version: '^0.8.0'
        }
    }
};

