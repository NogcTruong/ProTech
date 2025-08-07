"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "Laptop nhập khẩu",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/logo/laptop-nhap-khau-khong-nen.png",
  },
  {
    name: "Laptop chính hãng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/logo/laptop-chinh-hang-khong-nen.png",
  },
  {
    name: "Máy chơi game/Game Console",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/25/danh-muc-icon-may-choi-game-game-console-thinkpro.vn.png",
  },
  {
    name: "Kính Thực Tế Ảo VR/AR",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/3/27/danh-muc-icon-kinh-thuc-te-ao-vrar-thinkpro.vn.png",
  },
  {
    name: "Bàn phím",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-ban-phim-thinkpro.vn.png",
  },
  {
    name: "Ghế công thái học",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/23/danh-muc-icon-ghe-cong-thai-hoc-thinkpro.vn.png",
  },
  {
    name: "Bàn nâng hạ",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/18/danh-muc-icon-ban-nang-ha-thinkpro.vn.png",
  },
  {
    name: "Hộp đựng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2022/12/14/danh-muc-icon-hoc-tu-thinkpro.vn.png",
  },
  {
    name: "Âm thanh",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-am-thanh-thinkpro.vn.png",
  },
  {
    name: "Chuột",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d2j0501oehjiz9.cloudfront.net/media/core/categories/2024/12/12/chuot.png",
  },
  {
    name: "Ba lô, Túi",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-balo-tui-thinkpro.vn.png",
  },
  {
    name: "Arm màn hình",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2022/3/15/danh-muc-icon-arm-man-hinh-thinkpro.vn.png",
  },
  {
    name: "Phụ kiện Setup",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/30/danh-muc-icon-phu-kien-setup-thinkpro.vn.png",
  },
  {
    name: "RAM",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/categories/2025/1/20/32d4sam3200-512x512-png.png",
  },
  {
    name: "Ổ cứng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/categories/2025/1/20/samsung-990-512x512png.png",
  },
  {
    name: "Sạc",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2021/12/29/danh-muc-icon-sac-thinkpro.vn.png",
  },
];

export default function Featuredcategoryegories() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const getIndicatorPosition = () => {
    const totalWidth = 608;
    const indicatorWidth = 180;

    const maxPosition = totalWidth - indicatorWidth;
    return maxPosition * scrollProgress;
  };

  return (
    <section className="section-featured-categories mt-6 md:mt-10">
      <h2 className="md:text-3xl font-lexend font-bold">Danh mục nổi bật</h2>
      <div className="mt-6 hidden grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:grid">
        {categories.map((category, idx) => (
          <Link href="/ghe-cong-thai-hoc" className="group" key={idx}>
            <div className="aspect-w-1 aspect-h-1">
              <div className="p-3 flex items-center justify-center">
                <div className="background rounded-xl transition-all !transform-gpu duration-400 ease-out-back bg-colorPrimary400 opacity-0 absolute inset-10 group-hover:scale-[220%] group-hover:opacity-100"></div>
                <div className="w-[120px] h-[120px] transition-all !transform-gpu duration-400 ease-out-back group-hover:scale-105 group-hover:rotate-8">
                  <Image
                    src={category.img}
                    className="t-img w-full h-full object-cover"
                    width={120}
                    height={120}
                    alt={category.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-1">
              <span className="text-base font-bold group-hover:underline underline-offset-2">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative group/scrollable mt-4 md:hidden">
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
          ref={containerRef}
        >
          <div style={{ width: "704px" }}>
            <div
              className="t-flex-gap"
              style={{ "--gap-x": "8px", "--gap-y": "8px" }}
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                {categories.map((category, idx) => (
                  <Link
                    href="/ghe-cong-thai-hoc"
                    className="w-[80px]"
                    key={idx}
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="p-3">
                        <Image
                          src={category.img}
                          className="t-img w-full h-full object-cover lazyloaded"
                          width={56}
                          height={56}
                          alt={category.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-1">
                      <span className="text-xs font-bold group-hover:underline underline-offset-2">
                        {category.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-4 flex flex-col justify-end">
          <div className="bg-white/20 w-full relative h-2">
            <div
              className="bg-gray-900 absolute top-0 left-0 h-[2px]"
              style={{
                width: "180px",
                transform: `translateX(${getIndicatorPosition()}px)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
