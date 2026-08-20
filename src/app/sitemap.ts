import type { MetadataRoute } from "next";
import { a1Lessons } from "@/content/a1";
import { locales, withLocale } from "@/i18n/config";
import { absoluteLocalizedLanguages } from "@/i18n/site-metadata";
import { absoluteSiteUrl } from "@/lib/site-url";

type SitemapPath = {
  pathname: string;
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: SitemapPath[] = [
    { pathname: "/", priority: 1 },
    { pathname: "/a1", priority: 0.9 },
    ...a1Lessons.map((lesson) => ({
      pathname: `/a1/${lesson.slug}`,
      priority: 0.8,
    })),
  ];

  return paths.flatMap(({ pathname, priority }) =>
    locales.map((locale) => ({
      url: absoluteSiteUrl(withLocale(locale, pathname)),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: absoluteLocalizedLanguages(pathname),
      },
    })),
  );
}
