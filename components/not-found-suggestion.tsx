"use client";

import React from "react";
import { TypographyAnchor, TypographyH3, TypographyP } from "./typography";
import { usePathname } from "next/navigation";
import { closest_match } from "@/lib/closest-match";

export default function NotFoundSuggestion() {
  const pathname = usePathname();
  const matches = closest_match(pathname);
  const root =
    process.env.NODE_ENV === "production"
      ? "https://sammaji.vercel.app"
      : "http://localhost:3000";
  const urls = matches.map((value) => new URL(value.url, root));

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <TypographyH3>Did you mean?</TypographyH3>
      <div className="flex flex-col items-center justify-center gap-1">
        {urls.map((url, index) => (
          <TypographyAnchor key={index} href={url.href}>
            {url.href.replace(`${url.protocol}//`, "")}
          </TypographyAnchor>
        ))}
      </div>
    </div>
  );
}
