"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PlayerBoard } from "./data";

export const columns: ColumnDef<PlayerBoard>[] = [
  {
    accessorKey: "status",
    header: "Player",
  },
  {
    accessorKey: "email",
    header: "Bet",
  },
  {
    accessorKey: "amount",
    header: "Cash-out",
  },
  {
    accessorKey: "amount",
    header: "Payout",
  },
];
