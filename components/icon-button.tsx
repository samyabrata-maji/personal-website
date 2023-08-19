import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { BsGithub } from "react-icons/bs";
import { Button, ButtonProps } from "./ui/button";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { type } from "os";

export type IconButtonProps = ButtonProps & { href?: string };

export function IconActionButton(props: IconButtonProps) {
  const { title, children, className, href, ...rest } = props;
  return (
    <a href={href}>
      <Button className={cn("px-2 py-4", className, "icon-button")} {...rest}>
        {children}
        <p>{title}</p>
      </Button>
    </a>
  );
}

export function IconButton(props: IconButtonProps) {
  const { title, children, className, href, ...rest } = props;
  return (
    <a href={href}>
      <Button
        className={cn("px-2 py-4 max-w-[400px] h-12 w-[calc(100vw-4rem)]", className)}
        {...rest}
      >
        {children}
        <p>&ensp;{title}</p>
      </Button>
    </a>
  );
}
