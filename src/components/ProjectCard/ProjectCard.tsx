"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import "./ProjectCard.style.css";

export interface ProjectCardProps {
  image: string;
  title: string;
  githubCta: string;
  youtubeCta: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  githubCta,
  youtubeCta,
}) => {
  return (
    <div className="projectcard">
      <div className="image-box">
        <Image
          src={image}
          alt={title}
          width={600}
          height={320}
          objectFit="contain"
          loading="lazy"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>

      <div className="content">
        <h1>{title}</h1>

        <div className="content__cta">
          <Link href={githubCta} target="_blank">
            <IoLogoGithub size={28} />
          </Link>
          <Link href={youtubeCta} target="_blank">
            <IoLogoYoutube size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};
