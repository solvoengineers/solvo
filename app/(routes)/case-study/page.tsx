import CaseStudyCard from "./components/CaseStudyCard";
import { allCaseStudies } from "@/app/helpers/case-study.data";
import GreenBadge from "@/app/components/GreenBadge";
import TopSection from "./components/TopSection";
import classNames from "classnames";
import CaseStudyList from "./components/CaseStudyList";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import ProjectListSection from "@/app/components/ProjectListSection";
import ContactUsPage from "../contact-us/page";
import GetInTouch from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function CaseStudyPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible">
      {/* Header Section */}
      <Header activeRoute="case-study" />
      <TopSection />
      <CaseStudyList></CaseStudyList>
      <ClientReviewsSection></ClientReviewsSection>
      <ProjectListSection></ProjectListSection>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
      {/* Case Studies Grid */}
    </div>
  );
}
