import {
  CardContainerProps,
  CardPrpos,
  ComponentProps,
} from "@/types/component";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/globals.css";

export default function BlogCard({ title, imgHref, children }: CardPrpos) {
  return (
    <div className="bg-slate-800 max-sm:flex max-sm:max-w-[100%]">
      <div className="w-[100%]">
        <Image
          src={imgHref}
          alt=""
          height={200}
          width={300}
          className="aspect-video h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="w-[100%] px-4 py-4">
        <h2 className="line-clamp-2 font-bold">{title}</h2>
        <p className="line-clamp-3 pt-2">{children}</p>
      </div>
    </div>
  );
}

export function ProjectCard({ title, imgHref, children }: CardPrpos) {
  return (
    <div className="bg-slate-800">
      <div className="w-[100%]">
        <Image
          src={imgHref}
          alt=""
          height={200}
          width={300}
          className="aspect-video h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="w-[100%] px-4 py-4">
        <h2 className="line-clamp-2 font-bold">{title}</h2>
        <p className="line-clamp-3 pt-2">{children}</p>
      </div>
    </div>
  );
}

export function CardContainer({
  children,
  className,
  title,
}: CardContainerProps) {
  return (
    <div className={`${className}`}>
      <h1 className="px-6 text-4xl text-black font-black">{title}</h1>
      <div
        className={`card-container grid w-[100%] grid-cols-4 gap-4 px-6 py-6 max-md:grid-cols-3 max-sm:grid-cols-1`}
      >
        {children}
      </div>
      <div className="flex w-[100%] items-center justify-center">
        <Link
          href={"/blogs"}
          className="text-blue-500 underline underline-offset-4"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}

export function CardBlogContainer({
  children,
  className,
  title,
}: CardContainerProps) {
  return (
    <div className={`${className}`}>
      <h1 className="px-6 text-4xl font-black">{title}</h1>
      <div
        className={`card-container grid w-[100%] grid-cols-2 gap-8 px-6 py-6 max-sm:grid-cols-1`}
      >
        {children}
      </div>
      <div className="flex w-[100%] items-center justify-center">
        <Link
          href={"/blogs"}
          className="text-blue-500 underline underline-offset-4"
        >
          All Projects
        </Link>
      </div>
    </div>
  );
}
