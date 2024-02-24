import { cn } from "~/shared/lib";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui";
import { CFormFieldPlacementList, CFormFieldPlacementProps } from "./types";

export type CFormFieldPlacement = "checkbox";

const placementList: CFormFieldPlacementList = {
  DEFAULT: ({ children, className, description, label }) => (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>{children}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  ),
  checkbox: ({ children, className, description, label }) => (
    <FormItem className={cn("flex gap-2", className)}>
      <FormControl>{children}</FormControl>
      <div className="flex flex-col">
        {label && <FormLabel>{label}</FormLabel>}
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </div>
    </FormItem>
  ),
};

export const FieldPlacement = ({
  placement,
  ...props
}: CFormFieldPlacementProps) => {
  if (!placement || !placementList[placement]?.(props)) {
    return placementList.DEFAULT(props);
  }
  return placementList[placement]?.(props);
};
