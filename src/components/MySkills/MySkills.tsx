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
        <h1 className="myskills__title">{title}</h1>

        <div className="myskills__list">
          {skills.map((skill, index) => (
            <SocialMidiaCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              subtitle={skill.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
