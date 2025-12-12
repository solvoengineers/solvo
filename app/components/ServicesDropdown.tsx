"use client";

import Link from "next/link";

interface ServiceItem {
  name: string;
  link: string;
  icon: string;
}

interface ServicesDropdownProps {
  isVisible: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isVisible }) => {
  const services: ServiceItem[] = [
    {
      name: "Computational Fluid Dynamics (CFD)",
      link: "/services/cfd-analysis",
      icon: "/images/shared/services-dropdown/img1.webp",
    },
    {
      name: "2D/3D Modeling & Rendering (CAD)",
      link: "/services/cad-analysis",
      icon: "/images/shared/services-dropdown/img2.webp",
    },
    {
      name: "Finite Element Analysis (FEA)",
      link: "/services/fea-analysis",
      icon: "/images/shared/services-dropdown/img3.webp",
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 pt-2 z-20">
      {/* Transparent bridge wrapper to connect with header item */}
      <div className="w-[24.375rem] bg-transparent">
        {/* Actual dropdown content */}
        <div className="w-full bg-white border border-[rgba(189,188,199,0.2)] rounded-lg overflow-hidden shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`flex flex-row items-center gap-2.5 px-5 py-5 bg-white text-black hover:bg-primary-light-blue hover:text-primary-blue transition-all duration-300 ease-in-out ${
                index === 0 ? "rounded-t-lg" : ""
              } ${
                index === services.length - 1 ? "rounded-b-lg border-b-0" : ""
              } ${
                index !== services.length - 1
                  ? "border-b border-[rgba(189,188,199,0.2)]"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-5 h-5 object-contain"
                ></img>
              </div>
              <span className="text-base font-normal font-poppins">
                {service.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
