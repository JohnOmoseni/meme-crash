"use client";

import { cn } from "@/lib/utils";
import { TabProps } from "@/types";

function ModalPanel({ activeModal, id, children }: TabProps) {
  return activeModal === id ? (
    <div
      aria-labelledby={id}
      aria-hidden={activeModal === id ? "false" : "true"}
      className={cn(activeModal === id && "active-modal")}
    >
      {children}
    </div>
  ) : null;
}

export default ModalPanel;
