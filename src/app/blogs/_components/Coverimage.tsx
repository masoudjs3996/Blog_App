import { Post } from "@models/post";
import Image from "next/image";
import Link from "next/link";
type CoverImageProps = Pick<Post, "coverImageUrl" | "title" | "slug">;

const CoverImage: React.FC<CoverImageProps> = ({
  coverImageUrl,
  title,
  slug,
}) => {
  return (
    <>
      <div className="relative aspect-video overflow-hidden rounded-md mb-6">
        <Link href={`/blogs/${slug}`}>
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            quality={90}
            className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          />
        </Link>
      </div>
    </>
  );
};
export default CoverImage;
