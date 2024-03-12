import { forwarded } from "../lib";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/shared/ui";

type Props = {
  title?: string;
  description?: string;
  classNameContent?: string;
  footer?: React.ReactNode;
};

export const CCard = forwarded<typeof Card, Props>(
  (
    { title, description, footer, children, classNameContent, ...props },
    ref
  ) => {
    return (
      <Card ref={ref} {...props}>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={classNameContent}>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    );
  }
);
