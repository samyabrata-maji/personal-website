import getHashnodeEntity, {
  HashnodeEntity,
  HashnodePost,
} from "@/lib/hashnode";
import { TypographyH2, TypographyH3, TypographyP } from "./typography";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

export function Article(props: HashnodePost) {
  return (
    <a
      href={`https://sammaji.hashnode.dev/${props.slug}`}
      className="grid grid-cols-[1.4fr_4fr] max-sm:grid-cols-[1fr_2fr] gap-8 max-md:gap-6 max-sm:gap-4"
    >
      <div className="w-full flex items-center justify-center">
        <img src={props.coverImage} className="w-full h-auto" />
      </div>
      <div className="flex flex-col gap-2 max-sm:gap-1">
        <TypographyH3 className="p-0 m-0 line-clamp-1 max-sm:text-sm">
          {props.title}
        </TypographyH3>
        <TypographyP className="max-sm:text-sm line-clamp-2 text-ellipsis whitespace-pre-line max-md:line-clamp-1 row-span-2 text-[#616161]">
          {props.brief}
        </TypographyP>
        <div className="w-full flex gap-8 max-md:gap-6 max-sm:gap-4">
          <div className="flex gap-1 items-center justify-center">
            <BiTimeFive />
            <small className="text-sm font-medium leading-none max-sm:text-xs">
              {props.readTime}
              <span className="max-sm:hidden">{" mins"}</span>
            </small>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <AiOutlineEye />
            <small className="text-sm font-medium leading-none max-sm:text-xs">
              {props.views}
              <span className="max-sm:hidden">{" views"}</span>
            </small>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <AiOutlineLike />
            <small className="text-sm font-medium leading-none max-sm:text-xs">
              {props.totalReactions}
              <span className="max-sm:hidden">{" likes"}</span>
            </small>
          </div>
        </div>
      </div>
    </a>
  );
}

export default async function BlogSection() {
  let entity: HashnodeEntity | null = null;
  try {
    entity = await getHashnodeEntity();
  } catch {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4 w-[100%]">
      <TypographyH2>{`Blogs & Articles (${entity.user.numPosts} posts)`}</TypographyH2>

      <div className="space-y-8">
        {entity.user.publication.posts.map((post, index) => (
          <Article {...post} key={index} />
        ))}
      </div>
    </div>
  );
}
