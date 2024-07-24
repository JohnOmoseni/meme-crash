"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PlayerBoard } from "./data";
import { solana } from "@/constants/icons";
import Image from "next/image";

export const columns: ColumnDef<PlayerBoard>[] = [
  {
    accessorKey: "id",
    header: "Player",
    cell: ({ row }) => <p className="font-medium">{row.original.status}</p>,
  },

  {
    accessorKey: "bet",
    header: "Bet",
    cell: ({ row }) => {
      return (
        <p className="table-data-sm row-flex">
          {row.original.bet}
          <Image
            src={solana}
            alt=""
            width={100}
            height={100}
            className="pointer-events-none ml-1.5 mt-0.5 h-4 w-4 select-none"
          />
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Cash-out",
    cell: ({ row }) => <p className="table-data-sm">{row.original.cashout}</p>,
  },
  {
    accessorKey: "status",
    header: "Payout",
    cell: ({ row }) => <p className="table-data-sm">{row.original.status}</p>,
  },
];
