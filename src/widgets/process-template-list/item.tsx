import { ProcessTemplate } from "~/entities/process";
import { Link } from "~/shared/ui";

type Props = {
  template: ProcessTemplate;
};
export const Item = ({ template }: Props) => {
  return (
    <Link to={`/admin/templates/${template.id}`} className="px-4">
      {template.name}
    </Link>
  );
};
