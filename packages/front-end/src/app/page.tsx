"use client";
// import Navabar from "@/components/Navbar/Navabar";
import Image from "next/image";
import dynamic from "next/dynamic";
import Container from "./../components/Container/Container";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const Navabar = dynamic(() => import("../components/Navbar/Navabar"), {
	ssr: false
});
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-[10px]">
			<div>
				<Navabar />
				<Container />
			</div>
		</main>
	);
}
