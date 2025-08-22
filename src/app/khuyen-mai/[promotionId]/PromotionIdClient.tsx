"use client";

import ProductList from "@/components/common/ProductList";
import { useState } from "react";
import Image from "next/image";
import coverBanner from "@/assets/images/cover-folder-thinkpro.webp";
import SortDropdown, { SortValue } from "@/components/common/SortDropdown";
import FilterCategory from "./components/FilterCategory";

type PromotionProduct = {
  name: string;
  img: string;
  price: string;
  discount: string;
  color: string[];
  version: string;
};

type PromotionProductsMap = {
  laptop: PromotionProduct[];
  "máy chơi game/ game console": PromotionProduct[];
};

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

export default function PromotionIdClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortValue>("featured");

  const getFilteredProducts = (): PromotionProduct[] => {
    let products: PromotionProduct[] =
      activeCategory === "all"
        ? Object.values(promotionProducts).flat()
        : promotionProducts[activeCategory as keyof PromotionProductsMap] || [];

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
        <FilterCategory
          setActiveCategory={setActiveCategory}
          activeCategory={
            activeCategory as "all" | "laptop" | "máy chơi game/ game console"
          }
        />
        <div className="mt-1 md:mt-3 flex justify-end">
          <div className="hidden md:block">
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>
        <div className="mt-1 md:mt-3">
          <ProductList
            products={getFilteredProducts() as any}
            showCompareButton={false}
          />
        </div>
      </div>
    </section>
  );
}
