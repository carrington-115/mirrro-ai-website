import Link from "next/link";

import { navLinks } from "@/lib/data";
import { Button } from ".";
import { twMerge } from "tailwind-merge";
import { mobileLinksTypes } from "@/lib/types";

export default function MobileLinks({
  isOpen,
  triggerCloseAction,
}: mobileLinksTypes) {
  return (
    <>
      <div
        className={twMerge(
          "bottom-0 left-0 right-0 top-[8%] mt-[var(--spacing-20)] w-full h-[100%] gap-[40%] hidden flex-col lg:hidden",
          isOpen && "flex"
        )}
      >
        <nav className="flex">
          <ul className="flex flex-col gap-[5px]">
            {navLinks.map((link) => (
              <li className="list-none" key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className="text-4xl text-[var(--colors-primary)] dark:text-[var(--colors-black-5)]"
                  onClick={triggerCloseAction}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full items-center justify-between">
          <Button round="corner" className="cursor-pointer" variant="filled">
            Talk to founders
          </Button>
          <Button variant="outlined" className="cursor-pointer " round="corner">
            Sign up to updates
          </Button>
        </div>
      </div>
    </>
  );
}
