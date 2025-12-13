import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Methodology - Agile Working Process",
  description:
    "Learn about Solvo Engineers' step-by-step agile working methodology. Our approach ensures smooth collaboration, high quality deliverables, and on-time delivery for every engineering project.",
  keywords: [
    "engineering methodology",
    "agile methodology",
    "engineering process",
    "project management",
    "engineering workflow",
    "CAE process",
  ],
  openGraph: {
    title: "Our Methodology - Solvo Engineers",
    description:
      "Learn about Solvo Engineers' step-by-step agile working methodology. Our approach ensures smooth collaboration and high quality deliverables.",
    url: "/methodology",
  },
  alternates: {
    canonical: "/methodology",
  },
};

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

