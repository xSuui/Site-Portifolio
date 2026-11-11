import { AboutMeProps } from "@/components/AboutMe/AboutMe";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaItchIo } from "react-icons/fa6";

export const WhatsappLink = "https://wa.me/5511940196074?text=Olá Samuel!";

export const aboutMeMock: AboutMeProps = {
  title: "Sobre mim",
  description: `Desenvolvo sites e sistemas web para pequenos negócios, do layout ao deploy, e crio jogos.
Meu projeto mais recente é um sistema de agendamento online para um salão de manicure, em uso real: página do salão com serviços e fotos, agendamento pelo celular com sinal por Pix e um painel com as reservas ao vivo, equipe, folgas e balanço de ganhos com gráficos. Fiz com Next.js, TypeScript, Tailwind, Supabase e Vercel, conversando direto com a cliente.
Nos jogos, sou formado em Jogos Digitais pela FMU e trabalho com Unity 3D e Unreal Engine 5 (C# e C++), além de pixel art. Já fiz um RPG 2D e estou desenvolvendo um metroidvania autoral. Também escrevo automações em Python e uso IA no dia a dia para entregar mais rápido, entendendo cada parte do código.`,
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
