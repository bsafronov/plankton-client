import { Eye, EyeOff } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { cn, forwarded } from "~/shared/lib";
import { Input } from "~/shared/ui";

export const InputPassword = forwarded<typeof Input>((props, ref) => {
  const { value: open, toggle } = useBoolean();

  return (
    <div className="relative">
      <Input type={open ? "text" : "password"} ref={ref} {...props} />
      <button
        type="button"
        className={cn(
          "border rounded-r-md px-2.5 flex items-center justify-center absolute right-0 top-0 bottom-0 border-l bg-muted text-border hover:text-muted-foreground",
          open && "text-muted-foreground"
        )}
        onClick={toggle}
      >
        {open ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
      </button>
    </div>
  );
});
