export type PlayerBoard = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  patient: {
    $id: string;
  };
  userId: string;
};

export const playerboard: PlayerBoard[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    patient: {
      $id: "",
    },
    userId: "",
  },
  // ...
];
