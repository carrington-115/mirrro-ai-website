import { twMerge } from "tailwind-merge";

interface iconButtonProps {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export default function IconButton({ icon, color, bgColor }: iconButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          "p-[var(--spacing-10)] rounded-full flex items-center justify-center",
          color,
          bgColor
        )}
      >
        {icon}
      </button>
    </>
  );
}
