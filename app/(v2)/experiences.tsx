"use client";

import * as Icons from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { experienceSchema } from "@/lib/schemas";
import { formatDate } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
// import { getOgImageUrl } from '@/app/_actions/get-og-image';
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

type Exp = z.infer<typeof experienceSchema>;

type Props = {
  experiences: Array<
    Omit<Exp, "endDate"> & {
      endDate: Date | null;
      currentlyWorking: boolean;
    }
  >;
};

export default function Experiences({ experiences }: Props) {
  const contRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contRef, { once: false, margin: "-100px" });

  const [ogImageUrls, setOgImageUrls] = useState<Array<string | null>>([]);

  useEffect(() => {
    experiences.forEach(async (exp) => {
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
            "https://unsplash.com/photos/a-kitchen-with-a-table-and-a-refrigerator-lQ-m8d0Ww_0" ||
            placeholderUrl; // TODO
          setOgImageUrls((prev) => [...prev, ogImageUrl]);
        };
        fetchOgImages();
      } catch (error) {
        console.error(`Error fetching og image for ${exp.orgUrl}:`, error);
        setOgImageUrls((prev) => [...prev, null]);
      }
    });
  }, [experiences]);

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={contRef}
      transition={{
        duration: 0.5,
      }}
      id="experiences"
      className="my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        className="text-center font-title text-3xl font-bold sm:text-4xl bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent my-12"
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
        Experience
      </motion.h2>
      <motion.div
        className="mt-12 gap-4 flex flex-wrap items-center"
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
        {experiences.map((work, i) => (
          <div
            key={i}
            className="w-full group relative rounded-xl px-2 py-4 shadow-feature-card-dark flex flex-col"
          >
            {/* <BlurUnknownImage
              src={
                ogImageUrls[i] ??
                placeholderImgs[
                  Math.floor(Math.random() * placeholderImgs.length)
                ]
              }
              lazy
              width={1280}
              height={832}
              alt={''}
              imageClassName="group-hover:scale-110"
              className="rounded-lg"
            /> */}
            <div className="flex-1 px-2 py-4 flex flex-col justify-between gap-3">
              <div className="space-y-2 flex flex-col justify-between">
                {
                  <div className="flex items-end gap-3 text-xs text-gray-400">
                    {!work.endDate || work.currentlyWorking ? (
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        <div className="absolute w-2 h-2 bg-lime-900 rounded-full animate-pulse" />
                        <div className="absolute w-6 h-6 bg-lime-600 rounded-full animate-pulse opacity-10" />
                      </div>
                    ) : (
                      <Icons.Calendar className="h-4 w-4" />
                    )}
                    {work.currentlyWorking && "Since"}{" "}
                    {formatDate(work.startDate)}
                    {work.endDate && (
                      <>
                        {" - "}
                        {formatDate(work.endDate)}
                      </>
                    )}
                  </div>
                }
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* qwq */}
                    <h2 className="text-2xl items-center font-bold bg-gradient-to-br from-slate-200 to-slate-700 bg-clip-text text-transparent">
                      {work.position}, {work.orgName}
                    </h2>
                  </div>
                  <div className="self-end flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            target="_blank"
                            className="p-2"
                            href={work.orgUrl}
                          >
                            <Icons.ExternalLink className="h-4 w-4 mr-2 text-slate-200" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-slate-300">
                          <p>Go to {work.orgName}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                {work.description && <p className="text-muted-foreground text-sm font-medium whitespace-pre-line break-words">
                  {work.description}
                </p>}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
