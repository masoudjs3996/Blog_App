import Image from "next/image";

type AvatarProps = {
  src: string | null | undefined;
  width?: number;
};

const Avatar: React.FC<AvatarProps> = ({ src, width = 24 }) => {
  return (
    <>
      <Image
        src={src || "/images/avatar.png"}
        width={width}
        height={width}
        alt={src || "avatar"}
        className="rounded-full ring-1 ring-secondary-300 ml-2"
      />
    </>
  );
};
export default Avatar;
