import { ComponentPropsWithoutRef } from "react";
import ReactSelect, { GroupBase } from "react-select";
import { getStyles } from "./styles";

export const getSettings = <
  Option extends unknown = unknown,
  isMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(): Partial<
  ComponentPropsWithoutRef<typeof ReactSelect<Option, isMulti, Group>>
> => ({
  unstyled: true,
  classNames: getStyles(),
  placeholder: "Выбрать...",
  loadingMessage: () => "Поиск...",
  noOptionsMessage: () => "Ничего не найдено...",
});
