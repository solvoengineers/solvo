"use client";

import GreenBadge from "@/app/components/GreenBadge";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Marquee from "react-fast-marquee";

const clientLogos = [
  "/images/our-best-clients/logo1.png",
  "/images/our-best-clients/logo2.png",
  "/images/our-best-clients/logo3.png",
  "/images/our-best-clients/logo4.png",
  "/images/our-best-clients/logo5.png",
  "/images/our-best-clients/logo6.png",
  "/images/our-best-clients/logo7.png",
  "/images/our-best-clients/logo8.png",
  "/images/our-best-clients/logo9.png",
  "/images/our-best-clients/logo10.png",
  "/images/our-best-clients/logo11.png",
  "/images/our-best-clients/logo12.png",
];

const clientUrls = [
  "https://www.isuzucv.com/en/index",
  "https://panda.com.sa/",
  "https://www.mclellanhill.com/",
  "https://www.dehydratorsamerica.com/",
  "https://questwindows.com/",
  "https://biomasscontrols.com/",
  "https://www.bonypolymers.com/",
  "https://www.mortenson.com/",
  "https://fpmccann.co.uk/",
  "https://www.sanmina.com/",
  "https://www.airvitalize.tech/",
  "https://dispensingtech.com/",
];

export default function OurBestClients() {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-section-spacing relative sm:px-side-space">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>

      <div className="w-full  mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <GreenBadge icon="/images/zap-icon.svg" text="Our Best Clients" />

        {/* Content */}
        <div className="flex flex-col items-center gap-[1.875rem] w-full">
          {/* Description */}
          <h2 className="text-[1.875rem]  text-text-gray font-semibold font-poppins text-center">
            Honored to serve{" "}
            <span className="text-primary-blue">top clients</span>
          </h2>

          {/* Client Logos - Continuous Linear Scroll  */}
          <div className="w-full max-w-[68.5rem] h-14 overflow-hidden relative">
            <Marquee
              speed={80}
              gradient={false}
              pauseOnHover={false}
              className="flex items-center"
            >
              {/* Duplicate logos to create seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => {
                const originalIndex = index % clientLogos.length;
                const isLogo2Or4 =
                  originalIndex === 0 ||
                  originalIndex === 1 ||
                  originalIndex === 2;
                return (
                  <div
                    key={`logo-${index}`}
                    className={classNames(
                      "shrink-0 flex items-center mx-[2.1875rem]"
                    )}
                  >
                    <Link
                      href={clientUrls[originalIndex]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Image
                        src={logo}
                        alt={`Client Logo ${originalIndex + 1}`}
                        width={340}
                        height={78}
                        className={classNames(
                          "w-auto object-contain h-10 ",

                          {
                            "!h-6.5": originalIndex === 0,
                            "!h-11": originalIndex === 3,
                            "!h-8": originalIndex === 10,
                            "!h-9": originalIndex === 11,
                            "!h-12":
                              originalIndex === 1 ||
                              originalIndex === 9 ||
                              originalIndex === 6,
                            "!h-14": originalIndex === 2,
                          }
                        )}
                      />
                    </Link>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
