import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Solvo Engineers",
  description:
    "Read Solvo Engineers' Privacy Policy to understand how we collect, use, and protect your personal information when you use our engineering consultation services.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "Solvo Engineers privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Solvo Engineers",
    description:
      "Read Solvo Engineers' Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      <Header />

      <div className="w-full max-w-desktop mx-auto px-side-space flex flex-col gap-section-spacing">
        <div className="flex flex-col gap-6">
          <h1 className="text-footer-text">Privacy Policy</h1>

          <div className="flex flex-col gap-4">
            <p className="text-base text-text-gray font-normal font-poppins">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="text-base text-text-gray font-normal font-poppins">
              At Solvo Engineers, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              engineering consultation services.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">1. Information We Collect</h2>

            <div className="flex flex-col gap-4">
              <h3 className="text-footer-text">1.1 Personal Information</h3>
              <p className="text-base text-text-gray font-normal font-poppins">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-text-gray font-normal font-poppins">
                  Contact us through our website or email
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Request a quote or consultation
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Subscribe to our newsletter or blog
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Apply for a job position
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Use our services
                </li>
              </ul>
              <p className="text-base text-text-gray font-normal font-poppins">
                This information may include your name, email address, phone
                number, company name, job title, and any other information you
                choose to provide.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-footer-text">
                1.2 Automatically Collected Information
              </h3>
              <p className="text-base text-text-gray font-normal font-poppins">
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-text-gray font-normal font-poppins">
                  IP address
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Browser type and version
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Operating system
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Pages you visit and time spent on pages
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Referring website addresses
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">2. How We Use Your Information</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              We use the information we collect for various purposes, including:
            </p>

            <ul className="flex flex-col gap-2">
              <li className="text-base text-text-gray font-normal font-poppins">
                To provide, maintain, and improve our services
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To respond to your inquiries and provide customer support
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To send you newsletters, marketing communications, and updates
                about our services (with your consent)
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To process job applications
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To analyze website usage and improve user experience
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To comply with legal obligations and protect our rights
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">
              3. Information Sharing and Disclosure
            </h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>

            <ul className="flex flex-col gap-2">
              <li className="text-base text-text-gray font-normal font-poppins">
                With service providers who assist us in operating our website
                and conducting our business (under strict confidentiality
                agreements)
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                When required by law or to respond to legal process
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                To protect our rights, property, or safety, or that of our
                clients or others
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                In connection with a merger, acquisition, or sale of assets
                (with notice to users)
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">4. Data Security</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">5. Your Rights</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>

            <ul className="flex flex-col gap-2">
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to access your personal information
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to correct inaccurate information
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to request deletion of your information
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to object to processing of your information
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to data portability
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                The right to withdraw consent at any time
              </li>
            </ul>

            <p className="text-base text-text-gray font-normal font-poppins">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:contact@solvoengineers.com"
                className="text-primary-blue hover:underline"
              >
                contact@solvoengineers.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">
              6. Cookies and Tracking Technologies
            </h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              We may use cookies and similar tracking technologies to track
              activity on our website and store certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our website.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">7. Third-Party Links</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">8. Children's Privacy</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you become aware that a child has provided us with personal
              information, please contact us, and we will take steps to delete
              such information.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">
              9. Changes to This Privacy Policy
            </h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">10. Contact Us</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-base text-text-gray font-normal font-poppins">
                <strong>Solvo Engineers</strong>
              </p>
              <p className="text-base text-text-gray font-normal font-poppins">
                Email:{" "}
                <a
                  href="mailto:contact@solvoengineers.com"
                  className="text-primary-blue hover:underline"
                >
                  contact@solvoengineers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
