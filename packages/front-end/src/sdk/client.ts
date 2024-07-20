import { createWalletClient, createPublicClient } from "@fotonjs/core";

export const publicClient = createPublicClient();

export const walletClient = createWalletClient({
	manifestUrl: "https://example.com/tonconnect-manifest.json"
});
