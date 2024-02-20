import { forwarded } from "../lib";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
};

export const CCard = forwarded<typeof Card, Props>(
  ({ title, description, footer, children, ...props }, ref) => {
    return (
      <Card {...props} ref={ref}>
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    );
  }
);
