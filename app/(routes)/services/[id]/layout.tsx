import type { Metadata } from "next";
import { allServiceItems } from "@/app/helpers/data";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

// Helper function to extract text from React node
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }
  if (typeof node === "number") {
    return String(node);
  }
  if (node === null || node === undefined) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(extractText).filter(Boolean).join(" ");
  }
  if (typeof node === "object") {
    // Handle React elements
    if ("props" in node && node.props) {
      if (node.props.children) {
        return extractText(node.props.children);
      }
    }
    // Handle React fragments
    if ("type" in node && node.type === Symbol.for("react.fragment")) {
      if ("props" in node && node.props && node.props.children) {
        return extractText(node.props.children);
      }
    }
  }
  return "";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle both Promise and direct params (for Next.js 13/14 and 15+)
  const resolvedParams = await Promise.resolve(params);
  const serviceId = resolvedParams.id;

  // Find service item - ensure exact match
  const serviceItem = allServiceItems.find((item) => item.id === serviceId);

  if (!serviceItem) {
    // Return default metadata if service not found (shouldn't happen for valid routes)
    return {
      title: "Service Not Found | Solvo Engineers",
      description: "The requested service page could not be found.",
    };
  }

  // Extract title text from React node
  const titleText = extractText(serviceItem.title);

  // Use subtitle as description (it's already optimized and concise)
  const descriptionText = serviceItem.subtitle;

  // Generate keywords based on service type
  const serviceKeywords: Record<string, string[]> = {
    "fea-analysis": [
      "FEA analysis",
      "finite element analysis",
      "FEA services",
      "structural analysis",
      "stress analysis",
      "FEA simulation",
      "engineering analysis",
    ],
    "cfd-analysis": [
      "CFD analysis",
      "computational fluid dynamics",
      "CFD services",
      "fluid flow simulation",
      "CFD simulation",
      "aerodynamic analysis",
      "thermal analysis",
    ],
    "cad-analysis": [
      "CAD services",
      "3D CAD modeling",
      "CAD design",
      "computer aided design",
      "CAD modeling services",
      "product design",
      "3D modeling",
    ],
  };

  const keywords = [
    ...(serviceKeywords[serviceId] || []),
    "engineering services",
    "Solvo Engineers",
    titleText.toLowerCase(),
  ];

  return {
    title: titleText,
    description: descriptionText,
    keywords,
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: `/services/${serviceId}`,
      type: "website",
      images: [
        {
          url: serviceItem.heroImage,
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
      images: [serviceItem.heroImage],
    },
    alternates: {
      canonical: `/services/${serviceId}`,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
