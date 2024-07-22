import { Cancel } from "@/constants/icons";

function Marquee() {
  return (
    <div className="marquee relative z-0 hidden h-[30px] w-full overflow-hidden border-b border-border bg-card py-1 sm:block">
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

      <span className="icon absolute right-2 bg-card">
        <Cancel size={18} className="icon text-white" />
      </span>
    </div>
  );
}

export default Marquee;
