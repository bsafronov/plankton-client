import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui";

type Props = React.ComponentPropsWithoutRef<typeof Dialog> & {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
};

export const CDialog = ({
  children,
  trigger,
  title,
  description,
  footer,
  ...props
}: Props) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          {footer}
          <DialogClose>Закрыть</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
