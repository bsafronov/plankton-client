import Select from "node_modules/react-select/dist/declarations/src/Select";
import { Ref, forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { ReactSelect } from "~/shared/ui";
import { Option } from "~/shared/types";

type Props = Omit<ControllerRenderProps, "ref">;

const roles: Option<string>[] = [
  {
    value: "USER",
    label: "Пользователь",
  },
  {
    value: "ADMIN",
    label: "Администратор",
  },
];
export const SelectUserRole = forwardRef(
  ({ value, onChange, ...props }: Props, ref: Ref<Select<Option<string>>>) => {
    const getValue = () => {
      const selectedValue = roles?.find((item) => item.value === value);

      if (!selectedValue) return null;

      return selectedValue;
    };

    return (
      <ReactSelect
        ref={ref}
        options={roles}
        value={getValue()}
        onChange={(v) => onChange(v?.value)}
        isClearable
        {...props}
      />
    );
  }
);
