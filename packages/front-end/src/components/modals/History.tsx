import { rocket } from "@/constants/icons";
import Image from "next/image";

function History() {
  return (
    <div className="mx-auto px-4 pb-0 pt-4 text-center md:pb-4">
      <Image
        src={rocket}
        width={1000}
        height={1000}
        className="mx-auto mb-4 h-32 w-32 sm:h-64 sm:w-64"
        alt="coin rocket"
      />
      <h3 className="text-center text-muted-foreground sm:text-lg">
        You have no recently played games
      </h3>
    </div>
  );
}

export default History;
