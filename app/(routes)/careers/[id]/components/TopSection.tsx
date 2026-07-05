import PageHeading from "@/app/components/PageHeading";

interface TopSectionProps {
  title?: string;
}

export default function TopSection({ title }: TopSectionProps) {
  return (
    <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6 sm:px-side-space relative">
      <img
        src="/images/about/hero-dots2.webp"
        className="absolute top-0 left-0 -translate-y-[3rem] sm:h-[10rem] h-[15rem] "
        alt="Background Pattern"
      ></img>

      <PageHeading
        className="w-[calc(100%-5rem)] sm:w-full"
        title={<>{title ?? "We help businesses grow"}</>}
        description={<>Work there. Find the dream job you’ve always wanted..</>}
      ></PageHeading>
    </div>
  );
}
