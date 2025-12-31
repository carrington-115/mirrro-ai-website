"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logoImg from "@/assets/images/light-logo.svg";
import { Button } from ".";
import NavLink from "./NavLink";
import MenuIcon from "./MenuIcon";
import { navLinks } from "@/lib/data";
import MobileLinks from "./MobileLinks";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <>
      <header
        className={`fixed overflow-clip top-0 left-0 right-0 ${
          menuIsOpen ? "bottom-0" : ""
        } py-[var(--spacing-10)] px-[var(--spacing-20)] w-full h-auto flex flex-col items-center lg:px-[120px] lg:py-[20px] backdrop-blur-[32px] bg-[rgba(255,255,255,0.2)] lg:border-none border-b border-[var(--colors-black-10)] transition-[bottom,background-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
        style={{
          borderColor: "var(--colors-black-10)",
          transition:
            "bottom 0.5s cubic-bezier(0.4,0,0.2,1), background-color 1s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.5s cubic-bezier(0.4,0,0.2,1)", // fallback for inline transition on browsers not fully supporting tailwind's transition utilities
        }}
      >
        <div className="w-full h-auto flex items-center justify-between">
          <Link href="#">
            <div className="w-[92px] h-auto lg:ml-[5px] lg:w-[171px] md:w-[131px] flex-shrink-0">
              <Image
                alt="mirrro"
                className="w-full h-full object-cover"
                src={logoImg}
              />
            </div>
          </Link>

          <nav className="lg:flex hidden flex-shrink-0 mr-[4px]">
            <ul className="flex gap-[14px] items-center px-[20px] flex-shrink-0">
              {navLinks.map((link) => (
                <li key={link.id} className="list-none">
                  <NavLink href={`#${link.id}`}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="filled" className="mr-[12px] hidden lg:block">
            Talk to founders
          </Button>

          {/* mobile menu */}
          <MenuIcon
            isOpen={menuIsOpen}
            action={() => setMenuIsOpen(!menuIsOpen)}
          />
        </div>
        <MobileLinks isOpen={menuIsOpen} />
      </header>
    </>
  );
}
