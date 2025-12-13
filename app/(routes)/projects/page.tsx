import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import ProjectGridList from "@/app/components/ProjectGridList";
import TopSection from "./components/TopSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Engineering Solutions Portfolio",
  description:
    "Explore our portfolio of successful engineering projects. See how Solvo Engineers has helped clients achieve their vision through FEA, CFD, and CAD solutions.",
  keywords: [
    "engineering projects",
    "FEA projects",
    "CFD projects",
    "CAD projects",
    "engineering portfolio",
    "case studies",
  ],
  openGraph: {
    title: "Our Projects - Solvo Engineers",
    description:
      "Explore our portfolio of successful engineering projects. See how Solvo Engineers has helped clients achieve their vision.",
    url: "/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      <Header activeRoute="projects" />
      <TopSection></TopSection>
      <ProjectGridList></ProjectGridList>
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
};

export default About;
