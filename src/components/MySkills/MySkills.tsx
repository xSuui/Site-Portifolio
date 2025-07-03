"use client";
import React from "react";
import "./MySkills.style.css";
import {
  SocialMidiaCard,
  SocialMidiaCardProps,
} from "../SocialMidiaCard/SocialMidiaCard";
import { anchors } from "@/mocks/headerLink";

export interface MySkillsProps {
  title: string;
  skills: SocialMidiaCardProps[];
}

export const MySkills: React.FC<MySkillsProps> = ({ skills, title }) => {
  return (
    <div className="myskills" id={anchors.skills}>
      <div className="myskills__container">
        <h1 className="myskills__title" data-aos="fade-up" data-aos-delay="800">
          {title}
        </h1>

        <div className="myskills__list">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "zoom-in" : "zoom-in-up"}
              data-aos-delay={`1${index * 100}`}
            >
              <SocialMidiaCard
                icon={skill.icon}
                title={skill.title}
                subtitle={skill.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
