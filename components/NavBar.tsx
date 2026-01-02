"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import logoImg from "@/assets/images/light-logo.svg";
import { Button } from ".";
import NavLink from "./NavLink";
import MenuIcon from "./MenuIcon";
import { navLinks } from "@/lib/data";
import MobileLinks from "./MobileLinks";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    setScrolled(window.scrollY > 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 ${
          menuIsOpen && "bottom-0"
        } z-50 overflow-clip py-[var(--spacing-10)] px-[var(--spacing-20)] flex flex-col items-center bg-white/20 backdrop-blur-[32px] ${
          scrolled && "border-b"
        } lg:px-[120px] lg:py-[10px]`}
        style={{
          borderColor: "var(--colors-black-10)",
          transition:
            "background-color 1s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.5s cubic-bezier(0.4,0,0.2,1), border-bottom-width 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="w-full h-auto flex items-center justify-between">
          <Link href="#">
            <div className="w-[92px] h-auto lg:ml-[5px] lg:w-[150px] md:w-[131px] flex-shrink-0">
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
        <MobileLinks
          isOpen={menuIsOpen}
          triggerCloseAction={() => setMenuIsOpen(false)}
        />
      </header>
    </>
  );
}
