import { HeroProps } from "@/components/Hero/Hero";
import { WhatsappLink } from "./aboutMe";

export const heroMock: HeroProps = {
  title: "Olá 👋, eu sou o Samuel!",
  subtitle:
    "Desenvolvedor Web e de Jogos: crio sites e sistemas com Next.js, React e TypeScript, e jogos com Unity, Unreal e C# ;)",
  image: "/assets/4e4e8e7deb35114e072d386374a77d50-removebg.png",
  contact: {
    cta: "Entre em contato",
    ctaLink: WhatsappLink,
    target: "_blank",
  },
  cv: {
    cta: "Download CV",
    ctaLink: "/curriculo-samuel-rogerio-dev-web.pdf",
    isDownload: true,
  },
};
