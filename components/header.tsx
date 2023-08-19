import React from "react";
import Image from "next/image";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./typography";
import { IconActionButton } from "./icon-button";
import social_links_data from "./data/social-links-data";
import ImgPfp from "@/public/assets/img/sammaji.png";

export default function Header() {
  return (
    <React.Fragment>
      <header className="w-full flex items-center justify-start gap-4">
        <img src={ImgPfp.src} className="h-12 w-12 rounded-full" />
        <div>
          <h1 className="font-bold text-2xl max-sm:text-xl">Samyabrata Maji</h1>
          <h2 className="text-muted-foreground font-normal text-lg max-sm:text-sm">
            Freelance (Web) Developer and Designer
          </h2>
        </div>
      </header>
      {/* <div className="w-full flex items-center max-sm:items-center justify-start gap-3">
        <TypographyH2 className="">Socials: </TypographyH2>
        <div className="flex items-start gap-4 max-sm:gap-2 max-sm:grid max-sm:grid-rows-2 max-sm:grid-cols-[auto_auto_auto]">
          {social_links_data.map((item, index) => (
            <IconActionButton key={index} {...item} />
          ))}
        </div>
      </div> */}
    </React.Fragment>
  );
}
