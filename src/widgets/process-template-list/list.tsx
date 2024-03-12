import { processTemplateQuery } from "~/entities/process";
import { Item } from "./item";

export const List = () => {
  const { data: templates } = processTemplateQuery.useTemplateList();

  return (
    <div className="flex flex-col">
      {templates?.map((item) => (
        <Item key={item.id} template={item} />
      ))}
    </div>
  );
};
