import Card, { CardBlogContainer, CardContainer } from "@/ui/Card";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import React from "react";

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
    <div>
      <CardContainer title="Recent Blogs" className="py-[2rem]">
        {result.data.user.publication.posts
          .slice(0, 4)
          .map((item: any, index: any) => {
            return (
              <Card key={index} title={item.title} imgHref={item.coverImage}>
                {item.brief}
              </Card>
            );
          })}
      </CardContainer>

      <CardBlogContainer title="Projects" className="py-[2rem]">
        {[1, 2, 3, 4].map((item: any, index: any) => {
          return (
            <Card
              key={index}
              title={"Lorem ipsum dolor sit amet"}
              imgHref={item.coverImage}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              nulla saepe facilis nemo rem ipsam consequuntur dicta facere nobis
              mollitia reiciendis accusamus aliquam iure, doloremque nam
              corrupti aspernatur enim illum.
            </Card>
          );
        })}
      </CardBlogContainer>
    </div>
  );
}
