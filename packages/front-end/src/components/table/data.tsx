export type PlayerBoard = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  cashout: "pending" | "processing" | "success" | "failed";
  bet: string | number;
  player: string;
};

export const playerboard: PlayerBoard[] = [
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  {
    id: "728ed52f",
    player: "",
    amount: 100,
    status: "pending",
    bet: "m@example.com",
    cashout: "pending",
  },
  // ...
];
