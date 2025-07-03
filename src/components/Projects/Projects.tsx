"use client";
import React from "react";
import "./Projects.style.css";
import { anchors } from "@/mocks/headerLink";
import { ProjectCard, ProjectCardProps } from "../ProjectCard/ProjectCard";

export interface ProjectsProps {
  projects: ProjectCardProps[];
  title: string;
  description: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  description,
  title,
}) => {
  return (
    <div className="projects" id={anchors.projects}>
      <div className="projects__container">
        <h1 className="projects__title" data-aos="fade-up" data-aos-delay="800">
          {title}
        </h1>

        <p
          className="projects__description"
          dangerouslySetInnerHTML={{ __html: description }}
          data-aos="fade-up"
          data-aos-delay="1000"
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "zoom-in" : "zoom-in-up"}
              data-aos-delay={`1${index * 100}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
