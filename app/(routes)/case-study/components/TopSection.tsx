import GreenBadge from "@/app/components/GreenBadge";
import PageHeading from "@/app/components/PageHeading";

export default function TopSection() {
  return (
    <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6 sm:px-side-space relative">
      {/* Badge */}
      <GreenBadge icon="/images/zap-icon.svg" text="Case Studies" />

      {/* Title */}
      <PageHeading
        title={
          <>
            {" "}
            Our <span className="text-primary-blue">Case Studies</span>{" "}
          </>
        }
        description="Explore our case studies to see how our advance technology solutions have helped businesses achieve their goals and overcome their challenges"
      />
    </div>
  );
}
