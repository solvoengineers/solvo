"use client";

import { useRouter } from "next/navigation";
import { allIcons } from "@/app/helpers/icons";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col bg-white relative">
      {/* Background gradient similar to contact page */}
      <div
        className="w-full h-full absolute bottom-0 z-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 216, 232, 0.2) 47.74%, rgba(136, 216, 232, 0.533333) 88.56%);",
        }}
      ></div>

      <div className="blur-[20px]">
        <Header />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center z-10 px-side-space py-section-spacing">
        <div className="w-full max-w-desktop mx-auto flex flex-col items-center justify-center gap-8 text-center">
          {/* Success Icon */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-28 sm:h-28 rounded-full bg-primary-light-blue flex items-center justify-center">
              <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full bg-primary-blue flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-scale-in"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="white"
                    className="animate-fade-in"
                  />
                  <path
                    d="M7 12L10.5 15.5L17 9"
                    stroke="#0273bd"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="animate-check-draw"
                  />
                </svg>
              </div>
            </div>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary-blue opacity-20 animate-ping"></div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-4">
            <h1 className="text-text-gray font-semibold font-poppins">
              Thank you for you message
            </h1>
            <p className="text-base text-footer-text font-normal font-poppins max-w-[37.5rem]">
              We have successfully received your inquiry and will get back to
              you within 1 hour. Our team of CAE Engineers account managers will
              review your request and contact you soon.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[43.75rem] mt-4">
            <div className="flex flex-row items-center gap-4 py-4 px-6 bg-white border border-footer-border rounded-[1.25rem] shadow-sm">
              <div className="text-primary-blue flex-shrink-0">
                {allIcons.checkCircle(24, 24)}
              </div>
              <div className="text-left">
                <p className="text-base text-text-gray font-semibold font-poppins">
                  Quick Response
                </p>
                <p className="text-sm text-footer-text font-normal font-poppins">
                  We'll respond within 1 hour
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 py-4 px-6 bg-white border border-footer-border rounded-[1.25rem] shadow-sm">
              <div className="text-primary-blue flex-shrink-0">
                {allIcons.checkCircle(24, 24)}
              </div>
              <div className="text-left">
                <p className="text-base text-text-gray font-semibold font-poppins">
                  Expert Team
                </p>
                <p className="text-sm text-footer-text font-normal font-poppins">
                  You are talking to the CAE engineers, not the account managers
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-8">
            <button
              onClick={() => router.push("/")}
              className="btn btn-primary"
            >
              <span className="text-base text-white font-normal font-poppins">
                Back to Home
              </span>
              <div className="w-6 h-6 text-white">
                {allIcons.chevronRight(24, 24)}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="blur-[20px]">
        <Footer />
      </div>
    </div>
  );
}
