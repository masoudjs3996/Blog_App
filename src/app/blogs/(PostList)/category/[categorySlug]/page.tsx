import { Post } from "@models/post";
import { getPosts } from "@services/postServices";
import { setCookieOnReq } from "@utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

type CategoryProps = {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ search?: string }>;
};

const CategoryPage = async ({ params, searchParams }: CategoryProps) => {
  const { categorySlug } = await params;

  const searchparams = await searchParams;
  const querys = `${queryString.stringify(
    searchparams
  )}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options, querys);
  return (
    <>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی یافت نشد
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

export default CategoryPage;
