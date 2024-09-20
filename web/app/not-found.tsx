"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Something went wrong",
};

const NotFound = () => {
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
            <div className="px-6 py-8 flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold font-title text-center">Page not found!</h1>
                <p className="text-muted-foreground font-title text-center">
                    This page does not exist. Maybe you mistyped?
                </p>
            </div>
            <Link href="/" className={cn(buttonVariants(), "font-title")}>
                Go homepage
            </Link>
        </div>
    );
};

export default NotFound;
