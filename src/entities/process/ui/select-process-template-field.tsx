import Select from "node_modules/react-select/dist/declarations/src/Select";
import { Ref, forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Option } from "~/shared/types";
import { ReactSelect } from "~/shared/ui";
import { processTemplateQuery } from "..";

type Props = Omit<ControllerRenderProps, "ref"> & {
  templateId: ID;
};

export const SelectProcessTemplateField = forwardRef(
  (
    { templateId, onChange, value, ...props }: Props,
    ref: Ref<Select<Option<ID>>>
  ) => {
    const { data: items, isLoading } =
      processTemplateQuery.useTemplateFieldList({
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
