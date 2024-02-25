import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { FormField } from "~/shared/ui/form";
import { CFormFieldPlacement } from "../ui/placement";

export type CFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Pick<
  ComponentPropsWithoutRef<typeof FormField<TFieldValues, TName>>,
  "control" | "name"
> & {
  label?: string;
  description?: string;
  className?: string;
  placement?: CFormFieldPlacement;
  required?: boolean;
  render: (props: ControllerRenderProps<TFieldValues, TName>) => ReactNode;
};

export type CFormFieldPlacementProps = Pick<
  CFormFieldProps,
  "className" | "description" | "label" | "placement" | "required"
> & {
  children?: ReactNode;
};
export type CFormFieldPlacementItemProps = Omit<
  CFormFieldPlacementProps,
  "placement"
>;
export type CFormFieldPlacementList = Partial<
  Record<
    CFormFieldPlacement,
    (props: CFormFieldPlacementItemProps) => JSX.Element
  >
> & {
  DEFAULT: (props: CFormFieldPlacementItemProps) => JSX.Element;
};
