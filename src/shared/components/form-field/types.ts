import {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { FormField } from "~/shared/ui/form";
import { InputMask } from "~/shared/ui/input-mask";

// Props for CFormField component
type Props = {
  label?: string;
  description?: string;
  type?: CFormFieldType;
  settings?: SettingsDefault;
};
export type CFormFieldType = "text" | "password" | "checkbox" | "tel";

// Settings types wrapper
export type CFormFieldSettings = SettingsDefault | SettingsTel;

// Settings for different field types
type SettingsDefault = Pick<InputHTMLAttributes<HTMLInputElement>, "className">;
type SettingsTel = {
  type: "tel";
  settings?: Pick<React.ComponentPropsWithoutRef<typeof InputMask>, "mask">;
};

// These types are static
type FormField<T extends FieldValues> = ControllerRenderProps<T, Path<T>>;
type DefaultProps<T extends FieldValues> = Omit<
  ComponentPropsWithoutRef<typeof FormField<T>>,
  "render"
>;
export type CFormFieldProps<T extends FieldValues> = DefaultProps<T> &
  Props &
  CFormFieldSettings;
export type CFormFieldComponents = Record<
  CFormFieldType,
  <T extends FieldValues>(
    field: FormField<T>,
    settings?: Omit<CFormFieldSettings, "type">
  ) => ReactNode
>;
type CFormFieldRenderProps = <T extends FieldValues>(
  props: {
    field: FormField<T>;
    settings?: Omit<CFormFieldSettings, "type">;
    type: CFormFieldType;
  } & Pick<Props, "label" | "description">
) => ReactElement;
export type CFormFieldRender = Partial<
  Record<CFormFieldType, CFormFieldRenderProps>
> &
  Record<"DEFAULT", CFormFieldRenderProps>;
