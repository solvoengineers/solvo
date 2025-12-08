import { allCaseStudies } from "@/app/helpers/case-study.data";
import CaseStudyCard from "./CaseStudyCard";
import classNames from "classnames";

function CaseStudyList() {
  return (
    <div className="w-full max-w-desktop mx-auto grid grid-cols-3 sm:grid-cols-2 gap-6 sm:px-side-space relative">
      {allCaseStudies.map((caseStudy, index) => (
        <CaseStudyCard index={index} key={caseStudy.id} caseStudy={caseStudy} />
      ))}
      <div
        className={`flex rounded-2xl flex-col items-center justify-center gap-11 p-[3.125rem_1.5rem] bg-white border border-footer-border rounded-5xl w-full hover:shadow-lg transition-shadow `}
      >
        {/* Logo Container */}
        <div className="flex flex-col items-center justify-center w-[10rem] h-[10rem] sm:w-[8rem] sm:h-[8rem] p-5 rounded-full bg-primary-blue/20 shadow-[0px_0px_39.3px_-9px_rgba(2,115,189,1)]">
          <img
            src="/images/case-study/coming-soon.png"
            alt={"Comming Soon"}
            className={classNames(
              "object-contain  bg-white  h-full rounded-full w-auto"
            )}
          />
        </div>

        {/* Content Section */}
      </div>
    </div>
  );
}

export default CaseStudyList;
