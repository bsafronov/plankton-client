import ReactInputMask from "react-input-mask";
import { cn, forwarded } from "../lib";
import { inputVariants } from "./input";
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
