import { NavbarItemProps } from "@/types/component";
import DATA_NAVBAR from "data/navbar.data";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Navbar() {
  return (
    <div>
      {/* title */}
      <NavbarSection></NavbarSection>

      <NavbarSection>
        {DATA_NAVBAR.map((data, index) =>
          data.nested ? (
            <NestedNavbarItem links={data.links}>{data.slug}</NestedNavbarItem>
          ) : (
            <NavbarItem key={index} link={data.link}>
              {data.slug}
            </NavbarItem>
          )
        )}
      </NavbarSection>

      {/* dark mode / light mode button */}
      <NavbarSection></NavbarSection>
    </div>
  );
}

export function NavbarSection({ children }: { children?: ReactNode }) {
  return <div>{children}</div>;
}

export function NavbarItem({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Link href={link} target="_blank">
        {children}
      </Link>
    </div>
  );
}

export function NestedNavbarItem({
  links,
  children,
}: {
  links: { slug: string; link: string }[];
  children: ReactNode;
}) {
  return (
    <div>
      <NavbarItem link="#">{children}</NavbarItem>
      {links.map((item, index) => (
        <NavbarItem key={index} link={item.link}>
          {item.slug}
        </NavbarItem>
      ))}
    </div>
  );
}
