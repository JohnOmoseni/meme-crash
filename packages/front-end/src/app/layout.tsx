import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/providers/ReduxProvider";
// import "snes.css/dist/snes.min.css";
import "./globals.css";
import "./index.css";
import "./utilities.css";

const PressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-plus_sans",
});

const GlobalProvider = dynamic(() => import("../providers/GlobalProvider"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Meme Crash",
  description:
    "Test your luck and multiply your sol every second on-chain. How high can you go before it crashes? From the team who brought you Degen Coin Flip. Multiply your sol by riding, but watch out before the crash. Every second counts in this adrenaline-filled game.",
  icons: {
    icon: "https://example.com/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PressStart2P.className}>
        <div className="wrapper">
          <GlobalProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </GlobalProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
