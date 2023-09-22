import React from "react";
import ProjectCardSection from "@/components/project-card-section";
import Header from "@/components/header";
import BlogSection from "@/components/blogs-section";
import EducationSection from "@/components/education-section";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between gap-16 max-sm:gap-12 px-36 py-24 max-md:py-16 max-sm:py-8 max-md:px-16 max-sm:px-4">
        <Header />
        <ProjectCardSection />
        <EducationSection />
        <BlogSection />
      </main>
      <footer className="bg-black gap-16 grid grid-cols-[auto_1fr] h-auto w-full p-16 max-sm:px-4">
        <div className="w-full max-sm:hidden">
          <p className="text-4xl font-extrabold leading-tight tracking-tight text-white">
            Let&apos;s <br />
            Connect{" "}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="w-full flex gap-8">
            <p className="text-white">Have a project in mind?</p>
            <a
              href="mailto://samyabratamaji@gmail.com?subject=%F0%9F%92%A1%20Project%20Idea%2C%20Let%27s%20Talk"
              className="text-white"
            >
              Contact me
            </a>
          </div>
          <span className="h-[0.5px] my-4 w-full bg-[rgba(225,225,225,0.48)]" />
          <div className="flex gap-8 max-sm:flex-col">
            <a
              href="https://github.com/samyabrata-maji"
              className="text-white uppercase"
            >
              Github
            </a>
            <a
              href="https://twitter.com/sammaji15"
              className="text-white uppercase"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/samyabrata-maji"
              className="text-white uppercase"
            >
              Linkedin
            </a>
            <a
              href="https://instagram.com/sammaji15"
              className="text-white uppercase"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
