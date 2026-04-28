"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Phone } from "lucide-react";

import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const phoneHref = `tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg transition-all duration-300",
        isScrolled
          ? "border-brand-primary/10 shadow-brand-brown/5 shadow-md"
          : "border-transparent",
      )}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={SITE_CONFIG.logo}
            alt="Perfected Smiles"
            width={190}
            height={68}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8 max-lg:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative py-1 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-brown/70 hover:text-brand-brown",
                )}
              >
                {item.label}
                {/* Hover underline animation */}
                <span
                  className={cn(
                    "bg-brand-primary absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Phone + CTA + Hamburger */}
        <div className="flex items-center gap-5">
          {/* Phone Number (desktop only) */}
          <a
            href={phoneHref}
            className="text-brand-brown/70 hover:text-brand-brown flex items-center gap-2 text-sm font-medium transition-colors max-lg:hidden"
          >
            <Phone className="h-4 w-4" />
            {SITE_CONFIG.phone}
          </a>

          {/* CTA Button */}
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-brown shadow-brand-brown/20 hover:bg-brand-primary rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-colors duration-200 max-lg:hidden"
          >
            Book Appointment
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-brand-brown relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "border-brand-primary/10 max-h-[28rem] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "text-brand-brown/70 hover:bg-brand-primary/5 hover:text-brand-brown",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Phone link in mobile menu */}
          <a
            href={phoneHref}
            className="text-brand-brown/70 hover:bg-brand-primary/5 hover:text-brand-brown flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="h-4 w-4" />
            {SITE_CONFIG.phone}
          </a>

          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-brown shadow-brand-brown/20 hover:bg-brand-primary mx-4 mt-2 rounded-md px-5 py-3 text-center text-sm font-medium text-white shadow-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};
