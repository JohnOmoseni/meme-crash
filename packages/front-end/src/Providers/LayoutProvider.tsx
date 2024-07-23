"use client";

import { useAppDispatch, useAppSelector } from "@/types";
import { Suspense, useEffect } from "react";
import { setScreenSize } from "@/redux/features/appSlice";
import Menu from "@/components/Menu";

import dynamic from "next/dynamic";
import ModalPanel from "@/components/modals/ModalPanel";
import ConnectLoader from "@/components/fallback/ConnectLoader";
import { AlertModal } from "@/components/ui/sections/AlertModal";
import { AnimatePresence } from "framer-motion";

const Header = dynamic(() => import("@/app/(home)/_sections/Header"), {
  ssr: false,
});

const modals = ["stats", "about", "contact", "help", "settings"];

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { openMenu, showModal, activeModal } = useAppSelector(
    (state) => state.appState,
  );

  useEffect(() => {
    const getScreenSize = () => {
      dispatch(setScreenSize(window?.innerWidth));
    };

    getScreenSize();
    window.addEventListener("resize", getScreenSize);

    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence>{openMenu && <Menu />}</AnimatePresence>
      <Suspense fallback={<ConnectLoader />}>{children}</Suspense>

      {showModal && (
        <>
          <ModalPanel activeModal={activeModal} id={modals[0]}>
            <AlertModal title="Last 100 Games Global">
              <div></div>
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[1]}>
            <AlertModal title="About">
              <div></div>
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[2]}>
            <AlertModal title="Contact">
              <div></div>
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[3]}>
            <AlertModal title="Help">
              <div></div>
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[4]}>
            <AlertModal title="Settings">
              <div></div>
            </AlertModal>
          </ModalPanel>
        </>
      )}
    </>
  );
}
export default LayoutProvider;
