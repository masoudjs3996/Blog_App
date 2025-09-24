import { AxiosRequestConfig } from "axios";
import http from "./httpServices";

type Data = {
  postId: string;
  parentId: string | null;
  text: string | null | File;
};
export async function createCommentApi(
  data: Data,
  config?: AxiosRequestConfig
) {
  return await http
    .post(`/comment/add`, data, config)
    .then(({ data }) => data.data);
}

// type Data = {
//   postId: string;
//   parentId: string | null;
//   text: string | null | File;
// };
// export async function createCommentApi(data: Data, options?: RequestInit) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/comment/add`,
//     options
//   );
//   const mast = await res.json();
//   return mast;
// }
