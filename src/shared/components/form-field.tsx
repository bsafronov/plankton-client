import { InputHTMLAttributes } from "react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { InputMask } from "../ui/input-mask";

type FormFieldType = "text" | "password" | "checkbox" | "tel";
type FormField<T extends FieldValues> = ControllerRenderProps<T, Path<T>>;

type AllSettings = Omit<DefaultSettings | TelSettings, "type">;
type DefaultSettings = Pick<InputHTMLAttributes<HTMLInputElement>, "className">;

type TelSettings = {
  type: "tel";
  settings?: Pick<React.ComponentPropsWithoutRef<typeof InputMask>, "mask">;
};

type Props<T extends FieldValues> = Omit<
  React.ComponentPropsWithoutRef<typeof FormField<T>>,
  "render"
> & {
  label?: string;
  description?: string;
  type?: FormFieldType;
  settings?: DefaultSettings;
} & (TelSettings | {});

export const CFormField = <T extends FieldValues>({
  label,
  description,
  type = "text",
  settings,
  ...props
}: Props<T>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{getFormField(type)(field, settings)}</FormControl>
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
  <T extends FieldValues>(
    field: FormField<T>,
    settings?: AllSettings
  ) => React.ReactNode
> = {
  text: (field, settings) => <Input {...field} {...settings} />,
  password: (field, settings) => (
    <Input {...field} type="password" {...settings} />
  ),
  checkbox: ({ onChange, value, ...props }, settings) => (
    <Checkbox
      onCheckedChange={onChange}
      checked={value}
      {...props}
      {...settings}
    />
  ),
  tel: (field, settings) => (
    <InputMask {...field} mask={"+7 (999) 999-99-99"} {...settings} />
  ),
};
