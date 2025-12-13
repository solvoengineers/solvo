import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import ProjectListSection from "@/app/components/ProjectListSection";
import CaseStudyImageWrapper from "../components/CaseStudyImageWrapper";

export default function CaseStudyVFCPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="case-study" />

      {/* Hero Section with Gradient Background */}
      <div className="w-full max-w-desktop mx-auto flex flex-col items-start gap-6 sm:px-side-space relative">
        <img
          src="/images/case-studies/item3/img1.png"
          alt="Hero Image"
          className="w-auto object-cover h-8 absolute top-0 left-0 z-10 sm:left-side-space"
        />
        <h1 className="text-footer-heading font-bold font-obviously mt-20">
          Design Optimizing and CFD Analysis for Radial Vortex Flow Controls
          Device (VFC)
        </h1>
        <p className="text-base  text-footer-text font-normal font-poppins">
          Client: SuDS Enviro Ltd | Project: Leeds, UK
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
                SuDS Enviro Ltd engaged us to design and simulate a set of
                Radial Vortex Flow Control (VFC) devices that control stormwater
                flows using a purely hydraulic mechanism—without moving parts,
                power, or complex control systems. These devices needed to
                manage both low and high flow conditions, enabling unrestricted
                flow at low volumes and inducing vortex-driven throttling during
                peak flows.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                The objective was twofold:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Develop three optimized VFC units with different outlet
                  diameters (Ø50mm, Ø75mm, Ø100mm, and extended to Ø125mm &
                  Ø150mm).
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Build a simulation-backed predictive tool capable of
                  generating head–discharge data, orifice sizes, and
                  manufacturing dimensions based on user input of design flow
                  and head.
                </li>
              </ul>
              <p className="text-base  text-footer-text font-normal font-poppins">
                We approached this project in two phases—first focusing on
                establishing a validated baseline design, and then scaling that
                design into a full product range with predictive capability for
                future customizations.
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
                Stormwater management devices like VFCs must perform under a
                wide range of conditions. The client's expectations were
                particularly demanding:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Zero power and no moving parts, yet reliably respond to both
                  low and high flows.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  A design that maximizes flushing without increasing blockage
                  risks.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Self-cleaning characteristics, especially during high-flow
                  vortex conditions.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Capability to throttle flow precisely to target discharge
                  rates at specific head heights.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  Seamless integration with SuDS infrastructure with minimal
                  post-installation modification.
                </li>
              </ul>
              <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                In addition, the client emphasized:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-base  text-footer-text font-normal font-poppins">
                  A cross-sectional area 3–6 times greater than traditional
                  orifice plates.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  A design with large internal openings to reduce the chance of
                  clogging.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  A need to simulate and visualize flow behavior, especially for
                  kickback and flush thresholds.
                </li>
                <li className="text-base  text-footer-text font-normal font-poppins">
                  A deliverable in the form of a locked Excel-based calculator,
                  generating both numeric outputs and graphical performance
                  curves for each unit size.
                </li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <CaseStudyImageWrapper
                src="/images/case-studies/item3/img2.png"
                alt="The Challenge"
                className="w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
              <CaseStudyImageWrapper
                src="/images/case-studies/item3/img3.png"
                alt="The Challenge"
                className="w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
            </div>
          </div>

          {/* Our Solution Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
              Our Solution
            </h2>

            {/* Geometric and Performance Modeling */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Geometric and Performance Modeling
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  We started with an existing 350mm cowl geometry and focused
                  first on the 100mm outlet version (Unit 3). From there, other
                  units were scaled proportionally, and geometric dependencies
                  were established among the variables:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Outlet opening diameter
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Swirl chamber width
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Inlet height
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Overall swirl diameter
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  CFD simulations were carried out in ANSYS to replicate real
                  flow behavior. We monitored the formation of vortex patterns,
                  pressure differentials, and flow regimes under various head
                  conditions (0.1m to 2.5m).
                </p>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  The resulting data allowed us to:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Optimize the kickback point, ensuring the flow throttles
                    only at the precise design head.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Adjust "Area A" to maintain a vertical flow increase profile
                    and avoid premature bypassing.
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Establish a buoyancy-driven emergency flushing mechanism
                    that triggers when blockage threatens the main discharge,
                    redirecting flow through a secondary path and clearing
                    debris autonomously.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <CaseStudyImageWrapper
                  src="/images/case-studies/item3/img4.png"
                  alt="Geometric and Performance Modeling"
                  className="w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
                />

                <CaseStudyImageWrapper
                  src="/images/case-studies/item3/img5.png"
                  alt="Geometric and Performance Modeling"
                  className="w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
                />
              </div>
            </div>

            {/* Simulation Setup and Parameters */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Simulation Setup and Parameters
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  The radial vortex unit was tested across various head values
                  (from 0 to 2.5m) with fine mesh refinement and transient
                  simulation. Key parameters:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Design Head: 0.77m
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Design Flow: 235 L/s
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Flushing Flow Requirement: 180 L/s
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  The simulations showed rapid vortex formation with
                  well-developed air cores and high central backpressure. Flow
                  visualization confirmed rotational symmetry, effective swirl
                  generation, and minimal dead zones.
                </p>
              </div>
              <CaseStudyImageWrapper
                src="/images/case-studies/item3/img6.png"
                alt="Simulation Setup"
                className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
            </div>

            {/* Development of Predictive Tool */}
            <div className="flex flex-row items-start gap-[1.5rem] sm:grid sm:grid-cols-1 sm:gap-6">
              <div className="flex-1 flex flex-col gap-[1.375rem]">
                <h3 className="text-[1.25rem] leading-[1.4em] text-footer-heading font-semibold font-poppins">
                  Development of Predictive Tool
                </h3>
                <p className="text-base  text-footer-text font-normal font-poppins">
                  In parallel, we developed an Excel-based simulation model
                  using empirical correlations derived from CFD results. Users
                  can input any design head and desired flow, and the tool
                  automatically returns:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Required inlet size
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Internal orifice diameter
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Manufacturing specifications
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    A head–discharge curve (both graph and table)
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Minimum sump depth, pipe diameter, and clearance dimensions
                  </li>
                </ul>
                <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                  This tool ensures that future VFC designs can be generated and
                  quoted quickly with simulation-backed accuracy.
                </p>
              </div>
              <CaseStudyImageWrapper
                src="/images/case-studies/item3/img7.png"
                alt="Predictive Tool"
                className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
              />
            </div>

            {/* Additional Images */}
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
            The simulations for the 114mm LR3 unit revealed impressive
            performance:
          </p>

          {/* Performance Table */}
          <div className="overflow-x-auto rounded-2xl bg-white border border-footer-border shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-blue/5">
                  <th className="px-6 py-4 text-base  text-footer-heading font-semibold font-poppins text-left first:rounded-tl-2xl last:rounded-tr-2xl">
                    Head (m)
                  </th>
                  <th className="px-6 py-4 text-base  text-footer-heading font-semibold font-poppins text-left first:rounded-tl-2xl last:rounded-tr-2xl">
                    Flow (L/s)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-footer-border/30 hover:bg-primary-blue/2 transition-colors">
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    0.1
                  </td>
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    35.374
                  </td>
                </tr>
                <tr className="border-t border-footer-border/30 hover:bg-primary-blue/2 transition-colors">
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    0.5
                  </td>
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    178.576
                  </td>
                </tr>
                <tr className="border-t border-footer-border/30 hover:bg-primary-blue/2 transition-colors">
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    1.0
                  </td>
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    295.748
                  </td>
                </tr>
                <tr className="border-t border-footer-border/30 hover:bg-primary-blue/2 transition-colors">
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    1.5
                  </td>
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins">
                    363.732
                  </td>
                </tr>
                <tr className="border-t border-footer-border/30 hover:bg-primary-blue/2 transition-colors last:rounded-b-2xl">
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins first:rounded-bl-2xl">
                    2.5
                  </td>
                  <td className="px-6 py-4 text-base  text-footer-text font-normal font-poppins last:rounded-br-2xl">
                    504.908
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-base  text-footer-text font-normal font-poppins">
            Key outcomes:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Flow control exceeded expectations, with a flushing flow 2–4×
              greater than minimum required, enabling rapid clearance of debris.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              The emergency door system worked reliably, driven by buoyancy—not
              mechanical force—allowing for effective system reset and
              maintenance-free operation.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Flow curves were smooth, consistent, and scalable across all five
              unit sizes.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Blockage risk was minimized through:
            </li>
          </ul>
          <ul className="flex flex-col gap-2 ml-6">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Larger openings vs traditional orifices
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Vortex-powered self-flushing
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Emergency bypass with re-circulating vortex creation
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins mt-4">
            Installation and maintenance considerations were also integrated:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Custom-fit unit housings
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              No need for moving components
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Easy access via standard rodding points
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              316L stainless steel for durability against chemical and abrasion
              wear
            </li>
          </ul>
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
              This project with SuDS Enviro Ltd demonstrates how computational
              fluid dynamics and parametric modeling can transform product
              development in stormwater engineering. The LR3 series of Radial
              Vortex Flow Controls are now equipped with:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="text-base  text-footer-text font-normal font-poppins">
                A validated and optimized geometric design
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Reliable throttling across a wide head range
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Self-maintaining flow characteristics
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                A user-friendly Excel tool for design and quoting
              </li>
            </ul>
            <p className="text-base  text-footer-text font-normal font-poppins">
              We've not only delivered a high-performing device family but also
              empowered the client with a repeatable design and quoting system
              for future applications.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The system is now ready for production and has been successfully
              validated against both performance benchmarks and practical
              deployment constraints. Next steps include physical prototyping,
              field testing, and scaling for additional head/flow combinations.
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
