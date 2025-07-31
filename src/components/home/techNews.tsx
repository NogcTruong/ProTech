"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const dataNews = [
  {
    title: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/224x126/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
    author: "Vũ Luân",
    date: "04/07/2025",
  },
  {
    title: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/224x126/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
    author: "Vũ Luân",
    date: "04/07/2025",
  },
  {
    title: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/224x126/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
    author: "Vũ Luân",
    date: "04/07/2025",
  },
  {
    title: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/224x126/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
    author: "Vũ Luân",
    date: "04/07/2025",
  },
  {
    title: "Cách tắt ứng dụng chạy ngầm trên laptop Win 11 nhanh chóng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/224x126/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/12/cach-tat-ung-dung-chay-ngam-tren-laptop-win-11-nhanh-chong-review-Q69.png",
    author: "Vũ Luân",
    date: "04/07/2025",
  },
];

const dataBackgroundNews = {
  "mới nhất": {
    title: "tin tức",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/568x320/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/filter-camera-laptop-top-ung-dung-cach-su-dung-hieu-qua-review-PbX.png",
    name: "Filter camera laptop: Top ứng dụng & Cách sử dụng hiệu quả",
    description:
      "Khám phá cách sử dụng filter camera laptop chuyên nghiệp cho học tập, làm việc. Tìm hiểu top ứng dụng, phần mềm tốt nhất và mẹo tối ưu hiệu suất. Cải thiện chất lượng video call ngay!",
    author: "Vũ Luân",
    date: "08/07/2025",
    bgColor: "bg-purple-200",
    textColor: "text-fuchsia-600",
    textDesignColor: "text-purple-300",
  },
  "tin tức": {
    title: "tin tức",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/568x320/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/filter-camera-laptop-top-ung-dung-cach-su-dung-hieu-qua-review-PbX.png",
    name: "Filter camera laptop: Top ứng dụng & Cách sử dụng hiệu quả",
    description:
      "Khám phá cách sử dụng filter camera laptop chuyên nghiệp cho học tập, làm việc. Tìm hiểu top ứng dụng, phần mềm tốt nhất và mẹo tối ưu hiệu suất. Cải thiện chất lượng video call ngay!",
    author: "Vũ Luân",
    date: "08/07/2025",
    bgColor: "bg-colorPrimary200",
    textColor: "text-teal-700",
    textDesignColor: "text-colorPrimary400",
  },
  "đánh giá": {
    title: "Đánh giá",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/568x320/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/10/31/cach-kiem-tra-dung-luong-ram-toi-da-laptop-don-gian-nhat-review-8LZ.png",
    name: "Cách kiểm tra dung lượng RAM tối đa laptop đơn giản nhất",
    description:
      "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM tối đa laptop trên Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
    author: "Vũ Luân",
    date: "08/07/2025",
    bgColor: "bg-pink-200",
    textColor: "text-rose-600",
    textDesignColor: "text-pink-300",
  },
  "tư vấn": {
    title: "Tư vấn",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/568x320/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/05/27/dell-xps-9315-2-in-1-su-ket-hop-hoan-hao-giua-hieu-suat-va-thiet-ke-dot-pha-review-eg5.png",
    name: "Dell XPS 9315 2-in-1: Sự kết hợp hoàn hảo giữa hiệu suất và thiết kế đột phá",
    description:
      "Dell XPS 9315 2-in-1 là chiếc laptop linh hoạt bậc nhất cùng hiệu suất ổn định và màn hình sắc nét &quot;chuẩn điện ảnh&quot;",
    author: "Nguyễn Đức Tuấn",
    date: "12/07/2025",
    bgColor: "bg-purple-200",
    textColor: "text-fuchsia-600",
    textDesignColor: "text-purple-300",
  },
  "thủ thuật": {
    title: "Thủ thuật",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/568x320/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/18/13-cach-sua-loi-laptop-tu-ngat-wifi-win-10-nhanh-hieu-qua-review-H4p.png",
    name: "13 cách sửa lỗi laptop tự ngắt WiFi Win 10 nhanh, hiệu quả;",
    description:
      "Sửa lỗi laptop tự ngắt WiFi win 10 đơn giản, chi tiết từ ThinkPro: Xóa DNS, reset network, cập nhật driver,... Click xem ngay!",
    author: "Nguyễn Tường Vy",
    date: "08/07/2025",
    bgColor: "bg-colorPrimary200",
    textColor: "text-teal-700",
    textDesignColor: "text-colorPrimary400",
  },
};

const tabHighlightStyle = {
  "mới nhất": { top: 4, left: 4, width: 84, height: 36 },
  "tin tức": { top: 4, left: 88, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 158, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 241, width: 69, height: 36 },
  "thủ thuật": { top: 4, left: 310, width: 88, height: 36 },
};

export default function TechNews() {
  const [activeTab, setActiveTab] = useState("mới nhất");

  const currentData = dataBackgroundNews[activeTab];

  return (
    <section className="section-news mt-10 md:mt-20">
      <div className="title flex md:justify-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-lexend font-bold">
          Tin tức công nghệ
        </h2>
      </div>
      <div className="mt-4 md:mt-10 flex md:justify-center">
        <div className="flex overflow-hidden">
          <div className="overflow-auto scrollbar-hide">
            <div className="relative space-y-2">
              <div className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center">
                <div
                  className="absolute w-[84px] h-[36px] top-1 left-[4px] duration-200 ease-out focus:outline-none"
                  style={{ ...tabHighlightStyle[activeTab] }}
                >
                  <div className="w-full h-full bg-colorPrimaryDefault rounded-full shadow-sm"></div>
                </div>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => setActiveTab("mới nhất")}
                >
                  <span className="truncate">Mới nhất</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => setActiveTab("tin tức")}
                >
                  <span className="truncate">Tin tức</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => setActiveTab("đánh giá")}
                >
                  <span className="truncate">Đánh giá</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => setActiveTab("tư vấn")}
                >
                  <span className="truncate">Tư vấn</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => setActiveTab("thủ thuật")}
                >
                  <span className="truncate">Thủ thuật</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-10 flex flex-col lg:flex-row lg:space-x-10">
        <Link
          href="#!"
          className={`relative ${currentData.bgColor} group w-full lg:w-1/2 rounded-3xl overflow-hidden py-5 md:py-10 xl:py-20 pl-0 xl:pl-6 pr-10 md:pr-20 transition-colors duration-300`}
        >
          <div className="absolute right-0 bottom-0 h-fit translate-x-1/3">
            <span
              className={`${currentData.textDesignColor} h-full font-lexend font-bold whitespace-nowrap text-[80px] md:text-[128px] leading-[80px] md:leading-[128px] [writing-mode:vertical-lr] rotate-180 pointer-events-none transition-colors duration-300`}
              style={{ letterSpacing: "-14.92px" }}
            >
              HOT NEWS
            </span>
          </div>
          <div className="pl-5 md:pl-6 lg:pl-10 flex flex-col">
            <span
              className={`text-colorPray900 group-hover:${currentData.textColor} uppercase text-sm md:text-lg font-bold font-lexend transition-colors duration-300`}
            >
              {currentData.title}
            </span>
            <div className="mt-2 md:mt-4">
              <span
                className={`text-gray-900 group-hover:${currentData.textColor} title text-2xl md:text-3xl xl:text-5xl font-bold font-lexend transition-colors duration-300`}
              >
                {currentData.name}
              </span>
            </div>
            <div className="mt-3 md:mt-4 lg:mt-6 text-sm lg:text-body flex items-center space-x-3">
              <span
                className={clsx(
                  "text-colorPray900  font-semibold transition-colors duration-300",
                  {
                    "group-hover:text-fuchsia-600":
                      activeTab === "mới nhất" || activeTab === "tư vấn",
                    "group-hover:text-teal-700":
                      activeTab === "tin tức" || activeTab === "thủ thuật",
                    "group-hover:text-rose-600": activeTab === "đánh giá",
                  }
                )}
              >
                {currentData.author}
              </span>
              <span>/</span>
              <span>{currentData.date}</span>
            </div>
          </div>
          <div className="mt-3 md:mt-6 aspect-w-16 aspect-h-9 rounded-r-lg md:rounded-l-lg overflow-hidden">
            <Image
              width={304}
              height={171}
              className="w-full h-full object-contain lazyloaded"
              src={currentData.image}
              alt="Filter camera laptop: Top ứng dụng & Cách sử dụng hiệu quả"
            />
          </div>
          <div className="mt-3 md:mt-6 pl-5 md:pl-6">
            <p className="text-base lg:text-2xl line-clamp-5">
              {currentData.description}
            </p>
          </div>
        </Link>
        <div className="mt-3 md:mt-6 lg:mt-0 flex-1 flex flex-col divide-y divide-space-y-4 md:divide-space-y-6">
          {dataNews.map((news, nidx) => (
            <Link
              key={nidx}
              href="#"
              className="flex md:flex-row-reverse items-center group"
            >
              <div className="flex-1 flex flex-col space-y-3">
                <span className="line-clamp-2 text-sm md:text-xl font-bold group-hover:underline">
                  {news.title}
                </span>
                <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-base">
                  <span className="font-semibold text-[#00c25c]">
                    {news.author}
                  </span>
                  <span>/</span>
                  <span>{news.date}</span>
                </div>
              </div>
              <div className="ml-3 md:ml-0 md:mr-6 w-1/3 ">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-contain lazyloaded"
                    alt={news.title}
                    src={news.image}
                    width={128}
                    height={72}
                    sizes="(max-width: 768px) 128px, 224px"
                  />
                </div>
              </div>
            </Link>
          ))}
          <div className="self-center md:self-auto">
            <Link
              href="/tin-tuc"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more"
            >
              <span>Xem tất cả</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
