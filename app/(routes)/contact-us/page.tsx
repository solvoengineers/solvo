import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import Link from "next/link";
import { allIcons } from "@/app/helpers/icons";

function ContactUsPage() {
  return (
    <div className="w-full h-screen  flex flex-col bg-white relative justify-center gap-section-spacing page-wrapper">
      <div
        className="w-full h-full absolute -bottom-0 z-10 left-0 "
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 216, 232, 0.2) 47.74%, rgba(136, 216, 232, 0.533333) 88.56%);",
        }}
      ></div>

      <div className="hidden sm:block">
        <Header forContactUs={true}></Header>
      </div>

      {/* Go back to home link - desktop only */}
      <Link
        href="/"
        className="sm:hidden flex  items-center gap-2 absolute top-8 left-8 z-50 text-base text-text-gray font-normal font-poppins hover:opacity-80 transition-opacity"
      >
        <div className="w-6 h-6 text-footer-text mt-0.5">
          {allIcons.chevronLeft(20, 20)}
        </div>
        <span>Go back to home</span>
      </Link>

      <div className="z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-full">
        <GetInTouch removeBadge></GetInTouch>
      </div>
      {/* <div className="blur-[20px]">
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export default ContactUsPage;
