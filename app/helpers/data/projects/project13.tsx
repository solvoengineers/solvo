import { IFullProject } from "../../projects.data";

export const project13: IFullProject = {
  title:
    "HVAC Airflow Analysis of an Office Container for Thermal Comfort and Efficiency",
  seoTitle:
    "HVAC Airflow CFD Analysis of an Office Container | Thermal Comfort and Efficiency in Ansys Fluent",
  description:
    "A computational fluid dynamics (CFD) study of the HVAC airflow inside an office container, run in Ansys Fluent to map air distribution, velocity, and temperature and improve thermal comfort and energy efficiency.",
  image: "/images/projects/item13/main-image.webp",
  thumbnail: "/images/projects/item13/thumbnail.png",
  link: "/projects/hvac-airflow-cfd-analysis-office-container-thermal-comfort",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              A client wanted to know whether the HVAC setup inside their office
              container would actually keep the space comfortable to work in. An
              office container is a compact, enclosed metal box, so the air does
              not always spread evenly, and a single badly placed vent can leave
              one corner cold while another stays warm and stuffy. We ran a
              computational fluid dynamics (CFD) study in Ansys Fluent to see how
              the supply air really moves through the space, where it reaches,
              and how air speed and temperature vary from one part of the
              container to another.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The point of the analysis was to check thermal comfort and energy
              efficiency before any ducting was locked in. By simulating the
              airflow in detail, we could see the circulation pattern, find the
              areas that were well served and the ones that were being missed,
              and judge whether the current inlet and outlet layout was doing its
              job. That gave the client a clear, visual basis for adjusting the
              HVAC design instead of guessing at vent positions on site.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item13/main-image.webp"
              alt="CFD contour plot of air velocity and temperature across an office container from the HVAC airflow analysis in Ansys Fluent"
              className="rounded-[1.25rem] w-[29.5625rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
  ],
  sections: [
    {
      title: "Objectives and Approach",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The main goal was to make sure everyone inside the container sits in
            a comfortable, evenly conditioned space, and to get there without
            wasting energy on over-cooling. We set a few clear objectives for the
            CFD study.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Map how the supply air travels through the container and where the
              main circulation forms.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Find the spots that get too little airflow, since those turn into
              warm or stuffy dead zones.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Check how air velocity and temperature spread across the working
              area, so comfort can be judged from real data rather than assumed.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Show whether the current inlet and outlet positions deliver even
              conditions, and where to change them if they do not.
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins">
            We built a CFD model of the container interior in Ansys Fluent,
            including the supply and return vents in their real positions. The
            air was treated as a steady turbulent flow, which is the standard way
            to capture indoor air movement, and the model accounted for the heat
            the space picks up from occupants, equipment, and the surrounding
            walls. The mesh was refined near the vents and along the surfaces
            where the flow changes quickly, so the circulation and the
            temperature field would be resolved properly.
          </p>
        </div>
      ),
    },
    {
      title: "Simulation Setup and Boundary Conditions",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The study was set up as a steady-state CFD simulation in Ansys
            Fluent. The main settings and inputs were as follows.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Solver: steady-state, turbulent airflow modelled with a standard
              RANS turbulence model, which suits enclosed indoor spaces.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Inlets: conditioned supply air introduced through the HVAC vents at
              a set temperature and flow rate.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Outlets: return and exhaust vents set as pressure outlets so the
              air could recirculate the way it does in the real container.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Heat sources: internal gains from people, lights, and equipment,
              along with heat transfer through the container walls, so the
              temperature result reflects a real working day.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Mesh: refined around the vents, corners, and internal surfaces to
              capture the jets, the recirculation, and the thin layers of slow
              air along the walls.
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins">
            With this setup the solution gives the airflow field and the
            temperature field at the same time. Two views tell most of the story:
            the streamlines, which show the path the air takes and where it slows
            down, and the surface contours, which show where warm and cool
            regions build up across the space.
          </p>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The results showed that the supply air forms one strong circulation
            loop through the middle of the container, but it does not reach
            everywhere equally.
          </p>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base  text-footer-text font-normal font-poppins">
                The streamlines make the pattern clear. A fast moving stream of
                air sweeps through the central zone and drives a large
                recirculation there, while the far corners and the lower sections
                see much slower, almost stagnant flow. Those low-flow pockets are
                exactly where a person would feel the air is stuffy, or where
                warmth would sit instead of being carried away.
              </p>
              <p className="text-base  text-footer-text font-normal font-poppins">
                The surface contours back this up. Air speed and temperature are
                uneven across the container, with active, well-mixed regions near
                the main jet and slower, warmer patches away from it. In plain
                terms, the space is comfortable where the air is moving and less
                comfortable where it is not, so the current vent layout leaves
                parts of the working area under-served.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item13/content-image1.webp"
                alt="CFD airflow streamlines inside the office container showing the main circulation loop and the low-flow, near-stagnant corners"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
          <p className="text-base  text-footer-text font-normal font-poppins">
            The fix is to spread the supply air more evenly. Repositioning or
            adding a diffuser, splitting the supply so it feeds more than one
            zone, or adjusting the outlet so it pulls air through the quiet
            corners all push the circulation into the areas that are currently
            missed. That evens out temperature and air movement across the whole
            container, which improves comfort for everyone inside and lets the
            HVAC unit hold its setpoint without over-cooling the busy zone just to
            make up for the still ones.
          </p>
        </div>
      ),
    },
    {
      title: "CFD-Driven HVAC Design at Solvo Engineers",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            Compact, enclosed spaces like office containers, cabins, and modular
            units are surprisingly hard to condition well, because there is not
            much room for the air to mix and one badly placed vent can spoil the
            comfort of the whole space. A CFD study shows exactly how the air
            behaves before anything is installed, so the ducting, the diffusers,
            and the size of the unit can be chosen from evidence rather than a
            rule of thumb. It saves the cost of reworking vents on site and
            avoids the energy an oversized system wastes when it is fighting poor
            air distribution.
          </p>
          <p className="text-base  text-footer-text font-normal font-poppins">
            At Solvo Engineers we use computational fluid dynamics to design and
            troubleshoot HVAC and ventilation for rooms, containers, cabins, and
            industrial spaces, covering airflow, thermal comfort, and energy
            efficiency, and we pair it with structural FEA when a design needs
            both. If you are working on an HVAC layout, a ventilation problem, or
            any airflow or thermal question and want to see how it will perform
            before you build it, our team can help. Reach out through our contact
            page to talk it through with a CFD engineer.
          </p>
        </div>
      ),
    },
  ],
};
