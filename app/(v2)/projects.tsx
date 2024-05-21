"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as Icons from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurImage } from "./utils/blur-image";
import { placeholderImgs } from "./utils/placeholder-images";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  projects: {
    name: string;
    githubUrl?: string;
    description: string;
    webUrl: string;
    techStack: string[];
    src: string
  }[];
};

export default function FeaturedProjects({ projects }: Props) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, {
    once: false,
    margin: "-100px",
  });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        className="text-center font-title text-3xl font-bold sm:text-4xl bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        Featured {projects.length > 1 ? "Projects" : "Project"}
      </motion.h2>
      <motion.div
        className="mt-12 gap-4 grid grid-cols-1 lg:grid-cols-2"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-xl px-2 py-4 shadow-feature-card-dark flex flex-col"
          >
            <div>
            <BlurImage
              src={project.src}
              lazy
              width={1280}
              height={832}
              alt={""}
              imageClassName="group-hover:scale-150 opacity-80"
              className="rounded-lg"
            />
            </div>
            <div className="px-2 py-4 flex flex-col justify-between gap-3">
              <div className="flex items-center grow">
                <div className="gap-2 flex flex-col">
                  <div className="flex items-center gap-2">
                    <h1 className="bg-gradient-to-b from-slate-200/90 via-slate-300 to-slate-400 bg-clip-text text-transparent font-title text-xl font-bold leading-9 d sm:text-2xl sm:leading-[3.5rem]">
                      {project.name}
                    </h1>
                    <div className="flex items-center">
                      {project.githubUrl && <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              target="_blank"
                              className="p-2"
                              href={project.githubUrl}
                            >
                              <Icons.Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-800 text-slate-300">
                            <p>Source code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              target="_blank"
                              className="p-2"
                              href={project.webUrl}
                            >
                              <Icons.ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-800 text-slate-300">
                            <p>View project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-md leading-7 grow font-regular whitespace-pre-line break-words">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.length > 0 && project.techStack
                  .sort((a, b) => a.localeCompare(b))
                  .map((t, index) => {
                    if (index < 5) {
                      return (
                        <div
                          key={t}
                          className="group relative grid overflow-hidden rounded-lg px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
                        >
                          <span>
                            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-lg [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                          </span>
                          <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                          <span className="z-10 text-neutral-400 text-xs font-medium">
                            {t}
                          </span>
                        </div>
                      );
                    } else if (index === 5) {
                      const remaining = project.techStack.length - 5;
                      return (
                        <Dialog key={Math.random()}>
                          <DialogTrigger asChild>
                            <button className="inline-flex animate-background-shine items-center justify-center rounded-lg text-xs border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-1 font-medium text-neutral-400 transition-colors">
                              + {remaining} more...
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-lg font-bold">
                                Tech Stack
                              </DialogTitle>
                              <DialogDescription>
                                All Tech used for {project.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((t, index) => {
                                return (
                                  <p
                                    key={t}
                                    className="text-sm font-medium inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text"
                                  >
                                    {t}
                                  </p>
                                );
                              })}
                            </div>
                          </DialogContent>
                        </Dialog>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
