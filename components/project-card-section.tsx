import React from "react";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  TypographyAnchor,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./typography";
import { Separator } from "./ui/separator";

import ImgDigitalDreamers from "@/public/assets/img/digitaldreamers.png";
import ImgMagnificentSeven from "@/public/assets/img/magnificentseven.png";
import ImgChapterize from "@/public/assets/img/chapterize.png";
import project_card_data from "./data/project-card-data";
import { Badge } from "./ui/badge";
import Section from "./section";

export type Slug = string;

export type ProjectCardProps = {
  src: string;
  url?: string;
  github_url: string;
  title: string;
  description: string;
  slugs: Slug[];
};

export function ProjectCard(props: ProjectCardProps) {
  const { src, url, github_url, title, description, slugs } = props;
  return (
    <div className="grid grid-cols-[450px_1fr] max-lg:grid-cols-[320px_1fr] max-md:grid-cols-1 max-md:grid-rows-[auto_1fr] w-[] gap-8 max-md:gap-4">
      <Image
        src={src}
        alt="Image"
        className="rounded-md object-cover"
        width={450}
        height={0}
      />
      <div className="flex flex-col items-start justify-center gap-4 max-md:h-fit">
        <div className="flex gap-2">
          <TypographyH3 className="mt-0">{title}</TypographyH3>
          <TypographyP className="flex gap-1 items-center justify-center">
            {"("}
            <TypographyAnchor
              href={url}
              className="flex items-center justify-center"
            >
              {url ? "demo" : "not live yet"}
            </TypographyAnchor>
            {")"}
          </TypographyP>
          <TypographyP className="flex gap-1 items-center justify-center">
            {"("}
            <TypographyAnchor
              href={github_url}
              className="flex items-center justify-center"
            >
              code
            </TypographyAnchor>
            {")"}
          </TypographyP>
        </div>
        <TypographyP className="line-clamp-3">{description}</TypographyP>
        <div className="flex items-start justify-center gap-3">
          {slugs.map((slug, index) => {
            return (
              <React.Fragment key={index}>
                <Badge variant="secondary">{slug}</Badge>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCardSection() {
  return (
    <div className="flex flex-col gap-8 w-[100%] my-16">
      <TypographyH2 className="border-b-0">Projects ✨</TypographyH2>
      {project_card_data.data.map((data, index) => (
        <ProjectCard key={index} {...data} />
      ))}
    </div>
  );
}
