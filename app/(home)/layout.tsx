import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
  description:
    "Solvo Engineers is an expert engineering consultation firm specializing in Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD) and Computer-Aided Design (CAD) modeling services. We deliver precise and efficient solutions with advanced simulation-driven insights.",
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
    title: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
    description:
      "Expert engineering consultation firm specializing in FEA, CFD, and CAD modeling services. Delivering precise and efficient solutions with advanced simulation-driven insights.",
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
    title: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
    description:
      "Expert engineering consultation firm specializing in FEA, CFD, and CAD modeling services.",
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

