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
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { ossSchema } from "@/lib/schemas";
// import { getOgImageUrl } from "../../_actions/get-og-image";
import { BlurUnknownImage } from "./utils/blur-unkown-image";
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
  contributions: Array<z.infer<typeof ossSchema>>;
};

export default function Contributions({ contributions: oss }: Props) {
  const ossRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ossRef, {
    once: false,
    margin: "-100px",
  });
  const [ogImageUrls, setOgImageUrls] = useState<Array<string | null>>([]);

  useEffect(() => {
    oss.forEach(async (contribution) => {
      try {
        const fetchOgImages = async () => {
          const usedPlaceholders = new Set<string>();
          let placeholderUrl: string | null = null;
          do {
            placeholderUrl =
              placeholderImgs[
                Math.floor(Math.random() * placeholderImgs.length)
              ];
          } while (usedPlaceholders.has(placeholderUrl));
          let ogImageUrl =
            "https://images.unsplash.com/photo-1714837003223-5144b6e082cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          // (await getOgImageUrl(contribution.orgUrl)) ||
          // (await getOgImageUrl(contribution.url)) ||
          // placeholderUrl;
          setOgImageUrls((prev) => [...prev, ogImageUrl]);
        };
        fetchOgImages();
      } catch (error) {
        console.error(
          `Error fetching og image for ${contribution.url}:`,
          error,
        );
        setOgImageUrls((prev) => [...prev, null]);
      }
    });
  }, [oss]);

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={ossRef}
      transition={{
        duration: 0.5,
      }}
      id="contributions"
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
        Open Source
      </motion.h2>
      <motion.div
        className="mt-12 gap-4 grid md:grid-cols-2"
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
        {oss.map((contro, i) => (
          <div
            key={i}
            className="group rounded-xl px-2 py-4 shadow-feature-card-dark flex flex-col"
          >
            <BlurUnknownImage
              src={
                ogImageUrls[i] ??
                placeholderImgs[
                  Math.floor(Math.random() * placeholderImgs.length)
                ]
              }
              lazy
              width={1280}
              height={832}
              alt={""}
              imageClassName="group-hover:scale-110 opacity-90 transition-all duration-300"
              className="rounded-lg"
            />
            <div className="flex-1 px-2 py-4 flex flex-col justify-between gap-3">
              <div className="space-y-2 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl items-center font-bold bg-gradient-to-br from-slate-200 to-slate-700 bg-clip-text text-transparent">
                    {contro.orgName}
                  </h2>
                  <div className="self-end flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            target="_blank"
                            className="p-2"
                            href={contro.url}
                          >
                            {/* //TODO: USE GIT PR ICON */}
                            <Icons.GitHub className="h-4 w-4 mr-2 text-slate-200" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-slate-300">
                          <p>Go to PR</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            target="_blank"
                            className="p-2"
                            href={contro.orgUrl}
                          >
                            <Icons.ExternalLink className="h-4 w-4 mr-2 text-slate-200" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-slate-300">
                          <p>Go to {contro.orgName}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-medium whitespace-pre-line break-words">
                  {contro.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {contro.tags
                  .sort((a, b) => a.localeCompare(b))
                  .map((t, index) => {
                    if (index < 5) {
                      return (
                        <div
                          key={Math.random()}
                          className="relative inline-flex overflow-hidden rounded-lg p-px"
                        >
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f0f0f_0%,#323232_50%,#929090_100%)]" />
                          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-3xl">
                            {t}
                          </span>
                        </div>
                      );
                    } else if (index === 5) {
                      const remaining = contro.tags.length - 5;
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
                                Tags set for this contribution
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-wrap gap-2">
                              {contro.tags.map((tag, index) => {
                                return (
                                  <div
                                    key={Math.random()}
                                    className="rounded-lg px-1 py-2 text-xs leading-4 bg-zinc-950"
                                  >
                                    {t}
                                  </div>
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
