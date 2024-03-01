import { forwarded } from "../lib";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui";

type Props = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
};

export const CCard = forwarded<typeof Card, Props>(
  ({ title, description, footer, children, className, ...props }, ref) => {
    return (
      <Card ref={ref} {...props} className="h-full">
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={className}>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    );
  }
);
