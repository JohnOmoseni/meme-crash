"use client";

import { useState } from "react";
import ChatInput from "../_chatbot/ChatInput";
import ChatMain from "../_chatbot/ChatMain";
import { cn } from "@/lib/utils";

function Announcement() {
  const [showNotification, setNotification] = useState(true);
  const [fullClamp, setFullClamp] = useState(false);

  return (
    <div className="flex h-full w-full flex-col divide-y-2 divide-border">
      {showNotification && (
        <div className="heading-bg flex w-full !justify-between gap-2 rounded-t-xl">
          <div className="row-flex-start w-full gap-3">
            <h3 className="min-w-[8ch] break-words text-lg font-bold text-secondary-foreground max-sm:text-base">
              Announcement
            </h3>
            <p
              className={cn(
                "flex-1 text-center text-base max-sm:text-sm",
                fullClamp ? "line-clamp-none" : "line-clamp-2",
              )}
              onClick={() => setFullClamp((prev) => !prev)}
            >
              This game is still in Beta and can contain bugs. Press HELP for
              support. <br className="hidden md:block" /> Dont click any links
              in the chat!
            </p>
          </div>

          <span
            className="block cursor-pointer text-right text-sm font-bold underline"
            onClick={() => setNotification(false)}
          >
            Dismiss
          </span>
        </div>
      )}

      <ChatMain />
      <ChatInput />
    </div>
  );
}

export default Announcement;
