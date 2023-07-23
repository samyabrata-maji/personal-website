import React from "react";
import Image from "next/image";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "./typography";
import { IconActionButton } from "./icon-button";
import social_links_data from "./data/social-links-data";
import ImgPfp from "@/public/assets/img/sammaji.png";

export default function Header() {
  return (
    <header className="w-[100%]">
      <div className="h-auto grid grid-cols-[100px_1fr] max-sm:grid-rows-[64px_1fr] max-sm:grid-cols-1 gap-6 max-sm:gap-8 mb-8">
        <div className="flex gap-4 h-[100%] items-center justify-center">
        <Image
          src={ImgPfp.src}
          alt="Image"
          className="rounded-md m-0 h-[100%] w-[100%] max-sm:w-auto max-sm:rounded-full"
          width={64}
          height={64}
        />
          <TypographyP className="sm:hidden m-0 p-0 leading-tight"><strong>Portfolio of <br/> Samyabrata Maji</strong></TypographyP>

        </div>
        <div className="flex flex-col items-start max-sm:items-center justify-center gap-3">
          <TypographyH1 className="max-sm:hidden">Samyabrata Maji</TypographyH1>
          <div className="flex items-start gap-4 max-sm:gap-2 max-sm:grid max-sm:grid-rows-2 max-sm:grid-cols-[auto_auto_auto]">
            {social_links_data.map((item, index) => (
              <IconActionButton key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic
        quae, blanditiis odio corporis minus voluptates consequuntur beatae
        deleniti laboriosam laudantium totam id laborum mollitia modi magnam
        magni dolor. Corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus quis ducimus, nemo itaque aperiam suscipit
        doloremque dolores alias maiores quibusdam explicabo expedita, iure sint
        ipsa quasi odit minus harum?
      </TypographyP> */}
    </header>
  );
}
