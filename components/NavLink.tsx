import Link from "next/link";

export default function NavLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="px-[6px] py-[4px] text-[var(--colors-primary)]/50 text-center font-medium leading-normal text-[16px] no-wrap hover:text-[var(--colors-primary)]"
    >
      {children}
    </Link>
  );
}
