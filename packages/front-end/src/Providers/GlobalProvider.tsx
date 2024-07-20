import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React from "react";

export default function GlobalProvider({ children }: any) {
	return (
		<TonConnectUIProvider manifestUrl="https://example.com/tonconnect-manifest.json">
			{children}
		</TonConnectUIProvider>
	);
}
