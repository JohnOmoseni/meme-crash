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
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonVariant = ({
  title,
  className,
  type,
  onClick,
  isLoading,
  disabled,
}: BtnProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={cn("btn-variant", className)}
    >
      {title}
      {disabled && isLoading && (
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
