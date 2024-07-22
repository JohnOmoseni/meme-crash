"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/NavLinks";

import { Dispatch, SetStateAction } from "react";
import { navLinks } from "@/constants";
import { belowimg, logo, Menu } from "@/constants/icons";

import { createWalletClient, createWalletClientUI } from "@fotonjs/core";
import { TonConnect, TonConnectUI } from "@tonconnect/ui";
import {
  CHAIN,
  TonConnectButton,
  TonConnectUIProvider,
  useTonConnectModal,
} from "@tonconnect/ui-react";
import Marquee from "./Marquee";
import { Gradient } from "@/components/animations/Gradient";

type HeaderProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setOpenMenu }: HeaderProps) => {
  return (
    <>
      <header
        className="header relative z-10 min-h-[50px] w-full px-3 pb-1 pt-3 shadow-sm sm:px-4 md:min-h-[75px]"
        style={{ zIndex: 99 }}
      >
        <div className="row-flex relative mx-auto w-[96%] !justify-start gap-6 md:!justify-between">
          <div className="row-flex relative h-full w-full max-sm:flex-1 md:w-40">
            <Link href="/" className="absolute -top-[45px] z-20">
              <Image
                src={logo}
                alt=""
                width={1000}
                height={1000}
                className="h-[6.3rem] w-16 object-contain transition hover:scale-95 md:w-36"
              />
            </Link>
            <div className="absolute top-[13px] z-10 md:top-[25px]">
              <Image
                src={belowimg}
                alt=""
                width={1000}
                height={1000}
                className="m-auto h-10 w-[4.5rem] object-contain md:w-36"
              />
            </div>
          </div>

          <div className="md:row-flex hidden w-full gap-7">
            {navLinks?.map((link, idx) => <NavLinks key={idx} {...link} />)}
          </div>

          <div
            className="row-flex group ml-auto md:hidden"
            onClick={() => setOpenMenu && setOpenMenu(true)}
          >
            <Menu
              size={22}
              className="transition-sm text-secondary-foreground group-hover:scale-95"
            />
          </div>

          <div className="hidden md:flex">
            <TonConnectButton />
          </div>
        </div>

        <Gradient />
      </header>

      <Marquee />
    </>
  );
};

export default Header;
