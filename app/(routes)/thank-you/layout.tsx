import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Message Received",
  description:
    "Thank you for contacting Solvo Engineers. We have successfully received your inquiry and will get back to you within 1 hour. Our team of CAE Engineers will review your request and contact you soon.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thank You - Solvo Engineers",
    description:
      "Thank you for contacting Solvo Engineers. We have successfully received your inquiry and will get back to you within 1 hour.",
    url: "/thank-you",
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

