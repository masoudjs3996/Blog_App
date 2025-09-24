"use server";

import { createCommentApi } from "@services/commentService";
import { setAxiosCookieConfig } from "@utils/setCookieOnReq";
import { AxiosError } from "axios";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
type CommentState = {
  message: string;
  error: string;
};
export async function createComment(
  prevState: CommentState,
  {
    formData,
    postId,
    parentId,
  }: { postId: string; parentId: string | null; formData: FormData }
): Promise<CommentState> {
  const cookieStore = await cookies();
  const config = setAxiosCookieConfig(cookieStore, "POST");
  const rowData = {
    postId,
    parentId,
    text: formData.get("text") as string,
  };

  try {
    const { message } = await createCommentApi(rowData, config);
    revalidatePath("/blogs/[slug]");
    return { message, error: "" };
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const error = err.response?.data?.message;
      return { message: "", error };
    } else {
      return { message: "", error: "خطای ناشناخته" };
    }
  }
}
