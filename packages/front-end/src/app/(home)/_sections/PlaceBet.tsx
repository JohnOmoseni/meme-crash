"use client";

import { ButtonVariant } from "@/components/CustomButton";
import { useAppSelector } from "@/types";
import JoinGame from "./JoinGame";
import ImageBg from "@/components/ImageBg";

function PlaceBet() {
  const { isNetworkAvailable, isWalletConnected } = useAppSelector(
    (state) => state.appState,
  );

  const btnLabel = isNetworkAvailable ? "Connect Wallet" : "Connect Wallet";

  return (
    <div
      className="card h-full w-full max-sm:mx-auto sm:min-w-[350px]"
      style={{ zoom: "80%" }}
    >
      <div className="flex-column h-full w-full">
        <div className="heading-bg !min-h-fit">
          <div className="heading-variant">Place your bets</div>
        </div>

        <div className="scrollbar-thin relative flex h-full w-full flex-col overflow-y-auto px-1">
          {isWalletConnected && <JoinGame />}

          {(!isWalletConnected || !isNetworkAvailable) && (
            <div className="mx-auto my-4 mt-16">
              <ButtonVariant
                title={btnLabel}
                className="btn-variant-yellow mb-3"
              />

              <p className="text-center text-base font-medium text-foreground-200">
                Connect Wallet and Sign the nonce
              </p>

              <ButtonVariant
                title="Disconnect Wallet"
                className="!btn-grey !my-3"
              />
            </div>
          )}
        </div>
      </div>

      <ImageBg containerStyles="left-0 h-32 w-32" />
      <ImageBg containerStyles="right-0 h-32 w-32 scale-x-[-1]" />
    </div>
  );
}

export default PlaceBet;
