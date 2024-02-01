import { cn } from "@/lib/utils";
import { type } from "os";
import React, {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

export type TypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type TypographyAnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type TypographyBlockQuoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export function TypographyH1(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function TypographyH2(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <h2
      className={cn(
        "scroll-m-8 pb-2 text-3xl max-sm:text-xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TypographyH3(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <h3
      className={cn(
        "scroll-m-8 text-2xl max-sm:text-xl font-semibold tracking-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function TypographySmall(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...rest}
    >
      {children}
    </small>
  );
}

export function TypographyP(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <p className={cn("leading-7", className)} {...rest}>
      {children}
    </p>
  );
}

export function P(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <p
      className={cn(
        "text-[18px] text-[rgba(225,225,225,0.75)] leading-[1.6em]",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function TypographyMuted(props: TypographyProps) {
  const { className, children, ...rest } = props;
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyAnchor(props: TypographyAnchorProps) {
  const { className, children, ...rest } = props;
  return (
    <a
      className={cn(
        "font-medium hover:underline underline-offset-4",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export function TypographyBlockQuote(props: TypographyBlockQuoteProps) {
  const { className, children, ...rest } = props;
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

export function Ul(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >,
) {
  const { className, children, ...rest } = props;

  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...rest}>
      {children}
    </ul>
  );
}
