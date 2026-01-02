import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";
import { buttonVariants as variants } from "@/lib/variants";
import { buttonProps } from "@/lib/types";

export default function Button(
  props: HTMLAttributes<HTMLButtonElement> & buttonProps
) {
  const { variant, round, size, className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={twMerge(variants({ variant, round, size }), className)}
    >
      {props.children}
    </button>
  );
}
