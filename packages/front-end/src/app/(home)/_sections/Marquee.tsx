import { Cancel } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Marquee() {
  const [showMarquee, setShowMarquee] = useState(true);

  return (
    <div
      className={cn(
        "marquee invisible relative z-0 h-[30px] w-full overflow-hidden border-b border-border bg-card py-1",
        showMarquee && "sm:visible",
      )}
    >
      <div className="absolute z-0 flex h-full w-full animate-marquee whitespace-nowrap">
        <p className="text-base font-bold text-secondary-foreground">
          🎉 Degen Coin Flip Summer Event: Live Now! 1000+ SOL Rewards • 10%
          Crash Fees Shared • Visit the{" "}
          <a
            href="https://shop.degencoinflip.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            shop
          </a>{" "}
          or{" "}
          <a
            href="https://x.com/degencoinflip/status/1813712439676207318"
            target="_blank"
            rel="noreferrer"
          >
            read more <span className="text-base underline">here</span>
          </a>
        </p>
      </div>

      <span
        className="icon absolute right-2 bg-card"
        title="close"
        onClick={() => setShowMarquee(false)}
      >
        <Cancel size={18} className="icon text-foreground" />
      </span>
    </div>
  );
}

export default Marquee;
