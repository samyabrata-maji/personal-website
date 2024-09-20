import { components } from "@/components/markdown";
import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"

const getPost = async (slug: string) => {
    return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
    const post = await getPost(slug)
    return (
        <div className="flex justify-center py-64 max-md:py-16">
            <div className="flex flex-col w-1/3 max-lg:w-2/3 max-sm:w-full px-6 gap-8">
                <h1 className="bg-gradient-to-b from-slate-200/90 via-slate-300 to-slate-400 bg-clip-text text-transparent font-title text-2xl font-bold leading-9 d sm:text-4xl sm:leading-[3.5rem]">{post.title}</h1>
                <PortableText value={post.body} components={components} />
            </div>
        </div>
    )
}
