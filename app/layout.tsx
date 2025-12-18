import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon-96.png", sizes: "96x96", type: "image/png" }],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com"
  ),
  title: {
    default: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
    template: "%s | Solvo Engineers",
  },
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
  ],
  authors: [{ name: "Solvo Engineers" }],
  creator: "Solvo Engineers",
  publisher: "Solvo Engineers",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Solvo Engineers",
    title: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
    description:
      "Expert engineering consultation firm specializing in FEA, CFD, and CAD modeling services. Delivering precise and efficient solutions with advanced simulation-driven insights.",
    images: [
      {
        url: "/images/logo-176606.webp",
        width: 1200,
        height: 630,
        alt: "Solvo Engineers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvo Engineers - Expert FEA, CFD & CAD Engineering Services",
    description:
      "Expert engineering consultation firm specializing in FEA, CFD, and CAD modeling services.",
    images: ["/images/logo-176606.webp"],
  },
  verification: {
    google: "JmsVSyNDIkHl6zbXKbYgVZG2iWFuYXJtabrCTA4a1UM",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased `}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
