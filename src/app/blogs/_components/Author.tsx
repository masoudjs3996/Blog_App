import { Post } from "@models/post";
import Avatar from "@ui/Avatar";

type AuthorProps = Post["author"];

const Author: React.FC<AuthorProps> = ({ name, avatarUrl }) => {
  return (
    <>
      {" "}
      <div className="flex items-center gap-x-1">
        <Avatar src={avatarUrl} width={24} />
        <span className="text-sm text-secondary-500">{name}</span>
      </div>
    </>
  );
};
export default Author;
