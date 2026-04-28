import { SITE_CONFIG } from "@/lib/constants";

export const MapEmbed = () => {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.mapQuery)}&output=embed`;

  return (
    <section>
      <iframe
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        title="Perfected Smiles Location"
      />
    </section>
  );
};
