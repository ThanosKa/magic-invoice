import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
  id: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface JsonLdMultiProps {
  schemas: Record<string, unknown>[];
}

export function JsonLdMulti({ schemas }: JsonLdMultiProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
