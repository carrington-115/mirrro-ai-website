import { ArrowRight } from "lucide-react";

export default function JoinTeam() {
  return (
    <button className="mx-auto w-[90%] md:w-auto absolute top-[-100px] py-[8px] px-[var(--spacing-16)] flex justify-center items-center gap-[var(--spacing-4)] md:gap-[var(--spacing-12)] bg-[var(--colors-blue-5)] rounded-full border-[0.5px] border-[var(--colors-blue-10)]">
      <p className="text-sm md:text-base text-[var(--colors-blue-80)] text-left">
        Join our team and become a part of Mirrroverse
      </p>
      <ArrowRight size={24} fill={`var(--colors-blue-80)`} />
    </button>
  );
}
