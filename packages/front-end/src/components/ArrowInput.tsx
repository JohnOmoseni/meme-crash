import { cn } from "@/lib/utils";
import { useAppSelector } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

function ArrowInput({
  value,
  setValue,
  arrowStyles,
  isEdit,
}: {
  value: number;
  isEdit?: boolean;
  arrowStyles?: string;
  setValue: Dispatch<SetStateAction<any>>;
}) {
  const { isNetworkAvailable } = useAppSelector((state) => state.appState);

  return (
    <>
      <div className="mx-1 mr-1 flex h-full select-none flex-col">
        <button
          className="z-50 flex h-1/2 w-full pb-0.5 pt-1 active:translate-y-0.5 active:brightness-90"
          disabled={!isNetworkAvailable}
          onClick={() => {
            let inc = isEdit ? 0.1 : 0.01;
            const newValue = value + inc;
            setValue(newValue.toFixed(2));
          }}
        >
          <div className={cn("arrow-up", arrowStyles)} />
        </button>
        <button
          className="z-50 flex h-1/2 w-full pb-1.5 pt-0.5 active:translate-y-0.5 active:brightness-90"
          disabled={false}
          onClick={() => {
            let dec = isEdit ? 0.1 : 0.01;
            const newValue = value - dec;
            setValue(Math.max(Number(newValue.toFixed(2)), 0));
          }}
        >
          <div className={cn("arrow-down", arrowStyles)} />
        </button>
      </div>
    </>
  );
}

export default ArrowInput;
