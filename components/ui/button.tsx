import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { SparkleIcon } from "../utils/sparkle-icon";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type Props = {
  className?: string;
  IconLeft?: LucideIcon;
  label: string;
  IconRight?: LucideIcon;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shiny?: boolean;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export const PrimaryButton: React.FC<Props> = ({
  className,
  IconLeft,
  label,
  IconRight,
  shiny = false,
}) => {
  return (
    <div className="relative group/button">
      <div
        aria-hidden
        className="absolute -inset-0.5 bg-white rounded-lg blur-2xl group-hover/button:opacity-30 transition duration-300  opacity-0 "
      />
      <div
        className={cn(
          "relative flex items-center px-4 gap-2 text-sm font-semibold text-black group-hover:bg-white/90 duration-1000 rounded-lg h-10",
          {
            "bg-white": !shiny,
            "bg-gradient-to-r from-white/80 to-white": shiny,
          },
          className,
        )}
      >
        {IconLeft ? <IconLeft className="w-4 h-4" /> : null}
        {label}
        {IconRight ? <IconRight className="w-4 h-4" /> : null}

        {shiny && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-button-shine rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
          />
        )}
      </div>
    </div>
  );
};

export const SecondaryButton: React.FC<Props> = ({
  className,
  IconLeft,
  label,
  IconRight,
}) => {
  return (
    <div
      className={cn(
        "items-center gap-2 px-4 duration-500 text-white/70 hover:text-white h-10 flex",
        className,
      )}
    >
      {IconLeft ? <IconLeft className="w-4 h-4" /> : null}
      {label}
      {IconRight ? <IconRight className="w-4 h-4" /> : null}
    </div>
  );
};

export const RainbowDarkButton: React.FC<Props> = ({
  className,
  label,
  IconRight,
}) => {
  return (
    <div
      className={cn(
        "p-[.75px] hero-hiring-gradient rounded-full w-fit mx-auto relative z-50",
        className,
      )}
    >
      <div className="items-center gap-4 px-3 py-1.5 [background-image:radial-gradient(141.42%_141.42%_at_100%_0%,_rgba(255,255,255,0.00)_0%,rgba(255,255,255,.05)_100%),linear-gradient(black,black)] text-white rounded-full flex flex-block text-sm">
        <SparkleIcon className="text-white" />
        {label}
        {IconRight ? <IconRight className="w-4 h-4" /> : null}
      </div>
    </div>
  );
};

export { Button, buttonVariants };
