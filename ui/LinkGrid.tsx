import DATA_LINKS from "data/links.data";
import React from "react";
import "../styles/globals.css"

export default function LinkGrid() {
  return (
    <>
      <div className="main">
        <p className="text-xs">spoiler: hover</p>
        <div className="main-card flex h-[340px] w-[340px] flex-wrap items-center justify-evenly">
          {DATA_LINKS.map((data_link, index) => {
            return (
              <div key={index} className={`card z-40`}>
                {data_link.icons}
              </div>
            );
          })}
        </div>
        <p className="text absolute flex select-none items-center justify-center py-4 text-3xl font-black leading-relaxed text-white">
          {/* Here's my */}
          <br />
          <span className="text-6xl">My Socials</span>
        </p>
        <div className="main_back"></div>
      </div>
    </>
  );
}
