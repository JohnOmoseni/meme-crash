"use client";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import "snes.css/dist/snes.min.css";

const PressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const GlobalProvider = dynamic(() => import("../Providers/GlobalProvider"), {
	ssr: false
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={PressStart2P.className}>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
