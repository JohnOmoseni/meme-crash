import { animateFn, linksAni } from "@/lib/animate";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type NavLinkProps = {
  name: string;
  tag?: string;
  href: string;
  idx?: number;
  menu?: boolean;
  activeModal?: string;
  icon?: StaticImageData;
  setActiveModal: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

function NavLinks({
  name,
  href,
  menu,
  tag,
  icon,
  idx,
  activeModal,
  setOpenMenu,
  setActiveModal,
  setShowModal,
}: NavLinkProps) {
  const navlink = "relative p-1 tracking-snug whitespace-nowrap ";
  const menulink = "";

  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = (tag: string) => {
    if (menu && setOpenMenu) setOpenMenu(false);
    setActiveModal(tag);
    setShowModal(true);
  };

  return (
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
          isActive && "active-modal",
          activeModal === tag && "active-modal",
        )}
      >
        {name}
      </motion.span>
    </Link>
  );
}

export default NavLinks;
