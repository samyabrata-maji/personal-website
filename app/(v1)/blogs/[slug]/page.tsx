import { format, parseISO } from "date-fns";
import { TypographyH1, TypographySmall } from "@/components/typography";
import { Mdx } from "@/components/use-mdx";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = getPostFromParams(params.slug);
  const basic_details = { title: post.title, description: post.description };
  return {
    ...basic_details,
    authors: { name: "Samyabrata Maji" },
    category: "case study",
    keywords: `${post.keywords}, case study`,
    metadataBase: new URL("https://sammaji.vercel.app"),
    openGraph: {
      ...basic_details,
      type: "article",
      authors: "Samyabrata Maji",
    },
  };
};

function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();
  return post;
}

export default async function PagePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostFromParams(params.slug);

  const date = post.edited ? post.edited : post.created;
  const formated_date = format(parseISO(date), "do MMM yyyy");
  const date_text = post.edited
    ? `Last edited: ${formated_date}`
    : `Created: ${formated_date}`;

  return (
    <div className="my-16 flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-8 w-full px-6 lg:mx-0 lg:w-1/2 2xl:w-1/3">
        <TypographySmall className="mx-auto w-full text-center">
          {date_text}
        </TypographySmall>
        <TypographyH1 className="mx-auto w-full text-center">
          {post.title}
        </TypographyH1>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
}
