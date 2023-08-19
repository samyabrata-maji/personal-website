import ImgDigitalDreamers from "@/public/assets/img/digitaldreamers.png";
import ImgNextStarter from "@/public/assets/img/nextstarter.png";
import ImgMagnificentSeven from "@/public/assets/img/magnificentseven.png";
import ImgChapterize from "@/public/assets/img/chapterize.png";
import ImgPhotoCompetiton from "@/public/assets/img/photocompetition.png";
import ImgLabforall from "@/public/assets/img/labforall.png";
import { ProjectCardProps } from "../project-card-section";

type ProjectCardDataProps = {
  title: string;
  data: ProjectCardProps[];
};

const project_card_data: ProjectCardDataProps = {
  title: "Projects ✨",
  data: [
    {
      title: "Digital Dreamers",
      src: ImgDigitalDreamers.src,
      url: "https://digitaldreamers.vercel.app",
      github_url: "https://github.com/samyabrata-maji/agency-site",
      slugs: ["nextjs", "mantine", "firebase"],
      description:
        "A simple modern landing page for a digital marketing website, made with Next 13 and Mantine UI",
    },
    {
      title: "Chapterize",
      src: ImgChapterize.src,
      github_url: "https://github.com/samyabrata-maji/chapterize",
      slugs: ["openai", "fast-api", "nextjs"],
      description:
        "Chapterize is a simple NextJs website that generates youtube chapters from a youtube video. It uses OpenAI's GPT model to analyze the transcripts of the videos and generate chapters based on that.",
    },
    {
      title: "Next 13 Starter Template",
      src: ImgNextStarter.src,
      url: "https://next-starter-sepia.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/next-starter",
      slugs: ["nextjs", "contentlayer", "stripe"],
      description:
        "A template to quickly generate a next 13 projects. Features: prettier, eslint, tailwindcss, user authentication, custom components like buttons, dialog, etc.",
    },
    {
      title: "Magnificient Seven",
      src: ImgMagnificentSeven.src,
      url: "https://magnificent-seven.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/magnificent-seven",
      slugs: ["svelte-kit", "threejs", "gsap"],
      description:
        "A simple threejs website that displays the seven wonders of the world in order. Made with SvelteKite, ThreeJs and Gsap.",
    },
    {
      title: "Labforall",
      src: ImgLabforall.src,
      url: "https://labforall.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/labforall",
      slugs: ["react", "firebase", "threejs"],
      description:
        "A portal that contains details about different experiments conducted at schools. It also contains an interactive 3D solar system for students to explore (made with ThreeJs).",
    },
    {
      title: "Photo Competition Portal",
      src: ImgPhotoCompetiton.src,
      url: "https://makaut-photo-competition.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/photo-competition-portal",
      slugs: ["react", "firebase", "mantine"],
      description:
        "A portal for conducting photography competitions. Students can register and upload photos. Judges can view and grade submissions",
    },
  ],
};

export default project_card_data;
