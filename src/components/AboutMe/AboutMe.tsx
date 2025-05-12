"use client";
import React from "react";
import {
  SocialMidiaCard,
  SocialMidiaCardProps,
} from "../SocialMidiaCard/SocialMidiaCard";
import "./AboutMe.style.css";
import { anchors } from "@/mocks/headerLink";

export interface AboutMeProps {
  title: string;
  description: string;
  socials: SocialMidiaCardProps[];
}

export const AboutMe: React.FC<AboutMeProps> = ({
  title,
  description,
  socials,
}) => {
  return (
    <div className="aboutme" id={anchors.about}>
      <h1 className="aboutme__title">{title}</h1>

      <p className="aboutme__description">{description}</p>

      <div className="aboutme__midia">
        {socials.map((social, index) => (
          <SocialMidiaCard
            key={index}
            icon={social.icon}
            title={social.title}
            subtitle={social.subtitle}
            ctaLink={social.ctaLink}
            target={social.target}
          />
        ))}
      </div>
    </div>
  );
};
