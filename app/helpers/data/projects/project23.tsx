import { IFullProject } from "../../projects.data";

export const project23: IFullProject = {
  title:
    "Structural Strength Analysis of a 6-DOF Robotic Drilling Arm and Its Joints",
  seoTitle:
    "6-DOF Robotic Drilling Arm Structural FEA | Strength, Stress and Factor of Safety in SolidWorks Simulation",
  description:
    "A structural FEA strength analysis of a complete 6-DOF robotic drilling arm and its bolted joints in SolidWorks Simulation, checking von Mises stress, displacement, and factor of safety under a 200 N.m drilling torque.",
  image: "/images/projects/item23/main-image.webp",
  thumbnail: "/images/projects/item23/thumbnail.png",
  link: "/projects/structural-analysis-6-dof-robotic-drilling-arm",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              A robotic drilling arm has to be strong in two ways at once. It has
              to carry the drilling load without the structure yielding, and it has
              to hold that load without flexing so much that the drill wanders off
              target. This project put a complete 6-DOF robotic drilling arm,
              including the joints and bolts that tie it together, through a
              structural FEA in SolidWorks Simulation to check exactly that: how
              strong the arm is, and how much it moves, when the drilling torque is
              applied.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The important part is that the whole assembly was analysed, not just
              a single clean part. Joints and bolted connections are usually where
              a structure is weakest and where stress concentrates, so testing the
              full assembly is what makes the result trustworthy. The analysis
              produced the stress across the arm, the deflection at the tool end,
              and a clear factor of safety against the material yield strength.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item23/main-image.webp"
              alt="3D model of the complete 6-DOF robotic drilling arm assembly analysed in SolidWorks Simulation"
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
            Project Details
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The model is a full 6-DOF (six degrees of freedom) robotic arm built
            for drilling, analysed as a complete assembly with its links, joints,
            and bolted connections in place. The key details were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Model: the complete FINAL ASSEMBLY of the 6-DOF robotic drilling
              arm, including the joints and bolts that hold the links together.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Material: AISI 1020 steel throughout, with a yield strength of about
              351.6 MPa and a density of roughly 7,900 kg per cubic metre.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Analysis type: a static structural study in SolidWorks Simulation,
              which is the right choice for a strength and stiffness check under a
              steady load.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Focus: the strength of the arm and its joints under the load applied
              during drilling.
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
            Objective and Approach
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The objective was to confirm that the arm and its joints can carry the
            drilling load safely, and to find out how much the arm deflects while
            doing so. The approach was a static FEA with the loads and constraints
            set to represent the arm in service:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Fixture: the base was fully fixed with a fixed geometry constraint,
              holding the arm the way it is anchored in reality.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Load: a drilling torque of 200 N.m applied across the working faces,
              representing the reaction the arm feels while drilling.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Mesh: a solid mesh across the full assembly with mesh controls to
              resolve the joints and bolted regions where stress concentrates.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Outputs: von Mises stress, resultant displacement, and equivalent
              strain, read together to judge both strength and stiffness.
            </li>
          </ul>
          <p className="text-base text-footer-text font-normal font-poppins">
            Applying the torque across the assembly, rather than to one idealised
            part, is what lets the joints and bolts carry the load in the
            simulation the same way they do on the real arm, so the stress that
            shows up at those connections is meaningful rather than hidden.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Simulation and Results
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The results show an arm that comfortably survives the drilling load.
            The peak von Mises stress reached about 251.6 MPa, sitting in a
            localised spot while the majority of the structure stayed at far lower
            stress. Against the AISI 1020 yield strength of 351.6 MPa, that peak
            gives a factor of safety of roughly 1.4, so the arm stays below
            yielding with a real margin in hand.
          </p>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                The von Mises stress plot shows where that peak lives. Most of the
                arm is a calm low-stress blue, and the high stress is concentrated
                at a specific joint region, which is exactly where you would expect
                a bolted, articulated structure to work hardest. Knowing precisely
                where the highest stress sits is what makes the result useful,
                because that is the spot to watch or reinforce.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                Reaction at the fixed base came out to a resultant of about 472.3
                N, which balances the applied drilling load and confirms the model
                is properly constrained and in equilibrium.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item23/content-image1.webp"
                alt="von Mises stress result of the 6-DOF robotic drilling arm showing peak stress of 251.6 MPa concentrated at a joint"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                Stiffness is the other half of the picture, and here the arm
                performs very well. The maximum resultant displacement was only
                about 0.217 mm, found at the tool end furthest from the fixed base,
                which is a tiny movement for a structure of this size. The
                equivalent strain stayed correspondingly low, with a peak of about
                6.0e-04.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                For a drilling arm, that small deflection matters as much as the
                stress. A stiff arm keeps the drill where it is aimed, so a maximum
                movement of roughly two tenths of a millimetre under full torque is
                a strong result for accuracy.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item23/content-image2.webp"
                alt="Resultant displacement result of the 6-DOF robotic drilling arm showing a maximum deflection of 0.217 mm at the tool end"
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
            Recommendation and Conclusion
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The conclusion is that the 6-DOF robotic drilling arm, joints and all,
            is strong enough for the 200 N.m drilling load. It stays below the
            yield strength of its AISI 1020 steel with a factor of safety of about
            1.4, and it is stiff enough to hold the drill on target with only about
            0.217 mm of deflection. As a strength check, the design passes.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            A few recommendations follow naturally from the results:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              A factor of safety near 1.4 is acceptable, but it is a modest margin.
              If the arm may see higher loads, shock loading, or harder drilling,
              reinforcing the highest-stress joint would build in more headroom.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Because drilling is repetitive, a fatigue check on that peak-stress
              region is worth doing, since a stress that is safe for a single load
              can still matter over many thousands of cycles.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              With the arm proven strong, there is room to trim weight away from
              the low-stress areas, which make up most of the structure, without
              losing the safety margin.
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
            Structural FEA at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Whether a structure holds up under load is rarely obvious by eye,
            especially once joints, bolts, and articulated links are involved. FEA
            answers it directly, showing the stress, the deflection, and the factor
            of safety, and pointing to the exact spot that works hardest, so a
            design can be signed off or improved on evidence rather than
            guesswork. Testing a full assembly, joints included, as we did here, is
            what turns a strength check into something you can rely on.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run structural FEA in SolidWorks Simulation and
            Ansys for machines, robotic arms, frames, and bolted assemblies,
            covering stress, deflection, factor of safety, and fatigue, alongside
            our wider FEA and CFD consulting work. If you have a structure or a
            mechanism you need proven strong before it is built, our team can help.
            Reach out through our contact page and talk it through with a
            structural engineer.
          </p>
        </div>
      ),
    },
  ],
};
