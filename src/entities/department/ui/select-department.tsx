import Select from "node_modules/react-select/dist/declarations/src/Select";
import { Ref, forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { ReactSelect } from "~/shared/components";
import { useDepartmentsQuery } from "../hooks/use-departments-query";
import { Option } from "~/shared/types";

type Props = Omit<ControllerRenderProps, "ref">;

export const SelectDepartment = forwardRef(
  ({ value, onChange, ...props }: Props, ref: Ref<Select<Option>>) => {
    const { data: departments, isLoading } = useDepartmentsQuery();

    const getOptions = () => {
      return departments?.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    };

    const getValue = () => {
      const department = departments?.find((item) => item.id === value);

      if (!department) return null;

      return {
        value: department.id,
        label: department.name,
      };
    };

    return (
      <ReactSelect
        isLoading={isLoading}
        ref={ref}
        options={getOptions()}
        value={getValue()}
        onChange={(v) => onChange(v?.value)}
        isClearable
        {...props}
      />
    );
  }
);
