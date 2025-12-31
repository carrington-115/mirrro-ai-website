import Link from "next/link";

import { navLinks } from "@/lib/data";
import { Button } from ".";
import { twMerge } from "tailwind-merge";

interface mobileLinksTypes {
  isOpen: boolean;
}

export default function MobileLinks({ isOpen }: mobileLinksTypes) {
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
                  className="text-4xl text-[var(--colors-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full items-center justify-between">
          <Button round="corner" className="cursor-pointer">
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
