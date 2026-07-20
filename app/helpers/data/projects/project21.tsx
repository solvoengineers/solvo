import { IFullProject } from "../../projects.data";

export const project21: IFullProject = {
  title:
    "Aircraft Impact Simulation on Foam Using Ansys Explicit Dynamics",
  seoTitle:
    "Foam Impact Simulation in Ansys Explicit Dynamics | Aircraft Crash Loading, Stress and Deformation",
  description:
    "An explicit dynamics impact simulation in Ansys of an aircraft striking a foam structure, using the AUTODYN solver to study how the foam responds under crash loading through its von Mises stress and deformation.",
  image: "/images/projects/item21/main-image.webp",
  thumbnail: "/images/projects/item21/thumbnail.png",
  link: "/projects/aircraft-impact-simulation-foam-explicit-dynamics",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              Foam is one of the most useful materials in crash protection. It is
              light, and when something hits it hard the foam crushes and soaks up
              the energy of the impact instead of passing it straight through.
              This project used an explicit dynamics simulation in Ansys to fire
              an aircraft-shaped body into a foam structure and watch how the foam
              behaves at the moment of impact. The goal was to see where the
              stress builds up and how the material deforms when the crash load
              arrives.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              This is a job that only an explicit dynamics solver can do properly.
              An impact happens in a tiny slice of time, with the load changing
              from nothing to everything and back again almost instantly, and a
              normal static analysis simply cannot capture that. The simulation
              was run with the Ansys AUTODYN explicit solver, which is built for
              exactly these short, violent events, and it produced both the stress
              picture and the deformation picture of the foam under the strike.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item21/main-image.webp"
              alt="Ansys Explicit Dynamics equivalent von Mises stress contour of an aircraft impacting a foam structure, showing stress concentrated at the impact point"
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
            The aim was to capture the impact event itself and understand how the
            foam responds while it happens. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Set up an aircraft striking a foam structure as a true impact event,
              not a static load.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Find where the stress concentrates in the foam at the moment of
              contact.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              See how the foam deforms as it takes the hit and starts to absorb
              the energy.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Show that an explicit dynamics model can represent this kind of
              crash behaviour for foam.
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
            Impact Setup in Ansys Explicit Dynamics
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The simulation was built in Ansys Explicit Dynamics using the AUTODYN
            solver, which is designed for short-duration impact and blast events
            where the flow of stress waves through the material matters. The main
            elements of the setup were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Solver: Ansys Explicit Dynamics with AUTODYN, run as a transient
              impact through a sequence of very small time steps.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Initial condition: a velocity applied to the aircraft body so that
              it strikes the foam, which is what drives the whole event.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Constraint: a fixed support holding the foam structure in place so
              the impact loads it rather than simply pushing it away.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Outputs: equivalent von Mises stress and directional deformation, so
              both the loading and the movement of the foam could be read.
            </li>
          </ul>
          <p className="text-base text-footer-text font-normal font-poppins">
            An explicit solver marches forward in extremely small time steps
            because it is tracking stress waves travelling through the material as
            the impact lands. That is heavier to compute than a static analysis,
            but it is the only way to see the real sequence of an impact rather
            than a single frozen snapshot of a steady load.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Stress Response of the Foam
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The equivalent von Mises stress result, shown above, makes the impact
            easy to read at a glance. Almost the whole foam structure stays a calm
            low-stress blue, while a sharp, bright concentration of stress appears
            right at the point where the aircraft makes contact. That is exactly
            what an impact should look like: the energy of the strike is dumped
            into a small local region first, and the rest of the structure only
            feels it later as the stress spreads outward.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            This localised pattern is the key to how energy-absorbing foam is
            meant to work. By taking the peak load in a concentrated zone and
            crushing there, the foam protects everything behind it. Seeing the
            stress focus cleanly at the contact point, rather than smearing across
            the whole part, is a sign the impact is being captured properly and
            that the foam is doing its job of catching the hit where it lands.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Deformation and Foam Behaviour
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The deformation result shows the other half of the story, which is how
            the foam actually moves as it is struck. The directional deformation
            contour maps how far the material is pushed in the direction of the
            impact, and it lines up with the stress result, with the largest
            movement sitting where the aircraft drives into the foam and tailing
            off through the rest of the body.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item21/content-image1.webp"
              alt="Ansys Explicit Dynamics directional deformation contour of the foam structure under aircraft impact, showing the largest movement at the impact zone"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            Reading the stress and deformation together gives a complete view of
            the foam under impact: where it is loaded hardest, and where and how
            far it deflects to absorb that load. That pairing is what makes an
            impact model useful, because energy-absorbing foam is judged not just
            on how much stress it sees but on how it deforms to soak the impact up.
            From a baseline model like this, the same setup can then be pushed
            further to compare foam densities, thicknesses, or impact speeds and
            see how the response changes.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Impact and Crash Simulation at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Impact, crash, and drop events are some of the hardest problems in
            mechanical engineering, because everything happens in a fraction of a
            second and the materials are pushed far past their gentle everyday
            behaviour. Explicit dynamics is the right tool for these events, and it
            is how energy-absorbing materials like crash foam, packaging, and
            protective structures get tested long before a physical drop test.
            Getting the behaviour right on screen saves the cost and time of
            building and smashing one prototype after another.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run explicit dynamics impact and crash
            simulations in Ansys, covering foam and energy absorbers, drop tests,
            and impact loading, alongside our wider FEA and CFD consulting work. If
            you have an impact, crash, or energy-absorption problem you need to
            understand before it is built, our team can help. Reach out through our
            contact page and talk it through with a CAE engineer.
          </p>
        </div>
      ),
    },
  ],
};
