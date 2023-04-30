import { type } from "os";

type ComponentProps = { className: string };

// type NavbarItemProps = {
//     slug: string;
//     link?: string;
//     links?: { slug: string; link: string }[];
// };

type NavbarItemProps = { slug: string } &
    ({ nested: false; link: string } | { nested: true, links: { slug: string, link: string }[] });

// type my = Omit<NavbarItemProps, "nested">