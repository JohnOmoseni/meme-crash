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
