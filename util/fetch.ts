import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function fetchHashnodeData(username: string): Promise<any> {
    const client = new ApolloClient({
      uri: "https://api.hashnode.com/",
      cache: new InMemoryCache(),
    });
  
    return await client.query({
      query: gql`
        {
          user(username: "${username}") {
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