import Image from "next/image";
import Link from "next/link";
import { IFullProject } from "../helpers/projects.data";

interface ProjectCardProps {
  project: IFullProject;
  className?: string;
  ref?: React.RefObject<HTMLDivElement> | null;
}

export default function ProjectCard({
  project,
  className = "",
  ref,
}: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      className={`flex flex-col items-center gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full max-w-[21.833125rem] sm:max-w-full hover:shadow-lg transition-shadow min-h-full ${className}`}
    >
      {/* Image */}
      <div
        ref={ref}
        className="relative w-full h-[17rem] sm:max-w-[17rem] sm:max-h-[12rem] rounded-[1.25rem] overflow-hidden bg-transparent"
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 w-full  h-full flex-1">
        {/* Title */}
        <div className=" font-semibold  text-[1rem] text-footer-heading  font-poppins">
          {project.title}
        </div>

        {/* Description and Read More */}
        <div className="flex flex-row items-end w-full">
          <p className="text-base  text-footer-text font-normal font-poppins flex-1">
            {project.description.slice(0, 100)}...{" "}
            <span className="text-xs  text-primary-blue font-normal font-poppins">
              Read more
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
