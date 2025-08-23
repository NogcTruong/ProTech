import LoadMoreButton from "@/components/common/LoadMoreButton";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  image: string;
  name: string;
  description?: string;
  describe?: string;
  category: string;
  author: string;
  date: string;
  link: string;
}

interface NewsListProps {
  news: NewsItem[];
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function NewsList({ news, hasMore, onLoadMore }: NewsListProps) {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col divide-y divide-space-y-4 md:divide-space-y-6">
        {news.map((newsItem, idx) => (
          <Link
            key={idx}
            href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
            className="flex flex-row-reverse md:flex-row md:space-x-6"
          >
            <div className="w-[112px] md:w-[208px] ml-2 md:ml-0">
              <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  width={112}
                  height={63}
                  alt={newsItem.name}
                  sizes="(max-width: 768px) 112px, 208px"
                  src={newsItem.image}
                  className="lazyloaded"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2">
              <span className="text-sm md:text-xl font-bold font-lexend">
                {newsItem.name}
              </span>
              <span className="hidden md:block text-base line-clamp-3">
                {newsItem.describe || newsItem.description}
              </span>
              <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
                <span className="font-semibold text-[#00C25C]">
                  {newsItem.author}
                </span>
                <span>/</span>
                <span>{newsItem.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <LoadMoreButton hasMore={hasMore} onLoadMore={onLoadMore} />
    </div>
  );
}
