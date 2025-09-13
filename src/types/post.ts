export type Category = {
  _id: string;
  title: string;
  slug: string;
};

export type Author = {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};

export type Comment = {
  _id: string;
  text: string;
  author: Author;
  createdAt: string;
};

export type Post = {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: Category;
  type: "free" | "premium";
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: Author;
  related: RelatedPostType[];
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: Comment[];
  commentsCount: number;
};
export type RelatedPostType = Pick<
  Post,
  "_id" | "title" | "slug" | "coverImageUrl" | "author"
>;
