"use client";

import { formatPrice } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const products = [
  {
    name: "Ghế công thái học Ergohuman Enjoy Basic 2",
    price: 6900000,
    discount: 16,
    delivery_time: "5 phút",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/88x88/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/3/12/ghe-cong-thai-hoc-ergohuman-enjoy-basic-2-ovo.jpg",
  },
  {
    name: "Arm màn hình HyperWork Flexus | PA01",
    price: 1290000,
    discount: -13,
    delivery_time: "5 phút",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/88x88/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/3/12/ghe-cong-thai-hoc-ergohuman-enjoy-basic-2-ovo.jpg",
  },
  {
    name: "Ghế công thái học MerryFair Spinelly",
    price: 4290000,
    discount: -52,
    delivery_time: "5 phút",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/88x88/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/3/12/ghe-cong-thai-hoc-ergohuman-enjoy-basic-2-ovo.jpg",
  },
  {
    name: "Ghế công thái học Ergohuman Enjoy Basic 2",
    price: 6900000,
    discount: 16,
    delivery_time: "5 phút",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/88x88/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/3/12/ghe-cong-thai-hoc-ergohuman-enjoy-basic-2-ovo.jpg",
  },
  {
    name: "Arm màn hình HyperWork Flexus | PA01",
    price: 1290000,
    discount: -13,
    delivery_time: "5 phút",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/88x88/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/3/12/ghe-cong-thai-hoc-ergohuman-enjoy-basic-2-ovo.jpg",
  },
];

export default function ViewedProduct() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollWidthFull, setScrollWidthFull] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(() => {
        setScrollWidthFull(containerRef.current!.scrollWidth);
      });

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, []);

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

  const prev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentScroll = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const devideWidth = scrollWidth / 2 - 600;
      container.scrollTo({
        left: Math.max(0, currentScroll - devideWidth),
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentScroll = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const devideWidth = scrollWidth / 2 - 600;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: Math.min(maxScroll, currentScroll + devideWidth),
        behavior: "smooth",
      });
    }
  };

  const getIndicatorPosition = () => {
    const totalWidth = 1200;
    const indicatorWidth = 180;

    const maxPosition = totalWidth - indicatorWidth;
    return scrollProgress * maxPosition;
  };

  return (
    <section className="section-viewed-product mt-6 md:mt-10">
      <h2 className="md:text-3xl font-lexend font-bold">Sản phẩm đã xem</h2>
      <div className="relative group/scrollable mt-4 md:mt-6">
        <div className="relative">
          <div
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            ref={containerRef}
          >
            <div className="flex space-x-4">
              {products.map((pro, idx) => (
                <Link
                  key={idx}
                  href="/may-game-thuc-te-ao"
                  className="flex space-x-3 shrink-0 rounded-2xl border overflow-hidden bg-white w-[300px] md:w-[330px]"
                >
                  <div className="w-16 md:w-[88px] h-16 md:h-[88px] p-2">
                    <Image
                      className="t-img w-full h-full object-cover ls-is-cached lazyloaded"
                      alt={pro.name}
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 64px, 88px"
                      src={pro.image}
                    />
                  </div>
                  <div className="flex-1 flex flex-col space-y-0.5 pr-2 py-1">
                    <span className="text-sm font-medium line-clamp-2">
                      {pro.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">
                        {pro.delivery_time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-rose-600 font-medium">
                        {formatPrice(pro.price)}
                      </span>
                      <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                        {pro.discount}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {scrollWidthFull > 1200 && (
          <div className="h-10 hidden md:flex flex-col justify-end">
            <div className="bg-gray-200 w-full relative h-[2px]">
              <div
                className="bg-gray-900 absolute top-0 left-0 h-[2px]"
                style={{
                  width: "180px",
                  transform: `translateX(${getIndicatorPosition()}px)`,
                  transition: "width 0.3s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        )}
        {scrollWidthFull > 1200 && (
          <div className="hidden md:block group-hover/scrollable:opacity-100 opacity-100 md:opacity-0 transition-opacity duration-200">
            {scrollProgress !== 0 && (
              <button
                onClick={prev}
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm text-white bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-1/2 -translate-y-[calc(50%_+_20px)] z-10 -left-4 md:-left-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            {scrollProgress !== 1 && (
              <button
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm text-white bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-1/2 -translate-y-[calc(50%_+_20px)] z-10 -right-4 md:-right-5"
                onClick={next}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
