import { type ClassValue, clsx } from "clsx";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const forwarded = <ElementType extends React.ElementType, Props = {}>(
  cb: ForwardRefRenderFunction<
    React.ElementRef<ElementType>,
    React.ComponentPropsWithoutRef<ElementType> & Props
  >
) => forwardRef(cb);
