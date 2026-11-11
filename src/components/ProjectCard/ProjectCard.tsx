"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import { IoPlayCircle, IoGlobeOutline } from "react-icons/io5";
import "./ProjectCard.style.css";

export interface ProjectCardProps {
  image: string;
  title: string;
  description?: string;
  githubCta?: string;
  youtubeCta?: string;
  videoCta?: string;
  siteCta?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  githubCta,
  youtubeCta,
  videoCta,
  siteCta,
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
        {description && <p className="content__description">{description}</p>}

        <div className="content__cta">
          {githubCta && (
            <Link href={githubCta} target="_blank" aria-label="GitHub">
              <IoLogoGithub size={28} />
            </Link>
          )}
          {youtubeCta && (
            <Link href={youtubeCta} target="_blank" aria-label="YouTube">
              <IoLogoYoutube size={28} />
            </Link>
          )}
          {siteCta && (
            <Link href={siteCta} target="_blank" aria-label="Ver ao vivo">
              <IoGlobeOutline size={28} />
            </Link>
          )}
          {videoCta && (
            <Link href={videoCta} target="_blank" aria-label="Ver vídeo">
              <IoPlayCircle size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
