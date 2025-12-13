"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { allServiceItems } from "@/app/helpers/data";
import TopSection from "./components/TopSection";
import OurExpertiseSection from "./components/OurExpertiseSection";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import ProjectListSection from "@/app/components/ProjectListSection";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import GetInTouch from "@/app/components/GetInTouch";
import FaqList from "@/app/components/FaqList";
import { useEffect } from "react";

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { id } = useParams();

  const serviceItem = allServiceItems.find((item) => item.id === id);

  if (!serviceItem) {
    notFound();
  }

  // Generate structured data based on params
  useEffect(() => {
    const titleText = serviceItem.seoTitle;
    const descriptionText = serviceItem.subtitle;

    // Service schema for structured data
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: titleText,
      description: descriptionText,
      provider: {
        "@type": "Organization",
        name: "Solvo Engineers",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com",
      },
      areaServed: "Worldwide",
      serviceType: titleText,
      image: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com"
      }${serviceItem.heroImage}`,
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com"
      }/services/${id}`,
    };

    // FAQPage schema if FAQs exist
    let faqSchema = null;
    if (serviceItem.faqs && serviceItem.faqs.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: serviceItem.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
    }

    // Add structured data to page
    const scriptService = document.createElement("script");
    scriptService.type = "application/ld+json";
    scriptService.id = "service-schema";
    scriptService.text = JSON.stringify(serviceSchema);
    document.head.appendChild(scriptService);

    if (faqSchema) {
      const scriptFaq = document.createElement("script");
      scriptFaq.type = "application/ld+json";
      scriptFaq.id = "faq-schema";
      scriptFaq.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptFaq);
    }

    // Cleanup function
    return () => {
      const existingService = document.getElementById("service-schema");
      const existingFaq = document.getElementById("faq-schema");
      if (existingService) existingService.remove();
      if (existingFaq) existingFaq.remove();
    };
  }, [id, serviceItem]);

  return (
    <>
      <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
        <Header activeRoute="services" />
        <TopSection serviceItem={serviceItem} />
        <OurExpertiseSection serviceItem={serviceItem} />
        <ProjectListSection></ProjectListSection>
        <FaqList faqs={serviceItem.faqs} />
        <OurTechnologySection></OurTechnologySection>
        <GetInTouch></GetInTouch>
        <Footer />
      </div>
    </>
  );
}
