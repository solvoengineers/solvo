import React from "react";
import { project1 } from "./data/projects/project1";
import { project2 } from "./data/projects/project2";
import { project3 } from "./data/projects/project3";
import { project4 } from "./data/projects/project4";
import { project5 } from "./data/projects/project5";
import { project6 } from "./data/projects/project6";
import { project7 } from "./data/projects/project7";
import { project8 } from "./data/projects/project8";
import { project9 } from "./data/projects/project9";
import { project10 } from "./data/projects/project10";
import { project11 } from "./data/projects/project11";
import { project12 } from "./data/projects/project12";
import { project13 } from "./data/projects/project13";
import { project14 } from "./data/projects/project14";
import { project15 } from "./data/projects/project15";
import { project16 } from "./data/projects/project16";
import { project17 } from "./data/projects/project17";
import { project18 } from "./data/projects/project18";
import { project19 } from "./data/projects/project19";
import { project20 } from "./data/projects/project20";
import { project21 } from "./data/projects/project21";
import { project22 } from "./data/projects/project22";
import { project23 } from "./data/projects/project23";
import { project24 } from "./data/projects/project24";
import { project25 } from "./data/projects/project25";
import { project26 } from "./data/projects/project26";
import { project27 } from "./data/projects/project27";
import { project28 } from "./data/projects/project28";
import { project29 } from "./data/projects/project29";
import { project30 } from "./data/projects/project30";



export interface IFullProject {
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  link: string;
  thumbnail: string;
  summary: IProjectSection[];
  sections: IProjectSection[];
}

export interface IProjectSection {
  title: string;
  description: React.ReactNode;
}

export const allFullProjects: IFullProject[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
  project29,
  project30,

];
