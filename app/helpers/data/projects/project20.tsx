import { IFullProject } from "../../projects.data";

export const project20: IFullProject = {
  title:
    "CFD of a Backward-Facing Step: Flow Separation and Reattachment Validated Against Experiment",
  seoTitle:
    "Backward-Facing Step CFD in Ansys Fluent | Flow Separation, Reattachment and Driver Benchmark Validation",
  description:
    "A computational fluid dynamics (CFD) study of turbulent flow over a backward-facing step in Ansys Fluent, capturing separation, recirculation, and reattachment, and validating the wall pressure coefficient against Driver's 1985 experimental benchmark.",
  image: "/images/projects/item20/main-image.webp",
  thumbnail: "/images/projects/item20/thumbnail.png",
  link: "/projects/backward-facing-step-cfd-separation-reattachment-validation",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              The backward-facing step is one of the most studied flows in all of
              CFD, and for good reason. It looks simple, just a channel with a
              sudden drop in the floor, but that step forces the flow to separate,
              swirl back on itself in a recirculation zone, and then reattach to
              the wall further downstream. Getting a simulation to reproduce that
              separation and reattachment correctly is a real test of a turbulence
              model, which is why the step is used as a benchmark. This project
              set up a backward-facing step in Ansys Fluent and checked the
              results against the classic experimental data of Driver from 1985.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The geometry followed the benchmark directly, with a step height of
              1.27 cm, a domain eight step heights tall and twelve step heights
              long, and air entering at 20 m/s. The point was not just to produce
              a nice picture of the flow, but to measure the wall static pressure
              along both walls and compare it to the published experimental
              results, so the model could be trusted rather than just admired.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item20/main-image.webp"
              alt="CFD velocity contour of turbulent flow over a backward-facing step in Ansys Fluent showing the recirculation zone behind the step"
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
            Objectives and the Benchmark
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The aim was to build a backward-facing step simulation that reproduces
            the real flow physics and to prove it against trusted experimental
            data rather than take it on faith. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Model the turbulent flow over a backward-facing step at the same
              geometry and conditions as the Driver 1985 experiment.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Capture the separation at the step, the recirculation zone behind
              it, and the reattachment of the flow further downstream.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Measure the wall static pressure coefficient along both the
              step-side wall and the opposite wall.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Compare the pressure coefficient directly against the published
              experimental graph to validate the model.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Test how sensitive the results are by changing the inlet velocity
              and the step height by plus and minus ten percent.
            </li>
          </ul>
          <p className="text-base text-footer-text font-normal font-poppins">
            The backward-facing step matters well beyond the textbook. The same
            separation and reattachment happens behind cars, over aircraft flaps,
            inside diffusers, and in combustor and cooling passages, so a model
            that gets the step right is a model you can lean on for real designs.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Computational Domain and Mesh
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The domain was drawn in Ansys as a two-dimensional channel with the
            step set into the floor, matching the benchmark proportions so the
            comparison would be fair. The setup was:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Step height of 1.27 cm, taken straight from the Driver benchmark.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Domain eight step heights tall and twelve step heights long, so the
              flow has room to separate and fully reattach.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Named inlet, outlet, and top and bottom walls, so the boundary
              conditions could be applied cleanly.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Edge sizing of 250 divisions along the top and bottom walls, giving
              a mesh of about 8,032 elements and 8,440 nodes.
            </li>
          </ul>
          <p className="text-base text-footer-text font-normal font-poppins">
            Refining the mesh along the walls is deliberate. The interesting
            physics of a backward-facing step lives right at the surface, in the
            separated shear layer and the reattachment point, so that is where the
            cells need to be closest together if the wall pressure is going to come
            out right.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Solver Setup and Boundary Conditions
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The case was solved in Ansys Fluent as a steady, pressure-based
            simulation, with settings chosen to resolve the turbulent separated
            flow accurately:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Turbulence model: the k-omega model in its standard form, which
              handles near-wall and separated flow well.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Inlet: air entering at 20 m/s in the streamwise direction.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Outlet: a pressure outlet open to the surroundings.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Walls: no-slip top and bottom walls, including the step face.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Numerics: a second-order upwind scheme for momentum and the
              turbulence equations, for a more accurate solution.
            </li>
          </ul>
          <p className="text-base text-footer-text font-normal font-poppins">
            Second-order upwind is worth the extra effort here. A first-order
            scheme tends to smear out exactly the sharp gradients in the shear
            layer that decide where the flow reattaches, so using second order
            keeps the result honest.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Velocity and Pressure Results
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            The velocity contour, shown above, captures the whole story of the
            step in one picture. The flow arrives from the inlet at its full 20
            m/s, then separates cleanly at the edge of the step. Behind the step
            there is a pocket of slow, recirculating fluid where the velocity
            drops to near zero, and above it the fast flow carries on before
            bending down and reattaching to the lower wall. That low-speed
            recirculation zone is the signature of a backward-facing step, and the
            model reproduces it clearly.
          </p>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                The pressure field fits the velocity picture exactly. Pressure is
                lowest through the recirculation region just behind the step, and
                then it recovers and reaches its highest value further downstream,
                near the outlet where the flow has reattached and slowed, at around
                1.75 Pa. This rise in pressure as the flow reattaches is called
                pressure recovery, and it is one of the main things engineers care
                about, because poor pressure recovery in a diffuser or a duct means
                lost efficiency.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                Reading the two fields together, the low-pressure core sitting
                inside the low-velocity recirculation zone, gives a consistent and
                physically sensible picture of the flow, which is the first sign
                that the simulation is behaving correctly.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item20/content-image1.webp"
                alt="CFD pressure contour of the backward-facing step showing low pressure behind the step and pressure recovery towards the outlet"
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
            Validation Against Driver's Experimental Data
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            A nice-looking contour is not proof of anything on its own, so the real
            test was the wall pressure. The static pressure coefficient was
            measured along two lines, one on the step-side wall and one on the
            opposite wall, each split into twelve stations along the length, and
            then plotted against distance so it could be laid next to the
            experimental data.
          </p>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base text-footer-text font-normal font-poppins">
                The simulation reproduces the shape of the experimental curves. On
                the step-side wall the pressure coefficient starts near zero, dips
                into negative values through the recirculation region as the
                streamlines lift away from the surface, then climbs back up and
                levels off once the flow reattaches. On the opposite wall the
                pressure coefficient rises gently and settles to a steady value, as
                the flow there stays attached the whole way along.
              </p>
              <p className="text-base text-footer-text font-normal font-poppins">
                This is exactly the behaviour reported in Driver's experiment, and
                seeing the CFD follow the same trend on both walls is what turns
                the model from a picture into a validated result.
              </p>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item20/content-image2.webp"
                alt="Pressure coefficient versus distance from the CFD simulation for the step-side wall and the opposite wall of the backward-facing step"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            For reference, the published experimental pressure distribution from
            the benchmark study is shown below. Comparing the two side by side, the
            simulated curves follow the same rise, dip, and recovery as the
            measured data, which is the outcome the whole project was built to
            demonstrate.
          </p>
          <div className="w-full max-w-[42rem]">
            <img
              src="/images/projects/item20/content-image3.webp"
              alt="Published experimental wall static pressure coefficient distribution from Driver's backward-facing step benchmark study"
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
            Sensitivity to Inlet Velocity and Step Height
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            To see how robust the result is, the inlet velocity and the step height
            were each changed by plus and minus ten percent and the pressure
            coefficient was plotted again. The two graphs below show the effect.
          </p>
          <div className="w-full">
            <img
              src="/images/projects/item20/content-image4.webp"
              alt="Pressure coefficient versus distance graphs for the backward-facing step with inlet velocity and step height increased and decreased by ten percent"
              className="rounded-[1.25rem] w-full h-auto object-contain"
            />
          </div>
          <p className="text-base text-footer-text font-normal font-poppins">
            The pattern is clear and physically sensible. When the velocity and
            step size are increased by ten percent, the pressure coefficient dips
            more deeply through the recirculation region before climbing back, as
            the stronger, larger recirculation pulls the pressure lower. When they
            are decreased by ten percent, the dip is shallower and gentler and the
            recovery is smoother. The overall shape of the curve holds in both
            cases, which shows the model responds to changes in the way you would
            expect rather than jumping around, and that the validated behaviour is
            not a one-off tied to a single set of numbers.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Separation and Reattachment CFD at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Separation, recirculation, and reattachment turn up wherever a flow
            meets a sudden change in shape, behind vehicles, over wings and flaps,
            through diffusers and ducts, and inside cooling and combustion
            passages. These flows are hard to predict by intuition, and the value
            of CFD here is not only in showing the recirculation but in being
            checked against known data so the numbers can be trusted. Validating a
            model against a benchmark like the backward-facing step, as we did
            here, is what gives the confidence to then use it on a design where no
            experimental data exists yet.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run separated and turbulent flow CFD in Ansys
            Fluent for internal and external flows, including diffusers, ducts,
            vehicle aerodynamics, and benchmark validation studies, alongside our
            wider CFD and FEA consulting work. If you have a flow that separates,
            recirculates, or reattaches, and you need it modelled and verified, our
            team can help. Reach out through our contact page and talk it through
            with a CFD engineer.
          </p>
        </div>
      ),
    },
  ],
};
