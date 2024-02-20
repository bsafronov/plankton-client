import { Link as ReactRouterLink } from "react-router-dom";
import { cn, forwarded } from "../lib";

export const Link = forwarded<typeof ReactRouterLink>((props, ref) => {
  return (
    <ReactRouterLink
      {...props}
      ref={ref}
      className={cn("text-blue-500, hover:text-blue-600", props.className)}
    />
  );
});
