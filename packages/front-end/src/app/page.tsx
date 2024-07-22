"use client";

import { background } from "@/constants/icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import PlaceBet from "./(home)/_sections/PlaceBet";
import CandlestickChart from "./(home)/_sections/Chart";
import Standings from "./(home)/_sections/Standings";
import Announcement from "./(home)/_sections/Announcement";

const Header = dynamic(() => import("./(home)/_sections/Header"), {
  ssr: false,
});

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} />

      <AnimatePresence>
        {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      </AnimatePresence>

      <main className="relative flex min-h-screen px-1 py-2 sm:py-4">
        <div className="mx-auto flex w-full max-w-[1920px] sm:w-[96%]">
          <div className="flex-column gap-x-4 gap-y-6 sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div className="flex-column sm:cols-span-1 min-h-[50vh] w-full gap-4 md:col-span-2 lg:flex-row">
              <CandlestickChart />
              <PlaceBet />
            </div>

            <div className="data-table card flex-column table w-full grow gap-3 sm:col-span-1 sm:row-span-3">
              <Standings />
            </div>

            <div className="card row-span-2 grow sm:col-span-2">
              <Announcement />
            </div>
          </div>
        </div>

        <>
          <Image
            src={background}
            alt=""
            width={1000}
            height={1000}
            className="pointer-events-none fixed bottom-0 left-0 z-0 h-64 w-64 select-none"
          />

          <Image
            src={background}
            alt=""
            width={1000}
            height={1000}
            className="pointer-events-none fixed bottom-0 right-0 z-0 h-64 w-64 scale-x-[-1] select-none"
          />
        </>
      </main>
    </>
  );
}
