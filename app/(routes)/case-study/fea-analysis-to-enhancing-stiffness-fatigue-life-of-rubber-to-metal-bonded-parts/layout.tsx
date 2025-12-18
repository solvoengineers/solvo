import type { Metadata } from "next";
import { allCaseStudies } from "@/app/helpers/case-study.data";

export async function generateMetadata(): Promise<Metadata> {
  const caseStudy = allCaseStudies.find((cs) => cs.link === "/case-study/fea-analysis-to-enhancing-stiffness-fatigue-life-of-rubber-to-metal-bonded-parts");

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Solvo Engineers",
      description: "The requested case study could not be found.",
    };
  }

  const titleText = caseStudy.seoTitle;
  const descriptionText = caseStudy.description;

  return {
    title: titleText,
    description: descriptionText,
    keywords: [
      "FEA analysis",
      "finite element analysis",
      "case study",
      "engineering case study",
      "rubber-to-metal bonded parts",
      "fatigue analysis",
      "Solvo Engineers",
    ],
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: caseStudy.link,
      type: "article",
      images: [
        {
          url: caseStudy.logo,
          width: 1200,
          height: 630,
          alt: titleText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: descriptionText,
      images: [caseStudy.logo],
    },
    alternates: {
      canonical: caseStudy.link,
    },
  };
}

export default function CaseStudyItem1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

