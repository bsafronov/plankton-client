import Select from "node_modules/react-select/dist/declarations/src/Select";
import { Ref, forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { ReactSelect } from "~/shared/components";
import { Option } from "~/shared/types";
import { useFindManyFieldTemplatesQuery } from "../hooks/use-find-many-field-templates-query";
import { FindManyProcessFieldTemplates } from "../types";

type Props = Omit<ControllerRenderProps, "ref"> & FindManyProcessFieldTemplates;

export const SelectProcessTemplateField = forwardRef(
  (
    { templateId, onChange, value, ...props }: Props,
    ref: Ref<Select<Option<ID>>>
  ) => {
    const { data: items, isLoading } = useFindManyFieldTemplatesQuery({
      templateId,
    });

    const getValue = () => {
      const selected = items?.find((item) => item.id === value);

      if (!selected) return null;

      return {
        value: selected.id,
        label: selected.name,
      };
    };

    const getOptions = () => {
      return items?.map((item) => ({ value: item.id, label: item.name }));
    };

    return (
      <ReactSelect
        ref={ref}
        isLoading={isLoading}
        options={getOptions()}
        onChange={(v) => onChange(v?.value)}
        value={getValue()}
        {...props}
      />
    );
  }
);
