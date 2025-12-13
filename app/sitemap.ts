import { MetadataRoute } from "next";
import { allServiceItems } from "@/app/helpers/data";
import { allFullProjects } from "@/app/helpers/projects.data";
import { allBlogs } from "@/app/helpers/blogs.data";
import { allCaseStudies } from "@/app/helpers/case-study.data";
import { allJobPositions } from "@/app/helpers/jobs.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvoengineers.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = allServiceItems.map((service) => ({
    url: `${baseUrl}${service.id ? `/services/${service.id}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Project pages
  const projectPages: MetadataRoute.Sitemap = allFullProjects.map((project) => ({
    url: `${baseUrl}${project.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = allBlogs.map((blog) => ({
    url: `${baseUrl}${blog.link}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Case study pages
  const caseStudyPages: MetadataRoute.Sitemap = allCaseStudies.map((caseStudy) => ({
    url: `${baseUrl}${caseStudy.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Career pages
  const careerPages: MetadataRoute.Sitemap = allJobPositions.map((job) => ({
    url: `${baseUrl}${job.link}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
    ...caseStudyPages,
    ...careerPages,
  ];
}

