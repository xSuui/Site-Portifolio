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
        <h1 className="projects__title">{title}</h1>

        <p
          className="projects__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
