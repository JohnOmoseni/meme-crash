import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchTab({ id, label }: { id: string; label: string }) {
  return (
    <div className="row-flex-start space-x-2">
      <Switch id={id} className="" />
      <Label htmlFor={label} className="my-1 ml-2 mr-3 inline-flex text-lg">
        {label}
      </Label>
    </div>
  );
}
