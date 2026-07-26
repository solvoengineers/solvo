import { IFullProject } from "../../projects.data";

export const project26: IFullProject = {
  title: "CFD Airflow Analysis of a Fan Heater Using Ansys CFX",
  seoTitle:
    "Fan Heater Airflow CFD Analysis in Ansys CFX | Velocity Streamlines and Outlet Flow Performance",
  description:
    "A CFD airflow analysis of a fan heater in Ansys CFX, using velocity streamlines to trace the air from inlet to outlet and judge how the unit performs at the outlet.",
  image: "/images/projects/item26/main-image.webp",
  thumbnail: "/images/projects/item26/thumbnail.webp",
  link: "/projects/cfd-airflow-analysis-fan-heater-ansys-cfx",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              A fan heater is only as good as the air it can push. This project
              uses CFD in Ansys CFX to look inside the unit and trace how air moves
              through it, drawn in at one end, driven through the core past the fan,
              and pushed out at the outlet. Velocity streamlines make the whole flow
              path visible, so the airflow can be judged where it matters most, at
              the outlet where the air leaves the unit.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The streamlines are coloured by air speed, from the slow incoming flow
              through to the fastest flow inside the unit, which reaches around 33
              m/s. Following them from inlet to outlet shows where the air speeds up,
              how evenly it passes through the core, and how it behaves as it exits,
              which together tell you how well the unit is moving air.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item26/main-image.webp"
              alt="Ansys CFX velocity streamlines showing airflow through a fan heater from inlet to outlet, coloured by air speed up to around 33 m/s"
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
            The aim was to understand the airflow through the fan heater and judge
            how it performs at the outlet. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Trace the airflow through the fan heater from inlet to outlet using
              CFD.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Map the air velocity through the unit and see where the flow speeds up
              and slows down.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Judge the airflow at the outlet, where the air leaves the unit.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Build a CFD model that can test design changes to the fan or internals
              before any hardware is built.
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
            The airflow was solved in Ansys CFX. The fan heater geometry, with its
            inlet, internal fan and components, and outlet, was placed inside a flow
            domain so the air could be tracked as it moved through and around the
            unit. The setup was:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Tool: Ansys CFX, solving the airflow through the full unit.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Domain: the fan heater with the flow region extended at the inlet and
              outlet so the incoming and leaving air are both captured.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Outputs: velocity streamlines and the air speed field from inlet to
              outlet.
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
            Airflow Through the Unit
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Seen from an angle, the streamlines show the air being pulled in across
            the full inlet face and drawn into the core of the unit. Inside, the
            flow tightens and speeds up as it passes the fan and the internal
            components, reaching its highest velocity through the middle of the
            unit. The angled view makes it clear that the air is filling the whole
            cross section rather than slipping through one side, which is what you
            want for a unit that has to move air evenly.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item26/content-image1.webp"
              alt="Angled Ansys CFX view of velocity streamlines filling the core of the fan heater as the air accelerates through the unit"
              className="w-full h-auto object-contain"
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
            Outlet Performance
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The side view focuses on how the air leaves. The streamlines carry
            through the core at their peak speed and then exit through the outlet,
            spreading out as they go. Reading the flow at the outlet is the real
            test of the unit, since it shows whether the air comes out with enough
            speed and how it is spread across the exit. This is the information you
            need to say whether the fan heater is actually delivering the airflow it
            is meant to.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item26/content-image2.webp"
              alt="Side view of Ansys CFX velocity streamlines passing the fan and leaving the fan heater through the outlet"
              className="w-full h-auto object-contain"
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
            The CFD gives a clear, complete picture of the airflow through the fan
            heater. The velocity streamlines trace the air from the inlet, through
            the core where it reaches around 33 m/s, and out at the outlet, showing
            both how fast the air moves and how evenly it flows. That is enough to
            judge the unit's airflow performance and to test changes to the fan or
            the internal layout in CFD before committing to hardware.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Airflow and Thermal CFD at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Getting airflow right is the difference between a product that performs
            and one that runs hot or weak. CFD shows the velocity, the flow path,
            and the outlet behaviour that decide how well a unit moves air, long
            before a prototype is built.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run airflow and thermal CFD in Ansys CFX, Ansys
            Fluent, and SolidWorks Flow Simulation for fans, heaters, enclosures,
            electronics cooling, and ducting, covering velocity and pressure fields,
            flow rate, and outlet performance. If you are developing a product that
            has to move or manage air and want to know how it performs before
            building it, our team can help. Reach out through our contact page and
            talk it through with a CFD engineer.
          </p>
        </div>
      ),
    },
  ],
};
