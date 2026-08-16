import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "German A1 Grammar",
    template: "%s · German A1 Grammar",
  },
  description:
    "A structured, interactive German A1 grammar book built for complete, step-by-step learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
