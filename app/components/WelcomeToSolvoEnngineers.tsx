import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import Link from "next/link";

const WelcomeToSolvoEnngineers = () => {
  return (
    <div className="w-full max-w-desktop mx-auto px-side-space">
      <div className="w-full flex flex-row items-center gap-[8rem] sm:flex-col sm:gap-6">
        {/* Left Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Title */}
          <h2 className=" font-semibold font-poppins text-[#1E1E1E] whitespace-pre-line">
            Welcome To SOLVO Engineers:{" "}
            <span className="text-primary-blue">
              Our partner in serving best engineering solutions
            </span>
          </h2>

          {/* Description Section */}
          <div className="flex flex-col gap-[1.375rem]">
            <span
              className="text-base  text-[#4A4A4A] font-normal font-poppins"
              style={{ fontSize: "1.125rem" }}
            >
              At Solvo Engineers, we commit to delivering innovative, focused
              and personalized engineering services that bring the best results
              while eliminating the challenges of modern industries. With our
              expertise and advanced technology, we ensure to transform your
              vision into real-time, functional and high-performance solutions.
            </span>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="w-[10.75rem] h-12 bg-primary-blue rounded-xl flex flex-row items-center justify-center gap-2 px-4 py-4 sm:w-full"
          >
            <span className="text-base  text-white font-normal font-poppins text-center">
              View
            </span>
            <div className="w-5 h-5 text-white">
              {allIcons.chevronRight(20, 20)}
            </div>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[19.375rem] shrink-0 sm:w-full sm:h-auto sm:aspect-[1536/1024] border border-primary-blue rounded-[1.25rem] bg-white p-[0.625rem]">
          <Image
            src="/images/services/welcome-to-solvo-engineers-image.webp"
            alt="Welcome To SOLVO Engineers"
            fill
            className="object-cover rounded-[0.625rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeToSolvoEnngineers;
