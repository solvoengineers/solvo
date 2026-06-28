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

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;
  const blog = allBlogs.find((b) => b.link.split("/").pop() === blogId);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com";

  if (!blog) {
    return <>{children}</>;
  }

  // Convert the human-readable date (e.g. "July 12, 2025") to ISO 8601 if possible
  const parsedDate = new Date(blog.date);
  const publishedIso = isNaN(parsedDate.getTime())
    ? blog.date
    : parsedDate.toISOString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.seoTitle,
    description: blog.description,
    image: `${siteUrl}${blog.image}`,
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      "@type": "Person",
      name: blog.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Solvo Engineers",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-176606.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${blog.link}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${siteUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${siteUrl}${blog.link}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
