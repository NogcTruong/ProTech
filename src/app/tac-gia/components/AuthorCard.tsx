import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
  avatar: string;
  posts: number;
}

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link href="#" className="flex items-center space-x-4">
      <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-solid border-white bg-gray-200 box-content drop-shadow-lg">
        <Image width={56} height={56} src={author.image} alt={author.name} />
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-base font-bold">{author.name}</span>
        <span className="text-sm text-gray-600">Chuyên gia công nghệ</span>
        <span className="text-sm">{author.posts} bài viết</span>
      </div>
    </Link>
  );
}
