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

export const objectToStringArray = (value?: Record<string, unknown>) => {
  if (!value) return [];
  return Object.entries(value).map(([key, value]) => `${key}=${value}`);
};

type QueryKeyProps = {
  entity: string;
  type: "find-many" | "find-one" | "create" | "update" | "delete";
  params?: Record<string, unknown>;
};
export const queryKeys = ({ entity, type, params }: QueryKeyProps) => {
  const paramsArray = objectToStringArray(params);

  const keys = [entity, type, ...paramsArray];
  return keys;
};
