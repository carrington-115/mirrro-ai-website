import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "px-[var(--spacing-16)] lg:px-[var(--spacing-32)] md:px-[var(--spacing-20)] cursor-pointer py-[var(--spacing-12)] font-medium",

  {
    variants: {
      variant: {
        filled:
          "bg-[var(--colors-black-70)] text-[var(--base-white)] cursor-pointer hover:bg-[var(--colors-black-100)]",
        outlined:
          "bg-[var(--colors-on-primary)] outline outline-1 outline-[var(--colors-primary)] hover:bg-[var(--colors-black-10)]/15 outline-offset-[-1px] text-[var(--colors-primary)]",
      },
      round: {
        full: "rounded-full",
        corner: "rounded-[var(--radius-sm)]",
      },
      size: {
        normal: "font-medium",
        medium: "text-base",
        sm: "text-xs",
      },
    },
    defaultVariants: {
      variant: "filled",
      round: "full",
    },
  }
);
