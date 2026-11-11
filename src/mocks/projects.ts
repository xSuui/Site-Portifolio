import { ProjectsProps } from "@/components/Projects/Projects";

export const projectsMock: ProjectsProps = {
  title: "Projetos",
  description: `Estes são alguns dos meus projetos desenvolvidos através de (cursos,
          estudos, workshops, trabalhos universitários e clientes), para ver mais dos meus
          projetos visite o <a href="https://github.com/xSuui" target="_blank">Github</a>.`,
  projects: [
    {
      image: "/assets/gifs/agenda-salao/agenda-salao.gif",
      title: "Agenda Salão (sistema web)",
      githubCta: "https://github.com/xSuui/agenda-salao-demo",
      videoCta: "/videos/agenda-salao-portfolio.mp4",
    },
    {
      image: "/assets/gifs/lente-3d/lente-3d.gif",
      title: "Lente 3D (three.js)",
      siteCta: "https://lente-3d.vercel.app",
      githubCta: "https://github.com/xSuui/lente-3d",
    },
    {
      image: "/assets/gifs/relogio-3d/relogio-3d.gif",
      title: "Relógio 3D (three.js)",
      siteCta: "https://relogio-3d-ten.vercel.app",
      githubCta: "https://github.com/xSuui/relogio-3d",
    },
    {
      image: "/assets/gifs/trattoria-3d/trattoria-3d.gif",
      title: "Trattoria 3D (three.js)",
      siteCta: "https://trattoria-3d-mocha.vercel.app",
      githubCta: "https://github.com/xSuui/trattoria-3d",
    },
    {
      image: "/assets/gifs/aventure 3d/gif_animation_001.gif",
      title: "Aventure 3D",
      youtubeCta: "https://youtu.be/jrxYhjwEhb0",
      githubCta: "https://github.com/xSuui/Aventure_3D",
    },
    {
      image: "/assets/gifs/fps/gif_animation - FPS.gif",
      title: "Soldier's - FPS",
      youtubeCta: "https://youtu.be/lOX9h_RhPi4",
      githubCta: "https://github.com/xSuui/FPS-Project",
    },
    {
      image: "/assets/gifs/infinity runner/gif_animation- Infinity Runner.gif",
      title: "Jet Fire - Infinity Runner (Mobile)",
      youtubeCta: "https://youtu.be/MFWD-z2N-J4",
      githubCta: "https://github.com/xSuui/Infinity-Runner",
    },
    {
      image: "/assets/gifs/metroid vania/gif_animation_002.gif",
      title: "Plataformer - MetroidVania",
      youtubeCta: "https://youtu.be/z0MU5E4fLkM",
      githubCta: "https://github.com/xSuui/Plataformer-Metroidvania-",
    },
    {
      image: "/assets/gifs/pong/gif_animation -pong n3 (1).gif",
      title: "Ping Pong",
      youtubeCta: "https://youtu.be/BCndD_kRknA",
      githubCta: "https://github.com/xSuui/Pong-Demo",
    },
    // {
    //   image:
    //     "/assets/gifs/hyper casual/gif_animation - hyper casual mobile.gif",
    //   title: "Hyper Casual - Mobile",
    //   youtubeCta: "https://youtube.com/shorts/GJFxiTeZDUE",
    //   githubCta: "https://github.com/xSuui/Hyper-Casual-Mobile",
    // },
  ],
};
