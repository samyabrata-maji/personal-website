"use client";

import React from "react";
import Image from "next/image";
import {
  TypographyAnchor,
  TypographyBlockQuote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import ImgPfp from "@/public/assets/img/sammaji.png";
import ImgDigitalDreamers from "@/public/assets/img/digitaldreamers.png";
import { Separator } from "@/components/ui/separator";
import ProjectCardSection from "@/components/project-card-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { SiHashnode } from "react-icons/si";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiLogoDevTo } from "react-icons/bi";
import { IconActionButton } from "@/components/icon-button";
import social_links_data from "@/components/data/social-links-data";
import Header from "@/components/header";
import EducationSection from "@/components/education-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-36 py-24 max-md:px-16 max-sm:px-4">
      <Header />
      <ProjectCardSection />
      <EducationSection />
      {/* <div>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Winner Of MLH Hack Around The World Hackathon, Runner Up at Treasure Hacks 3.0</li>
          <li>
            <strong className="text-red-500">Hobby:</strong> Reading, Playing
            games and sometimes making games {":)"}
          </li>
          <li>
            🥷 Loves Anime.{" "}
            <strong className="text-yellow-500">Favorites 🙇 {"->"}</strong>{" "}
            Vinland Saga and Attack on Titans
          </li>
        </ul>
      </div> */}
    </main>
  );
}
