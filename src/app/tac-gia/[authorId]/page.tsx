"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./authorDetail.css";
import { useState } from "react";

const dataPostAuthor = [
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 832w",
    name: "Cách mở WiFi trên laptop Dell đơn giản",
    description:
      "Hướng dẫn chi tiết cách mở WiFi trên laptop Dell nhanh chóng và hiệu quả. Tìm hiểu ngay để kết nối mạng ổn định...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 832w",
    name: "Cách kiểm tra 2 màn hình laptop bằng HDMI đơn giản",
    description:
      "Hướng dẫn cách kiểm tra 2 màn hình laptop bằng cổng HDMI. Tìm hiểu chi tiết để sử dụng hiệu quả...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 832w",
    name: "7 cách dùng 6 tựu trên bản vẽ kính thực tế ảo",
    description:
      "Khám phá 7 cách sử dụng kính thực tế ảo để nâng cao trải nghiệm làm việc và giải trí. Tìm hiểu chi tiết ngay...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 832w",
    name: "Cách bật màn hình cảm ứng laptop Win 10, Win 11",
    description:
      "Hướng dẫn chi tiết cách bật màn hình cảm ứng trên laptop Windows 10 và 11. Tìm hiểu để sử dụng hiệu quả...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/20/cach-mo-wifi-tren-laptop-dell-don-gian-va-nhanh-chong-review-oVc.jpg 832w",
    name: "Cách mở WiFi trên laptop Dell đơn giản",
    description:
      "Hướng dẫn chi tiết cách mở WiFi trên laptop Dell nhanh chóng và hiệu quả. Tìm hiểu ngay để kết nối mạng ổn định...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/12/20/cach-ket-noi-2-man-hinh-laptop-bang-hdmi-thinkpro-OTD.png 832w",
    name: "Cách kiểm tra 2 màn hình laptop bằng HDMI đơn giản",
    description:
      "Hướng dẫn cách kiểm tra 2 màn hình laptop bằng cổng HDMI. Tìm hiểu chi tiết để sử dụng hiệu quả...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2024/1/17/tat-man-hinh-laptop-thinkpro-Lo5.png 832w",
    name: "7 cách dùng 6 tựu trên bản vẽ kính thực tế ảo",
    description:
      "Khám phá 7 cách sử dụng kính thực tế ảo để nâng cao trải nghiệm làm việc và giải trí. Tìm hiểu chi tiết ngay...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 800w, https://imagor.owtg.one/unsafe/fit-in/832x468/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg 832w",
    name: "Cách bật màn hình cảm ứng laptop Win 10, Win 11",
    description:
      "Hướng dẫn chi tiết cách bật màn hình cảm ứng trên laptop Windows 10 và 11. Tìm hiểu để sử dụng hiệu quả...",
    category: "Tin tức",
    author: "Unknown",
    date: "25",
    link: "#",
  },
];

const tabHighlightStyle = {
  "tất cả": { top: 4, left: 4, width: 63, height: 36 },
  "thủ thuật": { top: 4, left: 67, width: 88, height: 36 },
  "tin tức": { top: 4, left: 156, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 226, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 308, width: 69, height: 36 },
};

export default function AuthorPost() {
  const param = useParams();
  const { authorId } = param;
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeTab, setActiveTab] = useState("tất cả");

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, dataPostAuthor.length));
  };
  const dataProcessed = dataPostAuthor.slice(0, visibleCount);
  const hasMore = visibleCount < dataPostAuthor.length;

  return (
    <div className="author-detail-page container">
      <div className="max-w-[800px] py-6 mx-auto">
        <div className="flex flex-col py-0 md:py-6 space-y-5 md:space-y-10">
          <Link
            href="/tac-gia"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-[#171717] bg-[#FFFFFF] hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="w-5 h-5 flex-shrink-0"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10"
                clip-rule="evenodd"
              />
            </svg>
            <span className="">Tất cả tác giả</span>
          </Link>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-solid border-white bg-gray-200 box-content drop-shadow-lg">
                <Image
                  width={80}
                  height={80}
                  alt="Phạm Quốc Toàn"
                  src="https://i.pinimg.com/736x/09/25/9b/09259b0fef6af601d4453f96d6997f5c.jpg"
                  className="h-full w-full object-cover lazyloaded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-2xl font-lexend font-bold">
                    Phạm Quốc Toàn
                  </h1>
                  <span className="text-sm text-gray-600">
                    Chuyên gia công nghệ
                  </span>
                  <span className="text-sm">122 bài viết</span>
                </div>
              </div>
            </div>
            <div className="relative pl-10 pt-4">
              <svg
                className="absolute left-0 top-0 z-[-1]"
                width="64"
                height="53"
                viewBox="0 0 64 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6903 52.6445C12.6624 52.6445 10.1849 52.0255 8.25807 50.7874C6.33118 49.5493 4.74839 47.9673 3.50968 46.0414C2.13333 43.7027 1.16989 41.2953 0.619355 38.8191C0.206452 36.2054 0 34.0731 0 32.4223C0 25.6816 1.72043 19.5599 5.16129 14.0572C8.60215 8.55459 13.9699 4.08369 21.2645 0.644531L23.1226 4.35882C18.8559 6.14718 15.1398 8.96729 11.9742 12.8191C8.94624 16.671 7.43226 20.5916 7.43226 24.581C7.43226 26.2318 7.63871 27.6763 8.05161 28.9144C10.2538 27.126 12.8 26.2318 15.6903 26.2318C19.2688 26.2318 22.3656 27.4011 24.9806 29.7398C27.5957 32.0784 28.9032 35.3112 28.9032 39.4382C28.9032 43.29 27.5957 46.4541 24.9806 48.9302C22.3656 51.4064 19.2688 52.6445 15.6903 52.6445ZM50.7871 52.6445C47.7591 52.6445 45.2817 52.0255 43.3548 50.7874C41.428 49.5493 39.8452 47.9673 38.6065 46.0414C37.2301 43.7027 36.2667 41.2953 35.7161 38.8191C35.3032 36.2054 35.0968 34.0731 35.0968 32.4223C35.0968 25.6816 36.8172 19.5599 40.2581 14.0572C43.6989 8.55459 49.0667 4.08369 56.3613 0.644531L58.2194 4.35882C53.9527 6.14718 50.2366 8.96729 47.071 12.8191C44.043 16.671 42.529 20.5916 42.529 24.581C42.529 26.2318 42.7355 27.6763 43.1484 28.9144C45.3505 27.126 47.8968 26.2318 50.7871 26.2318C54.3656 26.2318 57.4624 27.4011 60.0774 29.7398C62.6925 32.0784 64 35.3112 64 39.4382C64 43.29 62.6925 46.4541 60.0774 48.9302C57.4624 51.4064 54.3656 52.6445 50.7871 52.6445Z"
                  fill="#00E1F9"
                ></path>
              </svg>
              <p className="text-base md:text-lg">
                Chào bạn, mình là Toàn. Thật vui khi được đồng hành cùng bạn
                trên hành trình khám phá thế giới công nghệ tại ThinkPro. Những
                bài viết của mình không chỉ mang đến cái nhìn sâu sắc về các xu
                hướng công nghệ mới, mà còn khơi nguồn cảm hứng để bạn sáng tạo
                và ứng dụng chúng một cách thông minh, tối ưu trong cuộc sống
                hàng ngày.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2 space-x-0 md:block md:space-y-0 md:space-x-2">
                <h2 className="text-2xl font-lexend font-bold">
                  Bài viết bởi tác giả
                </h2>
                <span className="text-sm font-medium text-gray-600">
                  122 bài
                </span>
              </div>
              <div className="flex overflow-hidden">
                <div className="overflow-auto scrollbar-hide">
                  <div className="relative space-y-2">
                    <div className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center">
                      <div
                        className="absolute top-1 left-[4px] duration-200 ease-out focus:outline-none"
                        style={{
                          ...tabHighlightStyle[activeTab],
                        }}
                      >
                        <div className="w-full h-full bg-colorPrimaryDefault rounded-full shadow-sm"></div>
                      </div>
                      <button
                        className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                        role="tab"
                        type="button"
                        onClick={() => setActiveTab("tất cả")}
                      >
                        <span className="truncate">Tất cả</span>
                      </button>
                      <button
                        className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                        role="tab"
                        type="button"
                        onClick={() => setActiveTab("thủ thuật")}
                      >
                        <span className="truncate">Thủ thuật</span>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                {dataProcessed.map((pro, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex flex-col space-y-2 py-0 md:pb-6 md:flex-row md:mt-6 md:space-y-0 md:space-x-6 md:border-b"
                  >
                    <div className="w-full md:w-[208px]">
                      <div className="author-aspect-w-16 author-aspect-h-9 rounded-lg overflow-hidden">
                        <Image
                          width={112}
                          height={63}
                          alt={pro.name}
                          sizes="(max-width: 768px) 400px, 416px"
                          srcset={pro.srcset}
                          src={pro.image}
                          className="w-full h-full lazyloaded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col space-y-2">
                      <span className="text-xs font-medium text-colorPrimary600 uppercase">
                        {pro.category}
                      </span>
                      <h3 className="text-base md:text-xl font-bold font-lexend">
                        {pro.name}
                      </h3>
                      <span className="text-sm md:text-base line-clamp-3">
                        {pro.description}
                      </span>
                      <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
                        <span className="text-xs md:text-sm text-gray-600">
                          {pro.date} ngày
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center py-3">
                  <button
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more"
                    onClick={handleShowMore}
                  >
                    <span>Xem thêm</span>
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
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
