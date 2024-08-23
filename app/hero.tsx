"use client";

import { PrimaryButton } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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

export default function Hero(user: {
  name: string;
  oneLiner: string;
  mail: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      className="space-y-6 md:my-16"
      ref={containerRef}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <motion.div
          className="flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="bg-gradient-to-b from-slate-200/90 via-slate-300 to-slate-400 bg-clip-text text-transparent font-title text-2xl font-bold leading-9 d sm:text-4xl sm:leading-[3.5rem]">
            Hi, I&apos;m {user.name}. {user.oneLiner}
          </h1>
          <Link
            target="_blank"
            className="w-fit mt-2"
            href={`mailto:${user.mail}`}
          >
            <PrimaryButton
              shiny
              label="Get in Touch"
              IconLeft={Icons.MailSearch}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
