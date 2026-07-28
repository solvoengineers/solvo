import { IFullProject } from "../../projects.data";

export const project29: IFullProject = {
  title: "Laser Heat Source Simulation on a Plate Using Transient Thermal Analysis",
  seoTitle:
    "Laser Heat Source on a Plate | Transient Thermal FEA in Ansys, Temperature and Heat Flux",
  description:
    "A transient thermal simulation of a laser heat source applied to a plate in Ansys, showing how the temperature and total heat flux distribute and evolve as the plate heats.",
  image: "/images/projects/item29/main-image.webp",
  thumbnail: "/images/projects/item29/thumbnail.webp",
  link: "/projects/laser-heat-source-plate-transient-thermal-ansys",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              This project simulates a laser acting as a concentrated heat source on
              a plate, solved as a transient thermal analysis in Ansys. A laser puts
              a lot of energy into a very small spot, and the plate has to carry that
              heat away, so the simulation follows how the temperature builds under
              the beam and how the heat spreads through the material over time.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Two results tell the story: the temperature distribution, which shows
              how hot the plate gets and where, and the total heat flux, which shows
              how the heat energy actually moves through the plate. Watching both
              change through time shows the plate heating up under the laser and
              conducting that heat outward.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item29/main-image.webp"
              alt="Rendered view of a laser heat source acting on a plate in an Ansys transient thermal simulation"
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
            The aim was to capture how a plate responds to a laser as a heat source,
            through time rather than at a single instant. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Model a laser as a concentrated heat source applied to a plate.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Solve the heating as a transient thermal analysis so the results
              evolve in time.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Capture the temperature distribution across the plate as it heats.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Capture the total heat flux to see how the heat moves through the
              material.
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
            Setup
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The plate was set up for a transient thermal analysis, with the laser
            applied as a concentrated heat input on the surface and the rest of the
            plate free to conduct and shed heat. Solving it as transient rather than
            steady state is the point here, because what matters is how the
            temperature and the heat flux build and move as time passes, not just the
            final state.
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
              Temperature Distribution
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              The temperature result shows the plate heating under the laser. A sharp
              hot spot forms right where the beam lands, and as time goes on the heat
              spreads out into the surrounding material, with the temperature falling
              off with distance from the source.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The animation makes it easy to see how quickly the peak temperature
              builds and how far the heat reaches into the plate.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <video
              src="/images/projects/item29/temperature.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[29.5625rem] h-auto sm:w-full"
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
              Total Heat Flux Distribution
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              Total heat flux shows how the heat energy moves through the plate,
              rather than how hot it is. The flux is highest around the laser spot,
              where the temperature gradients are steepest, and it points outward as
              heat is driven from the hot region into the cooler material.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The animation shows this flux pattern developing as the plate heats,
              which is what tells you how effectively the material is carrying the
              laser's energy away.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <video
              src="/images/projects/item29/heat-flux.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[29.5625rem] h-auto sm:w-full"
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
            Together the two results give a full read on the laser heating: the
            temperature distribution shows how hot the plate gets and where, and the
            total heat flux shows how that heat travels through the material. Solving
            it as a transient analysis captures the whole build-up rather than a
            single snapshot, which is what you need for anything involving a laser or
            another concentrated heat source, from welding and cutting to heat
            treatment.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Thermal and Transient Heat Transfer Simulation at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Concentrated heat sources like lasers are hard to judge by hand, because
            the temperature and the heat flux change fast and vary sharply across the
            part. Transient thermal simulation shows exactly how the heat builds and
            moves, so a process can be understood and tuned before any material is put
            under the beam.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run thermal and transient thermal simulation in
            Ansys for laser and welding heat sources, electronics, heat sinks, and
            general heat transfer, covering temperature, heat flux, and thermal
            gradients. If you have a heating or cooling problem and need to see how
            the heat behaves, our team can help. Reach out through our contact page
            and talk it through with a simulation engineer.
          </p>
        </div>
      ),
    },
  ],
};
