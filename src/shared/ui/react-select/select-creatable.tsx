import {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from "react";
import { GroupBase } from "react-select";
import ReactSelectCreatableComponent from "react-select/creatable";
import { getSettings } from "./settings";

type Props<
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<
  ComponentPropsWithoutRef<
    typeof ReactSelectCreatableComponent<Option, isMulti, Group>
  >,
  "isDisabled"
> & {
  disabled?: boolean;
};

const ReactSelectCreatableWithoutRef = <
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    isMulti,
    closeMenuOnSelect,
    disabled,
    ...props
  }: Props<Option, isMulti, Group>,
  ref: ForwardedRef<
    ElementRef<typeof ReactSelectCreatableComponent<Option, isMulti, Group>>
  >
) => {
  return (
    <ReactSelectCreatableComponent
      ref={ref}
      closeMenuOnSelect={closeMenuOnSelect ?? !isMulti}
      isMulti={isMulti}
      isDisabled={disabled}
      {...getSettings<Option, isMulti, Group>()}
      {...props}
    />
  );
};

export const ReactSelectCreatable = forwardRef(
  ReactSelectCreatableWithoutRef
) as <
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, isMulti, Group> & {
    ref?: ElementRef<
      typeof ReactSelectCreatableComponent<Option, isMulti, Group>
    >;
  }
) => ReactNode;
