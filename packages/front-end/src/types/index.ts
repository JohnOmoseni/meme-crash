import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ColumnDef } from "@tanstack/react-table";

export type TableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

export type ChatProps = {
  type: "msg" | "error";
  message?: string;
  incoming?: boolean | string;
  outgoing?: boolean | string;
  timestamp?: number;
};

export type ChatBotState = {
  chatbotId: string;
  chatLog: ChatProps[] | [{ loading?: boolean }];
  isWalletConnected: boolean;
};

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
