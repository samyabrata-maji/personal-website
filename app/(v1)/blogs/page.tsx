import BlogSection from "@/components/blogs-section";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/typography";
import case_study_data from "@/components/data/case-studies";
import React from "react";

export default function PageBlogs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16 px-36 py-8 max-md:px-16 max-sm:px-4">
      <div className="flex flex-col gap-4 w-[100%]">
        <TypographyH2>{"Case Studies"}</TypographyH2>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8">
          {case_study_data.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                <div className="space-y-8">
                  <img src={item.src} />
                  <div className="space-y-2">
                    <TypographyH3 className="m-0 p-0">
                      {item.title}
                    </TypographyH3>
                    <TypographyP>{item.description}</TypographyP>
                  </div>
                </div>
              </a>
            );
          })}
          {/* {entity.user.publication.posts.map((post, index) => (
          <Article {...post} key={index} />
        ))} */}
        </div>
      </div>

      {/* <BlogSection /> */}
    </main>
  );
}
