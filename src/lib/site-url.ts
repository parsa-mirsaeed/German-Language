const localFallback = "http://localhost:3000";

function withProtocol(value: string): string {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return new URL(withProtocol(configured));
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return new URL(withProtocol(vercelProduction));
  }

  return new URL(localFallback);
}

export function absoluteSiteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}
