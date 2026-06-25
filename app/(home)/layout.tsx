import type { Metadata } from "next";

export const metadata: Metadata = {
  // `absolute` stops the site from automatically adding "| Solvo Engineers"
  // to the end of this title (that's what made the brand name show up twice).
  title: {
    absolute: "Solvo Engineers | FEA, CFD & CAD Engineering Services",
  },
  description:
    "Solvo Engineers enhances product performance, reliability and efficiency through expert FEA, CFD and CAD simulation services.",
  keywords: [
    "FEA analysis",
    "CFD analysis",
    "CAD modeling",
    "engineering services",
    "finite element analysis",
    "computational fluid dynamics",
    "engineering consultation",
    "simulation services",
    "product design",
    "engineering solutions",
    "CAE consulting",
    "engineering firm",
  ],
  openGraph: {
    title: "Solvo Engineers | FEA, CFD & CAD Engineering Services",
    description:
      "Solvo Engineers enhances product performance, reliability and efficiency through expert FEA, CFD and CAD simulation services.",
    url: "/",
    type: "website",
    siteName: "Solvo Engineers",
    images: [
      {
        url: "/images/logo-176606.webp",
        width: 1200,
        height: 630,
        alt: "Solvo Engineers - Expert Engineering Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvo Engineers | FEA, CFD & CAD Engineering Services",
    description:
      "Solvo Engineers enhances product performance, reliability and efficiency through expert FEA, CFD and CAD simulation services.",
    images: ["/images/logo-176606.webp"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
