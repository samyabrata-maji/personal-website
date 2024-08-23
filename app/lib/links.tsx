import * as Icons from "@/components/ui/icons";
type HeaderLinks = Array<{
  icon: React.ReactNode;
  hash: string;
  text: string;
}>;

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <Icons.Building className="h-4 w-4" />,
    hash: "#experiences",
    text: "Experience",
  },
  {
    icon: <Icons.Projects className="h-4 w-4" />,
    hash: "#projects",
    text: "Projects",
  },
  {
    icon: <Icons.GITMerge className="h-4 w-4" />,
    hash: "#contributions",
    text: "Open Source",
  },
  {
    icon: <Icons.Quote className="h-4 w-4" />,
    hash: "#testimonials",
    text: "Testimonials",
  },
  {
    icon: <Icons.Info className="h-4 w-4" />,
    hash: "#contact",
    text: "Contact",
  },
];
