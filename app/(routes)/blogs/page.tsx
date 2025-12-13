import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import BlogListSection from "./components/BlogListSection";
import { LatestNewsSection } from "./components/LatestNewsSection";
import Footer from "@/app/components/Footer";
import Divider from "@/app/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Articles - Engineering Insights & News",
  description:
    "Read our latest engineering blogs and articles about FEA, CFD, CAD, and engineering best practices. Stay updated with industry insights and technical knowledge.",
  keywords: [
    "engineering blog",
    "FEA blog",
    "CFD blog",
    "CAD blog",
    "engineering articles",
    "engineering insights",
  ],
  openGraph: {
    title: "Blogs & Articles - Solvo Engineers",
    description:
      "Read our latest engineering blogs and articles about FEA, CFD, CAD, and engineering best practices.",
    url: "/blogs",
  },
  alternates: {
    canonical: "/blogs",
  },
};

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      <Header activeRoute="blogs" />

      <TopSection></TopSection>
      <LatestNewsSection></LatestNewsSection>

      <BlogListSection></BlogListSection>

      <Footer />
    </div>
  );
};

export default About;
