"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const promotionProducts = [
  {
    title: "Laptop Đồ Hoạ cao cấp. Màn chuẩn nét",
    imgLine1: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/5/acer-predator-helios-neo-16-phn16-72-91rf-undefined-A0o.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/15/lenovo-legion-slim-5-16ahp9-83dh003bvn-undefined.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2023-7051-thumb.png",
    ],
    price: "14900000",
    color: ["bg-green-200"],
    startDate: "01/07/2025",
  },
  {
    title: "Xả kho Laptop Gaming. Phiêu triệu tựa game",
    imgLine1: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/5/acer-predator-helios-neo-16-phn16-72-91rf-undefined-A0o.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/15/lenovo-legion-slim-5-16ahp9-83dh003bvn-undefined.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2023-7051-thumb.png",
    ],
    imgLine2: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/acer-predator-helios-16-thinkpro-01.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-pro-5-2023-y9000p-thinkpro.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/4/lenovo-loq-2024-15arp9-undefined-pix.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/asus-rog-flow-x13-2023-thinkpro-01.png",
    ],
    price: "14900000",
    color: ["bg-red-200"],
    startDate: "02/05/2025",
  },
  {
    title: "Laptop Gaming tầm trung - Chơi nét chiến ngay",
    imgLine1: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/5/acer-predator-helios-neo-16-phn16-72-91rf-undefined-A0o.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/15/lenovo-legion-slim-5-16ahp9-83dh003bvn-undefined.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2023-7051-thumb.png",
    ],
    imgLine2: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/acer-predator-helios-16-thinkpro-01.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-pro-5-2023-y9000p-thinkpro.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/4/lenovo-loq-2024-15arp9-undefined-pix.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/asus-rog-flow-x13-2023-thinkpro-01.png",
    ],
    price: "14900000",
    color: ["bg-purple-200"],
    startDate: "02/05/2025",
  },
  {
    title: "LENOVO THINKPAD X1 - LAPTOP DOANH NHÂN 'SỐ 1'",
    imgLine1: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/5/acer-predator-helios-neo-16-phn16-72-91rf-undefined-A0o.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/15/lenovo-legion-slim-5-16ahp9-83dh003bvn-undefined.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2023-7051-thumb.png",
    ],
    imgLine2: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/acer-predator-helios-16-thinkpro-01.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-pro-5-2023-y9000p-thinkpro.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/4/lenovo-loq-2024-15arp9-undefined-pix.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/1/10/asus-rog-flow-x13-2023-thinkpro-01.png",
    ],
    price: "14900000",
    color: ["bg-blue-200"],
    startDate: "02/05/2025",
  },
  {
    title: "Laptop Đồ Hoạ cao cấp. Màn chuẩn nét",
    imgLine1: [
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/5/26/lenovo-legion-slim-7-2023-thinkpro-u9c.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/5/acer-predator-helios-neo-16-phn16-72-91rf-undefined-A0o.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/15/lenovo-legion-slim-5-16ahp9-83dh003bvn-undefined.png",
      "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2023-7051-thumb.png",
    ],
    price: "14900000",
    color: ["bg-amber-100"],
    startDate: "01/07/2025",
  },
];

export default function Promotions() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const itemCount = 1;
  const lineWidth = 180;

  const prev = () =>
    setCurrentLocation((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
  const next = () =>
    setCurrentLocation((prev) => (prev === itemCount - 1 ? 0 : prev + 1));

  return (
    <section className="section-promotions mt-10 md:mt-20">
      <div className="relative group/scrollable">
        <div className="relative">
          <div className="pt-6 overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="flex space-x-2 md:space-x-6">
              {promotionProducts.map((promotionProduct, index) => (
                <Link
                  key={index}
                  href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                  className={`w-[320px] md:w-[calc(100%/2_-_12px)] shrink-0 rounded-3xl relative flex flex-col ${promotionProduct.color[0]}`}
                >
                  <div className="dark absolute top-0 right-6 -translate-y-1/2 -rotate-3">
                    <span className="inline-flex items-center font-medium rounded-md text-base px-2.5 py-1.5 gap-1.5 bg-[#36ff9a] text-white dark:text-gray-900">
                      Từ {promotionProduct.price}
                    </span>
                  </div>
                  <div className="p-4 md:p-6 h-[150px] md:h-[220px]">
                    <span className="text-2xl md:text-4xl font-bold font-lexend line-clamp-3">
                      {promotionProduct.title}
                    </span>
                    <div className="mt-4 text-sm md:text-lg text-black/70">
                      Từ {promotionProduct.startDate}
                    </div>
                  </div>
                  <div className="pb-4 flex-1 flex flex-col space-y-2">
                    <div className="wrapper overflow-hidden">
                      <div className="pl-[40px] md:pl-[60px] animate flex space-x-3">
                        {promotionProduct.imgLine1?.map((product, index) => (
                          <div
                            key={index}
                            className="shrink-0 w-[64px] h-[64px] md:w-[120px] md:h-[120px] border border-gray-300 bg-white rounded-2xl overflow-hidden"
                          >
                            <Image
                              src={product}
                              alt="Hinh anh khuyen mai 0"
                              width={64}
                              height={64}
                              sizes="(max-width: 768px) 64px, 120px"
                              className="t-img w-full h-full object-cover ls-is-cached lazyloaded"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="wrapper overflow-hidden">
                      <div className="animate flex space-x-3">
                        {promotionProduct.imgLine2?.map((product, index) => (
                          <div
                            key={index}
                            className="shrink-0 w-[64px] h-[64px] md:w-[120px] md:h-[120px] border border-gray-300 bg-white rounded-2xl overflow-hidden"
                          >
                            <Image
                              src={product}
                              alt="Hinh anh khuyen mai 0"
                              width={64}
                              height={64}
                              sizes="(max-width: 768px) 64px, 120px"
                              className="t-img w-full h-full object-cover ls-is-cached lazyloaded"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="h-10 hidden md:flex flex-col justify-end">
          <div className="bg-gray-200 w-full relative h-[2px]">
            <div
              className="bg-gray-900 absolute top-0 left-0 h-[2px]"
              style={{
                width: `${lineWidth}px`,
                transform: `translateX(${currentLocation * lineWidth}px)`,
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
        <div className="hidden md:block group-hover/scrollable:opacity-100 opacity-100 md:opacity-0 transition-opacity duration-200">
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
        </div>
      </div>
    </section>
  );
}
