import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "px-[var(--spacing-16)] lg:px-[var(--spacing-32)] md:px-[var(--spacing-20)] py-[var(--spacing-12)] font-medium",

  {
    variants: {
      variant: {
        filled:
          "bg-[var(--colors-primary)] text-[var(--base-white)] cursor-pointer hover:bg-[var(--colors-black-50)]",
        outlined:
          "bg-[var(--colors-on-primary)] outline outline-1 outline-[var(--colors-primary)] outline-offset-[-1px] text-[var(--colors-primary)] hover:bg-[var(--colors-black-90)]",
      },
      round: {
        full: "rounded-full",
        corner: "rounded-md",
      },
      size: {
        normal: "font-medium",
        medium: "text-base",
      },
    },
    defaultVariants: {
      variant: "filled",
      round: "full",
    },
  }
);

interface ButtonProps {
  variant?: "filled" | "outlined";
  round?: "full" | "corner";
}

export default function Button(
  props: HTMLAttributes<HTMLButtonElement> & ButtonProps
) {
  const { variant, round, className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={twMerge(variants({ variant, round }), className)}
    >
      {props.children}
    </button>
  );
}
