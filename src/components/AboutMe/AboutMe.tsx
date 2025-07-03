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
      <h1 className="aboutme__title" data-aos="fade-up" data-aos-delay="1000">
        {title}
      </h1>

      <p
        className="aboutme__description"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        {description}
      </p>

      <div className="aboutme__midia">
        {socials.map((social, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "zoom-in" : "zoom-in-up"}
            data-aos-delay={`${index * 100}`}
          >
            <SocialMidiaCard
              icon={social.icon}
              title={social.title}
              subtitle={social.subtitle}
              ctaLink={social.ctaLink}
              target={social.target}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
