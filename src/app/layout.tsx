import { Inter, Playfair_Display, Raleway } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { TopBar } from "@/components/blocks/top-bar";
import { OPENING_HOURS, SITE_CONFIG } from "@/lib/constants";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Perfected Smiles — Dentist in Rochelle Park, NJ",
    template: "%s | Perfected Smiles",
  },
  description:
    "Perfected Smiles provides comprehensive dental care in Rochelle Park, NJ for patients across Hackensack and Bergen County. Book implants, Invisalign, veneers, crowns, dentures, and preventive care.",
  keywords: [
    "dentist in Rochelle Park",
    "dentist near Hackensack",
    "dental implants Rochelle Park",
    "Invisalign Rochelle Park",
    "cosmetic dentist Rochelle Park",
    "family dentist Bergen County",
    "veneers Rochelle Park",
    "dentures Rochelle Park",
    "tooth extraction Rochelle Park",
    "crowns and bridges Rochelle Park",
    "Perfected Smiles",
  ],
  authors: [{ name: "Perfected Smiles" }],
  creator: "Perfected Smiles",
  publisher: "Perfected Smiles",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: SITE_CONFIG.logo,
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [{ url: SITE_CONFIG.logo, sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: SITE_CONFIG.logo }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Perfected Smiles — Dentist in Rochelle Park, NJ",
    description:
      "Comprehensive dental care in Rochelle Park, NJ. Dental implants, Invisalign, veneers, crowns, dentures, and more from an experienced, comfort-focused team.",
    siteName: "Perfected Smiles",
    url: SITE_CONFIG.domain,
    images: [
      {
        url: SITE_CONFIG.socialImage,
        width: 1360,
        height: 765,
        alt: "Perfected Smiles dental office in Rochelle Park, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfected Smiles — Dentist in Rochelle Park, NJ",
    description:
      "Comprehensive dental care in Rochelle Park, NJ. Dental implants, Invisalign, veneers, and more.",
    images: [SITE_CONFIG.socialImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_CONFIG.domain}/#dentist`,
  name: SITE_CONFIG.name,
  description:
    "Comprehensive dental care in Rochelle Park, NJ. Dental implants, Invisalign, veneers, crowns, dentures, and preventive care.",
  url: SITE_CONFIG.domain,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Essex St Ste. 202",
    addressLocality: SITE_CONFIG.city,
    addressRegion: SITE_CONFIG.region,
    postalCode: "07662",
    addressCountry: "US",
  },
  areaServed: ["Rochelle Park", "Hackensack", "Bergen County"],
  openingHours: OPENING_HOURS.map((entry) => `${entry.day}: ${entry.hours}`),
  priceRange: "$$",
  image: SITE_CONFIG.socialImage,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${raleway.variable} antialiased`}
      >
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
