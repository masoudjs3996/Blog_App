import CoverImage from "./Coverimage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

import { Post } from "@models/post";
interface PostListProps {
  posts: Post[];
}
const PostList: React.FC<PostListProps> = async ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-12 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
            >
              <CoverImage {...post} />
              <div>
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className="mb-4 font-bold text-secondary-700">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center justify-between mb-4">
                  <Author {...post.author} />
                  <div className="flex items-center text-[10px] text-secondary-500">
                    <ClockIcon className="stroke-secondary-500 ml-1 w-4 h-4" />
                    <span className="ml-1">خواندن:</span>
                    <span className="leading-3 ml-1">{post.readingTime}</span>
                    <span>دقیقه</span>
                  </div>
                </div>
                <PostInteraction post={post} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default PostList;
