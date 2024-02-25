import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../consts/navbar-links";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/shared/ui";
import { SignOutIconButton } from "~/features/sign-out";
import { cn } from "~/shared/lib";

export const NavbarWidget = () => {
  const pathname = useLocation().pathname;
  return (
    <nav className="border-x flex flex-col justify-between">
      <div className="border-b">
        {navbarLinks.map(({ href, icon: Icon, title, unread }, i) => (
          <Tooltip key={i}>
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
            <TooltipContent side="right">{title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="border-t size-12 flex justify-center items-center">
        <SignOutIconButton />
      </div>
    </nav>
  );
};
