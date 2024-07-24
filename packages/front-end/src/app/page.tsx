import PlaceBet from "./(home)/_sections/PlaceBet";
import Standings from "./(home)/_sections/Standings";
import Announcement from "./(home)/_sections/Announcement";

import { CandlestickChart } from "./(home)/_sections/Chart";
import ImageBg from "@/components/ImageBg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen px-1 py-2 sm:py-4">
      <div className="mx-auto flex w-full max-w-[1920px] justify-center sm:w-[96%]">
        <div className="flex-column md:grid-layout-md gap-x-4 gap-y-6 sm:grid sm:grid-cols-2 md:grid-cols-3">
          <div className="flex h-full w-full flex-col gap-4 max-sm:h-dvh sm:col-span-1 md:col-span-2 lg:flex-row">
            <CandlestickChart />
            <PlaceBet />
          </div>
          <div className="data-table card flex-column table w-full grow gap-1 max-sm:max-h-[70vh] sm:col-span-1 sm:row-span-2 sm:h-full">
            <Standings />
          </div>
          <div className="card relative row-span-2 h-full max-h-[50vh] w-full !overflow-visible sm:col-span-2">
            <Announcement />
          </div>
        </div>
      </div>

      <>
        <ImageBg containerStyles="left-0" />
        <ImageBg containerStyles="right-0 scale-x-[-1] " />
      </>
    </main>
  );
}
