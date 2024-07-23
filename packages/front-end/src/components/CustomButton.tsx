"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import ClipLoader from "react-spinners/ClipLoader";

type BtnProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  dir?: "left" | "right";
  icon?: IconType;
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonVariant = ({
  title,
  className,
  type,
  icon: Icon,
  onClick,
  disabled,
  dir = "left",
}: BtnProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "row-flex my-1 inline-flex h-10 w-64 whitespace-nowrap rounded-md border-2 border-border-variant bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 px-6 py-2 font-star text-lg uppercase tracking-wide text-black subpixel-antialiased shadow-inner filter transition duration-150 hover:brightness-90 active:translate-y-0.5 active:brightness-90 disabled:pointer-events-none disabled:opacity-50 2xl:h-12 2xl:py-3",
        className,
      )}
    >
      {disabled && (
        <span className="row-flex mr-1.5">
          <ClipLoader
            color={"orange"}
            loading={disabled}
            size={20}
            aria-label="Loading"
            data-testid="loader"
          />
        </span>
      )}
      {title}
    </button>
  );
};

export const Button = ({
  title,
  className,
  type,
  icon: Icon,
  onClick,
  disabled,
  dir = "left",
}: BtnProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "btn row-flex transition-sm relative min-w-max rounded-full px-7 py-2.5 text-base font-medium capitalize leading-6 hover:scale-105 hover:bg-opacity-70 focus:outline-none focus:ring-1 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        Icon && "gap-2",
        className,
      )}
    >
      {disabled && (
        <span className="row-flex mr-1.5">
          <ClipLoader
            color={"orange"}
            loading={disabled}
            size={20}
            aria-label="Loading"
            data-testid="loader"
          />
        </span>
      )}
      {dir === "left" && Icon && !disabled && (
        <Icon size={20} className="mt-0.5 font-semibold" />
      )}
      {title}
      {dir === "right" && Icon && (
        <Icon size={20} className="mt-0.5 font-semibold" />
      )}
    </button>

    // return <button className="snes-button has-turquoise-color">Profile</button>;
  );
};
