import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF className="size-3.5" />,
  instagram: <FaInstagram className="size-3.5" />,
  tiktok: <FaTiktok className="size-3.5" />,
};

export const TopBar = () => {
  const socialLinks = SOCIAL_LINKS.filter((link) => link.href !== "#");

  return (
    <div className="bg-brand-brown text-white">
      <div className="container flex items-center justify-between py-2 text-sm">
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 transition-opacity hover:opacity-75"
        >
          <Phone className="size-3.5" />
          <span>{SITE_CONFIG.phone}</span>
        </a>

        {socialLinks.length > 0 && (
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="transition-opacity hover:opacity-75"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
