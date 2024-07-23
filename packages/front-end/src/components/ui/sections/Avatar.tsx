import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  fallback?: string;
  containerClassName?: string;
};

function AvatarWrapper({ src, fallback, containerClassName }: AvatarProps) {
  return (
    <Avatar
      className={cn(
        "transition-sm grid bg-card transition-colors hover:scale-95",
        containerClassName,
      )}
    >
      <AvatarImage src={src ?? "https://github.com/shadcn.png"} />
      <AvatarFallback>{fallback ?? "JO"}</AvatarFallback>
    </Avatar>
  );
}

export default AvatarWrapper;
