import { P, Ul } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const data: WorkEntity[] = [
  {
    title: "Venus Technology",
    duration: "Dec 23 - Present",
    role: "Full Stack Developer",
    description: (
      <>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P>
        <Ul className="text-[rgba(225,225,225,0.75)]">
          <li>
            <P>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </P>
          </li>
          <li>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
          </li>
        </Ul>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P>
      </>
    ),
  },

  {
    title: "Baires Dev",
    duration: "Dec 23 - Present",
    role: "Full Stack Developer",
    icon: "/bairesdev.png",
    description: (
      <>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P>
        <Ul className="text-[rgba(225,225,225,0.75)]">
          <li>
            <P>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </P>
          </li>
          <li>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
          </li>
        </Ul>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P>
      </>
    ),
  },
];

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen h-full w-auto p-8 flex items-center justify-center">
      <div className="max-w-[800px] w-screen min-h-screen flex flex-col gap-[64px]">
        <nav className="flex w-full gap-8 max-sm:gap-4">
          <a href="/blogs" className="hover:underline">
            Blog.
          </a>
          <a href="/work" className="hover:underline">
            Work.
          </a>
          <a href="/contact" className="hover:underline">
            Contact.
          </a>
        </nav>

        <div className="flex gap-[64px]">
          <div className="flex flex-col gap-8 flex-grow">
            <h1 className="text-4xl font-semibold tracking-tight">my work.</h1>
            <P className="text-[18px] leading-[1.6em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
            <a
              href="/hire-me"
              className="w-fit px-8 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Hire me
            </a>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661779797085-4f5fd625d398?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="grayscale hover:grayscale-0 h-[200px] max-sm:hidden rounded-xl"
          />
        </div>

        <Separator
          orientation="horizontal"
          className="opacity-[0.24]"
          color="rgba(225,225,225,0.24)"
        />

        {data.map((value, index) => (
          <div key={index} className="flex flex-col gap-8">
            <div className="flex max-sm:flex-col max-sm:gap-8 justify-between">
              <p className="text-4xl font-semibold tracking-tight flex items-center gap-4">
                {value.icon && (
                  <span className="h-[48px] bg-white p-2 rounded-lg">
                    <img className="h-full" src={value.icon} />
                  </span>
                )}
                {value.title}
              </p>
              <div className="flex flex-col items-end max-sm:items-start">
                <p>{value.role}</p>
                <p className="text-[rgba(225,225,225,0.75)]">
                  {value.duration}
                </p>
              </div>
            </div>
            <div>{value.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
