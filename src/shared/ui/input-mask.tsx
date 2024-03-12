import ReactInputMask from "react-input-mask";
import { cn, forwarded } from "~/shared/lib";
import { inputVariants } from "~/shared/ui";
import { VariantProps } from "class-variance-authority";

export const InputMask = forwarded<
  typeof ReactInputMask,
  VariantProps<typeof inputVariants>
>(({ className, ...props }, ref) => {
  return (
    <ReactInputMask
      ref={ref}
      {...props}
      className={cn(inputVariants({ className }))}
    />
  );
});
