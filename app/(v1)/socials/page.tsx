import social_links_data from "@/components/data/social-links-data";
import { IconButton } from "@/components/icon-button";
import { TypographyH1 } from "@/components/typography";
import ImgPfp from "@/public/assets/img/sammaji.png";
import React from "react";

export default function PageLinks() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-4 px-8">
        <img src={ImgPfp.src} className="h-12 w-12 rounded-full" />
        <div>
          <h1 className="font-bold text-2xl max-sm:text-xl">Samyabrata Maji</h1>
          <h2 className="text-muted-foreground font-normal text-lg max-sm:text-sm">
            Freelance (Web) Developer and Designer
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        {social_links_data.map((item, index) => (
          <IconButton key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
