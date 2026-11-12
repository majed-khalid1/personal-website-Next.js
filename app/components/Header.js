"use client";

import Link from "next/link";
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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5">
        <nav aria-label="Main navigation" className="flex gap-4 sm:gap-8">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="border-b-2 border-transparent py-1 text-sm font-semibold hover:text-brand-dark aria-[current=page]:border-brand aria-[current=page]:text-brand-dark"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://www.linkedin.com/in/majed-khalid-1316a8276/"
          className="rounded-lg border border-line px-3 py-2 text-sm font-medium hover:bg-surface"
          target="_blank"
        >
          Let&apos;s connect →
        </Link>
      </div>
    </header>
  );
}
