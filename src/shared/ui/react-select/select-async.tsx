import Select from "node_modules/react-select/dist/declarations/src/Select";
import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef } from "react";
import { GroupBase } from "react-select";
import ReactSelectAsyncComponent from "react-select/async";
import { getSettings } from "./settings";

type Props<
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<
  ComponentPropsWithoutRef<
    typeof ReactSelectAsyncComponent<Option, isMulti, Group>
  >,
  "isDisabled"
> & {
  disabled?: boolean;
};

const ReactSelectAsyncWithoutRef = <
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
  ref: Ref<Select<Option, isMulti, Group>>
) => {
  return (
    <ReactSelectAsyncComponent
      ref={ref}
      closeMenuOnSelect={closeMenuOnSelect ?? !isMulti}
      isMulti={isMulti}
      isDisabled={disabled}
      {...getSettings<Option, isMulti, Group>()}
      {...props}
    />
  );
};

export const ReactSelectAsync = forwardRef(ReactSelectAsyncWithoutRef) as <
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, isMulti, Group> & {
    ref?: Ref<Select<Option, isMulti, Group>>;
  }
) => ReactNode;
