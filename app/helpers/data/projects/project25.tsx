import { IFullProject } from "../../projects.data";

export const project25: IFullProject = {
  title: "Car Bonnet Damage Analysis Using ANSYS",
  seoTitle:
    "Car Bonnet Damage Analysis in ANSYS | Composite FEA and Explicit Dynamics of Natural Fiber Materials",
  description:
    "A composite FEA and explicit dynamics study of a car bonnet in ANSYS, comparing flax and jute fiber reinforced epoxy under load and impact using fiber and matrix failure criteria.",
  image: "/images/projects/item25/main-image.webp",
  thumbnail: "/images/projects/item25/thumbnail.png",
  link: "/projects/car-bonnet-damage-analysis-ansys-composite-fea",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              This project looks at a car bonnet built from natural fiber
              composite and asks a direct question: can a lightweight, sustainable
              material carry the loads a bonnet sees, and how does it behave when
              something hits it. Answering that means going past a single stress
              number and into how a composite actually fails, so the study uses
              ANSYS to run a full composite analysis with proper fiber and matrix
              failure criteria, followed by an explicit dynamics impact test.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              Two materials were put through exactly the same analysis so the
              comparison is fair: FFREC, a flax fiber reinforced epoxy composite,
              and JFREC, a jute fiber reinforced epoxy composite. Each one was
              analysed for equivalent stress, total deformation, and fiber and
              matrix damage on the bonnet, and then the impact case was solved in
              explicit dynamics to see how the panel deforms and where damage
              begins under a sudden load.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item25/main-image.webp"
              alt="ANSYS equivalent von-Mises stress contour on a natural fiber composite car bonnet made of flax fiber reinforced epoxy (FFREC)"
              className="rounded-[1.25rem] w-[29.5625rem] h-auto sm:w-full object-contain"
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
            The aim was to judge a natural fiber composite bonnet on strength,
            stiffness, and damage tolerance, and to do it in a way that lets the
            material choice be compared cleanly. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Model the car bonnet as a natural fiber composite and check whether
              it carries its loads without failing.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Compare two candidate materials, FFREC (flax fiber) and JFREC (jute
              fiber), under identical geometry, mesh, constraints, and loads, so
              the material is the only variable.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Apply composite failure criteria that separate fiber failure from
              matrix failure, in both tension and compression, rather than a single
              stress limit.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Run an explicit dynamics impact test to capture how the bonnet
              deforms and where damage initiates under a sudden load.
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
            Materials and Failure Criteria
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Both materials are natural fiber reinforced epoxy composites. FFREC
            uses flax fiber and JFREC uses jute fiber, each set in an epoxy matrix.
            Materials like these are drawing real interest in automotive body
            panels because they are light, lower cost, and more sustainable than
            glass fiber, while still stiff enough for parts like a bonnet. The
            question is never whether they are light, it is whether they are strong
            and tough enough, and that is exactly what the analysis is built to
            answer.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            A composite does not behave like a metal, so it cannot be judged with a
            single stress limit. Each material was modelled as orthotropic, meaning
            its stiffness and strength are different along the fibers than across
            them. The failure model uses orthotropic stress limits with separate
            tensile and compressive strengths, and it splits failure into two
            distinct modes: fiber failure, where the reinforcement itself gives
            way, and matrix failure, where the epoxy around the fibers cracks.
            Tracking these separately matters because a panel can suffer matrix
            cracking long before the fibers break, and the two mean very different
            things for how the part holds up.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            Once a stress limit is reached, the model degrades the stiffness of the
            failed material rather than treating it as intact, so the results show
            not just where failure starts but how damage spreads as load builds.
            This is what turns a stress plot into a real damage analysis.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            FEA Setup
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The bonnet geometry was meshed and the composite material assigned,
            with the panel restrained the way it sits on a vehicle and loaded to
            represent its working conditions. The analysis ran in two stages:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              A composite stress analysis for each material, capturing equivalent
              von-Mises stress, total deformation, and the fiber and matrix damage
              across the bonnet.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              An explicit dynamics analysis for the impact case, which resolves the
              fast, transient response that a standard static solver cannot.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              The same setup applied to both FFREC and JFREC, so any difference in
              the results comes from the material and nothing else.
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
            Results for FFREC (Flax Fiber Composite)
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The stress contour for the flax fiber bonnet, shown at the top of this
            page, maps how load travels through the panel and where it concentrates
            around the edges and mounting regions. The equivalent von-Mises stress
            field makes the load path easy to read and points straight to the
            areas that carry the most, which are the places any failure would start.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            The composite damage result takes it further. Instead of a single
            stress figure, it shows where the fiber and matrix failure criteria are
            reached and how far that damage reaches into the panel. Seeing the
            damage pattern on the flax bonnet is what tells you whether the material
            is genuinely holding the load or quietly cracking in the matrix, which
            is the difference between a panel that lasts and one that does not.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image1.webp"
              alt="ANSYS composite damage and failure contour on the flax fiber reinforced epoxy (FFREC) car bonnet showing fiber and matrix failure regions"
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
            Results for JFREC (Jute Fiber Composite)
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The jute fiber bonnet was put through the same treatment for a direct
            comparison. Its stress contour shows the load path across the panel
            under identical conditions, giving a clean like-for-like result to hold
            against the flax design. Because the geometry, mesh, restraints, and
            loads are all the same, the stress field here reflects the jute
            material on its own.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image2.webp"
              alt="ANSYS equivalent von-Mises stress contour on the jute fiber reinforced epoxy (JFREC) car bonnet under the same loading as the flax design"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            The damage result for the jute bonnet shows where its fiber and matrix
            failure criteria are reached and how the damage is distributed. Set next
            to the flax result, it is this pair of damage plots that decides the
            material question, because they show which composite keeps its damage
            smaller and more contained under the same demand.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image3.webp"
              alt="ANSYS composite damage contour on the jute fiber reinforced epoxy (JFREC) car bonnet showing fiber and matrix failure distribution"
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
            Explicit Dynamics Impact Test
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            A bonnet does not only sit under static load, it gets hit. The impact
            case was solved in explicit dynamics, which is built for fast, transient
            events where the load is applied and released in a fraction of a second.
            This is the analysis that shows how the composite panel actually
            responds to a sudden strike, rather than a slow, steady push.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image4.webp"
              alt="ANSYS explicit dynamics impact simulation of the composite car bonnet showing the stress and deformation response as the load is applied"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            As the impact develops, the results track how the bonnet deforms and
            where the material starts to give. The stress and deformation fields
            move through the panel as the event unfolds, and the damage output shows
            the point where the fiber and matrix failure criteria are first reached
            under the strike.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image5.webp"
              alt="ANSYS explicit dynamics result showing damage initiation on the composite car bonnet during the impact event"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            By the end of the impact, the result shows the final deformation of the
            bonnet and the full extent of the damage left behind. This is the
            information that matters most for a real panel: not just whether it
            moves, but how much permanent damage a strike leaves in the composite,
            and whether that damage stays local or spreads across the part.
          </p>
          <div className="w-full max-w-[46rem]">
            <img
              src="/images/projects/item25/content-image6.webp"
              alt="ANSYS explicit dynamics result showing final deformation and composite damage on the car bonnet after the impact"
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
            Comparing the Two Materials
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The value of running both materials the same way is that the comparison
            is honest. Same bonnet, same mesh, same restraints, same loads, so every
            difference in stress, deformation, and damage comes from the fiber
            itself. Reading the flax and jute results side by side turns the study
            from a description of one panel into a real material decision, which is
            exactly what you need before committing to a design.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            Both the static composite analysis and the explicit dynamics impact
            test point to the same kind of answer: which material keeps its stress
            and deformation lower, and which one holds its fiber and matrix damage
            smaller and more contained under the same demand. That is the practical
            output of the whole project, a clear basis for choosing between a flax
            and a jute reinforced bonnet on engineering grounds rather than guesswork.
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
            Put together, the study shows a complete workflow for a composite car
            bonnet in ANSYS: model the panel, assign a natural fiber composite,
            apply fiber and matrix failure criteria with stiffness degradation, and
            run both a static analysis and an explicit dynamics impact test. Doing
            this for both FFREC and JFREC shows whether a sustainable natural fiber
            bonnet is viable at all, and which of the two materials stands up better
            to load and impact. That is a decision made on analysis, before any
            physical prototype is built or tested.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Composite and Impact FEA at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Composite parts fail differently from metal ones, and getting that
            wrong means a design that looks fine on a stress plot but cracks in
            service. Proper composite FEA separates fiber failure from matrix
            failure, tracks how damage spreads, and tests the part under impact as
            well as steady load, which is what this bonnet study does from start to
            finish.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run composite FEA and explicit dynamics in ANSYS
            for automotive panels, natural fiber and glass or carbon composites, and
            other structural parts, covering equivalent stress, total deformation,
            fiber and matrix failure, and impact and crash loads. If you are
            developing a composite component and need to know whether it holds up
            and which material to use, our team can help. Reach out through our
            contact page and talk it through with a CAE engineer.
          </p>
        </div>
      ),
    },
  ],
};
