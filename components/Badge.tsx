import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Badge(
  props: HTMLAttributes<HTMLSpanElement> & { text: string; color: string }
) {
  const { text, color, className, ...others } = props;
  return (
    <span
      className={twMerge(
        `px-[8px] py-[1px] rounded-full flex-inline justify-center align-center`,
        color && `bg-${color}`,
        className
      )}
      {...others}
    >
      {text}
    </span>
  );
}
