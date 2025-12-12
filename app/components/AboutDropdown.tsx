"use client";

import Link from "next/link";

interface AboutItem {
  name: string;
  link: string;
}

interface AboutDropdownProps {
  isVisible: boolean;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isVisible }) => {
  const aboutItems: AboutItem[] = [
    {
      name: "Our Methodology",
      link: "/methodology",
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 pt-2 z-20">
      {/* Transparent bridge wrapper to connect with header item */}
      <div className="w-[24.375rem] bg-transparent">
        {/* Actual dropdown content */}
        <div className="w-full bg-white border border-[rgba(189,188,199,0.2)] rounded-lg overflow-hidden shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]">
          {aboutItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex flex-row items-center gap-2.5 px-5 py-5 bg-white text-footer-text hover:bg-primary-light-blue hover:text-primary-blue transition-all duration-300 ease-in-out ${
                index === 0 ? "rounded-t-lg" : ""
              } ${
                index === aboutItems.length - 1 ? "rounded-b-lg border-b-0" : ""
              } ${
                index !== aboutItems.length - 1
                  ? "border-b border-[rgba(189,188,199,0.2)]"
                  : ""
              }`}
            >
              <span className="text-base font-normal font-poppins">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDropdown;
