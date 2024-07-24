import { animateFn, linksAni } from "@/lib/animate";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useAppDispatch, useAppSelector } from "@/types";
import { setActiveModal, setOpenMenu } from "@/redux/features/appSlice";
import { online } from "@/constants/icons";

export type NavLinkProps = {
  name: string;
  tag?: string;
  href: string;
  idx?: number;
  menu?: boolean;
  icon?: StaticImageData;
};

function NavLinks({ name, href, menu, tag, icon, idx }: NavLinkProps) {
  const navlink = "relative p-1 tracking-snug whitespace-nowrap ";
  const menulink = "";

  const { activeModal, openMenu } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const handleClick = (tag: string) => {
    if (menu && openMenu) dispatch(setOpenMenu(false));
    dispatch(setActiveModal({ activeModal: tag, showModal: true }));
  };

  return (
    <>
      <Link
        href={href}
        {...(menu && animateFn(linksAni, idx))}
        onClick={() => handleClick(tag!)}
        className="flex-column group !items-center"
      >
        <motion.span>
          <Image
            src={icon!}
            alt=""
            width={1000}
            height={1000}
            className="h-8 w-fit"
          />
        </motion.span>
        <motion.span
          className={cn(
            "font-star font-bold uppercase transition-colors group-hover:text-secondary-foreground",
            menu ? menulink : navlink,
            activeModal === tag && "active-modal",
          )}
        >
          {name}
        </motion.span>
      </Link>
    </>
  );
}

export default NavLinks;

export const OnlineCount = () => (
  <div className="flex-column group select-none !items-center hover:cursor-none">
    <motion.span>
      <Image
        src={online}
        alt=""
        width={1000}
        height={1000}
        className="h-8 w-fit"
      />
    </motion.span>
    <motion.span
      className={cn(
        "font-star font-bold uppercase transition-colors group-hover:text-secondary-foreground",
      )}
    >
      Online: 40
    </motion.span>
  </div>
);
