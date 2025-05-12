import { HeaderProps } from "@/components/Header/Header";

export const anchors = {
  about: "about",
  projects: "projects",
  services: "services",
  skills: "skills",
  home: "home",
};

export const headerLinkMock: HeaderProps = {
  logo: {
    image: "/assets/logo.svg",
    cta: `#${anchors.home}`,
  },
  links: [
    { href: `#${anchors.about}`, label: "Sobre mim" },
    { href: `#${anchors.projects}`, label: "Projetos" },
    // { href: `#${anchors.services}`, label: "Serviços" },
    { href: `#${anchors.skills}`, label: "Minhas skills" },
  ],
};
