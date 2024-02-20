import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

type FormFieldType = "text" | "password" | "checkbox" | "tel";
type FormField<T extends FieldValues> = ControllerRenderProps<T, Path<T>>;

type Props<T extends FieldValues> = Omit<
  React.ComponentPropsWithoutRef<typeof FormField<T>>,
  "render"
> & {
  label?: string;
  description?: string;
  type?: FormFieldType;
};

export const CFormField = <T extends FieldValues>({
  label,
  description,
  type = "text",
  ...props
}: Props<T>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{getFormField(type)(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const getFormField = (type: FormFieldType) => {
  return formFields[type];
};

const formFields: Record<
  FormFieldType,
  <T extends FieldValues>(field: FormField<T>) => React.ReactNode
> = {
  text: (field) => <Input {...field} />,
  password: (field) => <Input {...field} type="password" />,
  checkbox: ({ onChange, value, ...props }) => (
    <Checkbox onCheckedChange={onChange} checked={value} {...props} />
  ),
  tel: (field) => <Input {...field} />,
};
