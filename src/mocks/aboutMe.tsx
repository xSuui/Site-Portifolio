import { AboutMeProps } from "@/components/AboutMe/AboutMe";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaItchIo } from "react-icons/fa6";

export const WhatsappLink = "https://wa.me/5511940196074?text=Olá Samuel!";

export const aboutMeMock: AboutMeProps = {
  title: "Sobre min",
  description: `Sou Samuel, como ja viu ali em cima hehe! Eu tenho 24 anos e sou apaixonado pelo universo dos jogos. Estou correndo contra o tempo para aprender ao máximo sobre programação e me tornar um Game Developer.
Tenho experiência em design e programação na Unity 3D e Unreal Engine 5, utilizando C# e C++. Além disso, me especializo em pixel art para enriquecer a estética dos projetos. Já desenvolvi um curto RPG 2D e continuo aprimorando minhas habilidades para criar experiências imersivas e inovadoras.`,
  socials: [
    {
      ctaLink: "https://www.linkedin.com/in/samuel-rogerio/",
      icon: <IoLogoLinkedin size={50} color="var(--info-main)" />,
      title: "Linkedin",
      subtitle: "Samuel Rogerio",
      target: "_blank",
    },
    {
      ctaLink: "https://github.com/xSuui",
      icon: <IoLogoGithub size={50} color="var(--info-main)" />,
      title: "Github",
      subtitle: "xSuui",
      target: "_blank",
    },
    {
      ctaLink: "mailto:samuel2013rogerio@gmail.com",
      icon: <MdOutlineMailOutline size={50} color="var(--info-main)" />,
      title: "E-mail",
      subtitle: "samuel2013rogerio@gmail.com",
      target: "_blank",
    },
    {
      ctaLink: "https://xsuui.itch.io/",
      icon: <FaItchIo size={50} color="var(--info-main)" />,
      title: "Itch.io",
      subtitle: "xsuui",
      target: "_blank",
    },
    {
      ctaLink: WhatsappLink,
      icon: <IoLogoWhatsapp size={50} color="var(--info-main)" />,
      title: "Whatsapp",
      subtitle: "11 94019 6074",
      target: "_blank",
    },
  ],
};
