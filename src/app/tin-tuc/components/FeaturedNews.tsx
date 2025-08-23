import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  image: string;
  name: string;
  description: string;
  category: string;
  author: string;
  date: string;
  link: string;
}

interface FeaturedNewsProps {
  mainNews: NewsItem[];
  subNews: NewsItem[];
}

export default function FeaturedNews({ mainNews, subNews }: FeaturedNewsProps) {
  return (
    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-4">
      <div className="col-span-2 row-span-2">
        <Link
          href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
          className="flex flex-col space-y-4"
        >
          <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            {mainNews.map((product, idx) => (
              <Image
                key={idx}
                width={400}
                height={225}
                alt="Dell XPS 9315 2-in-1: Sự kết hợp hoàn hảo giữa hiệu suất và thiết kế đột phá"
                src={product.image}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <span className="text-2xl md:text-4xl font-bold font-lexend line-clamp-3">
            Dell XPS 9315 2-in-1: Sự kết hợp hoàn hảo giữa hiệu suất và thiết kế
            đột phá
          </span>
          <div className="flex items-center space-x-4 text-xs md:text-base">
            <span className="font-semibold text-emerald-600">
              Nguyễn Đức Tuấn
            </span>
            <span>/</span>
            <span>12/07/2025</span>
          </div>
          <span className="text-lg md:text-2xl line-clamp-3">
            Dell XPS 9315 2-in-1 là chiếc laptop linh hoạt bậc nhất cùng hiệu
            suất ổn định và màn hình sắc nét &quot;chuẩn điện ảnh&quot;
          </span>
        </Link>
      </div>
      {subNews?.map((news, nidx) => (
        <div key={nidx}>
          <Link
            href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
            className="flex flex-col space-y-2"
          >
            <div className="newslist-aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <Image
                width={160}
                height={90}
                alt="Chính sách Membership - Thăng hạng thăng deal"
                src={news.image}
                className="lazyloaded"
              />
            </div>
            <span className="text-sm md:text-xl font-bold font-lexend line-clamp-3">
              {news.name}
            </span>
            <span className="text-sm md:text-base line-clamp-3">
              {news.description}
            </span>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-3 max-md:space-y-1 text-xs md:text-base">
              <span className="font-semibold text-[#00C25C]">
                {news.author}
              </span>
              <span className="hidden md:block">/</span>
              <span>{news.date}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
