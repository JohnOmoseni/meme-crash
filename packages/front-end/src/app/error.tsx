"use client";

import { Button } from "@/components/CustomButton";
import { logo } from "@/constants/icons";
import Image from "next/image";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error?: Error;
  reset: () => void;
}) {
  return (
    <div className="fixed left-0 top-0 grid min-h-dvh w-full place-items-center">
      <div className="group absolute left-3 top-3 transition hover:scale-95 sm:left-5 sm:top-5">
        <Image
          src={logo}
          alt=""
          width={1000}
          height={1000}
          className="h-12 w-fit object-contain"
        />
      </div>

      <div className="flex-column !items-center gap-10 px-3">
        <h2 className="line-clamp-5 max-w-[45ch] text-center text-2xl sm:text-3xl">
          Error | {error?.message ?? "Something went wrong"}.
        </h2>
        <Button
          title="Try again"
          onClick={() => reset()}
          className="!rounded-full bg-red-500 px-14 py-4 text-lg"
        />
      </div>
    </div>
  );
}
