import type { Metadata } from "next";
import { profile } from "@/data/profile";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
  metadataBase?: string;
}

export function generateSEO(props: SEOProps = {}): Metadata {
  const {
    title = "Desarrollo Web, Apps y SEO | aparilli.dev",
    description = "Creamos experiencias digitales únicas: desarrollo web a medida, aplicaciones móviles y estrategias SEO para tu éxito online. Visita aparilli.dev",
    ogImage = "/og-image.png",
    path = "",
  } = props;

  const url = `https://aparilli.dev${path}`;

  return {
    title,
    description,
    keywords: ["Desarrollo web a medida", "Soluciones digitales", "Diseño web profesional", "Desarrollo de apps móviles", "Optimización SEO", "Marketing digital"],
    authors: [{ name: profile.shortName }],
    openGraph: {
      title,
      description,
      url,
      siteName: "aparilli.dev",
      locale: "es_VE",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@aparilli",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    metadataBase: props.metadataBase as string | undefined,
  };
}