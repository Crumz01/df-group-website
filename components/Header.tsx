"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";

// "Contact" is intentionally not listed here — the "Get in touch" CTA button
// beside these links already goes to /contact, and it is still in the footer.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/reports", label: "Reports" },
];

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function Header() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adaptive header: ink over the dark hero/page-header, paper once scrolled past.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close drawer on Escape when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => normalize(href) === pathname;

  return (
    <>
      <header className={`site-header${scrolled ? "" : " on-ink"}`}>
        <nav className="nav" aria-label="Primary">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <Image
              className="brand__logo"
              src={logo}
              alt="DF Group logo"
              width={30}
              height={30}
              priority
            />
            <span className="brand__mark">DF Group</span>
          </Link>

          <button
            className="nav__toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav__wrap${open ? " open" : ""}`} id="menu">
            <button
              className="nav__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <ul className="nav__links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="nav__cta"
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </header>
      <div
        className={`nav__scrim${open ? " open" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
