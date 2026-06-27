import Link from "next/link";
import { ICaseStudy } from "@/app/helpers/case-study.data";
import { allIcons } from "@/app/helpers/icons";

interface CaseStudyCardProps {
  caseStudy: ICaseStudy;
  className?: string;
  index: number;
}

export default function CaseStudyCard({
  caseStudy,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link
      href={caseStudy.link}
      className={`flex rounded-2xl flex-col items-center justify-center gap-11 sm:px-side-space sm:py-[2rem] p-[3.125rem_1.5rem] bg-white border border-footer-border rounded-5xl w-full hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Logo Container */}
      <div className="flex flex-col items-center justify-center w-[10rem] h-[10rem] sm:w-[8rem] sm:h-[8rem] sm:p-3 p-5 rounded-full bg-primary-blue/20 shadow-[0px_0px_39.3px_-9px_rgba(2,115,189,1)]">
        <div className="h-full w-full rounded-full bg-white flex items-center justify-center p-4">
          <img
            src={caseStudy.logo}
            alt={caseStudy.title}
            className="object-contain w-[5.5rem] h-[3rem] sm:w-[4.5rem] sm:h-[2.5rem]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 w-full">
        {/* Title */}
        <h3 className="text-[1rem]  font-bold text-footer-text font-poppins">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-base text-footer-text font-normal font-poppins">
          {caseStudy.description}
        </p>

        {/* Read More Button */}
        <div className="btn btn-secondary w-fit">
          <span className="text-base font-normal font-poppins">Read more</span>
          {allIcons.chevronRight(24, 24)}
        </div>
      </div>
    </Link>
  );
}
