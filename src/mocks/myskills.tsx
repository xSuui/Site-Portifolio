import { IoLogoJavascript, IoCodeSlash } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io";
import { SiUnrealengine } from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import { LuGamepad } from "react-icons/lu";
import Image from "next/image";
import { MySkillsProps } from "@/components/MySkills/MySkills";

export const myskillsMock: MySkillsProps = {
  title: "Minhas Skills",
  skills: [
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
      title: "Unrealengine",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <BiLogoUnity size={80} color="var(--info-main)" />,
      title: "Unity",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <IoCodeSlash size={80} color="var(--info-main)" />,
      title: "CodeSlash",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
    {
      icon: <LuGamepad size={80} color="var(--info-main)" />,
      title: "Gamepad",
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
    {
      icon: (
        <Image
          src={"/assets/icons/icons8-copyright-88.png"}
          alt=""
          width={88}
          height={88}
        />
      ),
      title: "C",
      ctaLink: "",
      subtitle: "",
      target: "",
    },
  ],
};
