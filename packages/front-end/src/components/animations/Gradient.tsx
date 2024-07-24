"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Gradient = ({
  gradientColor = "255, 243, 236",
  size = "80%",
  blendingValue = "hard-light",
}: {
  gradientColor?: string;
  size?: string;
  blendingValue?: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty("--first-color", gradientColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [gradientColor, size, blendingValue]);

  return (
    <>
      <div
        className={cn(
          `absolute [background:radial-gradient(circle_at_center,_rgba(var(--gradient-color),_0.8)_0,_rgba(var(--gradient-color),_0)_50%)_no-repeat]`,
          `-top-1/2 right-1/3 h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
          `[transform-origin:calc(50%-400px)]`,
          // `[transform-origin:center_center]`,
          `opacity-20`,
          `[transform:translateX(-48%)]`,
        )}
      ></div>
    </>
  );
};
