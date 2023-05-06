import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function fetchGithubData(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) return response.json();
    else throw new Error(response.status.toString());
}

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