"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { Dispatch, ReactNode } from "react";
import { Close } from "@/constants/icons";
import { useAppDispatch, useAppSelector } from "@/types";
import { setActiveModal } from "@/redux/features/appSlice";

type AlertModal = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export function AlertModal({ title, description, children }: AlertModal) {
  const { showModal } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setActiveModal({ activeModal: "", showModal: false }));
  };

  return (
    <AlertDialog open={showModal} onOpenChange={closeModal}>
      {/* we will trigger the opening of the dialog somewhere else */}

      <AlertDialogContent className="shad-alert-dialog scrollbar-inner mx-auto grid max-h-[500px] min-h-[200px] max-w-lg items-center gap-4 overflow-y-auto rounded-xl p-4 shadow-lg max-sm:w-[85%] sm:min-w-[300px] sm:p-6">
        <span
          className="icon group absolute right-4 top-4 active:scale-95"
          onClick={closeModal}
          title="close"
        >
          <Close
            size="20"
            className="z-[50] text-grey transition-colors group-hover:text-foreground"
          />
        </span>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl capitalize sm:text-2xl">
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>{description}</AlertDialogDescription>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}
