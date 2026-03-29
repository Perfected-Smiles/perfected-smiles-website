import { Inter, Playfair_Display, Raleway } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { TopBar } from "@/components/blocks/top-bar";
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
  title: {
    default: "Perfected Smiles — Your Trusted Dentist in Boston, MA",
    template: "%s | Perfected Smiles",
  },
  description:
    "Perfected Smiles provides comprehensive dental care in Boston, MA. From dental implants and Invisalign to fillings and veneers, our experienced team delivers comfort-focused dentistry for the whole family.",
  keywords: [
    "dentist in Boston",
    "dental implants Boston",
    "Invisalign Boston",
    "cosmetic dentist Boston",
    "family dentist Boston",
    "veneers Boston",
    "dentures Boston",
    "tooth extraction Boston",
    "crowns and bridges Boston",
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
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Perfected Smiles — Your Trusted Dentist in Boston, MA",
    description:
      "Comprehensive dental care in Boston, MA. Dental implants, Invisalign, veneers, and more from an experienced, comfort-focused team.",
    siteName: "Perfected Smiles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfected Smiles — Your Trusted Dentist in Boston, MA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfected Smiles — Your Trusted Dentist in Boston, MA",
    description:
      "Comprehensive dental care in Boston, MA. Dental implants, Invisalign, veneers, and more.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://perfectedsmiles.com",
  name: "Perfected Smiles",
  description:
    "Comprehensive dental care in Boston, MA. Dental implants, Invisalign, veneers, and more.",
  url: "https://perfectedsmiles.com",
  telephone: "(617) 555-0123",
  email: "info@perfectedsmiles.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  image: "/og-image.jpg",
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
