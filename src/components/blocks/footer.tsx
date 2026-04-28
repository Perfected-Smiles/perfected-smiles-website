import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

import {
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAV_ITEMS,
  OPENING_HOURS,
} from "@/lib/constants";

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export function Footer() {
  const socialLinks = SOCIAL_LINKS.filter((social) => social.href !== "#");

  return (
    <footer className="bg-footer-bg text-gray-300">
      <div className="container mx-auto px-6 py-14">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Clinic Name */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit rounded-md bg-white px-3 py-2">
              <Image
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} logo`}
                width={190}
                height={68}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing quality dental care to Rochelle Park, Hackensack, and
              Bergen County.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-opacity hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social + Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Contact Us
            </h3>

            {/* Social icons */}
            {socialLinks.length > 0 && (
              <div className="mb-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {Icon && <Icon className="size-5" />}
                    </a>
                  );
                })}
              </div>
            )}

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="mb-2 flex items-center gap-2 text-sm transition-opacity hover:opacity-75"
            >
              <Phone className="size-4 shrink-0 text-gray-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mb-2 flex items-center gap-2 text-sm transition-opacity hover:opacity-75"
            >
              <Mail className="size-4 shrink-0 text-gray-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="size-4 shrink-0 text-gray-400" />
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider text-white uppercase">
              <Clock className="size-4" />
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-1.5">
              {OPENING_HOURS.map((entry) => (
                <li
                  key={entry.day}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span className="text-gray-400">{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
