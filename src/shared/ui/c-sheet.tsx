import { ComponentPropsWithoutRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/shared/ui";

type Props = ComponentPropsWithoutRef<typeof Sheet> & {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
};

export const CSheet = ({
  title,
  trigger,
  children,
  description,
  className,
  footer,
  side,
  ...props
}: Props) => {
  return (
    <Sheet {...props}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className={className} side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
};
