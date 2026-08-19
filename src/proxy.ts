import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/i18n/config";

const oneYear = 60 * 60 * 24 * 365;

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookieName)?.value;
  if (isLocale(saved)) {
    return saved;
  }

  const accepted = request.headers.get("accept-language")?.toLowerCase() ?? "";
  return accepted
    .split(",")
    .some((entry) => entry.trim().startsWith("fa"))
    ? "fa"
    : defaultLocale;
}

function rememberLocale(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookieName, locale, {
    maxAge: oneYear,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return rememberLocale(NextResponse.next(), firstSegment);
  }

  if (pathname === "/" || pathname === "/a1" || pathname.startsWith("/a1/")) {
    const locale = preferredLocale(request);
    const destination = request.nextUrl.clone();
    destination.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return rememberLocale(NextResponse.redirect(destination), locale);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/a1/:path*", "/en/:path*", "/fa/:path*"],
};
