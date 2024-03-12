import { cn } from "~/shared/lib";

type Props = {
  title: string;
  className?: string;
};

export const Header = ({ title, className }: Props) => {
  return (
    <header className={cn("px-4 border-b h-12 flex items-center", className)}>
      <h1 className="text-2xl font-bold text-muted-foreground">{title}</h1>
    </header>
  );
};
