import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import OurMission from "./components/OurMission";
import Analytics from "./components/Analytics";
import IndustriesWeServe from "@/app/components/IndustriesWeServe";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import OurCoreValueSection from "./components/CoreValuesSection";
import VisionSection from "./components/VisionSection";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import GetInTouch from "@/app/components/GetInTouch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Expert Engineering Consultation Firm",
  description:
    "Learn about Solvo Engineers, a CAE consultant firm specializing in FEA, CFD simulations and CAD modeling. We deliver exceptional lifecycle solutions customized to meet the precise needs of our clients.",
  keywords: [
    "about solvo engineers",
    "engineering firm",
    "CAE consultant",
    "FEA specialists",
    "CFD experts",
    "CAD modeling company",
  ],
  openGraph: {
    title: "About Us - Solvo Engineers",
    description:
      "Learn about Solvo Engineers, a CAE consultant firm specializing in FEA, CFD simulations and CAD modeling.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      <Header activeRoute="about" />

      <TopSection></TopSection>
      <OurMission></OurMission>

      <Analytics></Analytics>
      <IndustriesWeServe></IndustriesWeServe>
      <ClientReviewsSection></ClientReviewsSection>
      <OurCoreValueSection></OurCoreValueSection>
      <VisionSection></VisionSection>
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
};

export default About;
