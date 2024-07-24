"use client";

import { Textarea } from "@/components/ui/textarea";
import { EmojiSmile, Send } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { setChatLog } from "@/redux/features/chatSlice";
import { useAppDispatch, useAppSelector } from "@/types";
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function ChatInput() {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { screenSize } = useAppSelector((state) => state.appState);

  const { chatLog } = useAppSelector((state) => state.chat);
  const { isWalletConnected } = useAppSelector((state) => state.appState);

  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null!);
  const emojiContainerRef = useRef(null);

  useEffect(() => {
    if (text === "") {
      textareaRef && textareaRef.current.setAttribute("rows", "1");
    }
  }, [text]);

  const adjustTextAreaHeight = () => {
    const textarea = textareaRef?.current;

    // max no of rows
    const maxRows = 3;
    const lineHeight = parseInt(
      window.getComputedStyle(textarea).lineHeight,
      10,
    );
    const rows = Math.min(
      maxRows,
      Math.floor(textarea.scrollHeight / lineHeight),
    );

    textarea.rows = rows;
    if (rows >= 3) {
      textarea.style.overflowY = "auto";
    }
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    if (!text) return;

    const msg = text.trim();
    const prompt = {
      type: "msg",
      message: msg,
      outgoing: "true",
    };

    const chatLogNew = [...chatLog, { ...prompt, timestamp: Date.now() }];
    dispatch(setChatLog([...chatLogNew, { loading: true }]));

    setText("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustTextAreaHeight();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    const symbol = emoji.unified.split("_");
    const codeArray: any = [];
    symbol.forEach((sym: any) => codeArray.push(`0x${sym}`));

    let em = String.fromCodePoint(...codeArray);
    setText(text + em);
    console.log(emoji, symbol, codeArray, em);
  };

  return (
    <div
      className={cn(
        "row-flex mt-auto w-full overflow-hidden rounded-b-xl border-t border-border border-opacity-80 bg-black/80 py-2 pl-2 pr-3 sm:min-h-[3rem]",
      )}
    >
      <form className="row-flex w-full gap-3" onSubmit={handleSubmit}>
        <div className="flex w-full flex-1">
          <Textarea
            typeof="text"
            ref={textareaRef}
            value={text}
            disabled={!isWalletConnected}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={
              !isWalletConnected ? "Connect your wallet" : "Message..."
            }
            rows={1}
            className={cn(
              "min-h-0 flex-1 resize-none !whitespace-pre-wrap shadow-none placeholder:text-sm placeholder:text-grey",
            )}
          />
        </div>

        <div className="row-flex gap-3">
          <div
            title="emoji"
            className="z-[99] cursor-pointer hover:text-slate-800"
          >
            <EmojiSmile
              color="#999"
              className=""
              size={22}
              onClick={() => setShowEmoji(!showEmoji)}
            />
            {showEmoji && (
              <div
                ref={emojiContainerRef}
                className={cn(
                  "showPicker absolute overflow-auto",
                  "bottom-[130%] left-0",
                  "bottom-[120%] right-0",
                )}
              >
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
                  maxFrequentRows={0}
                  previewPosition="top"
                  perLine={screenSize >= 640 ? 12 : 7}
                  theme="dark"
                  navPosition="bottom"
                  onEmojiSelect={handleEmojiSelect}
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            title="Send"
            disabled={!isWalletConnected}
            className={cn("icon", isWalletConnected && "cursor-none")}
          >
            <Send size={22} className="" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default ChatInput;
