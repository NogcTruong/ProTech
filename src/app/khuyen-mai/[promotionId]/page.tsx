"use client";

import ProductList from "@/components/common/productList";
import { useState } from "react";
import Image from "next/image";
import coverBanner from "@/assets/images/cover-folder-thinkpro.webp";

const promotionProducts = {
  laptop: [
    {
      name: "Lenovo Yoga Book 9 13IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/16/lenovo-yoga-book-9-13imu9-83ff001svn-undefined.png",
      price: "62000000",
      discount: "-10%",
      color: ["#808080"],
      version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    },
    {
      name: "Asus Vivobook S 15 S5507OA",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-zenbook-s14-oled-ux5406sa-pv140ws-undefined-M13.png",
      price: "35000000",
      discount: "-15%",
      color: ["#C0C0C0"],
      version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    },
    {
      name: "Lenovo Legion Pro 5 16IRX9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/17/lenovo-yoga-9-2-in-1-14imh9-83ac000svn-undefined-Dvb.png",
      price: "55000000",
      discount: "-12%",
      color: ["#000000"],
      version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
    {
      name: "Lenovo Yoga Book 9 13IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/16/lenovo-yoga-book-9-13imu9-83ff001svn-undefined.png",
      price: "62000000",
      discount: "-10%",
      color: ["#808080"],
      version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    },
    {
      name: "Asus Vivobook S 15 S5507OA",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-zenbook-s14-oled-ux5406sa-pv140ws-undefined-M13.png",
      price: "35000000",
      discount: "-15%",
      color: ["#C0C0C0"],
      version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    },
    {
      name: "Lenovo Legion Pro 5 16IRX9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/17/lenovo-yoga-9-2-in-1-14imh9-83ac000svn-undefined-Dvb.png",
      price: "55000000",
      discount: "-12%",
      color: ["#000000"],
      version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
  ],
  "máy chơi game/ game console": [
    {
      name: "Lenovo Legion Go 8APU1 83E1004KVN Ryzen Z1 Extreme, 16GB, 512GB, WQXGA",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/17/lenovo-legion-go-8apu1-83e1004kvn-undefined-3Bb.png",
      price: "62000000",
      discount: "-10%",
      color: ["#000000"],
      version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    },
  ],
};

export default function PromotionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const filterTableCSS = isOpen
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute",
        margin: "0px",
      }
    : {};

  const getFilteredProducts = () => {
    let products =
      activeCategory === "all"
        ? Object.values(promotionProducts).flat()
        : promotionProducts[activeCategory] || [];

    if (sortBy === "price-asc") {
      products = [...products].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (sortBy === "price-desc") {
      products = [...products].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    return products;
  };

  return (
    <section className="promotiion-page">
      <div className="container py-5 md:py-10">
        <div className="mb-4 md:mb-10 rounded-2xl overflow-hidden">
          <Image
            src={coverBanner}
            className="w-full h-full"
            alt="LAPTOP GAMER GIÁ SIÊU ƯU ĐÃI"
          />
        </div>
        <h1 className="text-xl md:text-5xl font-bold font-lexend">
          🔥 LAPTOP CHÍNH HÃNG - DEAL RẺ VÔ ĐỊCH
        </h1>
        <div className="mt-1 md:mt-2">
          <span className="text-xs md:text-sm text-black/70">
            Từ 01/11/2024
          </span>
        </div>
        <div className="mt-4 md:mt-10 flex space-x-4">
          <button
            onClick={() => setActiveCategory("all")}
            className="hover:underline flex flex-col items-center space-y-2"
          >
            <span
              className={`${
                activeCategory === "all"
                  ? "ring-colorPrimaryDefault"
                  : "ring-colorPray300"
              } w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full ring-2 flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
                />
              </svg>
            </span>
            <span className="text-sm font-lexend font-bold">Tất cả</span>
          </button>
          <div className="w-[1px] h-[60px] md:h-[80px] bg-colorPray300 rotate-8"></div>
          <button
            onClick={() => setActiveCategory("laptop")}
            className="hover:underline flex flex-col items-center space-y-2"
          >
            <span
              className={`${
                activeCategory === "laptop"
                  ? "ring-colorPrimaryDefault ring-2"
                  : "bg-gray-100"
              } transition-all w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center overflow-hidden`}
            >
              <Image
                src="https://imagor.owtg.one/unsafe/fit-in/80x80/https://d2j0501oehjiz9.cloudfront.net/media/core/categories/2024/12/12/laptop-1-1.png"
                width={60}
                height={60}
                alt="icon Laptop"
              />
            </span>
            <span className="text-sm font-lexend font-bold">Laptop</span>
          </button>
          <button
            onClick={() => setActiveCategory("máy chơi game/ game console")}
            className="hover:underline flex flex-col items-center space-y-2"
          >
            <span
              className={`${
                activeCategory === "máy chơi game/ game console"
                  ? "ring-colorPrimaryDefault ring-2"
                  : "bg-gray-100"
              } transition-all w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center overflow-hidden`}
            >
              <Image
                src="https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/25/danh-muc-icon-may-choi-game-game-console-thinkpro.vn.png"
                width={60}
                height={60}
                alt="icon Laptop"
              />
            </span>
            <span className="text-sm font-lexend font-bold">
              Máy chơi game/ Game Console
            </span>
          </button>
        </div>
        <div className="mt-1 md:mt-3 flex justify-end">
          <div
            className="relative hidden md:block min-w-[160px]"
            onClick={handleToggle}
          >
            <div className="w-full">
              <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
                <span className="block truncate">
                  {sortBy === "featured"
                    ? "Nổi bật nhất"
                    : sortBy === "price-asc"
                    ? "Giá thấp → cao"
                    : "Giá cao → thấp"}
                </span>
                <span className="absolute inset-y-0 end-0 flex items-center px-2.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
            {/* filter Table */}
            {isOpen && (
              <div className="w-full z-20 group m-0" style={filterTableCSS}>
                <div className="">
                  <ul className="relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-colorPray200 rounded-md shadow-lg bg-white p-1 max-h-60">
                    <li
                      className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                      role="option"
                      aria-selected="true"
                      onClick={() => {
                        setSortBy("featured");
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate">Nổi bật nhất</span>
                      </div>
                      {sortBy === "featured" && (
                        <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 flex-shrink-0 text-colorPray900"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m4.5 12.75l6 6l9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </li>
                    <li
                      className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                      role="option"
                      aria-selected="true"
                      onClick={() => {
                        setSortBy("price-asc");
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate">Giá thấp → cao</span>
                      </div>
                      {sortBy === "price-asc" && (
                        <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 flex-shrink-0 text-colorPray900"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m4.5 12.75l6 6l9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </li>
                    <li
                      className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                      role="option"
                      aria-selected="true"
                      onClick={() => {
                        setSortBy("price-desc");
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate">Giá cao → thấp</span>
                      </div>
                      {sortBy === "price-desc" && (
                        <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 flex-shrink-0 text-colorPray900"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m4.5 12.75l6 6l9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-1 md:mt-3">
          <ProductList products={getFilteredProducts()} />
        </div>
      </div>
    </section>
  );
}
