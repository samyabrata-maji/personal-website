import React from "react";
import ProfilePic from "@/assets/images/pfp.png";

export default async function MainPage() {
  return (
    <>
      <div className="grid min-h-[100vh] grid-cols-hero-layout gap-16 px-16 py-16 max-sm:grid-cols-1">
        <div className="flex h-[100%] flex-col items-start justify-center gap-8">
          <h1 className="text-6xl leading-[1.2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-lg leading-[1.75]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consequuntur, neque, quibusdam modi provident iure dolor doloremque
            mollitia porro error, at libero aspernatur voluptates corrupti
            repudiandae minima consequatur nisi deleniti.
          </p>
          <button className="max-w-[420px] bg-dark-dandelion px-8 py-4 text-lg font-semibold text-black">
            Work With Me
          </button>
        </div>
        <div className="flex items-center justify-center max-sm:hidden">
          <img src={ProfilePic.src} />
        </div>
      </div>
      <div className="h-[100%] min-h-[100vh] w-[100vw] bg-dark-dandelion"></div>
      <div className="h-[100%] min-h-[100vh] w-[100vw] bg-dark-rich-black"></div>
    </>
  );
}
