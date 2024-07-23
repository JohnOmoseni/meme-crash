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
import { AlertModal } from "@/components/ui/sections/AlertModal";
import ModalPanel from "@/components/modals/ModalPanel";

const Header = dynamic(() => import("./(home)/_sections/Header"), {
  ssr: false,
});

const modals = ["stats", "about", "contact", "help", "settings"];

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header
        activeModal={activeModal}
        setOpenMenu={setOpenMenu}
        setActiveModal={setActiveModal}
        setShowModal={setShowModal}
      />

      {showModal && (
        <>
          <ModalPanel activeModal={activeModal} id={modals[0]}>
            <AlertModal
              title="Last 100 Games Global"
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <div></div>
            </AlertModal>
          </ModalPanel>
        </>
      )}

      <AnimatePresence>
        {openMenu && (
          <Menu
            activeModal={activeModal}
            setOpenMenu={setOpenMenu}
            setActiveModal={setActiveModal}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>

      <main className="relative flex min-h-screen px-1 py-2 sm:py-4">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center sm:w-[96%]">
          <div className="flex-column md:grid-layout-md gap-x-4 gap-y-6 sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div className="flex h-full w-full flex-col gap-4 max-sm:h-dvh sm:col-span-1 md:col-span-2 lg:flex-row">
              {/* <CandlestickChart /> */}
              <PlaceBet />
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
    </>
  );
}
