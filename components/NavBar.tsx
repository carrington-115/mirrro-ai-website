import Image from "next/image";

import logoImg from "@/assets/images/light-logo.svg";
import Link from "next/link";
import { Button } from ".";
import NavLink from "./NavLink";
import { NavLinkType } from "@/lib/types";

export default function NavBar() {
  const navLinks: NavLinkType[] = [
    { label: "Product", id: "product" },
    { label: "Use cases", id: "use-cases" },
    { label: "Features", id: "features" },
    { label: "Integrations", id: "integrations" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <>
      <header
        className="w-full h-auto flex items-center justify-between px-[120px] py-[20px] backdrop-blur-[32px] bg-[rgba(255,255,255,0.2)] "
        style={{
          borderColor: "var(--colors-black-10)",
        }}
      >
        <Link href="#">
          <div className="ml-[5px] h-[33px] w-[171px] flex-shrink-0">
            <Image
              alt="mirrro"
              className="w-full h-full object-cover"
              src={logoImg}
            />
          </div>
        </Link>

        <nav className="flex-shrink-0 mr-[4px]">
          <ul className="flex gap-[14px] items-center px-[20px] flex-shrink-0">
            {navLinks.map((link) => (
              <li key={link.id} className="list-none">
                <NavLink href={`#${link.id}`}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="filled" className="mr-[12px]">
          Talk to founders
        </Button>
      </header>
    </>
  );
}
