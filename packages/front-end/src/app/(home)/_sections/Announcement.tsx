import ChatInput from "../_chatbot/ChatInput";
import ChatMain from "../_chatbot/ChatMain";

function Announcement() {
  return (
    <>
      <div className="flex h-full flex-col divide-y-2 divide-border text-sm">
        <div className="heading-bg flex gap-2">
          <div className="row-flex-start gap-3">
            <h3 className="min-w-[8ch] break-words font-bold text-secondary-foreground max-sm:text-base">
              Announcement
            </h3>
            <p className="flex-1 text-center">
              This game is still in Beta and can contain bugs. Press HELP for
              support. Dont click any links in the chat!
            </p>
          </div>

          <div className="block text-right font-bold underline max-[400px]:hidden">
            Dismiss
          </div>
        </div>

        <ChatMain />

        <ChatInput />
      </div>
    </>
  );
}

export default Announcement;
