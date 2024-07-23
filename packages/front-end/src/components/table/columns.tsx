"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PlayerBoard } from "./data";

export const columns: ColumnDef<PlayerBoard>[] = [
  {
    accessorKey: "status",
    header: "Player",
    cell: ({ row }) => {
      const value = row.original;
      return <p className="font-medium">{value.status}</p>;
    },
  },

  {
    accessorKey: "email",
    header: "Bet",
    cell: ({ row }) => {
      const value = row.original;
      return <p className="td-sm">{value.email}</p>;
    },
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
