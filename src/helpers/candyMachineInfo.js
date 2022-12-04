export const candyMachineAddress = "0x24b790dd80a3c935672378ba1017ac787c7aa4f725a113da780c02a26309dbc5";
export const collectionName = "AptoDoges"; // Case sensitive!
export const collectionCoverUrl = "https://i.ibb.co/crZ5px7/480.jpg";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xc071ef709539f7f9372f16050bf984fe6f11850594b8394f11bc74d22f48836b";
export const COLLECTION_SIZE = 1111
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
