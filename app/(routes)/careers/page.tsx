import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import OpeningsList from "./components/OpeningsList";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Solvo Engineers Team",
  description:
    "Join Solvo Engineers and be part of a team of expert engineers. Explore career opportunities in FEA, CFD, and CAD engineering. Grow your career with us.",
  keywords: [
    "engineering jobs",
    "FEA engineer jobs",
    "CFD engineer jobs",
    "CAD engineer jobs",
    "engineering careers",
    "join solvo engineers",
  ],
  openGraph: {
    title: "Careers - Solvo Engineers",
    description:
      "Join Solvo Engineers and be part of a team of expert engineers. Explore career opportunities in FEA, CFD, and CAD engineering.",
    url: "/careers",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="career" />
      <TopSection />
      <OpeningsList />
      <WhyWorkWithUs />
      <Footer />
    </div>
  );
}
