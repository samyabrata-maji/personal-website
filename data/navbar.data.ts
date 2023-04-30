import { NavbarItemProps } from "@/types/component";

const DATA_NAVBAR: NavbarItemProps[] = [
    {
        slug: "Home",
        nested: false,
        link: "/",
    },
    {
        slug: "Projects",
        nested: true,
        links: [
            {
                slug: "Lab4all",
                link: "https://labforall.vercel.app",
            },
            {
                slug: "Magnificent Seven",
                link: "https://magnificent-seven.vercel.app",
            },
        ],
    },
    {
        slug: "Blogs",
        nested: false,
        link: "/blogs",
    },
    {
        slug: "Socials",
        nested: false,
        link: "/socials",
    },
];

export default DATA_NAVBAR;
