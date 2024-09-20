"use client";

import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React from "react";

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

export default function Footer() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    return (
        <motion.footer
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants}
            ref={containerRef}
            transition={{
                duration: 0.3,
            }}
            className="flex flex-col justify-center items-center"
        >
            <Separator className="w-1/5 h-[1px] bg-cyan-900" />
            <div className="flex justify-center items-center py-8 text-sm text-gray-400 font-title">
                <p>
                    &copy; Samyabrata Maji, {new Date().getFullYear()}. Built in the
                    open by
                </p>
                <Link
                    href={"https://x.com/sammaji15"}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    <p className="ml-1">@sammaji</p>
                </Link>
            </div>
        </motion.footer>
    );
}
