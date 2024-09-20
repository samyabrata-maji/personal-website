import { client } from "@/lib/sanity"
import React from "react";
import { format } from "date-fns"
import { cn } from "@/lib/utils";

const getPosts = async () => {
    return await client.fetch(`*[_type == "post"]{slug,publishedAt,title}`, {})
}

export default async function Page() {
    const posts = await getPosts();
    return (
        <div className="flex justify-center py-32 max-md:py-16">
            <div className="flex flex-col w-2/3 max-lg:w-2/3 max-sm:w-full px-6 gap-8">
                <h1 className="bg-gradient-to-b from-slate-200/90 via-slate-300 to-slate-400 bg-clip-text text-transparent font-title text-2xl font-bold leading-9 d sm:text-4xl sm:leading-[3.5rem]">Blogs</h1>
                <div>
                    {posts.map((post: any, index: any) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="flex gap-8">
                                    <a className={cn("scroll-m-20 text-xl font-semibold tracking-tight")} href={`/posts/${post.slug.current}`}>{post.title}</a>
                                    <p className={cn("leading-7")}>{format(new Date(post.publishedAt), "dd MMM, yyyy")}</p>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
