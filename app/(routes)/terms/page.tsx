import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Solvo Engineers",
  description:
    "Read Solvo Engineers' Terms and Conditions to understand the terms governing your use of our website and engineering consultation services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "legal terms",
    "Solvo Engineers terms",
  ],
  openGraph: {
    title: "Terms and Conditions - Solvo Engineers",
    description:
      "Read Solvo Engineers' Terms and Conditions to understand the terms governing your use of our website and services.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible page-wrapper">
      <Header />

      <div className="w-full max-w-desktop mx-auto px-side-space flex flex-col gap-section-spacing ">
        <div className="flex flex-col gap-6">
          <h1 className="text-footer-text">Terms and Conditions</h1>

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
              Please read these Terms and Conditions carefully before using the
              Solvo Engineers website and services. By accessing or using our
              website, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">1. Acceptance of Terms</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">2. Use License</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Permission is granted to temporarily download one copy of the
              materials on Solvo Engineers' website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>

            <ul className="flex flex-col gap-2">
              <li className="text-base text-text-gray font-normal font-poppins">
                Modify or copy the materials
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                Attempt to reverse engineer any software contained on the
                website
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li className="text-base text-text-gray font-normal font-poppins">
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">3. Services</h2>

            <div className="flex flex-col gap-4">
              <p className="text-base text-text-gray font-normal font-poppins">
                Solvo Engineers provides engineering consultation services
                including:
              </p>

              <ul className="flex flex-col gap-2">
                <li className="text-base text-text-gray font-normal font-poppins">
                  Finite Element Analysis (FEA)
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Computational Fluid Dynamics (CFD)
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Computer-Aided Design (CAD) modeling
                </li>
                <li className="text-base text-text-gray font-normal font-poppins">
                  Engineering consultation and analysis
                </li>
              </ul>

              <p className="text-base text-text-gray font-normal font-poppins">
                All services are provided subject to separate service agreements
                that will be executed between Solvo Engineers and the client.
                The terms of such service agreements will govern the specific
                services provided.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">4. Disclaimer</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              The materials on Solvo Engineers' website are provided on an 'as
              is' basis. Solvo Engineers makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>

            <p className="text-base text-text-gray font-normal font-poppins">
              Further, Solvo Engineers does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">5. Limitations</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              In no event shall Solvo Engineers or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on Solvo Engineers'
              website, even if Solvo Engineers or a Solvo Engineers authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">6. Accuracy of Materials</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              The materials appearing on Solvo Engineers' website could include
              technical, typographical, or photographic errors. Solvo Engineers
              does not warrant that any of the materials on its website are
              accurate, complete, or current. Solvo Engineers may make changes
              to the materials contained on its website at any time without
              notice.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">7. Links</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Solvo Engineers has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Solvo Engineers of the site. Use of any such linked website is at
              the user's own risk.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">8. Modifications</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              Solvo Engineers may revise these terms of service for its website
              at any time without notice. By using this website you are agreeing
              to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">9. Intellectual Property</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              All content, including but not limited to text, graphics, logos,
              images, and software, is the property of Solvo Engineers or its
              content suppliers and is protected by copyright, trademark, and
              other intellectual property laws. You may not reproduce,
              distribute, modify, create derivative works of, publicly display,
              or otherwise exploit any content without the express written
              permission of Solvo Engineers.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">10. Confidentiality</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              In the course of providing services, Solvo Engineers may have
              access to confidential information belonging to clients. Solvo
              Engineers agrees to maintain the confidentiality of such
              information and not to disclose it to third parties without the
              client's consent, except as required by law.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">11. Governing Law</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              These terms and conditions are governed by and construed in
              accordance with applicable laws. Any disputes relating to these
              terms and conditions shall be subject to the exclusive
              jurisdiction of the courts in the jurisdiction where Solvo
              Engineers operates.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">12. Severability</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              If any provision of these Terms and Conditions is found to be
              unenforceable or invalid, that provision shall be limited or
              eliminated to the minimum extent necessary so that these Terms and
              Conditions shall otherwise remain in full force and effect.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-footer-text">13. Contact Information</h2>

            <p className="text-base text-text-gray font-normal font-poppins">
              If you have any questions about these Terms and Conditions, please
              contact us at:
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
