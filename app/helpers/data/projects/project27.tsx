import { IFullProject } from "../../projects.data";

export const project27: IFullProject = {
  title: "HVAC Airflow Analysis of a Restaurant Oven Exhaust Using CFD",
  seoTitle:
    "Restaurant Oven HVAC CFD Analysis | Roof Extractor vs Wall Extractor Airflow",
  description:
    "A CFD HVAC study of a commercial restaurant oven, comparing a roof extractor and a wall extractor to see how well each one captures the airflow coming off the oven.",
  image: "/images/projects/item27/main-image.webp",
  thumbnail: "/images/projects/item27/thumbnail.webp",
  link: "/projects/hvac-cfd-airflow-restaurant-oven-roof-vs-wall-extractor",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              A busy restaurant oven throws off a lot of hot air, steam, and fumes,
              and all of it has to be pulled away cleanly so the kitchen stays
              comfortable and safe to work in. This project uses CFD to study the
              airflow around a commercial oven and test how well it is captured by
              two different extraction layouts, a wall extractor and a roof
              extractor.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Both layouts were run in the same kitchen space, with the same oven,
              so the only thing that changes is where the extractor sits. The
              airflow is shown as an animation for each case, which makes it easy to
              see the air leaving the oven and follow it to the extractor, and to
              judge which layout clears the air more completely.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item27/main-image.webp"
              alt="CFD HVAC airflow simulation of a commercial restaurant oven showing the air path toward the extractor"
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
            The aim was to see how the air from the oven behaves and which
            extraction layout pulls it away best. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Visualise the airflow coming off the oven and moving through the
              kitchen space.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Test a wall-mounted extractor and see how much of the airflow it
              captures.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Test a roof-mounted extractor under the same conditions.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Compare the two layouts so the extraction can be chosen on evidence,
              not guesswork.
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
            The kitchen space around the oven was modelled with the extractor in
            place, and the airflow was solved so the movement of air from the oven
            to the extractor could be tracked. The setup was:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              The oven and the surrounding space set up as the flow domain, with the
              extractor drawing air out.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              The airflow solved and shown as moving streamlines, so the air path is
              clear rather than a single still picture.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              The same oven and space used for both the wall and roof extractor, so
              the comparison is fair.
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
              Wall Extractor Airflow
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              With the extractor mounted on the wall, the air coming off the oven
              has to be pulled sideways across the space to reach it. The animation
              shows the airflow leaving the oven and tracking toward the wall
              extractor, which makes it easy to see how much of the air is drawn
              straight out and how much drifts through the room before it is caught.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              This is the real question for a wall layout: whether an extractor set
              to one side can reach across and clear the air quickly, or whether
              some of it escapes into the working space first.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <video
              src="/images/projects/item27/wall-extractor.mp4"
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
              Roof Extractor Airflow
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              With the extractor mounted overhead, it sits right in the path of the
              hot air that naturally rises off the oven. The animation shows the
              airflow lifting from the oven and being drawn up into the roof
              extractor, so you can see how directly the air is pulled out of the
              space.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Because heat rises, an overhead extractor is working with the airflow
              rather than against it, and the animation makes that behaviour clear
              against the wall case.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <video
              src="/images/projects/item27/roof-extractor.mp4"
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
            Comparing the Two Layouts
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Running both cases in the same space makes the comparison honest, since
            the only difference is where the extractor sits. Put side by side, the
            two animations show which layout pulls the air off the oven more
            completely and which one lets more of it move through the room before it
            is caught. That is exactly the information needed to choose between a
            wall and a roof extractor for this kitchen, and to size and place it
            with confidence.
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
            The CFD turns a ventilation question into something you can see. By
            modelling the oven and the space and animating the airflow for both a
            wall and a roof extractor, the study shows how the air actually moves
            and which layout clears it best, before anything is installed or changed
            on site. For a busy commercial kitchen, that means a cleaner, safer,
            more comfortable space and an extraction system chosen on evidence.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            HVAC and Ventilation CFD at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Ventilation that looks fine on a drawing can still leave hot air and
            fumes hanging in a room. CFD shows the actual airflow, where it goes,
            where it stalls, and how well an extractor captures it, so the system
            can be fixed on screen instead of on site.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run HVAC and ventilation CFD in Ansys and
            SolidWorks Flow Simulation for commercial kitchens, ovens, extractors
            and hoods, enclosures, and building spaces, covering airflow,
            temperature, extraction and capture, and comfort. If you need to know how
            air moves through a space and how well it is being removed, our team can
            help. Reach out through our contact page and talk it through with a CFD
            engineer.
          </p>
        </div>
      ),
    },
  ],
};
