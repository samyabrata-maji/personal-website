"use client";

import { cn } from "@/lib/utils";
import NextImage from "next/image";
import * as React from "react";

type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentPropsWithoutRef<typeof NextImage>;

export const BlurImage = React.forwardRef<HTMLDivElement, ImageProps>(
  (props, ref) => {
    const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
    const [isLoading, setLoading] = React.useState(true);

    return (
      <div
        className={cn(
          "overflow-hidden",
          isLoading && "animate-pulse",
          className,
        )}
        ref={ref}
      >
        <NextImage
          className={cn(
            isLoading && "scale-[1.02] blur-xl grayscale",
            imageClassName,
          )}
          style={{
            transition: "filter 700ms ease, transform 150ms ease",
          }}
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : undefined}
          priority={!lazy}
          quality={100}
          onLoad={() => setLoading(false)}
          {...rest}
        />
      </div>
    );
  },
);

BlurImage.displayName = "Image";
