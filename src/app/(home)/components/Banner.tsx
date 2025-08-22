"use client";

import Link from "next/link";
import Banner1 from "@/assets/images/banner-desktop-2400x600(1).webp";
import Banner2 from "@/assets/images/banner-2400-x-600.(2)webp.webp";
import Banner3 from "@/assets/images/banner-desktop-2400x600.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  {
    img: Banner1,
    link: "#",
  },
  {
    img: Banner2,
    link: "#",
  },
  {
    img: Banner3,
    link: "#",
  },
];

const bannersMobile = [
  {
    img: "https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2025/7/1/frame-427320384.png",
    link: "#",
  },
  {
    img: "https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2025/3/12/banner-mobi-800x-450.png",
    link: "#",
  },
  {
    img: "https://imagor.owtg.one/unsafe/fit-in/800x450/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/categories/2025/1/20/banner-mobbile-1600x900.jpg",
    link: "#",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [widthMobile, setWidthMobile] = useState(false);

  const currentBanners = widthMobile ? bannersMobile : banners;

  const prevBanner = () => {
    setCurrent((prev) => (prev === 0 ? currentBanners.length - 1 : prev - 1));
  };

  const nextBanner = () => {
    setCurrent((prev) => (prev === currentBanners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWidthMobile(true);
      } else {
        setWidthMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section-banner relative">
      <div className="wrapper">
        <div className="relative" dir="ltr">
          <div
            className="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-3xl no-scrollbar"
            data-v-61d9ae21
          >
            <div className="flex-none snap-center basis-full block aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-1">
              <Link
                href={currentBanners[current].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={currentBanners[current].img}
                  sizes={`${
                    widthMobile
                      ? "(max-width: 768px) 400px, 400px"
                      : "(max-width: 768px) 400px, (max-width: 1024px) 720px, (max-width: 1280px) 1000px, (max-width: 1440px) 1200px, 1340px"
                  }`}
                  alt="Đón Giáng Sinh - Deal Lung Linh. Holiday Sale, giúp bạn dễ dàng mua sắm các sản phẩm công nghệ chất lượng với Giá Tốt Nhất Thị Trường!"
                  className="t-img h-full w-full object-cover"
                  width={400}
                  height={widthMobile ? 225 : 100}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between">
            <button
              onClick={prevBanner}
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-primary-400 inline-flex items-center rtl:[&_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="h-5 w-5 flex-shrink-0"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={nextBanner}
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-primary-400 inline-flex items-center rtl:[&_span:last-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="h-5 w-5 flex-shrink-0"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
