import Link from "next/link";

export default function NavLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="px-[6px] py-[4px] text-[var(--colors-black-50)] text-center font-medium leading-normal text-[16px] no-wrap hover:text-[var(--colors-primary)] dark:text-[var(--colors-black-20)] dark:hover:text-[var(--base-white)]"
    >
      {children}
    </Link>
  );
}
