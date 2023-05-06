import React from "react";

export default function PageNewsletter() {
  return (
    <div className="grid min-h-[100vh] grid-cols-newsletter-layout max-sm:grid-cols-1">
      <div className="bg-dark-dandelion max-sm:hidden"></div>
      <div className="flex items-center justify-center">
        <div className="w-max p-16">
          <h1 className="pb-8 text-4xl font-extralight leading-[1.4] text-white">
            Subscribe to my <br />
            <span className="text-6xl font-extrabold">Newsletter</span>
          </h1>
          <div className="pt-8">
            <input
              className="h-[48px] w-[60%] min-w-[200px] max-w-[480px] rounded-l-md px-6 text-black"
              placeholder="Your email"
            />
            <button className=" h-[48px] rounded-r-md bg-dark-dandelion px-4 py-2 font-bold text-dark-eerie-black transition-transform active:translate-y-[1px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
