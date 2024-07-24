import { background } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ImageBg({ containerStyles }: { containerStyles: string }) {
  return (
    <Image
      src={background}
      alt=""
      width={1000}
      height={1000}
      className={cn(
        "pointer-events-none fixed bottom-0 z-0 h-64 w-64 select-none",
        containerStyles,
      )}
    />
  );
}

export default ImageBg;
