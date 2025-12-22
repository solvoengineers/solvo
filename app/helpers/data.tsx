import React from "react";
import { allIcons } from "./icons";

export interface ProductDetail {
  logo: string;
  title: string;
  description: string;
  caseStudyLink: string;
  image: string;
}

export interface IHeroSectionItem {
  badgeText: string;
  badgeIcon: string;
  title: string;
  features: string[];
  placeOrderLink: string;
  ourServicesLink: string;
  image: string;
}

export const allProducts: ProductDetail[] = [
  {
    logo: "/images/case-study/fea-analysis-to-enhancing-stiffness-fatigue-life-of-rubber-to-metal-bonded-parts/logo.png",
    title:
      "FEA Analysis to Enhancing Stiffness and Fatigue Life of Rubber-to-Metal Bonded Parts",
    description:
      "Bony Polymers, a trusted manufacturer of precision rubber-to-metal bonded parts in India, approached us to improve the performance of a critical side bumper assembly. The goal was to increase the component’s static stiffness to 0.7 kN/mm for a displacement range of 5–10 mm, while also ensuring that the part could reliably withstand at least 600,000 load cycles.",
    caseStudyLink:
      "/case-study/fea-analysis-to-enhancing-stiffness-fatigue-life-of-rubber-to-metal-bonded-parts",
    image: "/images/products/rubber-metal-parts-image.webp",
  },
  {
    logo: "/images/case-study/cfd-analysis-and-airflow-optimization-for-industrial-dehydrator-system/logo.png",
    title:
      "CFD Analysis and Airflow Optimization for Industrial Dehydrator System",
    description:
      "Commercial Dehydrators America approached us to investigate a critical airflow issue within their industrial dehydrator system. The dehydrator, consisting of 50 stacked drying trays, was experiencing non-uniform airflow at a design speed of 1 meter per second. Despite a seemingly adequate system layout, the airflow was disturbed, non-laminar, and inconsistent",
    caseStudyLink:
      "/case-study/cfd-analysis-and-airflow-optimization-for-industrial-dehydrator-system",
    image: "/images/products/dehydrator-system-image.webp",
  },
  {
    logo: "/images/case-study/design-optimizing-and-cfd-analysis-for-radial-vortex-flow-controls-device-vfc/logo.png",
    title:
      "Design Optimizing and CFD Analysis for Radial Vortex Flow Controls Device (VFC)",
    description:
      "SuDS Enviro Ltd engaged us to design and simulate a set of Radial Vortex Flow Control (VFC) devices that control stormwater flows using a purely hydraulic mechanism—without moving parts, power, or complex control systems. These devices needed to manage both low and high flow conditions, enabling unrestricted flow at low volumes and inducing vortex-driven throttling during peak flows.",
    caseStudyLink:
      "/case-study/design-optimizing-and-cfd-analysis-for-radial-vortex-flow-controls-device-vfc",
    image: "/images/products/vfc-device-image.webp",
  },
  {
    logo: "/images/case-study/cfd-design-optimization-to-achieve-self-sustaining-combustion-in-a-micro-gas-turbine/logo.png",
    title:
      "CFD Design optimization to achieve self-sustaining combustion in a micro gas turbine",
    description: `This project involved a micro gas turbine designed to produce 50 kg thrust. Although the hardware was assembled and accelerated to 13,500 RPM using an external starter, combustion could not be sustained after disengagement. Speed rapidly dropped to 6,500 RPM, followed by complete shutdown, indicating failure to transition to stable self-sustained combustion during normal operating conditions consistently`,
    caseStudyLink:
      "/case-study/cfd-design-optimization-to-achieve-self-sustaining-combustion-in-a-micro-gas-turbine",
    image: "/images/products/item4.webp",
  },
];

export interface IHomePageServiceSubItem {
  tabText: string;
  tabIcon: React.ReactNode;
  contentTitle: string;
  contentDescription: string;
  contetImageCustomClass?: string;
  contentImage: string;
  contentLink: string;
}
export interface IHomePageServiceItem {
  title: string;
  description: string;
  image: string;
  subItems: IHomePageServiceSubItem[];
}
interface IMoreServicesItem {
  title: string;
  description: string;
  link: string;
  logo: string;
}
interface IServiceExpertiseItem {
  title: string;
  image: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IServiceItem {
  id:
    | "finite-element-anlaysis-fea"
    | "computational-fluid-dynamics-cfd"
    | "3d-cad-designing";
  title: React.ReactNode;
  seoTitle: string;
  subtitle: string;
  heroImage: string;
  content: {
    title: string;
    description: React.ReactNode;
    rightSection: {
      image: string;
      moreServices: IMoreServicesItem[];
    };
  };
  expertiseItems: IServiceExpertiseItem[];
  faqs: IFAQ[];
}

export const allServiceItems: IServiceItem[] = [
  {
    id: "finite-element-anlaysis-fea",
    title: (
      <>
        FEA Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    seoTitle: "FEA Analysis Services - Finite Element Analysis Solutions",
    subtitle:
      "Get clear, accurate FEA results every time, solve complex engineering problems into confident decisions.",
    heroImage:
      "/images/service-pages/finite-element-anlaysis-fea/top-section/hero-image.webp",
    content: {
      title: "FEA Services for Strong & Reliable Products",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/finite-element-anlaysis-fea/top-section/content-image.webp",
        moreServices: [
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/computational-fluid-dynamics-cfd",
            logo: "/images/service-pages/computational-fluid-dynamics-cfd/logo.webp",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/3d-cad-designing",

            logo: "/images/service-pages/3d-cad-designing/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Crashworthiness Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img1.webp",
      },
      {
        title: "Structural Design Optimization",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img2.webp",
      },
      {
        title: "Stress Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img3.webp",
      },
      {
        title: "Topology Optmisation",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img4.webp",
      },
      {
        title: "Coupled Thermo-Stress Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img5.webp",
      },
      {
        title: "Mesh Independent Study (MIT)",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img6.webp",
      },
      {
        title: "Buckling Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img7.webp",
      },
      {
        title: "Seismic Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img8.webp",
      },
      {
        title: "Drop Test's",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img9.webp",
      },
      {
        title: "Fatigue Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img10.webp",
      },
      {
        title: "Structural Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img11.webp",
      },
      {
        title: "Modal Analysis",
        image:
          "/images/service-pages/finite-element-anlaysis-fea/expertise-items/img12.webp",
      },
    ],
    faqs: [
      {
        question: "What is FEA and how does it work?",
        answer:
          "FEA or finite element analysis uses models to simulate how parts handle stress, heat, and motion. FEA simulations predict failure, stiffness, and safety before prototyping, saving time, cost, and risk.",
      },
      {
        question: "Why choose finite element analysis for product design?",
        answer:
          "Finite element analysis reveals weak points early, reduces material waste, and speeds iterations. Our FEA analysis guides decisions, improving performance, reliability, and compliance while cutting prototypes, rework, and risk.",
      },
      {
        question: "What problems can FEA simulations find early?",
        answer:
          "FEA simulations uncover stress concentrations, buckling, fatigue life issues, vibration problems, thermal hot spots, contact pressure, and deflection. Finding these early avoids redesigns and delays while improving performance and durability.",
      },
      {
        question: "How accurate are your FEA analysis results?",
        answer:
          "Accuracy comes from correct material data, boundary conditions, and mesh quality. We validate models, run sensitivity checks, and compare with test data so FEA results align closely with real behavior.",
      },
      {
        question: "Which materials and loads can you simulate?",
        answer:
          "We run FEA analysis for metals, plastics, rubbers, and composites under static, dynamic, thermal, drop, impact, and fluid loads. Nonlinear contacts and deformations are handled where physics demands it.",
      },
      {
        question: "What deliverables come with your FEA service?",
        answer:
          "You receive a clear report, result plots, design recommendations, and the simulation files. We also provide updated CAD suggestions and review sessions so your team can apply the findings confidently.",
      },
      {
        question: "Do you validate FEA simulations with testing data?",
        answer:
          "Yes. When possible we compare FEA simulations with lab tests, strain measurements, or field data. This feedback loop builds confidence, improves models, and ensures reliable decisions for design and certification.",
      },
      {
        question: "Can you optimize designs using FEA analysis?",
        answer:
          "Absolutely. We use FEA analysis to iterate thickness, ribs, fillets, and materials, and to explore topology options. The goal is lighter, stronger, more manufacturable products that still meet safety targets.",
      },
      {
        question: "Will FEA improve safety and reduce warranty risks?",
        answer:
          "By revealing failure modes and fatigue issues before production, FEA and finite element analysis guide safer designs. Better margins reduce returns, downtime, and warranty exposure while protecting your brand.",
      },
    ],
  },
  {
    id: "computational-fluid-dynamics-cfd",
    title: (
      <>
        CFD Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    seoTitle: "CFD Analysis Services - Computational Fluid Dynamics Solutions",
    subtitle:
      "From airflow and cooling to mixing and pressure drop, CFD shows what's happening inside your design so you can improve it fast",
    heroImage:
      "/images/service-pages/computational-fluid-dynamics-cfd/top-section/hero-image.webp",
    content: {
      title: "CFD Services for Enhanced Product Performance",
      description: (
        <>
          Our CFD services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/top-section/content-image.webp",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/finite-element-anlaysis-fea",

            logo: "/images/service-pages/finite-element-anlaysis-fea/logo.webp",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/3d-cad-designing",

            logo: "/images/service-pages/3d-cad-designing/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Airflow Testing & Optimisation",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img1.webp",
      },
      {
        title: "Combustion Simulations",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img2.webp",
      },
      {
        title: "Multi-physics Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img3.webp",
      },
      {
        title: "Particle Tracking Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img4.webp",
      },
      {
        title: "Melting & Solidification",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img5.webp",
      },
      {
        title: "HVAC Solutions",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img6.webp",
      },
      {
        title: "Turbo Machinery Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img7.webp",
      },
      {
        title: "Fluid-Structure Interaction-FSI",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img8.webp",
      },
      {
        title: "Design Optimization",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img9.webp",
      },
      {
        title: "Electromagnetic Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img10.webp",
      },
      {
        title: "Hydrodynamic Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img11.webp",
      },
      {
        title: "Thermal Analysis",
        image:
          "/images/service-pages/computational-fluid-dynamics-cfd/expertise-items/img12.webp",
      },
    ],
    faqs: [
      {
        question: "What is CFD and how does it work?",
        answer:
          "CFD or computational fluid dynamics uses models to simulate airflow, heat, and turbulence. CFD analysis predicts pressure, velocity, temperature, and forces before prototyping, reducing cost, time, and risk.",
      },
      {
        question: "Why choose computational fluid dynamics for design?",
        answer:
          "Computational fluid dynamics reveals flow separation, recirculation, and hot spots early. CFD simulations guide shapes, vents, and cooling choices, improving performance, energy efficiency, reliability, and compliance while shortening iterations.",
      },
      {
        question: "What problems can CFD simulations identify early?",
        answer:
          "CFD analysis uncovers excessive pressure drop, vortices, cavitation, erosion risk, mixing issues, insufficient cooling, and noise sources. Finding them early prevents redesigns, improves durability, and increases safety margins.",
      },
      {
        question: "How accurate are your CFD analysis results?",
        answer:
          "Accuracy depends on boundary conditions, mesh quality, turbulence models, and material data. We validate with experiments when possible, perform sensitivity checks, and document assumptions so predictions align with real behavior.",
      },
      {
        question: "Which physics and materials can you simulate?",
        answer:
          "We run CFD simulations for air, water, oils, gases, steam, and multiphase mixtures. Models include heat transfer, conjugate cooling, compressible flows, rotating machinery, reacting flows, and species transport.",
      },
      {
        question: "What deliverables come with your CFD service?",
        answer:
          "You receive a clear report, visuals, and design recommendations. Deliverables include contour plots, streamlines, key metrics, and the simulation files, plus a review meeting to discuss results and next steps.",
      },
      {
        question: "How long does a typical CFD project take?",
        answer:
          "Many CFD projects finish within days to a few weeks depending on geometry cleanup, physics complexity, and computing needs. We set milestones and communicate progress clearly at each stage.",
      },
      {
        question: "Which file formats do you accept and deliver?",
        answer:
          "We accept native files plus STEP IGES Parasolid and deliver drawings in PDF and DWG. Clear naming, versions, and assemblies ensure smooth collaboration with your team and vendors.",
      },
      {
        question: "Do you validate CFD simulations with testing?",
        answer:
          "Yes. When possible we compare CFD results with lab measurements or field data like temperatures, flow rates, and pressures. This feedback improves models and builds confidence for certification decisions.",
      },
      {
        question: "Can you optimize designs using CFD analysis?",
        answer:
          "Absolutely. We use CFD to iterate shapes, ducts, inlets, and vents, balancing pressure drop, mixing, and cooling. The outcome is lighter, quieter, more efficient products with fewer parts.",
      },
    ],
  },
  {
    id: "3d-cad-designing",
    title: (
      <>
        CAD Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    seoTitle: "CAD Analysis Services - 3D CAD Modeling & Design Solutions",
    subtitle:
      "From sketch to 3D model, CAD helps you refine designs, spot issues early, and move faster to manufacturing",
    heroImage:
      "/images/service-pages/3d-cad-designing/top-section/hero-image.webp",
    content: {
      title: "CAD Services for Precise Digital Models",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/3d-cad-designing/top-section/content-image.webp",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/finite-element-anlaysis-fea",

            logo: "/images/service-pages/finite-element-anlaysis-fea/logo.webp",
          },
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/computational-fluid-dynamics-cfd",
            logo: "/images/service-pages/computational-fluid-dynamics-cfd/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "3D Modeling",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img1.webp",
      },
      {
        title: "Assembly Modeling",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img2.webp",
      },
      {
        title: "Sheet Metal Design",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img3.webp",
      },
      {
        title: "Design for Manufacturing-DFM",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img4.webp",
      },
      {
        title: "Parametric Modeling",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img5.webp",
      },
      {
        title: "Reverse Engineering",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img6.webp",
      },
      {
        title: "Product Visualization",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img7.webp",
      },
      {
        title: "CAD Conversion",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img8.webp",
      },
      {
        title: "Rapid Prototyping",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img9.webp",
      },
      {
        title: "Geometric Dimensioning & Tolerancing",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img10.webp",
      },
      {
        title: "BOM - Bill of Materials",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img11.webp",
      },
      {
        title: "Motion Analysis",
        image:
          "/images/service-pages/3d-cad-designing/expertise-items/img12.webp",
      },
    ],
    faqs: [
      {
        question: "What is CAD and how does it work?",
        answer:
          "CAD or computer aided design uses 3D models to plan shape fit and function. Our CAD modeling shows assemblies early, reduces mistakes, and speeds prototypes, tooling, and manufacturing handoff.",
      },
      {
        question: "Why use 3D CAD for product design projects?",
        answer:
          "3D CAD lets us explore alternatives quickly, test clearances, and check assembly steps. Designs improve earlier, change costs drop, and you get reliable data for simulation, drawings, machining or molding.",
      },
      {
        question: "What CAD services do you provide for clients?",
        answer:
          "We provide 3D CAD modeling, detailed drafting, assemblies, surface modeling, sheet metal, mechanisms, BOMs, exploded views, renderings, and manufacturing packs. We also prepare DFM reviews and handoff packages for suppliers.",
      },
      {
        question: "How accurate are your CAD models and drawings?",
        answer:
          "Accuracy comes from good constraints, references, and careful checks. We use model validation, interference detection, and controlled revisions so CAD models and drawings match real parts and assembly intent.",
      },
      {
        question: "Can you create manufacturing drawings and tolerances?",
        answer:
          "Yes. We create dimensioned manufacturing drawings with GD&T where required. Tolerances, notes, materials, and finishes are specified, aligned with your supplier capabilities for CNC machining, sheet metal, or molding.",
      },
      {
        question: "Do you reverse engineer parts from physical samples?",
        answer:
          "Yes. We reverse engineer parts using calipers, scans, to recreate accurate CAD geometry. Critical datums and tolerances are captured, and we produce manufacturable drawings and STEP files for production.",
      },
      {
        question:
          "Can you optimize designs for weight cost and manufacturability?",
        answer:
          "Yes. We optimize wall thickness, ribs, draft, and fillets, balancing strength, weight, cost, and manufacturability. DFM and DFA checks reduce machining time, mold complexity, and assembly steps without sacrificing performance.",
      },
      {
        question: "How long does a typical CAD project take?",
        answer:
          "Most CAD projects complete within days to a few weeks depending on part complexity, revision rounds, and supplier needs. We set clear milestones and communicate progress with checkpoints and reviews.",
      },
      {
        question: "How do you handle CAD models for FEA?",
        answer:
          "Send native CAD or STEP files. We clean geometry, defeature where needed, and ensure contacts and loads reflect reality. Good CAD preparation improves mesh quality and speeds accurate simulation results.",
      },
    ],
  },
];

export const allHomePageServiceItems: IHomePageServiceItem[] = [
  {
    title: "Computational Fluid Dynamics (CFD)",
    description:
      "Provides clear insights to improve your product’s efficiency and reliability",
    image: "/images/services/turbo-machinery.webp",
    subItems: [
      {
        tabText: "Airflow Analysis",
        tabIcon: allIcons.services[0][0],

        contentTitle:
          "Computational Airflow Analysis for Optimized Design Efficiency",
        contentDescription:
          "Our airflow analysis service helps you understand and improve how air moves through your products or systems. Using advanced CFD simulations, we detect flow inefficiencies, reduce drag and enhance cooling performance to achieve better energy efficiency and product reliability",
        contentImage: "/images/services/subitems/item1/content/img1.webp",
        contentLink: "/services/airflow-analysis",
      },
      {
        tabText: "Design optimisation",
        tabIcon: allIcons.services[0][1],
        contentTitle: "Design Optimization for Improved CFD Performance",
        contentDescription:
          "Our CFD design optimization service refines geometry and flow paths to boost  performance, reduce drag and enhance efficiency. Using simulation outputs, we help you achieve the best fluid dynamics results while minimizing cost, time and design iterations.",
        contentImage: "/images/services/subitems/item1/content/img2.webp",
        contentLink: "/services/design-optimization",
      },
      {
        tabText: "FSI",
        tabIcon: allIcons.services[0][2],
        contentTitle: "Fluid-Structure Interaction (FSI) for Any Systems",
        contentDescription:
          "Our FSI simulations capture how fluids and structures interact under real conditions. We predict vibration, deformation, and fatigue to ensure durability and safety in designs like pressure vessels, turbines and flow is exposed mechanical components.",
        contentImage: "/images/services/subitems/item1/content/img3.webp",
        contentLink: "/services/fsi",
      },
      {
        tabText: "Heat Transfer",
        tabIcon: allIcons.services[0][3],
        contentTitle: "Heat Transfer Analysis for Thermal System Efficiency",
        contentDescription:
          "We analyze heat transfer through conduction, convection and radiation to optimize thermal management. CFD based studies help improve cooling, reduce hotspot, and enhance energy efficiency in products such as heat exchangers, electronics and industrial systems.",
        contentImage: "/images/services/subitems/item1/content/img4.webp",
        contentLink: "/services/heat-transfer",
      },
      {
        tabText: "Multiphase Flow",
        tabIcon: allIcons.services[0][4],
        contentTitle: "Multiphase Flow Simulation for Complex Fluid Systems",
        contentDescription:
          "Our multiphase CFD services model interactions between gases, liquids and solids. We evaluate mixing, separation and phase change processes to improve product performance in pipelines, reactors and other engineering applications involving multiple flow regimes.",
        contentImage: "/images/services/subitems/item1/content/img5.webp",
        contentLink: "/services/multiphase-flow",
      },
      {
        tabText: "Turbomachinery",
        tabIcon: allIcons.services[0][5],
        contentTitle: "Turbomachinery CFD Analysis for High-Performance Design",
        contentDescription:
          "We provide CFD solutions for turbomachinery including compressors, pumps and turbines. Our analysis helps optimize blade design, minimize losses and improve efficiency through accurate modeling of rotating flows, turbulence and pressure distribution.",
        contentImage: "/images/services/subitems/item1/content/img6.webp",
        contentLink: "/services/turbomachinery",
      },
    ],
  },
  {
    title: "2D/3D Modeling & Rendering (CAD)",
    description:
      "Turns your ideas into clear, detailed designs ready for development",
    image: "/images/services/3d-modeling.webp",
    subItems: [
      {
        tabText: "3D Modeling",
        tabIcon: allIcons.services[1][0],
        contentTitle: "3D Modeling for Accurate Product Development",
        contentDescription:
          "We create precise 3D CAD models that capture every design detail for manufacturing and visualization. Our modeling services help improve design accuracy, reduce errors and streamline the product development process from concept to production.",
        contentImage: "/images/services/subitems/item2/content/img1.webp",
        contentLink: "/services/product-design",
      },
      {
        tabText: "Assembly Modeling",
        tabIcon: allIcons.services[1][1],
        contentTitle: "Assembly Modeling for Seamless Mechanical Integration",
        contentDescription:
          "Our assembly modeling service ensures perfect part fit and function. We simulate real-life motion, alignment, and constraints to verify mechanical compatibility, optimize performance and prevent costly errors before production begins.",
        contentImage: "/images/services/subitems/item2/content/img2.webp",
        contentLink: "/services/mechanical-design",
      },
      {
        tabText: "Mold Designing",
        tabIcon: allIcons.services[1][2],
        contentTitle: "Mold Designing for Efficient Manufacturing Solutions",
        contentDescription:
          "We design injection molds that ensure high-quality production and minimal material waste. Our CAD-based mold design focuses on manufacturability, cooling efficiency and durability to support cost effective mass production.",
        contentImage: "/images/services/subitems/item2/content/img3.webp",
        contentLink: "/services/architectural-design",
      },
      {
        tabText: "Product Design",
        tabIcon: allIcons.services[1][3],
        contentTitle: "Product Design for Innovative and Functional Solutions",
        contentDescription:
          "Our product design service transforms ideas into manufacturable, market-ready solutions. Using CAD modeling and engineering expertise, we balance aesthetics, performance and cost to create reliable designs for various industries.",
        contentImage: "/images/services/subitems/item2/content/img4.webp",
        contentLink: "/services/3d-visualization",
      },
      {
        tabText: "Reverse Engineering",
        tabIcon: allIcons.services[1][4],
        contentTitle: "Reverse Engineering for Accurate CAD Reconstruction",
        contentDescription:
          "We convert physical parts into detailed CAD models through precise 3D scanning and measurement. Our reverse engineering service enables redesign, modification or digital archiving of legacy components and equipment.",
        contentImage: "/images/services/subitems/item2/content/img5.webp",
        contentLink: "/services/technical-drawing",
      },
      {
        tabText: "Sheet Metal Design",
        tabIcon: allIcons.services[1][5],
        contentTitle: "Sheet Metal Design for Durable Fabrication Efficiency",
        contentDescription:
          "Our CAD sheet metal design service focuses on manufacturability and strength. We create accurate flat patterns, bend allowances, and assemblies to reduce waste and ensure reliable, costeffective production.",
        contentImage: "/images/services/subitems/item2/content/img6.webp",
        contentLink: "/services/reverse-engineering",
      },
    ],
  },
  {
    title: "Finite Element Analysis (FEA)",
    description:
      "Checks your product’s strength and safety before it’s ever built",
    image: "/images/services/structural-analysis.webp",
    subItems: [
      {
        tabText: "Nonlinear Analysis",
        tabIcon: allIcons.services[2][0],
        contentTitle: "Nonlinear Analysis for Complex Material Behavior",
        contentDescription:
          "We use nonlinear FEA to capture real-world responses involving plasticity, contact and large deformations. This approach improves accuracy for metal forming, rubber components, crash simulations and other complex engineering challenges.",
        contentImage: "/images/services/subitems/item3/content/img1.webp",
        contentLink: "/services/nonlinear-analysis",
      },
      {
        tabText: "Dynamic Simulation",
        tabIcon: allIcons.services[2][1],
        contentTitle:
          "Dynamic Simulations for Real World Structural Performance",
        contentDescription:
          "Our assembly modeling service ensures perfect part fit and function. We simulate real-life motion, alignment, and constraints to verify mechanical compatibility, optimize performance and prevent costly errors before production begins.",
        contentImage: "/images/services/subitems/item3/content/img2.webp",
        contentLink: "/services/dynamic-simulation",
      },
      {
        tabText: "Fatigue & Fracture",
        tabIcon: allIcons.services[2][2],
        contentTitle: "Fatigue and Fracture Analysis for Product Durability",
        contentDescription:
          "Our fatigue and fracture analysis predicts component life and failure risks under cyclic loading. Using detailed stress life and strain life methods, we help extend service life and prevent cracks in critical structures.",
        contentImage: "/images/services/subitems/item3/content/img3.webp",
        contentLink: "/services/fatigue-fracture",
      },
      {
        tabText: "Composite Analysis",
        tabIcon: allIcons.services[2][3],
        contentTitle: "Composite Analysis for Structural Strength",
        contentDescription:
          "Our FEA composite analysis evaluates fiber orientations, layer stacking and material behavior under load. We help optimize lightweight structures for strength, stiffness, and durability. Also for Hookean and Non-Hookean models.",
        contentImage: "/images/services/subitems/item3/content/img4.webp",
        contentLink: "/services/composite-analysis",
      },
      {
        tabText: "Structural Analysis",
        tabIcon: allIcons.services[2][4],
        contentTitle:
          "Structural Analysis for Strength and Stability Optimization",
        contentDescription:
          "Our FEA-based structural analysis ensures your designs meet strength, stiffness, and stability requirements. We evaluate loads, constraints, and material properties to enhance safety and performance across buildings, machinery, and mechanical components.",
        contentImage: "/images/services/subitems/item3/content/img5.webp",
        contentLink: "/services/structural-analysis",
      },
      {
        tabText: "Thermal Analysis",
        tabIcon: allIcons.services[2][5],
        contentTitle: "Thermal Analysis for Temperature Structural Performance",
        contentDescription:
          "We simulate heat distribution and thermal stresses using FEA to improve performance under temperature changes. Our analysis supports thermal protection design, expansion control and reliability in electronics, engines and industrial assemblies",
        contentImage: "/images/services/subitems/item3/content/img6.webp",
        contentLink: "/services/thermal-analysis",
      },
    ],
  },
];

export const allHeroSectionItems: IHeroSectionItem[] = [
  {
    badgeText: "Our Most In-Demand CAE Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Computation Fluid Dynamics - CFD",
    features: [
      "Aerodynamic Analysis",
      "Airflow Optimization",
      "VOF-MultiPhase Analysis",
      "Thermal Managment",
    ],
    placeOrderLink: "/contact-us",
    ourServicesLink: "/services",
    image: "/images/hero-section/item1.webp",
  },
  {
    badgeText: "Our Most In-Demand CAE Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Finite Element Analysis - FEA",
    features: [
      "Fatigue & Durability Testing",
      "Fluid-Structure Interaction",
      "Structural Analysis",
      "Stress Analysis",
    ],
    placeOrderLink: "/contact-us",
    ourServicesLink: "/services",
    image: "/images/hero-section/item2.webp",
  },
  {
    badgeText: "Our Most In-Demand CAE Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Computation Fluid Dynamics-CAD",
    features: [
      "3D Product Design",
      "Reverse Engineering",
      "Mechanical Part Design",
      "Sheet Metal Design",
    ],
    placeOrderLink: "/contact-us",
    ourServicesLink: "/services",
    image: "/images/hero-section/item3.webp",
  },
];

export interface IClientReview {
  badgeText: string;
  badgeIcon: string;
  title: string;
  reviewText: string;
  clientName: string;
  clientRole: string;
  verifyLinkText: string;
  verifyLink: string;
  image: string;
}

export const allClientReviews: IClientReview[] = [
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "I worked with Muhammad on a classic acoustic topic, trying to develop one project related to my bussiness. He rewied my work, that we shared, improved it, fixed bugs and errors and clearly explained his work. I apreciated the clarity of the workflow proposed and its implementation. He was available and present in spite of our time offset. Also, it was my first time",
    clientName: "Serrena Allen",
    clientRole: "Founder & Co-Founder of Airvitalize",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review1.webp",
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "It was an absolute pleasure to work with Muhammad! He had excellent communication throughout the process, ensuring everything was clear and addressing any questions quickly. His understanding and flexibility made working together very easy. The work was delivered earlier than expected and of high quality. Would definitely recommend.",
    clientName: "Elliot Tucker",
    clientRole: "Managing Member at Megachip Solutions LLC",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review2.webp",
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "Solvo Engineers did an excellent job on our CFD project for airflow optimization in a dust catcher device. They carefully analyzed the design, improved efficiency by addressing critical flow issues, and clearly explained every step of their process. Their expertise and responsiveness made collaboration very smooth and effective.",
    clientName: "Patrick M.",
    clientRole: "Co-Founder & CEO of MLT Solutions",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review3.webp",
  },
];

export interface IIndustryItem {
  name: string;
  icon: string;
}

export const allIndustries: IIndustryItem[] = [
  {
    name: "Aerospace & Defense",
    icon: "/images/about/industries/aerospace-defense.png",
  },
  {
    name: "Automotive & Transportation",
    icon: "/images/about/industries/automotive-transportation.png",
  },
  {
    name: "Energy",
    icon: "/images/about/industries/energy.png",
  },
  {
    name: "Consumer Products",
    icon: "/images/about/industries/consumer-products.png",
  },
  {
    name: "Machinery & Robotics",
    icon: "/images/about/industries/machinery-robotics.png",
  },
  {
    name: "Manufacturing",
    icon: "/images/about/industries/manufacturing.png",
  },
  {
    name: "Marine",
    icon: "/images/about/industries/marine.png",
  },
  {
    name: "Medical",
    icon: "/images/about/industries/medical.png",
  },
];

export interface ICoreValue {
  title: string;
  description: string;
  icon: string;
}

export const allCoreValues: ICoreValue[] = [
  {
    title: "Innovation",
    description: "Innovating with technology and creativity.",
    icon: "/images/about/core-values/innovation.webp",
  },
  {
    title: "Integrity",
    description: "We build trust through honesty and transparency.",
    icon: "/images/about/core-values/integrity.webp",
  },
  {
    title: "Collabration",
    description: "We collaborate closely to achieve shared success.",
    icon: "/images/about/core-values/collaboration.webp",
  },
  {
    title: "Quality",
    description: "Precision and performance define our engineering.",
    icon: "/images/about/core-values/quality.webp",
  },
  {
    title: "Client-Centricity",
    description: "We focus on client needs to provide tailored solutions.",
    icon: "/images/about/core-values/client-centricity.webp",
  },
  {
    title: "Constant Growth",
    description: "We grow through learning and development.",
    icon: "/images/about/core-values/integrity.webp",
  },
];

export interface ICustomerSimulationPhase {
  phaseTitle: string;
  subItems: string[];
  stepNumber: number;
  stepImage: string;
}

export interface ICustomerSimulationItem {
  badgeText: string;
  badgeIcon: string;
  title: string;
  leftPhase: ICustomerSimulationPhase;
  rightPhase: ICustomerSimulationPhase;
}

export const allCustomerSimulationItems: ICustomerSimulationItem[] = [
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation Process",
    leftPhase: {
      phaseTitle: "Information Gathering & Requirement",
      subItems: ["Team Assembly", "Responsibility"],
      stepNumber: 1,
      stepImage: "/images/customer-simulation/step1.webp",
    },
    rightPhase: {
      phaseTitle: "Assigning Roles & Responsibilities",
      subItems: ["Consultation", "Requirements Specification"],
      stepNumber: 3,
      stepImage: "/images/customer-simulation/step2.webp",
    },
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation",
    leftPhase: {
      phaseTitle: "Project Planning & Strategy Development",
      subItems: ["Resource Allocation", "Simulation Roadmap"],
      stepNumber: 7,
      stepImage: "/images/customer-simulation/step3.webp",
    },
    rightPhase: {
      phaseTitle: "Simulation Process Execution",
      subItems: ["CAD & Mesh", "Pre & Post Processing"],
      stepNumber: 8,
      stepImage: "/images/customer-simulation/step4.webp",
    },
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation",
    leftPhase: {
      phaseTitle: "Quality Assurance & Validation",
      subItems: ["Verification Protocals", "Validation Testing"],
      stepNumber: 5,
      stepImage: "/images/customer-simulation/step5.webp",
    },
    rightPhase: {
      phaseTitle: "Reporting & Delivery",
      subItems: ["Comprehensive Reporting", "Final Delivery"],
      stepNumber: 6,
      stepImage: "/images/customer-simulation/step6.webp",
    },
  },
];

export interface IJobPosition {
  id: string;
  title: string;
  employmentType: string;
  workType: string;
  location: string;
  reqId: string;
  team: string;
  introduction: string;
  keyResponsibilities: string[];
  qualifications: string[];
  whyJoinUs: string[];
  readyToApply: string;
  link: string;
}

export { allJobPositions } from "./jobs.data";
