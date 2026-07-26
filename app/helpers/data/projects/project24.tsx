import { IFullProject } from "../../projects.data";

export const project24: IFullProject = {
  title:
    "CFD and FEA of a Supersonic Tandem-Wing versus Single-Wing Aircraft",
  seoTitle:
    "Supersonic Tandem-Wing vs Single-Wing Aircraft | CFD and FEA in SolidWorks Flow Simulation and Structural Analysis",
  description:
    "A combined CFD and FEA study comparing a supersonic tandem-wing aircraft with a single-wing design in SolidWorks Flow Simulation, looking at pressure and velocity at three angles of attack, and a structural analysis showing the wing needs a stressed skin to survive supersonic loads.",
  image: "/images/projects/item24/main-image.webp",
  thumbnail: "/images/projects/item24/thumbnail.webp",
  link: "/projects/cfd-fea-supersonic-tandem-wing-vs-single-wing-aircraft",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              This project asks a design question and answers it from two sides at
              once. The question is whether a tandem-wing layout, with two wings
              working together, is a better way to build a supersonic aircraft than
              a conventional single wing. Answering it properly means looking at
              both how the air flows over each design and whether the structure can
              actually survive the loads, so the study pairs CFD for the
              aerodynamics with FEA for the structure.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Both aircraft were run through CFD in SolidWorks Flow Simulation at
              three different angles of attack, capturing the pressure and velocity
              around each one as the flow pushed into the supersonic range, with
              speeds in the field reaching up to roughly 788 m/s. The structure was
              then tested separately with FEA to see what it would take for the
              wing to hold together under those supersonic loads.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item24/main-image.webp"
              alt="CFD velocity contour of the supersonic tandem-wing aircraft in SolidWorks Flow Simulation showing high-speed flow up to around 788 metres per second"
              className="rounded-[1.25rem] w-[29.5625rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
  ],
  sections: [
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Objectives
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The aim was to compare the two wing layouts fairly, on both
            aerodynamics and structure, across a range of flight attitudes. The
            objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Compare the tandem-wing and single-wing aircraft aerodynamically
              using CFD, at the same conditions.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Run each design at three angles of attack, so the comparison holds
              across different flight attitudes rather than a single point.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Map the pressure and velocity fields around each aircraft as the flow
              reaches supersonic speed.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Check, with FEA, whether the wing structure can survive the loads
              that supersonic flight puts on it.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            CFD Setup
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The aerodynamics were solved in SolidWorks Flow Simulation, with the
            flow domain wrapped around each aircraft and the mesh refined close to
            the body where the gradients are sharpest. The setup was:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Tool: SolidWorks Flow Simulation, with air treated as a compressible
              gas so the supersonic behaviour is captured correctly.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Mesh: an adaptive mesh that packs finer cells around the aircraft and
              in the wake, and coarser cells far away, to resolve the flow without
              wasting cells.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Conditions: three angles of attack for each design, run into the
              supersonic range.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Outputs: surface pressure, pressure cut-planes, and velocity
              cut-planes, for both the tandem and single-wing aircraft.
            </li>
          </ul>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item24/content-image1.webp"
              alt="Adaptive CFD mesh around the aircraft in SolidWorks Flow Simulation, refined near the body and in the wake"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Aerodynamic Results
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The CFD gives a clear picture of the flow around the tandem-wing
            aircraft. The velocity field, shown at the top of this page, captures
            the flow accelerating hard around the body and reaching supersonic
            speeds, with the sharp changes in the wake that mark compressible,
            high-speed flow. The single-wing design was run through the same CFD at
            the same conditions to serve as a baseline, so the tandem results here
            can be judged like-for-like against a conventional layout.
          </p>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                The surface pressure on the aircraft itself shows how the tandem
                layout splits the aerodynamic load between its two wings. Pressure
                builds on the forward-facing surfaces and drops over the upper and
                trailing areas, the pattern that generates lift, and seeing it on
                both wings at once is what makes the tandem behaviour clear: the
                load is shared rather than carried by a single surface.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                That load sharing is the whole point of a tandem wing, and the
                pressure plot shows it happening across both wings, which is the
                behaviour the design is trying to exploit.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item24/content-image3.webp"
                alt="CFD surface pressure plot on the tandem-wing aircraft in SolidWorks Flow Simulation, showing the aerodynamic load shared across the two wings"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                A pressure cut-plane through the flow makes the field around the
                body easy to read, showing the high-pressure region built up ahead
                of the aircraft and the lower-pressure zones around it. This is the
                footprint of a body pushing through the air at speed, and it shows
                where the flow is being turned and compressed as it passes.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                Running this at three angles of attack shows how the loading shifts
                as the aircraft pitches, which is exactly the information needed to
                judge one layout against the other rather than guessing from a
                single case.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item24/content-image2.webp"
                alt="CFD pressure cut-plane around the tandem-wing aircraft showing the high-pressure region ahead of the body"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Structural FEA and the Stressed-Skin Result
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Aerodynamics is only half the problem. A supersonic wing also has to
            survive the loads it generates, and this is where the FEA produced the
            most striking result of the whole project. The wing was analysed in two
            ways, and the difference between them is dramatic.
          </p>
          <div className="w-full">
            <img
              src="/images/projects/item24/content-image4.webp"
              alt="FEA von Mises stress comparison showing the core structure alone failing below Mach 1 and the same structure with a 1 mm 7075-T6 skin surviving loads equivalent to about Mach 2.5"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            On the left, the internal core structure was made to carry the load on
            its own, with the wing skin left out of the load path. It fails, and it
            fails early: the stress runs far past the material yield strength, so
            this arrangement could not even survive Mach 1. On the right, a 1 mm
            skin of 7075-T6, a high-strength aluminium alloy, was bonded to that
            same core so that the skin carries load too. Now the peak stress drops
            to about 500 MPa, just under the 505 MPa yield strength, and the wing
            survives loads equivalent to roughly Mach 2.5.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            The lesson is a classic one in aircraft structures, shown here in a
            single clear comparison: the skin is not just a cover, it is structure.
            By bonding a thin stressed skin to the core, the whole wing shares the
            load and its strength jumps from failing below Mach 1 to holding
            together well into the supersonic range. That is the kind of finding
            that changes a design, and FEA is what makes it visible before anything
            is built.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Conclusion
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Put together, the two halves of the study give a full answer. The CFD
            shows how the tandem-wing and single-wing aircraft each handle
            supersonic flow across three angles of attack, providing a fair,
            like-for-like aerodynamic comparison of the two layouts. The FEA then
            shows that whichever aerodynamic layout is chosen, the wing structure
            has to be built as a stressed skin over a core to survive supersonic
            loads, since the core alone fails below Mach 1 while the skinned
            structure holds to around Mach 2.5. Aerodynamics and structure have to
            be judged together, and this project does exactly that.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Aerospace CFD and FEA at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            High-speed aircraft design is where aerodynamics and structures meet
            most sharply, and getting either one wrong sinks the design. CFD shows
            the pressure, the velocity, and the shocks that decide how a wing
            performs, while FEA shows whether the structure can carry the loads that
            performance creates. Running the two together, as we did here for a
            supersonic tandem-wing concept, is what lets a bold design be judged
            honestly before any metal is cut.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run aerodynamic CFD and structural FEA in
            SolidWorks Flow Simulation, Ansys, and SolidWorks Simulation for wings,
            airframes, UAVs, and high-speed and supersonic designs, covering
            pressure and velocity fields, lift and drag, stress, and stressed-skin
            structures. If you are developing an aircraft or any high-speed design
            and need both its aerodynamics and its structure understood, our team
            can help. Reach out through our contact page and talk it through with a
            CAE engineer.
          </p>
        </div>
      ),
    },
  ],
};
