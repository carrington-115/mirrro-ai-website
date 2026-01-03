import { ArrowRight } from "lucide-react";
import Badge from "./Badge";

export default function JoinTeam() {
  return (
    <button className="mx-auto w-auto md:w-auto absolute top-[-100px] py-[4px] px-[8px] md:px-[var(--spacing-16)] flex justify-center items-center gap-[var(--spacing-10)] md:gap-[var(--spacing-12)] bg-transparent rounded-full border-[0.5px] border-[var(--colors-blue-50)] dark:border-[var(--colors-blue-5)] cursor-pointer hover:bg-[var(--colors-blue-10)]/40">
      <Badge
        text="New"
        color="[var(--colors-blue-5)]"
        className="bg-[var(--colors-blue-5)] text-[var(--colors-blue-50)]"
      />
      <p className="text-sm w-auto md:text-base text-[var(--colors-blue-50)] dark:text-[var(--colors-blue-5)] text-left">
        Join our team and become a part of Mirrroverse
      </p>
    </button>
  );
}
