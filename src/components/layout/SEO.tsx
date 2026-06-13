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
    title = `${profile.shortName} — IT Director & Tech Entrepreneur`,
    description = profile.tagline,
    ogImage = "/og-image.png",
    path = "",
  } = props;

  const url = `https://aparilli.dev${path}`;

  return {
    title,
    description,
    keywords: ["Andrés Parilli", "IT Director", "Grupo Plus Tech", "The U For You", "tech entrepreneur", "Venezuela"],
    authors: [{ name: profile.shortName }],
    openGraph: {
      title,
      description,
      url,
      siteName: "aparilli.dev",
      locale: "es_VE",
      type: "website",
      images: [{ url: `${url}/og-image.svg`, width: 1200, height: 630 }],
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