"use client";

import { useEffect, useRef } from "react";
import { ChatProps, useAppSelector, useAppDispatch } from "@/types";
import { cn } from "@/lib/utils";
import Chat from "./Chat";

function ChatMain({ containerClassName }: { containerClassName?: string }) {
  const { chatLog, isWalletConnected } = useAppSelector((state) => state.chat);

  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    elemRef?.current && elemRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <div
      className={cn(
        "chat-main scrollbar-inner relative flex h-full w-full flex-1 flex-col overflow-hidden bg-background-100 md:max-h-[23.4vh]",
        containerClassName,
      )}
    >
      <div className="flex w-full flex-col gap-4 overflow-y-auto px-4 pb-1 pt-2.5">
        {chatLog?.length > 0 &&
          chatLog?.map((chat, idx) => {
            if ("timestamp" in chat) {
              return <Chat key={chat.timestamp} chat={chat} />;
            } else if (!("loading" in chat) || !chat.loading) {
              // Handle other cases or return null if necessary
              return <Chat key={idx} chat={chat as ChatProps} />;
            }
          })}
      </div>
    </div>
  );
}
export default ChatMain;
