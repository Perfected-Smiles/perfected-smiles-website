import { INSURANCE_PROVIDERS } from "@/lib/constants";

type LogosProps = {
  heading?: string;
};

export const Logos = ({ heading }: LogosProps) => {
  return (
    <div>
      {heading && (
        <p className="text-sm text-muted-foreground text-center mb-4">
          {heading}
        </p>
      )}
      <div className="flex flex-wrap justify-center items-center gap-8 py-4">
        {INSURANCE_PROVIDERS.map((provider) => (
          <span
            key={provider.name}
            className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
          >
            {provider.name}
          </span>
        ))}
      </div>
    </div>
  );
};
