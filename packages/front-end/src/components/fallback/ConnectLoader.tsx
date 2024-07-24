import { cn } from "@/lib/utils";

function ConnectLoader({
  label,
  containerStyles,
  textStyles,
}: {
  label?: string;
  containerStyles?: string;
  textStyles?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-auto absolute inset-0 grid w-full select-none place-items-center",
        containerStyles,
      )}
      style={{ zIndex: 100 }}
    >
      <h3
        className={cn(
          "transition-sm animate-pulse font-star text-xl uppercase",
          textStyles,
        )}
      >
        {label ?? "Connecting..."}
      </h3>
    </div>
  );
}

export default ConnectLoader;
