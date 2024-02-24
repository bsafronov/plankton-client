import Select from "node_modules/react-select/dist/declarations/src/Select";
import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef } from "react";
import ReactSelectComponent, { GroupBase } from "react-select";
import { getSettings } from "./settings";

const ReactSelectWithoutRef = <
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    isMulti,
    closeMenuOnSelect,
    disabled,
    ...props
  }: Omit<
    ComponentPropsWithoutRef<
      typeof ReactSelectComponent<Option, isMulti, Group>
    >,
    "isDisabled"
  > & {
    disabled?: boolean;
  },
  ref: Ref<Select<Option, isMulti, Group>>
) => {
  return (
    <ReactSelectComponent
      ref={ref}
      closeMenuOnSelect={closeMenuOnSelect ?? !isMulti}
      isMulti={isMulti}
      isDisabled={disabled}
      {...getSettings<Option, isMulti, Group>()}
      {...props}
    />
  );
};

export const ReactSelect = forwardRef(ReactSelectWithoutRef) as <
  Option = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ComponentPropsWithoutRef<
    typeof ReactSelectComponent<Option, isMulti, Group>
  > & { ref?: Ref<Select<Option, isMulti, Group>> }
) => ReactNode;
