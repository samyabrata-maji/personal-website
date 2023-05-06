import React, { ReactNode } from "react";
import ProfilePic from "@/assets/images/pfp.png";
import { readFileSync } from "fs";
import path from "path";

import { BsPerson } from "react-icons/bs";
import ServiceCard from "@/ui/ServiceCard";

export default async function MainPage() {
  const lang = "en";
  const buffer = readFileSync(
    path.resolve(process.cwd(), `data/content_main_${lang}.json`)
  );
  const data = JSON.parse(buffer.toString());

  return (
    <div>
      {/* hero */}
      <div className="grid min-h-[100vh] grid-cols-hero-layout gap-16 p-16 max-sm:grid-cols-1 max-sm:px-8">
        <div className="flex h-[100%] flex-col items-start justify-center gap-8">
          <h1 className="text-5xl font-extralight leading-[1.2] text-white max-md:text-4xl max-sm:text-xl">
            {data.title} <br />
            <span className="text-6xl font-extrabold max-md:text-5xl max-sm:text-2xl">
              Samyabrata Maji
            </span>
          </h1>
          <p className="max-sm:text-md text-lg leading-[1.75] text-white">
            {data.description}
          </p>
          <button className="max-w-[420px] bg-dark-dandelion px-8 py-4 text-lg font-semibold text-dark-eerie-black transition-transform active:translate-y-[1px]">
            {data.cta}
          </button>
        </div>
        <div className="flex items-center justify-center max-sm:hidden">
          <img src={ProfilePic.src} />
        </div>
      </div>

      {/* services */}
      <div className="flex h-[100%] min-h-[100vh] flex-col items-start justify-center gap-16 bg-dark-dandelion p-24 max-md:gap-8 max-md:p-16 max-sm:p-8">
        <h1 className="text-6xl font-extrabold max-md:text-4xl">Services</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-16 max-sm:gap-8 max-sm:flex max-sm:flex-col max-sm:items-center">
          <ServiceCard
            title={data.service_one.title}
            description={data.service_one.description}
          >
            <BsPerson size={64} className="max-sm:hidden" />
          </ServiceCard>
          <ServiceCard
            title={data.service_one.title}
            description={data.service_one.description}
          >
            <BsPerson size={64} className="max-sm:hidden" />
          </ServiceCard>
          <ServiceCard
            title={data.service_one.title}
            description={data.service_one.description}
          >
            <BsPerson size={64} className="max-sm:hidden" />
          </ServiceCard>
          <ServiceCard
            title={data.service_one.title}
            description={data.service_one.description}
          >
            <BsPerson size={64} className="max-sm:hidden" />
          </ServiceCard>
        </div>
      </div>
      <div className="h-[100%] min-h-[100vh] w-[100vw] bg-dark-rich-black">
        {/* <ServiceCard
          title={data.service_one.title}
          description={data.service_one.title}
        >
          <BsPerson />
        </ServiceCard> */}
      </div>
    </div>
  );
}
