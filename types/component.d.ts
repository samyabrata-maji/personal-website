import { ReactNode } from "react";

type ComponentProps = {
    children?: ReactNode;
    className?: string
};

type CardPrpos = ComponentProps & {
    title: string;
    imgHref: string
}

type CardContainerProps = ComponentProps & {
    title: string;
}

type NavbarItemProps = ComponentProps & { slug: string } &
    ({ nested: false; link: string } | { nested: true, links: { slug: string, link: string }[] });