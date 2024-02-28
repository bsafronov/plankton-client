import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "~/shared/lib";
import { Tooltip, TooltipTrigger } from "~/shared/ui";

type Props = {
  href: string;
  icon: LucideIcon;
  unread?: boolean;
};

export const NavbarItem = ({ href, icon: Icon, unread }: Props) => {
  const pathname = useLocation().pathname;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            "relative flex justify-center items-center size-12 text-muted-foreground hover:text-primary",
            pathname === href && "bg-primary-foreground"
          )}
        >
          <Icon />
          {unread && (
            <>
              <div className="absolute size-2 rounded-full animate-ping bg-amber-300 top-1 right-1" />
              <div className="absolute size-2 rounded-full bg-amber-300 top-1 right-1" />
            </>
          )}
        </Link>
      </TooltipTrigger>
    </Tooltip>
  );
};
