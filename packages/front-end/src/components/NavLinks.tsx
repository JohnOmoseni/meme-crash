import { animateFn, linksAni } from "@/lib/animate";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export type NavLinkProps = {
  name: string;
  href: string;
  idx?: number;
  menu?: boolean;
  icon?: StaticImageData;
  setOpenMenu?: () => void;
};

function NavLinks({ name, href, menu, icon, idx, setOpenMenu }: NavLinkProps) {
  const navlink = "relative p-1 tracking-snug whitespace-nowrap ";
  const menulink = "";

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...(menu && animateFn(linksAni, idx))}
      onClick={() => setOpenMenu && setOpenMenu()}
      className="flex-column !items-center"
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
          "hover:text-secondary-foreground font-star font-bold uppercase transition-colors",
          menu ? menulink : navlink,
          isActive && "text-foreground-variant font-semibold",
        )}
      >
        {name}
      </motion.span>
    </Link>
  );
}

export default NavLinks;
