import { IFullProject } from "../../projects.data";

export const project28: IFullProject = {
  title: "Filling and Emptying of a Water Tank Using the VOF Multiphase Model",
  seoTitle:
    "Water Tank Filling and Siphon Emptying CFD | VOF Multiphase Air-Water Simulation in Ansys Fluent",
  description:
    "A transient VOF multiphase CFD simulation of a water tank that fills and then empties itself through a U-tube siphon, tracking the air and water interface over time in Ansys Fluent.",
  image: "/images/projects/item28/main-image.webp",
  thumbnail: "/images/projects/item28/thumbnail.webp",
  link: "/projects/water-tank-filling-emptying-vof-multiphase-siphon-cfd",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              This project models the filling and emptying of a water tank as a
              transient multiphase problem, solved with the volume of fluid (VOF)
              model for air and water in Ansys Fluent. An initial water level is set
              in the tank, the water supply is turned on for the first second of the
              simulation and then shut off, and the model tracks what happens next.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              As the tank fills, the water level rises until it flows over the top of
              a U-tube and starts a siphon. Once that siphon takes hold, it keeps
              pulling water out on its own and effectively empties the tank, even
              with the supply switched off. The whole sequence is captured by
              following the air and water interface through time.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item28/main-image.webp"
              alt="CFD VOF multiphase simulation of a water tank with a U-tube, showing the air and water setup in Ansys Fluent"
              className="w-[29.5625rem] h-auto sm:w-full object-contain"
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
            The aim was to capture a self-draining tank from start to finish and
            show that the siphon forms on its own. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Model the filling and emptying of a water tank as a transient air and
              water problem using the VOF multiphase model.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Feed the tank for the first second only, then shut the supply off and
              let the physics take over.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Capture the moment the water reaches the U-tube and the siphon starts.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Follow the air and water interface through time as the siphon drains
              the tank.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-primary-blue font-semibold font-poppins">
              Model and Mesh
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              The tank and its U-tube were modelled in SolidWorks and then meshed for
              the simulation. The inlet and outlet were named on the model, along
              with the wall, ambient, and side wall surfaces, so each boundary could
              be given the right condition.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Getting these named selections right is what lets the water enter,
              leave, and interact with the tank correctly once the solver runs.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item28/content-image1.webp"
              alt="Mesh and named inlet, outlet, and wall selections on the water tank and U-tube model for the VOF simulation"
              className="w-[29.5625rem] h-auto sm:w-full object-contain"
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
            VOF Multiphase Setup
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The problem was set up as a transient VOF simulation with two phases, air
            and water, and a surface tension coefficient of 0.072 N/m between them.
            The boundary conditions treat the inlet and ambient openings as air with
            a backflow volume fraction of one, so air can move in and out as the
            water shifts.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            The solution was then initialised, with the starting water region defined
            and patched into the tank to set the initial water level before the run.
            From that point the solver advances in time, and the VOF model keeps a
            sharp interface between the air and the water so the level and the siphon
            can be seen clearly.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-primary-blue font-semibold font-poppins">
              Filling the Tank
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              With the supply on for the first second, water enters the tank and the
              level begins to climb. The contour shows the water phase building up
              against the air above it, with the interface between them rising as the
              tank fills.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              This is the stage that sets up everything after it, since the tank has
              to fill far enough for the water to reach the top of the U-tube.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item28/content-image2.webp"
              alt="Water volume fraction contour showing the tank filling as the water level rises toward the U-tube"
              className="w-[29.5625rem] h-auto sm:w-full object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-primary-blue font-semibold font-poppins">
              The Siphon Empties the Tank
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              Once the water climbs over the top of the U-tube, it starts to run down
              the far side and pulls the water behind it, which is the siphon taking
              hold. From here the tank drains on its own, with the supply already
              switched off, until the level drops below the point where the siphon
              can keep going.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The contour and the animation on the project card both show this stage,
              where the water is being carried out through the U-tube and the tank
              empties itself.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item28/content-image3.webp"
              alt="Water volume fraction contour showing the U-tube siphon draining the water tank"
              className="w-[29.5625rem] h-auto sm:w-full object-contain"
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
            Conclusion
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The simulation captures the full cycle of a self-draining tank in one
            transient run: a short fill, the water reaching the U-tube, the siphon
            starting, and the tank emptying on its own. Solving it with the VOF
            multiphase model keeps a clean line between the air and the water the
            whole way through, which is what makes the level and the siphon easy to
            read. It is a compact example of how multiphase CFD can predict free
            surface behaviour that would be hard to judge any other way.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Multiphase and Free Surface CFD at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Anything with a moving liquid surface, filling, draining, sloshing, or
            siphoning, needs multiphase CFD to get right, because the shape of the
            air and water interface drives the whole behaviour. Tracking that
            interface in time is exactly what the VOF model is built for.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run multiphase and free surface CFD in Ansys Fluent
            and SolidWorks Flow Simulation for tanks, fills and drains, sloshing,
            mixing, and pipe flow, covering the air and water interface, flow rates,
            and pressure. If you have a filling, draining, or free surface problem
            and want to see how it behaves before building it, our team can help.
            Reach out through our contact page and talk it through with a CFD
            engineer.
          </p>
        </div>
      ),
    },
  ],
};
