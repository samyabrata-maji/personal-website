"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as Icons from "@/components/ui/icons";
import Link from "next/link";
import { HEADER_LINKS } from "@/components/lib/links";

type NavProps = {
  experiences: boolean | undefined;
  contributions: boolean | undefined;
  testimonials: boolean | undefined;
  projects: boolean | undefined;
};

const MobileNav = ({
  experiences,
  contributions,
  testimonials,
  projects,
}: NavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex h-9 w-9 items-center justify-center p-0 md:hidden"
          type="button"
          aria-label="Toggle menu"
          variant="ghost"
        >
          <span className="sr-only">Toggle menu</span>
          <Icons.Menu className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        {HEADER_LINKS.map((link) => {
          if (
            (link.hash === "#experience" && !experiences) ||
            (link.hash === "#contributions" && !contributions) ||
            (link.hash === "#testimonials" && !testimonials) ||
            (link.hash === "#projects" && !projects)
          ) {
            return null;
          }
          <DropdownMenuItem key={link.text} asChild>
            <Link href={link.hash} className="flex items-center gap-4">
              {link.icon}
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
