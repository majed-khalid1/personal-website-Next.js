"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Courses", href: "/courses" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1680px] flex-wrap items-center gap-x-8 gap-y-4 px-5 py-5 sm:px-10 lg:px-12">
        <Link href="/" aria-label="Majed Khaled — Home" className="shrink-0">
          <Image
            src="/favicon.png"
            alt=""
            width={80}
            height={80}
            className="size-16 object-contain sm:size-20"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-5 sm:gap-8 lg:ml-12"
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="border-b-2 border-transparent py-2 text-lg font-bold hover:text-brand-dark sm:text-xl aria-[current=page]:border-brand aria-[current=page]:text-brand-dark"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="https://www.linkedin.com/in/majed-khalid-1316a8276/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto whitespace-nowrap rounded-lg text-xl border border-line px-4 py-2 font-medium hover:bg-surface sm:text-lg lg:mr-[30%]"
        >
          Let&apos;s connect →
        </a>
      </div>
    </header>
  );
}
