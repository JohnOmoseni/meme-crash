"use client";

import { Input } from "@/components/ui/input";
import { prices } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ButtonVariant } from "@/components/CustomButton";
import { useAppSelector } from "@/types";
import {
  ArrowRight,
  ArrowLeft,
  Edit,
  Cancel,
  info,
  solana_plain,
} from "@/constants/icons";
import Image from "next/image";
import clsx from "clsx";
import ArrowInput from "@/components/ArrowInput";

function JoinGame() {
  const [priceIndex, setPriceIndex] = useState(0);
  const priceList = prices[priceIndex];
  const { isNetworkAvailable, isWalletConnected } = useAppSelector(
    (state) => state.appState,
  );

  const [activeValueIndex, setActiveValueIndex] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | string>(priceList[0]);

  useEffect(() => {
    if (amount) {
      const index = priceList?.findIndex((price) => price === Number(amount));
      index !== -1 ? setActiveValueIndex(index) : setActiveValueIndex(null);
    }
  }, [amount]);

  const handlePriceTab = () => {
    setActiveValueIndex(0);
    if (priceIndex === 0) {
      setPriceIndex(1);
      return;
    }
    setPriceIndex(0);
  };

  let ArrowIcon = priceIndex === 0 ? ArrowRight : ArrowLeft;

  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
      <div className="mx-auto w-11/12 px-2 py-1">
        <div className="mb-1 mt-2 flex w-full flex-col">
          <Top
            isWalletConnected={isWalletConnected}
            isNetworkAvailable={isNetworkAvailable}
          />

          <div className="relative my-1 grid w-full grid-cols-3 grid-rows-2 gap-x-2 gap-y-1 2xl:gap-x-4 2xl:gap-y-2">
            <button
              className={cn(
                "absolute top-1/4 h-8 pb-2",
                priceIndex === 0 ? "-right-7" : "-left-7",
              )}
              onClick={handlePriceTab}
            >
              <ArrowIcon
                size={25}
                className="icon my-auto object-scale-down grayscale hover:brightness-125"
              />
            </button>

            {priceList?.map((price, index) => {
              return (
                <button
                  key={price}
                  onClick={() => {
                    setActiveValueIndex(index);
                    setAmount(priceList[index]);
                  }}
                  className={clsx("badge-tab", {
                    "!btn-variant-lilac": activeValueIndex === index,
                  })}
                >
                  <Image
                    src={solana_plain}
                    alt=""
                    width={100}
                    height={100}
                    className="pointer-events-none h-3.5 w-3.5 select-none"
                  />
                  <span className="font-avenir">{price}</span>
                </button>
              );
            })}

            <div className="row-flex-start relative col-span-3 my-1">
              <Input
                type="number"
                inputMode="numeric"
                min="0.01"
                max="5"
                step="0.01"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="input !h-11 !pr-[3.5rem] !text-[1rem]"
              />
              <div className="absolute right-0 top-0 flex h-full w-12 select-none justify-end gap-1.5 px-1.5">
                <Image
                  src={solana_plain}
                  alt=""
                  width={1000}
                  height={1000}
                  className="pointer-events-none my-auto h-5 w-5 select-none"
                />
                <ArrowInput value={Number(amount)} setValue={setAmount} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlacebetFooter
        isWalletConnected={isWalletConnected}
        isNetworkAvailable={isNetworkAvailable}
      />
    </div>
  );
}

export default JoinGame;

type Props = {
  isWalletConnected: boolean;
  isNetworkAvailable: boolean;
};

const Top = ({ isWalletConnected, isNetworkAvailable }: Props) => {
  const [showInput, setShowInput] = useState(false);
  const [selectedBet, setSelectedBet] = useState(2);
  const [inputValue, setInputValue] = useState<number>(100.5);

  return (
    <div className="row-flex-btwn relative h-9 gap-3">
      <div className="my-auto ml-1 whitespace-nowrap font-star tracking-wide text-grey-100 xl:text-lg">
        AUTO CASH OUT
        <button data-state="closed">
          <Image
            src={info}
            alt=""
            width={1000}
            height={1000}
            className="ml-[1px] h-4 w-4 -translate-y-0.5"
          />
        </button>
      </div>

      {!showInput ? (
        <div className="row-flex my-auto ml-1 grow !justify-around font-avenir text-base">
          {[2, 10, 100].map((prediction) => (
            <button
              key={prediction}
              onClick={() => setSelectedBet(prediction)}
              className={cn(
                "transition-sm font-medium brightness-75 hover:brightness-90",
                selectedBet === prediction &&
                  "scale-[1.15] font-bold !text-foreground brightness-100",
              )}
            >
              {prediction}x
            </button>
          ))}

          <button
            className={cn(
              "row-flex-start transition-sm font-bold hover:brightness-100",
            )}
            disabled={!isNetworkAvailable}
            onClick={() => setShowInput(true)}
          >
            {inputValue}x
            <Edit size={18} className="ml-1.5 text-foreground" />
          </button>
        </div>
      ) : (
        <div className="my-auto ml-4 flex w-1/3 min-w-24 justify-end font-avenir text-sm">
          <div className="relative flex min-w-24">
            <Input
              type="number"
              inputMode="numeric"
              min="1"
              max="10000"
              step="0.1"
              value={inputValue}
              disabled={false}
              onChange={(e) => {
                setInputValue(Number(e.target.value));
              }}
              className="input !h-9"
            />

            <div className="absolute right-0 top-0 flex h-full w-12 select-none justify-end px-1">
              <ArrowInput
                value={Number(inputValue)}
                setValue={setInputValue}
                isEdit
              />
            </div>
          </div>
          <button
            className="absolute -right-6 top-1.5 my-auto"
            onClick={() => {
              setShowInput(false);
              setSelectedBet(inputValue);
            }}
          >
            <Cancel size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

const PlacebetFooter = ({ isWalletConnected, isNetworkAvailable }: Props) => (
  <div className="mx-auto w-11/12 px-2 py-2">
    <ButtonVariant
      title="Join Game"
      className="btn-variant-lilac"
      disabled={true}
    />

    <div className="flex-column mt-6 w-full">
      <div className="font-avenir text-sm text-foreground-200">
        Pending Profits: 0.000 SOL
        <button data-state="closed">
          <Image
            src={info}
            alt=""
            width={1000}
            height={1000}
            className="ml-[1px] h-3.5 w-3.5 -translate-y-0.5"
          />
        </button>
      </div>
    </div>
    <ButtonVariant
      title="Claim profits"
      className="btn-variant-lilac"
      disabled={true}
    />
  </div>
);
