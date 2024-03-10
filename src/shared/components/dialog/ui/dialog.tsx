import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui";

type Props = React.ComponentPropsWithoutRef<typeof Dialog> & {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export const CDialog = ({
  children,
  trigger,
  title,
  description,
  footer,
  className,
  ...props
}: Props) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
