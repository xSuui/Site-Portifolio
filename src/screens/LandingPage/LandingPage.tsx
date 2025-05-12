import React from "react";
import "./LandingPage.style.css";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { heroMock } from "@/mocks/hero";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { aboutMeMock } from "@/mocks/aboutMe";
import { headerLinkMock } from "@/mocks/headerLink";
import { Projects } from "@/components/Projects/Projects";
import { projectsMock } from "@/mocks/projects";
import { MySkills } from "@/components/MySkills/MySkills";
import { myskillsMock } from "@/mocks/myskills";
import { Footer } from "@/components/Footer/Footer";

// export interface LandingPageProps {}

export const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="landingpage__container">
        <Header links={headerLinkMock.links} logo={headerLinkMock.logo} />
        <Hero
          title={heroMock.title}
          subtitle={heroMock.subtitle}
          image={heroMock.image}
          cv={heroMock.cv}
          contact={heroMock.contact}
        />
        <AboutMe
          title={aboutMeMock.title}
          description={aboutMeMock.description}
          socials={aboutMeMock.socials}
        />

        <Projects
          title={projectsMock.title}
          description={projectsMock.description}
          projects={projectsMock.projects}
        />

        <MySkills title={myskillsMock.title} skills={myskillsMock.skills} />
      </div>

      <Footer />
    </div>
  );
};
