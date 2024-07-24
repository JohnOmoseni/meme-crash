"use client";

import { useAppDispatch, useAppSelector } from "@/types";
import { Suspense, useEffect } from "react";
import { setNetwork, setScreenSize } from "@/redux/features/appSlice";
import Menu from "@/components/Menu";

import dynamic from "next/dynamic";
import ModalPanel from "@/components/modals/ModalPanel";
import ConnectLoader from "@/components/fallback/ConnectLoader";
import { AlertModal } from "@/components/ui/sections/AlertModal";
import { AnimatePresence } from "framer-motion";
import { modals } from "@/constants";
import Settings from "@/components/modals/Settings";
import Help from "@/components/modals/Help";
import Leaderboard from "@/components/modals/Leaderboard";
import History from "@/components/modals/History";

const Header = dynamic(() => import("@/app/(home)/_sections/Header"), {
  ssr: false,
});

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { openMenu, showModal, activeModal } = useAppSelector(
    (state) => state.appState,
  );

  useEffect(() => {
    const updateNetwork = () => {
      dispatch(setNetwork(navigator.onLine));
    };
    const getScreenSize = () => {
      dispatch(setScreenSize(window?.innerWidth));
    };

    getScreenSize();
    updateNetwork();

    window.addEventListener("resize", getScreenSize);
    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);

    return () => {
      window.removeEventListener("resize", getScreenSize);
      window.removeEventListener("online", updateNetwork);
      window.removeEventListener("offline", updateNetwork);
    };
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
              <History />
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[2]}>
            <AlertModal title="Contact">
              <Leaderboard />
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[3]}>
            <AlertModal title="Help">
              <Help />
            </AlertModal>
          </ModalPanel>
          <ModalPanel activeModal={activeModal} id={modals[4]}>
            <AlertModal title="Settings">
              <Settings />
            </AlertModal>
          </ModalPanel>
        </>
      )}
    </>
  );
}
export default LayoutProvider;
