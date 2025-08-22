import Image from "next/image";
import Link from "next/link";

interface ArticleHeaderProps {
  title: string;
  author: {
    name: string;
    avatar: string;
    profileUrl: string;
  };
  publishDate: string;
}

export default function ArticleHeader({
  title,
  author,
  publishDate,
}: ArticleHeaderProps) {
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold font-lexend">{title}</h1>
      <div className="section-author-description flex flex-col pb-4 border-b">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <Link
            href={author.profileUrl}
            className="flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
              <Image
                width="40"
                height="40"
                alt={`avatar ${author.name}`}
                src={author.avatar}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-lexend font-bold text-emerald-600">
                {author.name}
              </span>
              <span className="">{publishDate}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
