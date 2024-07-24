function Help() {
  return (
    <div className="scrollbar-thin max-h-[420px] overflow-y-auto rounded-lg bg-gray-800 p-2 font-avenir shadow-md md:p-6">
      <h3 className="mb-1 font-star text-xl tracking-wide">How to Play</h3>
      <p className="mb-3">
        <b>1). </b>Place a bet &quot;trade&quot; and watch the multiplier
        increase!
        <br />
        <b>2). </b>Take profits before the coin gets rugged to win
        <br />
      </p>
      <h3 className="mb-1 font-star text-xl tracking-wide">More Info</h3>
      <p className="mb-3">
        <b>Q:</b> What is the max win?
        <br />
        <b>A:</b> During the Beta the max win is 10.000x your wager size,
        currently capped at 100 SOL per player per round. The max total SOL
        reward for all players combined per round is capped at 150 SOL.
      </p>
      <p className="mb-3">
        <b>Q:</b> What are the min and max bet-sizes?
        <br />
        <b>A:</b> The min betsize is 0.01 SOL and the max betsize is 10 SOL.
      </p>
      <p className="mb-3">
        <b>Q:</b> How does the multiplier work?
        <br />
        <b>A:</b> The multiplier starts at 1x and increases over time. Your
        potential winnings are your bet amount multiplied by the current
        multiplier.
      </p>
      <p className="mb-3">
        <b>Q:</b> What&apos;s the RTP?
        <br />
        <b>A:</b> The game has a 101% RTP. We take a small percentage fee (3.5%)
        for each game of which a big portion goes to fill the house wallet.
      </p>
      <p className="mb-3">
        <b>Q:</b> What happens if I don&apos;t cash out before the crash?
        <br />
        <b>A:</b> If the multiplier crashes before you cash out, you lose your
        bet and win nothing for that round.
      </p>
      <p className="mb-3">
        <b>Q:</b> How do I stop the multiplier?
        <br />
        <b>A:</b> When the game is running press the &apos;Cash Out&apos; button
        to STOP the multiplier. This button appears if you placed a bet.
      </p>
      <p className="mb-3">
        <b>Q:</b> How do I claim my pending profits?
        <br />
        <b>A:</b> Your SOL is stored in an on-chain escrow wallet only you can
        access. Click &quot;Claim Profits&quot; to withdraw the full balance.
      </p>
      <h3 className="mb-1 font-star text-xl tracking-wide">Strategy</h3>
      <p className="mb-3">
        <b>Q:</b> What is Auto Cash out?
        <br />
        <b>A:</b> Auto cash-out allows you to set a predetermined multiplier at
        which your bet will automatically cash out. This can help manage risk
        and ensure you don&apos;t miss the cash-out point.
      </p>
      <p className="mb-3">
        <b>Q:</b> Is there a strategy for playing Crash?
        <br />
        <b>A:</b> While Crash is a game of chance, some players use strategies
        like setting auto cash-out points or progressively betting to manage
        their risk.
      </p>
      <p className="mb-3">
        <b>
          If you have a game that is stuck or believe there is an error, please
          join our support discord
        </b>
        <br />
        <a
          href="https://discord.gg/vmJQYFFXQS"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          DCF Support Discord
        </a>
      </p>
    </div>
  );
}

export default Help;
