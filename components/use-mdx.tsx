import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import {
  TypographyAnchor,
  TypographyBlockQuote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./typography";

const components = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: TypographyAnchor,
  p: TypographyP,
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  mgx: () => <p>Hello</p>,
  blockquote: TypographyBlockQuote,
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  //   hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  //   table: ({ className, ...props }: React.HTMLAttributes<>: React.HTMLAttributes<HTMLTableElement>) => (
  //     <div className="my-6 w-full overflow-y-auto">
  //       <table className={cn("w-full", className)} {...props} />
  //     </div>
  //   ),
  //   tr: ({ className, ...props }: React.HTMLAttributes<>: React.HTMLAttributes<HTMLTableRowElement>) => (
  //     <tr
  //       className={cn("m-0 border-t p-0 even:bg-muted", className)}
  //       {...props}
  //     />
  //   ),
  //   th: ({ className, ...props }: React.HTMLAttributes<>) => (
  //     <th
  //       className={cn(
  //         "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
  //         className
  //       )}
  //       {...props}
  //     />
  //   ),
  //   td: ({ className, ...props }: React.HTMLAttributes<>) => (
  //     <td
  //       className={cn(
  //         "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  //         className
  //       )}
  //       {...props}
  //     />
  //   ),
  //   pre: ({ className, ...props }: React.HTMLAttributes<>) => (
  //     <pre
  //       className={cn(
  //         "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
  //         className
  //       )}
  //       {...props}
  //     />
  //   ),
  code: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      {/* @ts-ignore */}
      <Component components={components} />
    </div>
  );
}
