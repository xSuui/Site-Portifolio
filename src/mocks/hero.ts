import { HeroProps } from "@/components/Hero/Hero";
import { WhatsappLink } from "./aboutMe";

export const heroMock: HeroProps = {
  title: "Olá 👋, eu sou o Samuel!",
  subtitle:
    "Desenvolvedor de jogos com experiência em Unity, Unreal Engine, C# e C++ ;)",
  image: "/assets/4e4e8e7deb35114e072d386374a77d50-removebg.png",
  contact: {
    cta: "Entre em contato",
    ctaLink: WhatsappLink,
    target: "_blank",
  },
  cv: {
    cta: "Download CV",
    ctaLink: "/Currículo Game Dev.pdf",
    isDownload: true,
  },
};
