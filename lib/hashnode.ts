export type HashnodePost = {
  brief: string;
  coverImage: string;
  readTime: number;
  title: string;
  totalReactions: 53;
  views: 169;
  slug: string;
};

export type HashnodeEntity = {
  user: {
    numPosts: number;
    publication: {
      posts: HashnodePost[];
    };
  };
};

export default async function getHashnodeEntity() {
  const response = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
  user(username: "samyabratamaji") {
    numPosts
    publication {
      posts {
        title
        views
        readTime
        totalReactions
        coverImage
        brief
        slug
      }
    }
  }
}`,
    }),
  });
  const data = (await response.json()).data as HashnodeEntity;
  return data;
}
