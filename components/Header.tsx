"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = (
    <>
      {
        navLinksArray.map(({name, href}) => (
          <Link key={name} href={href} className={`hover:text-base transition ${pathName === href && "text-primary"}`}>
            {name}
          </Link>
        ))
      }
      <Link
        href="/booking"
        className="inline-block bg-primary text-white px-4 py-4 md:py-2  rounded-xl hover:bg-primary-hover transition"
      >
        Book Now
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="w-full mx-auto relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-heading text-primary tracking-wide">
            Serein <span className="text-accent">Stay</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
            {navLinks}
          </nav>

          {/* Mobile Burger Icon */}
          <button
            className="md:hidden text-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full top-full left-0 right-0 bg-surface border-t border-border text-sm font-medium text-muted px-6 pb-6 space-y-4">
            <div className="pt-4 flex flex-col space-y-4">{navLinks}</div>
          </div>
        )}
      </div>

    </header>
  );
}

const navLinksArray:{
    name: string;
    href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rooms",
    href: "/rooms",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];