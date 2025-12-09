import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import ProjectListSection from "@/app/components/ProjectListSection";
import Image from "next/image";

export default function CaseStudyGasTurbinePage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing ">
      <Header />

      {/* Hero Section with Gradient Background */}
      <div className="w-full max-w-desktop mx-auto flex flex-col items-start gap-6 sm:px-side-space relative">
        <img
          src="/images/case-studies/item4/img1.png"
          alt="Hero Image"
          className="w-auto object-cover h-12 absolute top-0 left-0 z-10"
        />
        <h1 className="text-footer-heading font-bold font-obviously mt-20">
          CFD Design optimization to achieve self-sustaining combustion in a
          micro gas turbine
        </h1>
        <img
          src="/images/about/hero-dots2.webp"
          className="absolute top-0 left-0 -translate-y-[13rem] sm:h-[10rem] h-[15rem] "
          alt="Background Pattern"
        ></img>
      </div>

      {/* Project Overview Section */}
      <div className="w-full bg-white rounded-t-[3.75rem]  relative z-10">
        <div className="w-full max-w-desktop mx-auto  sm:px-side-space ">
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              Project Overview
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                This project focused on a micro gas turbine engine designed to
                generate 50 kg of thrust. While the hardware was successfully
                assembled and could be spun up to 13,500 RPM using an external
                starter motor, the engine consistently failed to sustain
                combustion once the starter was disengaged. The RPM would
                quickly fall to 6,500 and then the engine would shut down
                entirely, clearly indicating a failure in transitioning to
                self-sustained combustion.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To solve this, we conducted a detailed CFD analysis across the
                compressor, combustion chamber and turbine. The goal was to
                understand the root cause of this failure and deliver a design
                that would sustain combustion above 11,000 RPM and reach the
                target 50 kg of thrust at full load.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section with Gradient Background */}
      <div className="w-full bg-gradient-to-t from-transparent via-[rgba(136,216,232,0.2)] to-[rgba(136,216,232,0.4)] pt-section-spacing">
        <div className="w-full max-w-desktop mx-auto  sm:px-side-space flex flex-col gap-6">
          {/* The Challenge Section */}
          <div className="flex flex-row items-center gap-[6.25rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                The Challenge
              </h2>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                The key issue was that the engine could not maintain enough
                internal energy to continue running autonomously. Initial
                observations suggested an imbalance between the work produced by
                the turbine and the work required by the compressor,
                particularly during mid-RPM ranges. Further, the original
                compressor design showed signs of stall at low RPMs and
                insufficient pressure ratios across the operating band.
              </p>
              <p className="text-lg leading-[2em] text-footer-heading font-semibold font-poppins">
                The specific challenges included:
              </p>
              <div className="flex flex-row gap-4">
                <ul className="flex flex-col gap-2">
                  <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                    The compressor stalled at low speeds (notably at 18,000 RPM)
                  </li>
                  <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                    The pressure ratio of the original compressor was too low
                    (only 2.1 at 50,000 RPM).
                  </li>
                  <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                    Fuel-air mixing and combustion stability were problematic
                  </li>
                  <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                    The net power output at critical RPM points was likely
                    negative or insufficient.
                  </li>
                  <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                    The engine could not meet the condition for self-sustaining
                    operation without continuous starter input.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 relative w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto rounded-[1.875rem] overflow-hidden bg-gradient-to-r from-[rgba(254,244,243,1)] to-[rgba(230,223,229,1)]">
              <Image
                src="/images/case-studies/item4/img2.png"
                alt="The Challenge"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Performance Evaluation Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              A. Performance evaluation of existing design
            </h2>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              We first simulated the engine's behaviour at three key RPM points,
              idle (18k), mid (50k) and max (85k):
            </p>
            <div className="flex flex-row items-start gap-[6.25rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-base leading-[1.5em] text-footer-heading font-semibold font-poppins">
                    At 50k RPM:
                  </p>
                  <div className="flex flex-row gap-4">
                    <ul className="list2">
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Compressor required 130 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Turbine produced 340 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Net power: +210 kW → Self-sustaining confirmed
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Thrust achieved: 360 N
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base leading-[1.5em] text-footer-heading font-semibold font-poppins">
                    At 18k RPM:
                  </p>
                  <div className="flex flex-row gap-4">
                    <ul className="list2">
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Compressor required 7.5 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Turbine produced 16 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Net power: +8.5 kW → Barely self-sustaining
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Thrust achieved: 105 N
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base leading-[1.5em] text-footer-heading font-semibold font-poppins">
                    At 85k RPM:
                  </p>
                  <div className="flex flex-row gap-4">
                    <ul className="list2">
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Compressor required 510 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Turbine produced 1050 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Net power: +540 kW
                      </li>
                      <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                        Thrust achieved: 596 N
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins mt-4">
                  While the turbine had sufficient capacity, the original
                  compressor was the bottleneck, unable to support airflow or
                  pressure at low and mid RPMs, particularly during transitional
                  phases.
                </p>
              </div>
              <div className="flex-1 relative w-full h-[36rem] sm:max-h-[20rem] sm:max-w-[25rem] sm:mx-auto rounded-[1.875rem] overflow-hidden bg-gradient-to-r from-[rgba(254,244,243,1)] to-[rgba(230,223,229,1)]">
                <Image
                  src="/images/case-studies/item4/img3.png"
                  alt="Performance Evaluation"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-1 relative w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto rounded-[1.875rem] overflow-hidden bg-gradient-to-r from-[rgba(254,244,243,1)] to-[rgba(230,223,229,1)]">
              <Image
                src="/images/case-studies/item4/img4.png"
                alt="Compressor Comparison"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex-1 relative w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto rounded-[1.875rem] overflow-hidden bg-gradient-to-r from-[rgba(254,244,243,1)] to-[rgba(230,223,229,1)]">
              <Image
                src="/images/case-studies/item4/img4b.png"
                alt="Compressor Comparison"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Compressor Redesign Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-start gap-[6.25rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                  B. Redesign of the Compressor
                </h2>
                <ul>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    To eliminate stall and improve pressure buildup, we
                    completely redesigned the compressor geometry:
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    The new compressor increased the pressure ratio from 2.1 to
                    4.0 at 50,000 RPM
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    CFD results at low RPM (18k) showed stable flow
                    characteristics with no signs of stall. Performance curves
                    indicated much better airflow behaviour across a wider RPM
                    band.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    The tip velocity improved from 303 m/s in the old design to
                    456 m/s in the new design. Compressor maps showed a clear
                    characteristic curve even at 18,000 RPM, which was absent
                    before.
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto rounded-[1.875rem] overflow-hidden bg-gradient-to-r from-[rgba(254,244,243,1)] to-[rgba(230,223,229,1)]">
                <Image
                  src="/images/case-studies/item4/img5.png"
                  alt="Compressor Redesign"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="text-base text-footer-text font-normal font-poppins">
              A micro gas turbine engine targeting 50 kg of thrust was
              successfully assembled, but it failed to transition to
              self-sustained combustion, shutting down after the external
              starter disengaged (RPM quickly dropped from 13,500 to 6,500). To
              solve this critical issue, a detailed CFD analysis of the
              compressor, combustion chamber and turbine was conducted. The
              project's goal was to identify the root cause of the failure and
              deliver a design capable of sustaining combustion above 11,000 RPM
              to ultimately achieve the 50kg thrust target at full load.
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
            <img
              src="/images/case-studies/item4/img6.png"
              alt="Compressor Performance"
              className="object-contain  w-full h-auto rounded-3xl"
            />
            <div className="flex flex-col gap-8">
              <img
                src="/images/case-studies/item4/img7.png"
                alt="Tip Velocity"
                className="object-contain  w-full h-auto rounded-3xl"
              />

              <img
                src="/images/case-studies/item4/img8.png"
                alt="Stats"
                className="object-contain  w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results & Benefits Section */}
      <div className="w-full bg-primary-light-blue py-section-spacing  ">
        <div className="flex flex-col gap-6 mx-auto max-w-desktop sm:px-side-space">
          <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
            Results & Benefits
          </h2>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            With the updated compressor, the engine now:
          </p>
          <div className="flex flex-row gap-4">
            <div className="w-[0.625rem] h-[0.625rem] bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex flex-col gap-2">
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Achieves self-sustaining combustion above 11,000 RPM, even at
                18,000 RPM idle.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Produces sufficient net power across all key RPM ranges to
                support autonomous operation.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Delivers 360 N of thrust at 50k RPM and 596 N at 85k RPM,
                confirming the ability to scale to the design goal of 50 kg of
                thrust.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Shows no stall characteristics, allowing reliable startup and
                ramp-up.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Supports subsonic nozzle operation with 95% efficiency, as
                verified through isentropic and actual exit velocity
                calculations.
              </p>
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Operates with validated compressor-turbine performance balance —
                no oversizing or underloading.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="w-full  rounded-[1.25rem]">
        <div className="w-full max-w-desktop mx-auto  sm:px-side-space ">
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              Conclusion
            </h2>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project demonstrates how simulation-driven redesign can
              resolve combustion instability and performance bottlenecks in gas
              turbine engines. By addressing the mismatch between the turbine's
              power output and the compressor's pressure generation, we restored
              full functionality and met the engine's thrust target.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The redesigned compressor eliminated stall, improved pressure
              ratios, and enabled consistent airflow across RPM ranges. Most
              importantly, the engine now transitions seamlessly from assisted
              startup to self sustained operation, a critical milestone for any
              micro gas turbine.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This work sets the stage for further development, including
              thermal optimization and mechanical durability studies. The engine
              is now fully capable of moving into integrated testing and
              eventual deployment.
            </p>
          </div>
        </div>
      </div>
      <ClientReviewsSection></ClientReviewsSection>
      <ProjectListSection></ProjectListSection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
}
