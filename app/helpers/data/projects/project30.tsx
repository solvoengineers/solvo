import { IFullProject } from "../../projects.data";

export const project30: IFullProject = {
  title:
    "2D Electromagnetic FEA of a 3-Phase Wound-Field Synchronous Machine in Ansys Maxwell",
  seoTitle:
    "Synchronous Machine Electromagnetic FEA in Ansys Maxwell | Back-EMF, Flux Density and Torque",
  description:
    "A 2D transient electromagnetic FEA of a 3-phase wound-field synchronous machine in Ansys Maxwell, computing flux lines, flux density, back-EMF, and torque.",
  image: "/images/projects/item30/main-image.webp",
  thumbnail: "/images/projects/item30/thumbnail.webp",
  link: "/projects/synchronous-machine-electromagnetic-fea-ansys-maxwell",
  summary: [
    {
      title: "",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base text-footer-text font-normal font-poppins">
              This project is a 2D electromagnetic simulation of a primitive
              three-phase, wound-field, two-pole synchronous machine, solved as a
              transient FEA in Ansys Maxwell. The model captures the core of how an
              electric machine works, from the magnetic field it sets up to the
              voltage it induces and the torque it produces.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The machine was built with a stator and rotor in M19 electrical steel,
              a distributed three-phase stator winding, and a DC field winding on the
              rotor. From that one model the study pulls the flux lines, the flux
              density, the induced back-EMF, and the torque across a set of operating
              conditions.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item30/main-image.webp"
              alt="Ansys Maxwell flux density (Mag B) contour across the cross-section of a 3-phase wound-field synchronous machine"
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
            The aim was to get the full electromagnetic behaviour of the machine out
            of a single 2D model. The objectives were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-footer-text font-normal font-poppins">
              Build a 2D model of a three-phase wound-field two-pole synchronous
              machine and solve it as a transient electromagnetic FEA.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Map the magnetic field through the machine as flux lines and flux
              density.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Find the back-EMF induced in the stator winding as the rotor turns.
            </li>
            <li className="text-base text-footer-text font-normal font-poppins">
              Compute the torque the machine produces at standstill and at speed.
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
              The Machine and Model
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              The machine is a two-pole, three-phase, wound-field synchronous design.
              The stator and rotor cores are M19 electrical steel, with a model depth
              of 45 mm. The stator carries a distributed three-phase winding with two
              slots per pole per phase, twelve slots in total, at 180 turns per coil,
              while the rotor carries a DC field winding of 55 turns per slot driven
              by a 1 A field current.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              It was solved with the transient solver, with vector potential boundary
              conditions on the outer region and mesh controls refining the stator
              and rotor cores. This is the setup that lets the field, the voltage, and
              the torque all come out of one simulation.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item30/content-image1.webp"
              alt="Cross-section geometry of the 2-pole 3-phase wound-field synchronous machine, showing the stator, rotor, and windings"
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
              Magnetic Field: Flux Lines and Flux Density
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              With the rotor turning at 3000 rpm on open circuit, the simulation
              gives the field that drives the machine. The flux lines show the
              magnetic circuit closing through the stator and rotor cores and crossing
              the airgap, with a peak flux line value of about 0.0107 Wb/m.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The flux density contour at the top of this page shows how strong that
              field is across the machine, peaking at about 0.9587 T in the core. Read
              together, the two plots show both the shape of the magnetic circuit and
              where the steel is working hardest.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item30/content-image2.webp"
              alt="Ansys Maxwell flux line plot of the synchronous machine, showing the magnetic circuit closing through the cores and airgap"
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
              Airgap Flux Density and Induced Back-EMF
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              Plotting the flux density around a circle in the middle of the airgap
              shows how the field is distributed from one pole to the next. That
              airgap field is what sweeps past the stator winding as the rotor turns,
              and its shape is what sets the shape of the induced voltage.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              The result is a clean three-phase set of back-EMF voltages in the stator
              winding, peaking at about 2.50 V. This is the voltage the machine would
              generate at this speed, and how smooth and balanced it is, is a direct
              read on how good the magnetic design is.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item30/content-image3.webp"
              alt="Plot of flux density around the airgap of the synchronous machine from Ansys Maxwell"
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
              Torque at Standstill and at Speed
            </h3>
            <p className="text-base text-footer-text font-normal font-poppins">
              The torque was then computed at standstill and at speed. At 0 rpm the
              developed torque swings with an amplitude of about 10.78 Nm as the rotor
              position changes, which shows how the torque depends on the angle
              between the stator field and the rotor.
            </p>
            <p className="text-base text-footer-text font-normal font-poppins">
              At 3000 rpm the machine settles to an average torque of about -9.45 Nm,
              with the sign just showing the direction. Shifting the phase angle to
              pi/2 drops that average to about -0.47 Nm, which is the core of how a
              synchronous machine is controlled: the same machine gives very different
              torque depending on where the field is aligned.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item30/content-image4.webp"
              alt="Torque versus time plot of the synchronous machine at 3000 rpm from Ansys Maxwell"
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
            From a single 2D transient model, the simulation delivers the full
            electromagnetic picture of the machine: the flux lines and flux density
            that show the field, the back-EMF that shows the voltage it generates, and
            the torque that shows the work it can do. That is the kind of result that
            lets an electric machine be understood and improved on the screen, before
            any lamination is cut or any coil is wound.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-blue font-semibold font-poppins">
            Electric Machine and Electromagnetic FEA at Solvo Engineers
          </h3>
          <p className="text-base text-footer-text font-normal font-poppins">
            Electric machines live or die on their electromagnetics, and the field,
            the voltage, and the torque are all tied together in a way that is hard to
            judge without simulation. Electromagnetic FEA shows all three at once, so a
            motor or generator can be sized, checked, and tuned before it is built.
          </p>
          <p className="text-base text-footer-text font-normal font-poppins">
            At Solvo Engineers we run electromagnetic FEA in Ansys Maxwell for motors,
            generators, and other electric machines, covering flux density, back-EMF,
            torque, losses, and winding design. If you are developing an electric
            machine and need its performance understood, our team can help. Reach out
            through our contact page and talk it through with a simulation engineer.
          </p>
        </div>
      ),
    },
  ],
};
