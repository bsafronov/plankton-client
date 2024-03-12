import { Link as ReactRouterLink } from "react-router-dom";
import { cn, forwarded } from "~/shared/lib";

export const Link = forwarded<typeof ReactRouterLink>((props, ref) => {
  return (
    <ReactRouterLink
      {...props}
      ref={ref}
      className={cn("text-blue-600 hover:text-blue-500", props.className)}
    />
  );
});
