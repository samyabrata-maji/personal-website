import React from "react";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <React.Fragment>
          <nav className="h-[56px] border-b-[1px] border-[rgba(0,0,0,0.12)] flex items-center justify-end mx-36 max-md:mx-16 max-sm:mx-0 max-sm:px-4">
            <div className="flex gap-2">
              <a className="" href="/blogs">
                Blogs
              </a>
              <p>/</p>
              <a className="" href="/projects">
                Projects
              </a>
              <p>/</p>
              <a className="" href="/socials">
                Socials
              </a>
            </div>
          </nav>
          {children}
          </React.Fragment>
    );
  }