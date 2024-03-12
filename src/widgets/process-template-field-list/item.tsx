import { ProcessTemplateField } from "~/entities/process";

type Props = {
  field: ProcessTemplateField;
};
export const Item = ({ field }: Props) => {
  return <div>{field.name}</div>;
};
