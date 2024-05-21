"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import * as Icons from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { stackl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import Connect from "./connect";
import StacksCard from "./stack-card";

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
  bio: string;
  twitter: string;
  linkedin: string;
  github: string;
  techStack: Array<(typeof stackl)[number]>;
};

const AboutMe = ({ bio, twitter, linkedin, github, techStack }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={containerRef}
      transition={{
        duration: 0.5,
      }}
      id="contact"
      className="relative my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        id="about"
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
        About Me
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
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
        <StacksCard stacks={techStack} />
        <Connect twitter={twitter} linkedin={linkedin} github={github} />
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"outline"} className={cn("rounded-xl")}>
              Know more about me
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-[420px] flex flex-col items-center">
            <div className="mx-auto w-full max-w-sm flex flex-col justify-center items-center text-center">
              <DrawerHeader>
                <DrawerTitle className="font-title">Bio</DrawerTitle>
              </DrawerHeader>
            </div>
            <Separator className="w-1/4" />
            <p className="max-w-md px-4 md:px-0 text-sm mt-4 font-title h-full flex flex-col items-center text-gray-400">
              {bio}
            </p>
            <h5 className="text-lg font-title mt-8">Let{`'`}s Chat</h5>
            <Separator className="w-1/12 mt-3" />
            <div className="grid grid-cols-3 gap-4 px-2 h-full my-8">
              {[twitter, linkedin, github].map((link, i) => {
                return (
                  <Link
                    key={i}
                    target="_blank"
                    href={link}
                    className="inline-flex items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors"
                  >
                    <div className="flex flex-col gap-2 opacity-90">
                      {i === 0 && (
                        <Icons.Twitter className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                      {i === 1 && (
                        <Icons.LinkedIn className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                      {i === 2 && (
                        <Icons.Github className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
            <footer className="bottom-0 font-title text-xs text-slate-400">
              &copy; {siteConfig.name}, {new Date().getUTCFullYear()}
            </footer>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.div>
  );
};

export default AboutMe;
