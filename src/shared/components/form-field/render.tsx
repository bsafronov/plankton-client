import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { getCFormField } from "./fields";
import { CFormFieldRender, CFormFieldType } from "./types";

const formRender: CFormFieldRender = {
  DEFAULT: ({ field, settings, description, label, type }) => (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>{getCFormField(type)(field, settings)}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  ),
  checkbox: ({ field, settings, description, label, type }) => (
    <FormItem className="flex items-start gap-2">
      <FormControl>{getCFormField(type)(field, settings)}</FormControl>
      <div className="flex flex-col">
        {label && <FormLabel>{label}</FormLabel>}
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </div>
    </FormItem>
  ),
};

export const getCFormFieldRender = (type: CFormFieldType) => {
  return formRender[type] ?? formRender["DEFAULT"];
};
