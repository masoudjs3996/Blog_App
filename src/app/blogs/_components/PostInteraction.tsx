"use client";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { Post } from "@models/post";
import { BookmarkPostApi, likePostApi } from "@services/postServices";
import ButtonIcon from "@ui/ButtonIcon";
import { toPersianDigits } from "@utils/numberFormatter";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
type PostInteractionProps = {
  post: Post;
};

const PostInteraction = ({ post }: PostInteractionProps) => {
  const router = useRouter();
  const bookmarkHandler = async (id: string | number) => {
    try {
      const { message } = await BookmarkPostApi(id);
      toast.success(message);
      router.refresh();
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error?.response?.data?.message || "مشکلی پیش اومده!");
    }
  };
  const likeHandler = async (id: string | number) => {
    try {
      const { message } = await likePostApi(id);
      toast.success(message);
      router.refresh();
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error?.response?.data?.message || "مشکلی پیش اومده!");
    }
  };
  return (
    <>
      <div className="flex items-center gap-x-4">
        <ButtonIcon variant="secondary">
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
        <ButtonIcon variant="red" onClick={() => likeHandler(post?._id)}>
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        </ButtonIcon>
        <ButtonIcon
          variant="primary"
          onClick={() => bookmarkHandler(post?._id)}
        >
          {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
        </ButtonIcon>
      </div>
    </>
  );
};

export default PostInteraction;
