import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-warm-bg px-4 py-24 text-center">
      <h1 className="font-serif text-5xl font-bold text-brand-brown md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-block rounded-full bg-brand-brown px-6 py-3 text-sm font-medium uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
        <a
          href={SITE_CONFIG.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-brand-brown px-6 py-3 text-sm font-medium uppercase tracking-wider text-brand-brown hover:bg-brand-brown hover:text-white transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
