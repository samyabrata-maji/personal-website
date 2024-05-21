"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { cn, getInitials } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "./lib/links";
import CommandMenu from "./command-menu";
import MobileNav from "./mobile-nav";

type NavProps = {
  experiences: boolean | undefined;
  contributions: boolean | undefined;
  testimonials: boolean | undefined;
  projects: boolean | undefined;
  name: string | undefined;
  twitter: string;
  linkedIn: string;
  github: string;
};

const Header = ({
  experiences,
  contributions,
  testimonials,
  projects,
  name,
  twitter,
  linkedIn,
  github,
}: NavProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  console.log("🚀 ~ file: header.tsx ~ line 33 ~ Header ~ pathname", pathname);
  const hashname = pathname.split("#")[1] ?? "";
  console.log("🚀 ~ file: header.tsx ~ line 36 ~ Header ~ hashname", hashname);

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl bg-transparent/30 px-8 shadow-2xl saturate-100 backdrop-blur-[30px] transition-all duration-300",
        isScrolled &&
          "bg-slate-950/80 backdrop-blur-[7px] shadow-xl top-px h-[68px] px-4 transition-all duration-300",
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Link href={"#"} className="flex items-center justify-center gap-1">
        <span className="sr-only">Homepage</span>
        <h1 className="text-2xl font-serif font-semibold bg-gradient-to-b from-zinc-200 to-zinc-950 bg-clip-text text-transparent">
          {name ? getInitials(name) : "❖"}
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <nav>
          <ul className="hidden space-x-2 md:flex">
            {HEADER_LINKS.map((link) => {
              if (
                (link.hash === "#experiences" && !experiences) ||
                (link.hash === "#contributions" && !contributions) ||
                (link.hash === "#testimonials" && !testimonials) ||
                (link.hash === "#projects" && !projects) ||
                (link.hash === "#contact" && !twitter && !github && !linkedIn)
              ) {
                return null;
              }
              //  TODO change this to be reflected based on view position
              const isActive = link.hash.substring(1) === hashname;

              return (
                <li
                  key={link.text}
                  className="relative flex h-[60px] items-center justify-center"
                >
                  <Link
                    className={cn(
                      "rounded px-3 py-2 text-sm font-medium transition-colors duration-300",
                      {
                        ["text-muted-foreground hover:text-foreground"]:
                          !isActive,
                      },
                      {
                        ["text-foreground"]: isActive,
                      },
                    )}
                    href={link.hash}
                  >
                    {link.text}
                  </Link>
                  {isActive && (
                    <>
                      <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark" />
                      <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-[8px] dark:bg-[rgb(223_29_72)]" />
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <Separator orientation="vertical" className="h-6" />
        <CommandMenu github={github} twitter={twitter} linkedIn={linkedIn} />
        <MobileNav
          experiences={experiences}
          testimonials={testimonials}
          contributions={contributions}
          projects={projects}
        />
      </div>
    </motion.header>
  );
};

export default Header;
