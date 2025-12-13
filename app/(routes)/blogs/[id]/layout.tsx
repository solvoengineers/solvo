import type { Metadata } from "next";
import { allBlogs } from "@/app/helpers/blogs.data";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle both Promise and direct params (for Next.js 13/14 and 15+)
  const resolvedParams = await Promise.resolve(params);
  const blogId = resolvedParams.id;

  // Find blog by matching the link's last segment with the id
  const blog = allBlogs.find((b) => b.link.split("/").pop() === blogId);

  if (!blog) {
    return {
      title: "Blog Not Found | Solvo Engineers",
      description: "The requested blog article could not be found.",
    };
  }

  // Use seoTitle for metadata
  const titleText = blog.seoTitle;
  const descriptionText = blog.description;

  return {
    title: titleText,
    description: descriptionText,
    keywords: [
      ...blog.categories,
      "engineering blog",
      "FEA",
      "CFD",
      "CAD",
      "engineering articles",
      "Solvo Engineers",
    ],
    openGraph: {
      title: titleText,
      description: descriptionText,
      url: blog.link,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author.name],
      images: [
        {
          url: blog.image,
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
      images: [blog.image],
    },
    alternates: {
      canonical: blog.link,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

