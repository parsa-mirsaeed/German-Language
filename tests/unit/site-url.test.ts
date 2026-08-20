import { afterEach, describe, expect, it } from "vitest";
import { absoluteSiteUrl, getSiteUrl } from "@/lib/site-url";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const originalVercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

function restore(name: "NEXT_PUBLIC_SITE_URL" | "VERCEL_PROJECT_PRODUCTION_URL", value: string | undefined) {
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
}

afterEach(() => {
  restore("NEXT_PUBLIC_SITE_URL", originalSiteUrl);
  restore("VERCEL_PROJECT_PRODUCTION_URL", originalVercelProductionUrl);
});

describe("site URL resolution", () => {
  it("prefers an explicitly configured site URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "learn.example.com";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "ignored.vercel.app";
    expect(getSiteUrl().toString()).toBe("https://learn.example.com/");
    expect(absoluteSiteUrl("/fa/a1")).toBe("https://learn.example.com/fa/a1");
  });

  it("uses Vercel's production URL when no explicit origin is configured", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "german-language.example.vercel.app";
    expect(getSiteUrl().toString()).toBe("https://german-language.example.vercel.app/");
  });

  it("uses localhost only when no deployment origin is available", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    expect(getSiteUrl().toString()).toBe("http://localhost:3000/");
  });
});
