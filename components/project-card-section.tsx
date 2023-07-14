import React, { useState } from "react";
import Image from "next/image";
import {
  TypographyAnchor,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./typography";

import project_card_data from "./data/project-card-data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
    <div className="grid grid-cols-[450px_1fr] max-lg:grid-cols-[320px_1fr] max-md:grid-cols-1 max-md:grid-rows-[auto_1fr] gap-8 max-md:gap-4">
      <a href={url}>
        <Image
          src={src}
          alt="Image"
          className="rounded-md border object-cover"
          width={450}
          height={0}
        />
      </a>
      <div className="flex flex-col items-start justify-center gap-4 max-md:h-fit">
        <div className="flex items-center gap-4">
          <TypographyH3 className="mt-0">{title}</TypographyH3>
          <div className="flex flex-wrap gap-2">
            <a href={url ? url : "#"}><Button className="h-fit px-2 py-1" disabled={!url}>{ url ? "Demo" : "Not Live Yet"}</Button></a>
            <a href={url ? url : "#"}><Button className="h-fit px-2 py-1" variant="ghost" disabled={!github_url}>{ github_url ? "Code" : "Private"}</Button></a>
          </div>
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

  const [itemsCount, setInitialCount] = useState<number>(3)

  return (
    <div className="flex flex-col gap-8 w-[100%] my-16">
      <TypographyH2 className="border-b-0">Projects ✨</TypographyH2>
      <div className="flex flex-col gap-12">
        {project_card_data.data.map((data, index) => {
          if (index > project_card_data.data.length - itemsCount) return;
          return (
            <ProjectCard key={index} {...data} />
          )
        })}
      </div>
      <div className="w-full mt-4 flex items-center justify-center">
        <Button size="lg" className="max-w-[280px] w-[100%]" onClick={() => setInitialCount((prev) => prev == 0 ? 3 : 0)}>{ itemsCount != 0 ? `Show ${project_card_data.data.length - 3} More Items` : "Collapse"}</Button>
      </div>
    </div>
  );
}
