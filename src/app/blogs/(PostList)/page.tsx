import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import { setCookieOnReq } from "@utils/setCookieOnReq";
import { getPosts } from "@services/postServices";
import queryString from "query-string";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const searchparams = await searchParams;

  const querys = queryString.stringify(searchparams);
  console.log(querys);

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options, querys);
  return (
    <>
      {searchparams.search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? `هیچ پستی با این مشخصات پیدا نشد `
            : `نشان دادن ${posts.length} نتیجه برای `}
          <span className="font-bold">&quot;{searchparams.search}&quot;</span>
        </p>
      ) : null}

      <PostList posts={posts} />
    </>
  );
};

export default BlogPage;
