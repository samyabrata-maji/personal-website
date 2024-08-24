"use client";

import { Particles } from "@/components/utils/particles";
import { testimonialSchema } from "@/lib/schemas";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { z } from "zod";

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
  testimonials: Array<z.infer<typeof testimonialSchema>>;
};

export default function Testimonials({ testimonials }: Props) {
  const contRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={contRef}
      transition={{
        duration: 0.5,
      }}
      id="testimonials"
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
        Testimonials
      </motion.h2>
      <div
        key={Math.random()}
        className="relative flex flex-wrap justify-center gap-4"
      >
        {testimonials.map((tes, idx) => (
          <TestimonialCard key={idx} testimonial={tes} />
        ))}
      </div>
    </motion.div>
  );
}

type CardProps = {
  testimonial: z.infer<typeof testimonialSchema>;
};

function TestimonialCard({ testimonial }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative max-w-[350px] w-full rounded-xl self-center"
    >
      <Particles
        ease={20}
        color="#726f6f"
        vy={-0.15}
        vx={-0.15}
        quantity={20}
        className="absolute inset-0 -z-10"
      />
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(105, 93, 109, 0.2), transparent 80%)
					`,
        }}
      />
      <div className=" space-y-3 rounded-xl border border-white/10 px-4 py-5">
        <div className="space-y-5 flex flex-col gap-2 justify-center items-center">
          <p className="text-sm leading-[1.5] text-center text-neutral-300/80 cursor-default self-stretch whitespace-pre-line break-words">
            {testimonial.message}
          </p>
          <div className="leading-snug text-center">
            <Link
              target="_blank"
              href={testimonial.authorUrl}
              className="text-lg font-semibold text-neutral-200"
            >
              <div className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                <span className="text-neutral-300 hover:text-fuchsia-100">
                  {testimonial.author}
                </span>
              </div>
            </Link>
            <span className="text-xs text-neutral-400">
              {testimonial.designation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
