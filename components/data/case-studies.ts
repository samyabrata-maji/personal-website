import ImgChapterize from "@/public/assets/img/chapterize.png";
import ImgUpbuddy from "@/public/assets/img/upbuddy.png";

type ProjectCaseStudies = {
  title: string;
  description: string;
  src: string;
  url: string;
};

const case_study_data: ProjectCaseStudies[] = [
  {
    title: "Case Study: Chapterize",
    description:
      "Chapterize is a simple NextJS website that generates youtube chapters from a youtube video.",
    src: ImgChapterize.src,
    url: "/blogs/chapterize-case-study",
  },
  {
    title: "Case Study: Upbuddy",
    description:
      "Upbuddy helps you find keywords that upwork clients are using so that you can appear more in their searches.",
    src: ImgUpbuddy.src,
    url: "/",
  },
];

export default case_study_data;
