"use client";

import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Something went Wrong",
};

const Error = ({ error }: { readonly error: Error }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 h-screen">
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/images/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
      <div className="px-2 py-8 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold font-title">Something went wrong!</h1>
        {process.env.NODE_ENV === "development" && (
          <p className="break-words p-4 text-sm font-title text-center">
            {error.message}
          </p>
        )}

        <p className="text-muted-foreground font-title">
          There seems to be an error with the page you are looking for.
        </p>
      </div>
      <Link href="/" className={cn(buttonVariants(), "font-title")}>
        Go homepage
      </Link>
    </div>
  );
};

export default Error;
