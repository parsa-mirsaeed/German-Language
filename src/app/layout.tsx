import type { Metadata } from "next";
import "./globals.css";
import "./grammar-interactions.css";
import "./exercise-engine.css";
import "./search.css";

export const metadata: Metadata = {
  applicationName: "German A1 Grammar",
  category: "education",
  title: {
    default: "German A1 Grammar",
    template: "%s · German A1 Grammar",
  },
  description:
    "A structured, interactive German A1 grammar book built for complete, step-by-step learning.",
  keywords: [
    "German A1",
    "German grammar",
    "Deutsch A1",
    "German exercises",
    "German language learning",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-motion-policy="reduced-ready">{children}</body>
    </html>
  );
}
