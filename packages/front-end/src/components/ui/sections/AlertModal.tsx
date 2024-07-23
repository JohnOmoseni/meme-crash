"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogDescription,
} from "@radix-ui/react-alert-dialog";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Close } from "@/constants/icons";

type AlertModal = {
  showModal: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export function AlertModal({
  title,
  description,
  showModal,
  setShowModal,
  children,
}: AlertModal) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AlertDialog open={showModal} onOpenChange={setShowModal}>
      {/* we will trigger the opening of the dialog somewhere else */}

      <AlertDialogContent className="shad-alert-dialog scrollbar-inner mx-auto max-h-[380px] min-h-[200px] max-w-lg items-center overflow-y-auto rounded-lg px-4 py-4 shadow-md max-sm:w-[85%] sm:min-w-[300px] sm:px-6">
        <span
          className="icon absolute right-3 top-3 text-foreground transition-colors active:scale-95"
          onClick={closeModal}
          title="close"
        >
          <Close size="20" className="text-grey" />
        </span>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left text-2xl capitalize">
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>{description}</AlertDialogDescription>

        {children}

        <AlertDialogFooter>
          {/* <AlertDialogAction>{dialogAction}</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
