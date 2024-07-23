import { cn } from "@/lib/utils";

function ConnectLoader({
  label,
  containerStyles,
}: {
  label?: string;
  containerStyles?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-auto absolute inset-0 grid w-full select-none place-items-center",
        containerStyles,
      )}
      style={{ zIndex: 100 }}
    >
      <h3 className="transition-sm animate-pulse font-star text-xl uppercase">
        {label ?? "Connecting..."}
      </h3>
    </div>
  );
}

export default ConnectLoader;
