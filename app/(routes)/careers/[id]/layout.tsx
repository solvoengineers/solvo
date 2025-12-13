import type { Metadata } from "next";
import { allJobPositions } from "@/app/helpers/jobs.data";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle both Promise and direct params (for Next.js 13/14 and 15+)
  const resolvedParams = await Promise.resolve(params);
  const jobId = resolvedParams.id;

  // Find job by matching the link's last segment with the id
  const job = allJobPositions.find((j) => j.link.split("/").pop() === jobId);

  if (!job) {
    return {
      title: "Job Position Not Found | Solvo Engineers",
      description: "The requested job position could not be found.",
    };
  }

  // Use seoTitle for metadata
  const titleText = job.seoTitle;
  const descriptionText =
    job.introduction ||
    `Apply for ${job.title} position at Solvo Engineers. Join our team of expert engineers.`;

  // Generate keywords based on job type
  const jobKeywords: Record<string, string[]> = {
    "cfd-engineer": [
      "CFD engineer jobs",
      "computational fluid dynamics engineer",
      "CFD engineering jobs",
      "fluid dynamics engineer",
      "engineering jobs",
    ],
    "fea-engineer": [
      "FEA engineer jobs",
      "finite element analysis engineer",
      "FEA engineering jobs",
      "structural analysis engineer",
      "engineering jobs",
    ],
    "business-developer": [
      "business developer jobs",
      "business development",
      "sales engineer",
      "business development jobs",
    ],
    "social-media-manager": [
      "social media manager jobs",
      "digital marketing jobs",
      "social media marketing",
      "marketing jobs",
    ],
  };

  const keywords = [
    ...(jobKeywords[jobId] || []),
    "careers",
    "job openings",
    "engineering careers",
    "Solvo Engineers",
    job.location.toLowerCase(),
  ];

  return {
    title: titleText,
    description: descriptionText,
    keywords,
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: job.link,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: descriptionText,
    },
    alternates: {
      canonical: job.link,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
