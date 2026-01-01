import { Button } from "@/components";
import NavLink from "@/components/NavLink";
import { linkGroupTypes } from "@/lib/types";
import Image from "next/image";
import lightFooterLogo from "@/assets/images/light-logo.svg";

const linkGroups: linkGroupTypes = {
  productGroup: [
    { title: "Product", link: "#product" },
    { title: "Features", link: "#features" },
    { title: "Integrations", link: "#integrations" },
    { title: "Use cases", link: "#use-cases" },
  ],
  legalGroup: [
    { title: "Terms and conditions", link: "" },
    { title: "Privacy policy", link: "" },
    { title: "FAQs", link: "" },
    { title: "Blog", link: "" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="overflow-clip md:-mx-4 sm:-mx-6 flex flex-col md:flex-row md:flex-row-reverse gap-[48px] py-[var(--spacing-64)] px-[var(--spacing-16)] bg-[var(--colors-black-5)] border-t border-[var(--colors-black-15)] lg:hidden">
        <>
          {/* Mobile and Tablet */}

          <div className="flex items-start gap-[var(--spacing-20)] lg:hidden">
            <div className="flex flex-col items-start">
              {linkGroups.productGroup.map((productLink) => (
                <NavLink href={productLink.link} key={productLink.title}>
                  {productLink.title}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col items-start">
              {linkGroups.legalGroup.map((productLink) => (
                <NavLink href={productLink.link} key={productLink.title}>
                  {productLink.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-[6px] md:hidden lg:hidden">
            <p className="text-base font-normal text-[var(--colors-black-90)]">
              Subscribe for updates
            </p>
            <div className="w-full flex justify-between items-center">
              <input
                type="Email"
                placeholder="Enter your Email"
                className="w-[70%] text-base border-1 border-[var(--colors-black-20)] bg-[var(--base-white)] px-[var(--spacing-12)] py-[var(--spacing-12)] rounded-sm outline-[var(--colors-black-80)]"
              />
              <Button variant="filled" round="corner">
                Subscribe
              </Button>
            </div>
            <p className="text-base font-normal text-[var(--colors-black-30)]">
              Enter your email address
            </p>
          </div>
          <div className="md:w-[55%] flex flex-col gap-[var(--spacing-12)] md:gap-[var(--spacing-20)] lg:hidden">
            <div className="w-[172px] h-auto">
              <Image
                src={lightFooterLogo}
                alt="footer logo"
                className="w-full h-full"
              />
            </div>
            <div className="hidden md:flex flex-col items-start gap-[6px]">
              <p className="text-base font-normal text-[var(--colors-black-90)]">
                Subscribe for updates
              </p>
              <div className="w-full flex justify-between items-center">
                <input
                  type="Email"
                  placeholder="Enter your Email"
                  className="w-[70%] text-base border-1 border-[var(--colors-black-20)] bg-[var(--base-white)] px-[var(--spacing-12)] py-[var(--spacing-12)] rounded-sm outline-[var(--colors-black-80)]"
                />
                <Button variant="filled" round="corner">
                  Subscribe
                </Button>
              </div>
              <p className="text-base font-normal text-[var(--colors-black-30)]">
                Enter your email address
              </p>
            </div>
            <p className="text-base text-[var(--colors-black-30)]">
              &copy; Mirrro AI - 2026 - All rights reserved
            </p>
          </div>
        </>
      </footer>

      {/* For desktop screens */}
      <footer className="w-[100%] hidden md:hidden lg:flex lg:flex-row gap-[48px] py-[var(--spacing-64)] px-[var(--spacing-80)] bg-[var(--colors-black-5)] border-t border-[var(--colors-black-15)]">
        <div className="flex flex-col gap-[var(--spacing-12)] md:gap-[var(--spacing-20)]">
          <div className="w-[172px] h-auto">
            <Image
              src={lightFooterLogo}
              alt="footer logo"
              className="w-full h-full"
            />
          </div>
          <p className="text-base text-[var(--colors-black-30)]">
            &copy; Mirrro AI - 2026 - All rights reserved
          </p>
        </div>

        <div className="flex items-start gap-[var(--spacing-20)]">
          <div className="flex flex-col items-start">
            {linkGroups.productGroup.map((productLink) => (
              <NavLink href={productLink.link} key={productLink.title}>
                {productLink.title}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col items-start">
            {linkGroups.legalGroup.map((productLink) => (
              <NavLink href={productLink.link} key={productLink.title}>
                {productLink.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="w-[30%] flex flex-col items-start gap-[6px]">
          <p className="text-base font-normal text-[var(--colors-black-90)]">
            Subscribe for updates
          </p>
          <div className="w-full flex justify-between items-center">
            <input
              type="Email"
              placeholder="Enter your Email"
              className="w-[70%] mr-6px text-base border-1 border-[var(--colors-black-20)] bg-[var(--base-white)] px-[var(--spacing-12)] py-[var(--spacing-12)] rounded-sm outline-[var(--colors-black-80)]"
            />
            <Button variant="filled" round="corner">
              Subscribe
            </Button>
          </div>
          <p className="text-base font-normal text-[var(--colors-black-30)]">
            Enter your email address
          </p>
        </div>
      </footer>
    </>
  );
}
