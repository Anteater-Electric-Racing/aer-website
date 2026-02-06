"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-vintage-navy shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
         
          <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-90">
             <Image 
               src="/logo.png"
               alt="Anteater Electric Racing"
               fill
               className="object-contain object-left"
               priority
             />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-colors hover:text-vintage-yellow",
                  pathname === item.href ? "text-vintage-yellow" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/sponsors"
              className="bg-vintage-orange text-white px-5 py-2 text-sm font-bold uppercase tracking-wider rounded hover:bg-white hover:text-vintage-navy transition-all"
            >
              Donate
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-vintage-navy border-t border-white/10">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-bold uppercase tracking-widest px-4 py-2 rounded-md hover:bg-white/10",
                  pathname === item.href ? "text-vintage-yellow" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/sponsors"
              onClick={() => setIsOpen(false)}
              className="bg-vintage-orange text-center text-white px-5 py-3 text-lg font-bold uppercase tracking-wider rounded"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
