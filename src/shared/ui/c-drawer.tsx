import { ComponentPropsWithoutRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  SheetDescription,
  SheetTitle,
} from "~/shared/ui";

type Props = ComponentPropsWithoutRef<typeof Drawer> & {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
};

export const CDrawer = ({
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
    <Drawer {...props}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className={className}>
        <DrawerHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </DrawerHeader>
        {children}
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};
