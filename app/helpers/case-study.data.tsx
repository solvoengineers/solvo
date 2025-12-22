export interface ICaseStudy {
  id: string;
  title: string;
  seoTitle: string;
  description: string;
  logo: string;
  link: string;
}

export const allCaseStudies: ICaseStudy[] = [
  {
    id: "train-side-bumper",
    title: "Train's Side Bumper",
    seoTitle:
      "FEA Analysis to Enhancing Stiffness & Fatigue Life of Rubber-to-Metal Bonded Parts",
    description:
      "Optimization rubber-to-metal bonded part for stiffness and fatigue Life",
    logo: "/images/case-study/fea-analysis-to-enhancing-stiffness-fatigue-life-of-rubber-to-metal-bonded-parts/logo.png",
    link: "/case-studies/fea-analysis-to-enhancing-stiffness-fatigue-life-of-rubber-to-metal-bonded-parts",
  },
  {
    id: "rvfcd",
    title: "RVFCD",
    seoTitle:
      "CFD Analysis and Airflow Optimization for Industrial Dehydrator System",
    description:
      "Optimizing the Design of the Radial Vortex Flow Controls Device (VFC)",
    logo: "/images/case-study/cfd-analysis-and-airflow-optimization-for-industrial-dehydrator-system/logo.png",
    link: "/case-studies/cfd-analysis-and-airflow-optimization-for-industrial-dehydrator-system",
  },
  {
    id: "industrial-dehydrator",
    title: "Industrial Dehydrator",
    seoTitle:
      "Design Optimizing and CFD Analysis for Radial Vortex Flow Controls Device (VFC)",
    description:
      "CFD Airflow Optimization for Industrial Dehydrator System Analysis",
    logo: "/images/case-study/design-optimizing-and-cfd-analysis-for-radial-vortex-flow-controls-device-vfc/logo.png",
    link: "/case-studies/design-optimizing-and-cfd-analysis-for-radial-vortex-flow-controls-device-vfc",
  },
  {
    id: "gas-turbine",
    title: "Gas Turbine",
    seoTitle:
      "CFD Design optimization to achieve self-sustaining combustion in a micro gas turbine",
    description:
      "CFD redesigns micro gas turbine for self-sustaining thrust target",
    logo: "/images/case-study/cfd-design-optimization-to-achieve-self-sustaining-combustion-in-a-micro-gas-turbine/logo.png",
    link: "/case-studies/cfd-design-optimization-to-achieve-self-sustaining-combustion-in-a-micro-gas-turbine",
  },
];
