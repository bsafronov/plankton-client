import { ClassNamesConfig, GroupBase } from "react-select";
import { cn } from "~/shared/lib";

export const getStyles = <
  Option extends unknown = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(): ClassNamesConfig<Option, isMulti, Group> => ({
  container: ({ isFocused }) =>
    cn(
      "group border rounded-md text-sm",
      isFocused && "ring-2 ring-ring ring-offset-background ring-offset-2"
    ),
  control: () => cn(),
  valueContainer: () => cn("px-3 gap-1 flex-wrap py-1 min-h-10"),
  placeholder: () => cn("text-muted-foreground"),
  input: () => cn(""),
  indicatorsContainer: () => cn("bg-muted pl-2.5 border-l"),
  indicatorSeparator: () => cn(""),
  clearIndicator: () =>
    cn("text-border hover:text-muted-foreground cursor-pointer pr-2"),
  dropdownIndicator: ({ isFocused }) =>
    cn(
      "pr-2.5 text-border cursor-pointer",
      isFocused && "text-muted-foreground"
    ),
  menu: () => cn("border mt-3 rounded-md overflow-hidden"),
  menuList: () => cn("divide-y bg-background"),
  multiValue: () => cn("border rounded-md flex justify-between"),
  multiValueLabel: () => cn("px-3 py-0.5"),
  multiValueRemove: ({ isFocused }) =>
    cn(
      "bg-muted border-l px-1 text-border hover:text-destructive",
      isFocused && "text-destructive"
    ),
  option: ({ isSelected, isFocused }) =>
    cn(
      "relative px-3 py-2 group-[.is-error]:bg-destructive group-[.is-error]:border-destructive after:absolute after:w-4 after:h-4 after:right-3 ",
      isFocused && "bg-secondary",
      isSelected && "after:content-['✅']"
    ),
  noOptionsMessage: () => cn("py-2"),
});
