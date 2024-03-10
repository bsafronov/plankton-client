import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processHooks } from "~/entities/process";
import { ProcessStageFieldTemplate } from "~/entities/process/types";
import { CFormField } from "~/shared/components";
import { Form, Input } from "~/shared/ui";

type Props = {
  fields?: ProcessStageFieldTemplate[];
  templateId: number;
};

const schema = z.object({
  field: z.array(z.string()),
});

type Schema = z.infer<typeof schema>;

export const FieldList = ({ fields = [], templateId }: Props) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      field: [""],
    },
  });
  const { control } = form;
  const { data: templateFields } = processHooks.useFindManyFieldTemplatesQuery({
    templateId,
  });

  return (
    <>
      <Form {...form}>
        <h5 className="font-semibold">Форма</h5>
        <div className="border-dashed rounded-md border p-4 space-y-2">
          {fields.map(({ id, description, label, placeholder, fieldId }, i) => (
            <div className="flex justify-between items-center gap-4" key={id}>
              <CFormField
                control={control}
                name={`field.${i}`}
                label={label}
                description={description}
                render={(props) => (
                  <Input {...props} placeholder={placeholder} />
                )}
                className="grow"
              />

              <ArrowRight className="text-muted-foreground" />

              <span className="border p-4 rounded-md w-40 truncate">
                {templateFields?.find((item) => item.id === fieldId)?.name}
              </span>
            </div>
          ))}
        </div>
      </Form>
    </>
  );
};
