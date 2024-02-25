import { FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "~/shared/lib";
import { Button, Form } from "~/shared/ui";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T, any, T>;
  onSubmit: () => void;
  children?: React.ReactNode;
  className?: string;
  submitText?: string;
};

export const CForm = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  submitText = "Отправить",
}: Props<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className={cn("space-y-2", className)}>{children}</div>
        <div className="flex justify-end mt-4">
          <Button>{submitText}</Button>
        </div>
      </form>
    </Form>
  );
};
