import { PageParams } from "@models/pageParams";
import { getPostBySlug, getPosts } from "@services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

type SinglePostProps = PageParams<"slug">;
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: SinglePostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return {
    title: `پست ${post.title}`,
  };
}

const SinglePost = async ({ params }: SinglePostProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return (
    <>
      <div className="text-secondary-600 max-w-screen-md mx-auto">
        <h1 className="text-secondary-700 text-2xl font-bold mb-8">
          {post.title}
        </h1>
        <p className="mb-4">{post.briefText}</p>
        <p className="mb-8 ">{post.text}</p>
        <div className="aspect-video overflow-hidden relative rounded-lg mb-10 ">
          <Image
            className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
            fill
            src={post?.coverImageUrl}
            alt={post?.coverImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
