import CaseStudyCard from "./components/CaseStudyCard";
import { allCaseStudies } from "@/app/helpers/case-study.data";
import GreenBadge from "@/app/components/GreenBadge";
import TopSection from "./components/TopSection";
import classNames from "classnames";
import CaseStudyList from "./components/CaseStudyList";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import ProjectListSection from "@/app/components/ProjectListSection";
import ContactUsPage from "../contact/page";
import GetInTouch from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Divider from "@/app/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Engineering Success Stories",
  description:
    "Explore our engineering case studies showcasing successful FEA, CFD, and CAD projects. Learn how Solvo Engineers delivers innovative solutions for clients across industries.",
  keywords: [
    "engineering case studies",
    "FEA case studies",
    "CFD case studies",
    "CAD case studies",
    "engineering success stories",
    "project examples",
  ],
  openGraph: {
    title: "Case Studies - Solvo Engineers",
    description:
      "Explore our engineering case studies showcasing successful FEA, CFD, and CAD projects.",
    url: "/case-studies",
  },
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudyPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      {/* Header Section */}
      <Header activeRoute="case-studies" />
      <TopSection />
      <CaseStudyList></CaseStudyList>
      <ClientReviewsSection></ClientReviewsSection>
      <ProjectListSection></ProjectListSection>
      <Divider></Divider>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
      {/* Case Studies Grid */}
    </div>
  );
}
