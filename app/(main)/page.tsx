import BlogCard, {
  CardBlogContainer,
  CardContainer,
  ProjectCard,
} from "@/ui/Card";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import React from "react";
import ProfilePic from "@/assets/images/pfp.png";
import LoadingMain from "./loading";

async function fetchData(): Promise<any> {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  return await client.query({
    query: gql`
      {
        user(username: "samyabratamaji") {
          publication {
            posts {
              slug
              title
              popularity
              brief
              coverImage
            }
          }
        }
      }
    `,
  });
}

export default async function MainPage() {
  const result = await fetchData();

  return (
    <>
      <div className="grid min-h-[calc(100vh-56px)] grid-cols-hero-layout gap-16 px-16 py-16">
        <div className="flex h-[100%] flex-col items-start justify-center gap-8">
          <h1 className="text-6xl leading-[1.2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-lg leading-[1.75]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consequuntur, neque, quibusdam modi provident iure dolor doloremque
            mollitia porro error, at libero aspernatur voluptates corrupti
            repudiandae minima consequatur nisi deleniti.
          </p>
          <button className="max-w-[420px] bg-dark-dandelion px-8 py-4 text-lg font-semibold text-black">
            Work With Me
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={ProfilePic.src} />
        </div>
      </div>
      <div className="h-[100%] min-h-[100vh] w-[100vw] bg-dark-dandelion"></div>
      <div className="h-[100%] min-h-[100vh] w-[100vw] bg-dark-rich-black"></div>
    </>
  );
}
