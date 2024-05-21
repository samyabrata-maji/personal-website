import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <div className="h-screen pb-96 flex flex-col items-center justify-center gap-8">
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/images/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
      <h1 className="text-center text-4xl font-bold font-title">
        Sorry, this page isn&apos;t available.
      </h1>
      <p className="text-center text-md text-gray-400">
        The link you followed may be broken, or the page may have been removed.
      </p>
      <Link href="/" className={cn(buttonVariants(), "font-title")}>
        Go to {siteConfig.name}
      </Link>
    </div>
  );
};

export default NotFound;
