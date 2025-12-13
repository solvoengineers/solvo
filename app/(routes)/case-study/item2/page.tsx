import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import ProjectListSection from "@/app/components/ProjectListSection";
import CaseStudyImageWrapper from "../components/CaseStudyImageWrapper";

export default function CaseStudyDehydratorPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="case-study" />

      {/* Hero Section with Gradient Background */}
      <div className="w-full max-w-desktop mx-auto flex flex-col items-start gap-6 sm:px-side-space relative">
        <img
          src="/images/case-studies/item2/img1.png"
          alt="Hero Image"
          className="w-auto object-cover h-12 absolute top-0 left-0 z-10 sm:left-side-space"
        />
        <h1 className="text-footer-heading font-bold font-obviously mt-20">
          CFD Analysis and Airflow Optimization for Industrial Dehydrator System
        </h1>
        <p className="text-base  text-footer-text font-normal font-poppins">
          Client: Commercial Dehydrators America
        </p>
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
              <p className="text-base  text-footer-text font-normal font-poppins">
                Commercial Dehydrators America approached us to investigate a
                critical airflow issue within their industrial dehydrator
                system. The dehydrator, consisting of 50 stacked drying trays,
                was experiencing non-uniform airflow at a design speed of 1
                meter per second. Despite a seemingly adequate system layout,
                the airflow was disturbed, non-laminar, and inconsistent,
                leading to uneven drying performance, where some trays would
                complete the cycle while others remained partially moist.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                Their key requirement was clear: achieve smooth, laminar airflow
                across all trays at 1 m/s to ensure uniform drying of products,
                regardless of tray position.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section with Gradient Background */}
      <div
        className="w-full py-section-spacing"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(2, 115, 189, 0.08) 47.74%, rgba(2, 115, 189, 0.16) 88.56%)",
        }}
      >
        <div className="w-full max-w-desktop mx-auto  sm:px-side-space flex flex-col gap-6">
          {/* The Challenge Section */}
          <div className="flex flex-row items-start gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                The Challenge
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                Achieving uniform airflow in industrial dehydrators is often
                more difficult than it appears. At low velocities like 1 m/s,
                airflow is particularly prone to separation, stagnation zones,
                or recirculation pockets, especially when internal geometry
                (such as tray spacing and duct routing) isn't optimized for
                directional control.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                In this case, the design suffered from:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Poor velocity distribution between upper and lower trays
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Disturbed streamlines causing eddy formation near corners and
                  internal walls
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Suboptimal fan placement and outlet orientation
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Pressure imbalances that led to inconsistent flow rates across
                  tray levels
                </li>
              </ul>
              <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                These issues reduced the system's energy efficiency and, more
                importantly, led to non-uniform drying cycles, affecting product
                quality and production scheduling.
              </p>
            </div>
            <CaseStudyImageWrapper
              src="/images/case-studies/item2/img2.png"
              alt="The Challenge"
              className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
            />
          </div>

          {/* Our Solution Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              Our Solution
            </h2>
            <p className="text-base  text-footer-text font-normal font-poppins">
              We initiated a Computational Fluid Dynamics (CFD) simulation
              campaign to diagnose and correct the airflow issues. Using the
              provided CAD model of the drying chamber, a detailed mesh was
              generated focusing on airflow channels, tray spacings, and fan
              inlets/outlets.
            </p>

            {/* Step 1: Baseline Simulation */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Step 1: Baseline Simulation
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  Initial simulations confirmed that:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    At 1 m/s target velocity, the flow was far from laminar.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Velocity contours showed hotspots and stagnation zones
                    between specific tray regions.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    X-velocity contours revealed non-uniform distribution along
                    the axial direction.
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  This validated the client's concerns and gave us a roadmap for
                  intervention.
                </p>
              </div>
              <CaseStudyImageWrapper
                src="/images/case-studies/item2/img3.png"
                alt="Baseline Simulation"
                className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
            </div>

            {/* Step 2: Design Optimization */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Step 2: Design Optimization
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  Multiple design iterations were simulated to identify
                  improvements:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Fan placements were re-evaluated and relocated for optimal
                    inlet symmetry and circulation.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Internal ducting and flow guides were introduced to minimize
                    pressure drop and direct airflow uniformly.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Flow straighteners were considered to reduce turbulence
                    intensity near tray entries.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Outlet angles were adjusted to maintain axial momentum and
                    prevent corner vortices.
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  These changes were all simulated in virtual prototypes using
                  ANSYS Fluent, and contour maps for velocity, x-velocity, and
                  pressure were carefully analyzed.
                </p>
              </div>
              <CaseStudyImageWrapper
                src="/images/case-studies/item2/img4.png"
                alt="Design Optimization"
                className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
            </div>

            {/* Step 3: Optimized Simulation */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Step 3: Optimized Simulation
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  The final design showed dramatic improvement:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Laminar flow was established across all 50 trays at 1 m/s.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Velocity streamlines were clean, directional, and free from
                    significant recirculation.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Pressure contours demonstrated balanced flow paths, ensuring
                    every tray received consistent velocity and air mass.
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  The high-resolution velocity plots, particularly those at Max
                  Ranged @ 1 m/s, clearly demonstrated the effectiveness of the
                  revised layout.
                </p>
              </div>
              <CaseStudyImageWrapper
                src="/images/case-studies/item2/img5.png"
                alt="Optimized Simulation"
                className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
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
          <p className="text-base  text-footer-text font-normal font-poppins">
            The optimized design yielded measurable, simulation-backed results:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Uniform velocity field across all trays (within ±5% deviation)
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Clear laminar flow streamlines ensuring minimal turbulence and
              energy loss
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Balanced pressure distribution from inlet to outlet
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Fully compliant with the 1 m/s target drying velocity
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins mt-4">
            As a result, the system now ensures:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Consistent product drying times
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Elimination of uneven moisture zones
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Improved thermal efficiency
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Enhanced energy savings due to streamlined flow
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins mt-4">
            After review and approval of the CFD results, Commercial Dehydrators
            America adopted the final design for manufacturing. The improvements
            are expected to significantly enhance the performance and
            consistency of their industrial drying systems going forward.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="w-full  rounded-[1.25rem]">
        <div className="w-full max-w-desktop mx-auto  sm:px-side-space ">
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              Conclusion
            </h2>
            <p className="text-base  text-footer-text font-normal font-poppins">
              This project showcased how advanced CFD analysis can dramatically
              improve real-world manufacturing performance by solving invisible
              problems—such as internal flow imbalance.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              Through simulation and intelligent design iterations, we were able
              to transform a disturbed airflow system into a fully optimized
              laminar solution, ensuring each of the 50 trays received
              consistent airflow at the target velocity.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              For Commercial Dehydrators America, the result was a smarter, more
              efficient system—backed by data, validated in simulation, and
              already deployed in production.
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
