import { client } from "@/sanity/lib/client"
import React from "react";
import { format } from "date-fns"

const getPosts = async () => {
    return await client.fetch(`*[_type == "post"]{slug,publishedAt,title}`, {})
}

export default async function Page() {
    const posts = await getPosts();
    return (
        <div>
            <h2>posts</h2>
            <p>{JSON.stringify(posts)}</p>
            <div>
                {posts.map((post: any) => {
                    return (
                        <React.Fragment>
                            <div>
                                <p>{post.title}</p>
                                <p>{format(new Date(post.publishedAt), "dd MMM, yyyy")}</p>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}
