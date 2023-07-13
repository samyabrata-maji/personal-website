import social_links_data from "@/components/data/social-links-data";
import { IconButton } from "@/components/icon-button";
import { TypographyH1 } from "@/components/typography";
import React from "react";

export default function PageLinks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <TypographyH1>Samyabrata Maji</TypographyH1>
      <div className="flex flex-col gap-4">
        {social_links_data.map((item, index) => (
          <IconButton key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
