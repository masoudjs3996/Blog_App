import { Post } from "@models/post";
import http from "./httpServices";

type FetchPostResponse = {
  data?: {
    post?: Post;
  };
};
export const getPostBySlug = async (
  slug: string
): Promise<Post | undefined> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );

  const { data }: FetchPostResponse = await res.json();
  const { post } = data || {};
  return post;
};

export const getPosts = async (
  options?: RequestInit,
  querys?: string
): Promise<Post[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${querys}`,
    options
  );
  const {
    data: { posts },
  }: { data: { posts: Post[] } } = await res.json();
  return posts || [];
};
export const likePostApi = async (postId: number | string) => {
  return await http.post(`/post/like/${postId}`).then(({ data }) => data.data);
};
export const BookmarkPostApi = async (postId: number | string) => {
  return await http
    .post(`/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
};
