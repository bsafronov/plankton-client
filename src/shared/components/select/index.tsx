import { useState } from "react";
import { PopoverResponsive } from "../popover-responsive";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/shared/ui";
import { cn } from "~/shared/lib";

type Option = {
  value: string;
  label: string;
};

type Props<T extends Option> = {
  options: T[];
  value: T;
  onChange: (value: T) => void;
};

export const CSelect = () => {
  const [open, setOpen] = useState(false);
  return (
    <PopoverResponsive open={open} setOpen={setOpen} content={<></>}>
      <Button
        variant={"outline"}
        aria-description="select"
        className={cn()}
      ></Button>
    </PopoverResponsive>
  );
};

const CSelectList = <T extends Option>({
  options,
}: Pick<Props<T>, "options">) => {
  return (
    <Command>
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandGroup>
          {options.map((option, i) => (
            <CommandItem key={i} value={option.label}>
              {option.label}
            </CommandItem>
          ))}
          <CommandItem></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

const useCSelect = () => {
  const handleChangeOption = () => {};

  return handleChangeOption;
};
