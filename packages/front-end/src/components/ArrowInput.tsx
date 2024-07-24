import { ArrowDown, ArrowUp } from "@/constants/icons";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

function ArrowInput({
  value,
  size = 22,
  setValue,
  arrowStyles,
  isEdit,
}: {
  value: any;
  size?: number;
  isEdit?: boolean;
  arrowStyles?: string;
  setValue: Dispatch<SetStateAction<any>>;
}) {
  return (
    <>
      <div className="mx-1 mr-1 flex h-full select-none flex-col">
        <button
          className="z-50 flex h-1/2 w-full pb-0.5 pt-1 active:translate-y-0.5 active:brightness-90"
          disabled={false}
          onClick={() => {
            let inc = isEdit ? 0.1 : 0.01;
            setValue(value + inc);
          }}
        >
          <ArrowDown className={cn("arrow h-fit w-10", arrowStyles)} />
        </button>
        <button
          className="z-50 flex h-1/2 w-full pb-1.5 pt-0.5 active:translate-y-0.5 active:brightness-90"
          disabled={false}
          onClick={() => {
            let dec = isEdit ? 0.1 : 0.01;
            setValue(Math.max(value - dec, 0));
          }}
        >
          <ArrowUp className={cn("arrow h-fit w-10", arrowStyles)} />
        </button>
      </div>

      {/* <div className="absolute right-0 top-0 flex h-full w-12 select-none justify-end">
        <div className="mx-1 mr-1 flex h-full w-1/3 select-none flex-col">

          {[1, 2].map((item, i) => (
            <button
              className={cn(
                "z-50 flex h-1/2 w-full pb-0.5 pt-1.5 active:translate-y-0.5 active:brightness-90",
                item === 2 && "pb-1.5 pt-0.5",
              )}
            >
              <Image
                src={arrow}
                alt=""
                fill
                className={cn("arrow", item === 2 && "rotate-180")}
              />
            </button>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default ArrowInput;
