import Image from "next/image";
import Link from "next/link";

interface Article {
  name: string;
  image: string;
  category: string;
  description: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href="#"
      className="flex flex-col space-y-2 py-0 md:pb-6 md:flex-row md:mt-6 md:space-y-0 md:space-x-6 md:border-b"
    >
      <div className="w-full md:w-[208px]">
        <div className="author-aspect-w-16 author-aspect-h-9 rounded-lg overflow-hidden">
          <Image
            width={112}
            height={63}
            alt={article.name}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            src={article.image}
            className="w-full h-full lazyloaded"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col space-y-2">
        <span className="text-xs font-medium text-colorPrimary600 uppercase">
          {article.category}
        </span>
        <h3 className="text-base md:text-xl font-bold font-lexend">
          {article.name}
        </h3>
        <span className="text-sm md:text-base line-clamp-3">
          {article.description}
        </span>
        <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
          <span className="text-xs md:text-sm text-gray-600">
            {article.date} ngày
          </span>
        </div>
      </div>
    </Link>
  );
}
