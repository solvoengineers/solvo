import Image from "next/image";
import Link from "next/link";
import { allIcons } from "../helpers/icons";
import { FooterWrapper } from "./Footer/FooterWrapper";
import SocialMediaIcons from "./SocialMediaIcons";

// Left Section Component
function LeftSection() {
  return (
    <div className="flex flex-col gap-[1.1875rem] sm:gap-side-space flex-1 w-full">
      <div className="flex flex-col gap-5 w-full">
        <div className="w-[9.6875rem] h-[3.5625rem] sm:w-[6.5rem] sm:h-[2.5rem] relative">
          <Image
            src="/images/logo-176606.webp"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-base text-footer-text font-normal font-poppins w-[30rem] sm:w-full">
          Solvo Engineers is an expert engineering consultation firm
          specializing in Finite Element Analysis (FEA), Computational Fluid
          Dynamics (CFD) and Computer-Aided Design (CAD) medelling services.
          With a focus on delivering precise and efficient solution, our team of
          professional licensed engineers providing accurate effective solution.
          We are dedicated to offering advanced simulation driven insights that
          enable clients to promote innovation, reducing prototyping cost,
          design optimization, and simplify the process of developing new
          products.
        </p>
      </div>
    </div>
  );
}

// Right Section Component
function RightSection() {
  return (
    <div className="flex flex-col items-end  gap-[1.5625rem] sm:items-start">
      <div className="flex flex-row gap-11 sm:gap-4 sm:w-full sm:justify-between ">
        {/* Quick Links */}
        <div className="flex flex-col gap-5 ">
          <h3 className="text-base text-footer-heading font-semibold font-poppins">
            About Us
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/services"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Blogs
            </Link>

            <Link
              href="/case-studies"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Case Studies
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-5 ">
          <h3 className="text-base text-footer-heading font-semibold font-poppins">
            Company
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/about"
              className="text-base text-footer-text font-normal font-poppins"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-base text-footer-text font-normal font-poppins"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-5">
          <h3 className="text-base text-footer-heading font-semibold font-poppins">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2.5">
              <div className="w-5 h-5 text-primary-blue flex-shrink-0">
                {allIcons.footer.message(20, 20)}
              </div>
              <a
                href="mailto:contact@solvoengineers.com"
                className="text-base text-footer-text font-normal font-poppins"
              >
                contact@solvoengineers.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <SocialMediaIcons />
      </div>
    </div>
  );
}

// Bottom Section Component
function BottomSection() {
  return (
    <div className="flex flex-row justify-between items-stretch gap-6 pt-6 border-t border-footer-border">
      <Link
        href="/privacy"
        className="text-base text-footer-dark font-normal font-poppins hover:text-primary-blue transition-colors duration-200"
      >
        Privacy Policy
      </Link>
      <div className="flex flex-row items-center gap-1 text-base justify-center sm:flex-wrap text-footer-text">
        Copyright ©2025 All rights reserved |{" "}
        <span className="text-primary-blue">Solvo Engineers</span>
      </div>
      <div className="flex flex-row items-center gap-1">
        <Link
          href="/terms"
          className="text-base text-footer-dark font-normal font-poppins hover:text-primary-blue transition-colors duration-200"
        >
          Terms of service
        </Link>
      </div>
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  return (
    <footer
      className="w-full bg-white py-[3.125rem] sm:px-side-space flex flex-col gap-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(2, 115, 189, 0.16) -9.85%, rgba(2, 115, 189, 0.04) 64.29%, rgba(255, 255, 255, 0) 93.66%)",
      }}
    >
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 ">
        {/* Main Content */}
        <div className="flex flex-row sm:flex-col gap-[3.75rem] sm:gap-section-spacing w-full ">
          <LeftSection />
          <RightSection />
        </div>

        <BottomSection />
      </div>
    </footer>
  );
}
