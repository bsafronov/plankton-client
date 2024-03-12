import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Link,
} from "~/shared/ui";
import { ProcessTemplateList } from "~/widgets/process-template-list";

export const AdminNavbarList = () => {
  return (
    <aside className="flex flex-col divide-y border-r">
      <Link to={"/admin"} className="px-4">
        Статистика
      </Link>
      <Link to={"/admin/departments"} className="px-4">
        Отделы
      </Link>
      <Link to={"/admin/products"} className="px-4">
        Изделия
      </Link>
      <Accordion type="single" collapsible>
        <AccordionItem value="template">
          <AccordionTrigger>
            <Link to={"/admin/templates"} className="px-4 w-fit">
              Шаблоны
            </Link>
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            <ProcessTemplateList />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link to={"/admin/users"} className="px-4">
        Пользователи
      </Link>
    </aside>
  );
};
