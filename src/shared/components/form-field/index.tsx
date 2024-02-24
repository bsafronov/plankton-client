import { FieldPath, FieldValues } from "react-hook-form";
import { FormField } from "~/shared/ui/form";
import { CFormFieldProps } from "./types";
import { FieldPlacement } from "./placement";

export const CFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  render,
  ...props
}: CFormFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FieldPlacement {...props}>{render(field)}</FieldPlacement>
      )}
    />
  );
};
