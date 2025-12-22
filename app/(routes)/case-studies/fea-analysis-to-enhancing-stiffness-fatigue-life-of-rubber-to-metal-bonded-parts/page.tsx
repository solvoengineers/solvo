import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import PageHeading from "@/app/components/PageHeading";
import ProjectListSection from "@/app/components/ProjectListSection";
import CaseStudyImageWrapper from "../components/CaseStudyImageWrapper";

export default function CaseStudyFEAPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing page-wrapper">
      <Header activeRoute="case-studies" />

      {/* Hero Section with Gradient Background */}
      <div className="w-full max-w-desktop mx-auto flex flex-col items-start gap-6 sm:px-side-space relative">
        <img
          src="/images/case-studies/item1/img1.png"
          alt="Hero Image"
          className="w-auto object-cover h-12 absolute top-0 left-0 z-10 sm:left-side-space"
        />
        <h1 className="text-footer-heading font-bold font-obviously mt-20">
          FEA Analysis to Enhancing Stiffness & Fatigue Life of Rubber-to-Metal
          Bonded Parts
        </h1>
        <img
          src="/images/about/hero-dots2.webp"
          alt="Hero dots"
          className="absolute top-0 left-0 -translate-y-[13rem] sm:h-[10rem] h-[15rem]  "
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
                Bony Polymers, a trusted manufacturer of precision
                rubber-to-metal bonded parts in India, approached us to improve
                the performance of a critical side bumper assembly. The goal was
                to increase the component's static stiffness to 0.7 kN/mm for a
                displacement range of 5–10 mm, while also ensuring that the part
                could reliably withstand at least 600,000 load cycles.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                The application demanded not just mechanical integrity, but also
                longevity under fatigue, especially given the repeated stress
                such components experience in real-world use. Our task was to
                use finite element analysis (FEA) and material modeling to
                evaluate, refine, and validate a design that could meet both
                mechanical stiffness and durability targets.
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
          {/* Results & Benefits Section */}
          <div className="flex flex-row items-center gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                The Challenge
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                The initial version of the side bumper exhibited suboptimal
                stiffness and unclear fatigue behaviour. While the basic
                geometry and material selection were in place, there was a lack
                of clarity on whether the part could meet the required
                mechanical response within the allowed deformation limits or
                survive long-term cyclic loads.
              </p>
              <p className="text-lg leading-[2em] text-footer-heading font-semibold font-poppins">
                The specific challenges included:
              </p>
              <div className="flex flex-row gap-4">
                <ul className="">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Achieving a static stiffness of 0.7 kN/mm between 5 mm and
                    10 mm deflection
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Ensuring consistent load response across a broad force range
                    (up to 18 kN)
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Modeling complex rubber behavior accurately
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Validating that the component could withstand 600,000
                    fatigue cycles, especially in high-strain zones
                  </li>
                </ul>
              </div>
              <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                It became clear that a deep dive into hyperelastic material
                modeling, fatigue simulation, and load path optimization was
                necessary to meet these targets.
              </p>
            </div>
            {/* <CaseStudyImageWrapper
              src="/images/case-studies/item1/img6.png"
              alt="The Challenge"
              className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
            /> */}
          </div>
          <div className="">
            <div className="flex flex-col gap-6">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                Our Solution
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                We began by reviewing the initial simulation model and
                identified several areas for refinement. These included boundary
                conditions, material definitions, and how loads were applied.
                After cleaning up the setup, we modified the geometry to better
                distribute stresses and reduce peak strain zones.
              </p>
            </div>
          </div>
          {/* Advanced FEA Modeling Section */}
          <div className="flex flex-row items-center gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                Advanced FEA Modeling
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                The updated simulation model was built in ANSYS, and it
                included:
              </p>
              <div className="flex flex-row gap-4">
                <ul className="">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Fixing inaccuracies in the initial geometry setup
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Applying realistic boundary conditions (fixed face and
                    precise load application)
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Assigning the correct elastic modulus (12.4 MPa) for the
                    bottom rubber plate
                  </li>
                </ul>
              </div>
              <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                To capture the true non-linear response of rubber, we introduced
                hyperelastic material models, including Neo-Hookean and Marlow,
                both of which are better suited for elastomeric simulations than
                traditional linear elastic assumptions.
              </p>
            </div>
            <CaseStudyImageWrapper
              src="/images/case-studies/item1/img2.png"
              alt="Advanced FEA Modeling"
              className="flex-1 w-[15rem] h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] mx-auto sm:mx-auto"
            />
          </div>

          {/* Stiffness Evaluation Section */}
          <div className="flex flex-row items-center gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                Stiffness Evaluation
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                We conducted multiple FEA iterations to optimize the design. A
                key outcome was when a 7 kN force produced exactly 10 mm of
                deformation, confirming that the stiffness had reached:
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                7 kN / 10 mm = 0.7 kN/mm
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                This value met the exact target set by the client.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                We also extended the load range to verify behavior under higher
                forces. Simulations ran up to 18 kN, showing deformation
                behavior stayed within safe limits without overstressing any
                region of the part.
              </p>
            </div>
            <CaseStudyImageWrapper
              src="/images/case-studies/item1/img3.png"
              alt="Stiffness Evaluation"
              className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
            />
          </div>

          {/* Fatigue & Durability Analysis Section */}
          <div className="flex flex-row items-center gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                Fatigue & Durability Analysis
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                Fatigue simulation was then performed using ANSYS. The fatigue
                load was set at 18 kN, representing a conservative estimate of
                operational stress. The analysis revealed:
              </p>
              <div className="flex flex-row gap-4">
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    The main load-bearing rubber areas exceeded the
                    600,000-cycle requirement
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Localized areas near the edges of the bottom plate had a
                    lower life (~170,000 cycles), but these regions primarily
                    serve damping functions, not structural roles, and thus did
                    not compromise the functionality
                  </li>
                </ul>
              </div>
            </div>
            <CaseStudyImageWrapper
              src="/images/case-studies/item1/img4.png"
              alt="Fatigue & Durability Analysis"
              className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
            />
          </div>

          {/* Final Reporting & Approval Section */}
          <div className="flex flex-row items-center gap-[1.5rem]  sm:grid sm:grid-cols-1 sm:gap-6">
            <div className="flex-1 flex flex-col gap-[1.375rem]">
              <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                Final Reporting & Approval
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins">
                We compiled all results, including:
              </p>
              <div className="flex flex-row gap-4">
                <ul className="flex flex-col gap-2">
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Stress and deformation plots at various load levels
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Fatigue life maps
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    Graphs showing deformation versus force
                  </li>
                  <li className="text-base  text-footer-text font-normal font-poppins">
                    A stiffness curve confirming mechanical targets
                  </li>
                </ul>
              </div>
              <p className="text-base  text-footer-text font-normal font-poppins mt-4">
                The complete report was shared with Bony Polymers, who reviewed
                the solution and officially approved the final design for
                production use.
              </p>
            </div>
            <CaseStudyImageWrapper
              src="/images/case-studies/item1/img5.png"
              alt="Final Reporting & Approval"
              className="flex-1 w-full h-[22.4375rem] sm:max-h-[17rem] sm:max-w-[25rem] sm:mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-light-blue py-section-spacing  ">
        <div className="flex flex-col gap-6 mx-auto max-w-desktop sm:px-side-space">
          <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
            Results & Benefits
          </h2>
          <p className="text-base  text-footer-text font-normal font-poppins">
            This project resulted in a robust, validated solution that:
          </p>
          <div className="flex flex-row gap-4">
            <ul className="">
              <li className="text-base  text-footer-text font-normal font-poppins">
                Achieved 0.7 kN/mm stiffness precisely within the target
                deflection range
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Demonstrated stable deformation behavior across a wide loading
                spectrum
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Surpassed the 600,000-cycle fatigue durability requirement
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Maintained performance even under worst-case loading (18 kN)
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Minimized stress concentrations through design optimization
              </li>
            </ul>
          </div>
          <p className="text-base  text-footer-text font-normal font-poppins mt-4">
            The integration of hyperelastic modeling made the predictions much
            more reliable, reducing the need for excessive physical prototyping
            and helping the client accelerate their design-to-approval timeline.
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
              For Bony Polymers, this project validated that simulation driven
              design can deliver real-world performance. Through a strategic
              blend of advanced FEA techniques, realistic material modeling and
              fatigue simulation, we were able to exceed both mechanical and
              durability expectations.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The new side bumper design is now approved for use, and the
              process helped reduce development cost, improve confidence in
              long-term reliability, and ensure compliance with the
              application's demanding performance criteria.
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
