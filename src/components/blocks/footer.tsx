import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS, OPENING_HOURS } from "@/lib/constants";

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-300">
      <div className="container mx-auto px-6 py-14">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Logo + Clinic Name */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt={`${SITE_CONFIG.name} logo`}
                width={48}
                height={48}
                className="brightness-0 invert rounded"
              />
              <span className="text-white font-semibold text-lg leading-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Providing quality dental care to the Boston community.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
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
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                );
              })}
            </div>

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm mb-2 hover:opacity-75 transition-opacity"
            >
              <Phone className="size-4 shrink-0 text-gray-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 text-sm mb-2 hover:opacity-75 transition-opacity"
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
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="size-4" />
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-1.5">
              {OPENING_HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between text-sm gap-4">
                  <span className="text-gray-400">{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
