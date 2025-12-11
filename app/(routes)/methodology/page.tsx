"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./TopSection";
import MethodSteps from "./MethodSteps";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import ProjectGridList from "@/app/components/ProjectGridList";
import GetInTouch from "@/app/components/GetInTouch";
import Divider from "@/app/components/Divider";

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="about" />
      <TopSection />
      <MethodSteps />
      <OurTechnologySection></OurTechnologySection>
      <div className="flex flex-col max-w-desktop mx-auto items-center sm:w-full sm:px-side-space gap-4">
        <h2 className="text-footer-heading font-semibold font-poppins text-center">
          Our <span className="text-primary-blue">Projects</span>
        </h2>
        <p className="text-base text-footer-text font-normal font-poppins text-center ">
          See how Solvo Products has helped its clients achieve their<br></br>{" "}
          vision of digital innovation.
        </p>
      </div>

      <ProjectGridList></ProjectGridList>
      <Divider></Divider>

      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
}
