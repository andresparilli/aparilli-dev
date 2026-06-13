import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { generateSEO } from "@/components/layout/SEO";

const baseMetadata = {
  metadataBase: "https://aparilli.dev",
} as const;

export const metadata: Metadata = {
  ...baseMetadata,
  ...generateSEO({
    metadataBase: "https://aparilli.dev",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}