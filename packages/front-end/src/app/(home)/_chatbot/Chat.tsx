"use client";

import { cn, convertToTime } from "@/lib/utils";
import { ChatProps, useAppSelector } from "@/types";
import { useEffect, useRef } from "react";

function Chat({ chat }: { chat: ChatProps }) {
  const { isWalletConnected, chatLog } = useAppSelector((state) => state.chat);

  const you = chat?.outgoing;

  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    elemRef?.current &&
      !isWalletConnected &&
      elemRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [chatLog]);

  return (
    <div
      ref={elemRef}
      className={`group relative mt-4 flex w-full items-center first:mt-2 last:mb-7 ${
        you ? "flex-row-reverse" : "flex-row"
      } !justify-start`}
    >
      <div
        className={cn(
          "relative w-max max-w-[60%] bg-opacity-80 px-4 py-2.5 pl-3",
          you
            ? "rounded-s-md rounded-ee-lg bg-background"
            : `rounded-r-md rounded-es-lg bg-card shadow-sm`,
        )}
      >
        <p className={cn("break-words text-base leading-5")}>{chat.message}</p>
      </div>
      <div
        className={cn(
          "absolute top-full mt-1 text-xs font-light text-grey",
          you ? "right-2" : "left-2",
        )}
      >
        {chat?.timestamp && convertToTime(chat.timestamp)}
      </div>
    </div>
  );
}
export default Chat;
