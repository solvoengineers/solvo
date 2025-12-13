import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import TopSection from "./components/TopSection";
import ClientFocusSolutions from "./components/ClientFocusSolutions";
import WelcomeToSolvoEnngineers from "./components/WelcomeToSolvoEnngineers";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import ProjectListSection from "@/app/components/ProjectListSection";
import Divider from "@/app/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - FEA, CFD & CAD Engineering Solutions",
  description:
    "Explore our comprehensive engineering services including FEA analysis, CFD simulations, and CAD modeling. We provide innovative, focused, and personalized engineering solutions for modern industries.",
  keywords: [
    "FEA services",
    "CFD services",
    "CAD services",
    "engineering solutions",
    "simulation services",
    "product design services",
  ],
  openGraph: {
    title: "Our Services - Solvo Engineers",
    description:
      "Explore our comprehensive engineering services including FEA analysis, CFD simulations, and CAD modeling.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="services" />
      <TopSection></TopSection>
      <ClientFocusSolutions></ClientFocusSolutions>
      <OurTechnologySection></OurTechnologySection>
      <WelcomeToSolvoEnngineers></WelcomeToSolvoEnngineers>
      <ProductDetailsSection></ProductDetailsSection>
      <Divider></Divider>
      <ProjectListSection></ProjectListSection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
};

export default About;
