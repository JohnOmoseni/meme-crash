"use client";
import { createWalletClient, createWalletClientUI } from "@fotonjs/core";
import { TonConnect, TonConnectUI } from "@tonconnect/ui";

import React, { useMemo, useState } from "react";

// export const walletClient = createWalletClientUI({
// 	// Use TON testnet for development purposes
// 	chain: "testnet",
// 	// Provide a link to the deployed manifest file
// 	manifestUrl: "https://counter.foton.sh/tonconnect-manifest.json",
// 	// If the wallet was already connected, restore the connection immediately
// 	restoreConnection: true
// });
export const tonConnect = new TonConnectUI({
	manifestUrl: "https://example.com/tonconnect-manifest.json"
});

export const walletClient = createWalletClientUI({
	chain: "testnet",
	connection: tonConnect
});
export default function Navabar() {
	const [loading, setLoading] = useState(false);
	const [userAddress, setUserAddress] = useState<string>();
	const menu = [
		{ name: "Stats" },
		{ name: "About" },
		{ name: "Contact" },
		{ name: "Help" },
		{ name: "Settings" }
	];
	const shortAddress = useMemo(() => {
		if (!userAddress) return "";
		return userAddress.slice(0, 5) + "..." + (userAddress || "").slice(-4);
	}, [userAddress]);

	// Open wallet connection modal and wait while users connects. Show loading spinner meanwhile.
	const onConnect = async () => {
		setLoading(true);

		const res = await walletClient.connect();
		if (res.error) {
			alert(res.error.message);
		} else {
			setUserAddress(res.data.account.address);
		}

		setLoading(false);
	};

	const onDisconnect = async () => {
		setLoading(true);
		const res = await walletClient.disconnect();
		if (res.data) {
			setUserAddress(undefined);
		}
		setLoading(false);
	};
	return (
		<div className="border-2 rounded border-white w-full items-center justify-center p-1 ">
			<div className="flex flex-row items-center justify-between space-x-4">
				<div className="flex flex-row gap-4 m-1">
					<span className="text-orange-600">Meme Crash</span>
					<div className="flex flex-row gap-3 mx-1">
						{menu.map((item, i) => (
							<div key={i}>{item.name}</div>
						))}
					</div>
				</div>
				<button
					className="snes-button has-ember-color"
					disabled={loading}
					onClick={onConnect}
				>
					{loading ? "Loading..." : "Connect Wallet"}
				</button>
			</div>
		</div>
	);
}
