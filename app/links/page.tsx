import IcGithub from "@/assets/icons/IcGithub";
import LinkButton from "@/ui/LinkButton";
import LinkGrid from "@/ui/LinkGrid";
import React from "react";

export default function LinksPage() {
  return (
    <>
      <div className="hidden py-10 max-sm:block">
        <h1 className="flex select-none items-center justify-center py-4 text-3xl font-black leading-relaxed text-white">
          My Socials
        </h1>
        <div className="flex flex-col content-center items-center gap-6 px-6 py-4">
          <LinkButton>Github</LinkButton>
          <LinkButton>Twitter</LinkButton>
          <LinkButton>Linkedin</LinkButton>
          <LinkButton>Blogs</LinkButton>
        </div>
      </div>

      <div className="flex h-[100vh] items-center justify-center max-sm:hidden">
        <LinkGrid />
      </div>
    </>
  );
}
