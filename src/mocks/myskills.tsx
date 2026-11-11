import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io";
import {
  SiUnrealengine,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import Image from "next/image";
import { MySkillsProps } from "@/components/MySkills/MySkills";

export const myskillsMock: MySkillsProps = {
  title: "Minhas Skills",
  skills: [
    {
      icon: <SiNextdotjs size={80} color="var(--info-main)" />,
      title: "Next.js",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <SiReact size={80} color="var(--info-main)" />,
      title: "React",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <SiTypescript size={80} color="var(--info-main)" />,
      title: "TypeScript",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <SiTailwindcss size={80} color="var(--info-main)" />,
      title: "Tailwind CSS",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <SiSupabase size={80} color="var(--info-main)" />,
      title: "Supabase",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <IoLogoJavascript size={80} color="var(--info-main)" />,
      title: "Javascript",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <IoLogoPython size={80} color="var(--info-main)" />,
      title: "Python",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <SiUnrealengine size={80} color="var(--info-main)" />,
      title: "Unreal Engine",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <BiLogoUnity size={80} color="var(--info-main)" />,
      title: "Unity 3D",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: (
        <Image
          src={"/assets/icons/icons8-cs-96.png"}
          alt=""
          width={88}
          height={88}
        />
      ),
      title: "C#",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: (
        <Image
          src={"/assets/icons/icons8-c-plus-plus-88.png"}
          alt=""
          width={88}
          height={88}
        />
      ),
      title: "C++",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
  ],
};
