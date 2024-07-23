"use client";

import Image from "next/image";
import PlaceBet from "./(home)/_sections/PlaceBet";
import Standings from "./(home)/_sections/Standings";
import Announcement from "./(home)/_sections/Announcement";

import { background } from "@/constants/icons";
import { CandlestickChart } from "./(home)/_sections/Chart";

export default function Home() {
  return (
    <main className="relative flex min-h-screen px-1 py-2 sm:py-4">
      <div className="mx-auto flex w-full max-w-[1920px] justify-center sm:w-[96%]">
        <div className="flex-column md:grid-layout-md gap-x-4 gap-y-6 sm:grid sm:grid-cols-2 md:grid-cols-3">
          <div className="flex h-full w-full flex-col gap-4 max-sm:h-dvh sm:col-span-1 md:col-span-2 lg:flex-row">
            <CandlestickChart />
            <PlaceBet />
          </div>
          <div className="data-table card flex-column table w-full grow gap-1 max-sm:h-[70vh] sm:col-span-1 sm:row-span-2 sm:h-full">
            <Standings />
          </div>
          <div className="card row-span-2 max-h-[50vh] w-full sm:col-span-2">
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
  );
}
