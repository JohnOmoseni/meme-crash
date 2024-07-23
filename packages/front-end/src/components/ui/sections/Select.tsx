import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SelectDropdownProps {
  items: any[];
  value?: string;
  isFetchingList?: boolean;
  placeholder?: ReactNode;
  itemContainerStyle?: string;
  setValue: (value: string) => void;
  renderItem?: (item: any) => ReactNode;
  otherItem?: () => ReactNode;
}

// defaultValue={value || items?.[0]}

export default function SelectDropdown({
  value,
  placeholder,
  itemContainerStyle,
  items,
  isFetchingList,
  setValue,
  renderItem,
  otherItem,
}: SelectDropdownProps) {
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className="w-full min-w-[180px]">
        <SelectValue placeholder={placeholder ?? "Select"} />
      </SelectTrigger>

      <SelectContent className="relative gap-3 bg-background">
        {otherItem && otherItem()}

        {isFetchingList ? (
          <span className="absolute inset-0 grid place-items-center">
            Loading...
          </span>
        ) : (
          items &&
          items.map((item, idx) => (
            <SelectItem
              value={item}
              key={idx}
              className={cn("row-flex-start", itemContainerStyle)}
            >
              {renderItem ? renderItem(item?.name) : item?.name}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}