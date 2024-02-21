import { FieldValues } from "react-hook-form";
import { FormField } from "~/shared/ui/form";
import { getCFormFieldRender } from "./render";
import { CFormFieldProps } from "./types";

export const CFormField = <T extends FieldValues>({
  label,
  description,
  type = "text",
  settings,
  ...props
}: CFormFieldProps<T>) => {
  return (
    <FormField
      {...props}
      render={({ field }) =>
        getCFormFieldRender(type)({
          field,
          description,
          type,
          label,
          settings,
        })
      }
    />
  );
};
