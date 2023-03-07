import { NavbarProps } from "./navbar.types";

export const PROPS_NAVBAR: NavbarProps[] = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "Projects",
    links: [
      {
        link: "https://labforall.vercel.app",
        label: "LabForAll",
      },
      {
        link: "https://magnificent-seven.vercel.app",
        label: "Magnificent Seven",
      },
    ],
  },
  {
    link: "https://sammaji.hashnode.dev",
    label: "Blogs",
  },
  {
    link: "https://links.sammaji.pages.dev",
    label: "Socials",
  },
];
