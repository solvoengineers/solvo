import type { Metadata } from "next";
import { allFullProjects } from "@/app/helpers/projects.data";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle both Promise and direct params (for Next.js 13/14 and 15+)
  const resolvedParams = await Promise.resolve(params);
  const projectId = resolvedParams.id;

  // Find project by matching the link's last segment with the id
  const project = allFullProjects.find((p) => p.link.split("/").pop() === projectId);

  if (!project) {
    return {
      title: "Project Not Found | Solvo Engineers",
      description: "The requested project could not be found.",
    };
  }

  // Use seoTitle for metadata
  const titleText = project.seoTitle;
  const descriptionText = project.description;

  // Generate keywords based on project type (CFD or FEA)
  const isCFD = titleText.toLowerCase().includes("cfd") || titleText.toLowerCase().includes("computational fluid");
  const isFEA = titleText.toLowerCase().includes("fea") || titleText.toLowerCase().includes("finite element") || titleText.toLowerCase().includes("stress analysis");
  const isHVAC = titleText.toLowerCase().includes("hvac");

  const keywords = [
    ...(isCFD ? ["CFD analysis", "computational fluid dynamics", "CFD simulation"] : []),
    ...(isFEA ? ["FEA analysis", "finite element analysis", "structural analysis"] : []),
    ...(isHVAC ? ["HVAC simulation", "ventilation analysis"] : []),
    "engineering project",
    "case study",
    "engineering solutions",
    "Solvo Engineers",
  ];

  return {
    title: titleText,
    description: descriptionText,
    keywords,
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: project.link,
      type: "article",
      images: [
        {
          url: project.image,
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
      images: [project.image],
    },
    alternates: {
      canonical: project.link,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

