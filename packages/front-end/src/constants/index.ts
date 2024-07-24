// NAVBAR ICONS
import stats from "@/images/graph.png";
import settings from "@/images/cog.png";
import cups from "@/images/cups.png";
import help from "@/images/questionmark.png";
import online from "@/images/online.png";

export const navLinks = [
  {
    icon: stats,
    name: "Stats",
    href: "#",
    tag: "stats",
  },
  {
    icon: cups,
    name: "About",
    href: "#",
    tag: "about",
  },
  {
    icon: settings,
    name: "Contact",
    href: "#",
    tag: "contact",
  },
  {
    icon: help,
    name: "Help",
    href: "#",
    tag: "help",
  },
  {
    icon: online,
    name: "Settings",
    href: "#",
    tag: "settings",
  },
];

export const prices = [
  [0.01, 0.05, 0.1, 0.25, 0.5, 1],
  [2, 3, 4, 5, 7.5, 10],
];

export const modals = ["stats", "about", "contact", "help", "settings"];

export const faq = [
  {
    heading: "How to play",
    body: [
      ["1)", "Place a bet trade and watch the multiplier increase!"],
      ["2", "Place a bet trade and watch the multiplier"],
    ],
  },
];
