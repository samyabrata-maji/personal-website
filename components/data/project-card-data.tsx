import ImgDigitalDreamers from "@/public/assets/img/digitaldreamers.png";
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem illum inventore, sunt quia corrupti dolorum magnam eum ab repellendus maiores eius esse debitis totam rerum error culpa doloribus consequatur.",
    },
    {
      title: "Chapterize",
      src: ImgChapterize.src,
      github_url: "https://github.com/samyabrata-maji/chapterize",
      slugs: ["openai", "fast-api", "nextjs"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem illum inventore, sunt quia corrupti dolorum magnam eum ab repellendus maiores eius esse debitis totam rerum error culpa doloribus consequatur.",
    },
    {
      title: "Magnificient Seven",
      src: ImgMagnificentSeven.src,
      url: "https://magnificent-seven.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/magnificent-seven",
      slugs: ["svelte-kit", "threejs", "gsap"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem illum inventore, sunt quia corrupti dolorum magnam eum ab repellendus maiores eius esse debitis totam rerum error culpa doloribus consequatur.",
    },
    {
      title: "Labforall",
      src: ImgLabforall.src,
      url: "https://labforall.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/labforall",
      slugs: ["react", "firebase", "threejs"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem illum inventore, sunt quia corrupti dolorum magnam eum ab repellendus maiores eius esse debitis totam rerum error culpa doloribus consequatur.",
    },
    {
      title: "Photo Competition Portal",
      src: ImgPhotoCompetiton.src,
      url: "https://makaut-photo-competition.vercel.app/",
      github_url: "https://github.com/samyabrata-maji/photo-competition-portal",
      slugs: ["react", "firebase", "mantine"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem illum inventore, sunt quia corrupti dolorum magnam eum ab repellendus maiores eius esse debitis totam rerum error culpa doloribus consequatur.",
    },
  ],
};

export default project_card_data;
