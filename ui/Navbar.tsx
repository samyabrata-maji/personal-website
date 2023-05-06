import DATA_NAVBAR from "data/navbar.data";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

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
  className,
}: {
  link: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={link} target="_blank" className={`px-2 py-1 text-white ${className}`}>
      {children}
    </Link>
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

export function NavbarTemplate() {
  return (
    <div className="fixed flex h-[56px] w-[100%] items-center justify-around bg-black">
      <div className="max-sm:hidden">
        <h1 className="text-md text-white"></h1>
      </div>
      <div className="sm:hidden">
        <FaBars color="#fff" />
      </div>
      <div className="flex items-center justify-center gap-4 max-sm:hidden">
        <NavbarItem link="/">Home</NavbarItem>
        <NavbarItem link="#">Services</NavbarItem>
        <NavbarItem link="/blog">Blog</NavbarItem>
        <NavbarItem link="#">Contact</NavbarItem>
      </div>
      <div className="max-sm:hidden">
        <Link className="text-white" href="/newsletter">
          <button>Newsletter</button>
        </Link>
      </div>
    </div>
  );
}
