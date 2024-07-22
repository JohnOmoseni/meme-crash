"use client";

import { useEffect, useRef } from "react";
import { ChatProps, useAppSelector, useAppDispatch } from "@/types";
import { cn } from "@/lib/utils";
import Chat from "./Chat";

function ChatMain({ containerClassName }: { containerClassName?: string }) {
  const { chatLog, isWalletConnected } = useAppSelector((state) => state.chat);

  const dispatch = useAppDispatch();
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    elemRef?.current && elemRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <div
      className={cn(
        "chat-main scrollbar-inner relative flex h-full min-h-[30vh] w-full flex-1 flex-col overflow-hidden bg-background-100",
        containerClassName,
      )}
    >
      <div className="w-full overflow-y-auto px-4 pb-2 pt-4">
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
