"use client";

import React from "react";
import ProjectCardSection from "@/components/project-card-section";
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
