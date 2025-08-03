"use client";

import ProductList from "@/components/common/ProductList";
import { useEffect, useState } from "react";

const suggestionProducts = {
  "bàn phím": [
    {
      name: "Bàn phím Cơ Aula F75 LEOBOG Reaper Switch",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/1/20/ban-phim-co-khong-day-aula-f75-thinkpro-nicespace-2K9.jpg",
      price: "969000",
      discount: "-5%",
      color: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFC0CB"],
      version: "LEOBOG Reaper Switch",
    },
    {
      name: "Bàn phím Ricks RS8 Bàn Taichi Switch",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2025/1/17/ban-phim-co-riccks-rs8-thinkpro-zT2.jpg",
      price: "799000",
      discount: "-10%",
      color: ["#FFD700", "#00FF00", "#FFFFFF"],
      version: "Bàn Taichi Switch - 100 Keys",
    },
    {
      name: "Bàn phím Cơ Lofree Flow Flow Lite - 100 Keys",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/3/14/ban-phim-co-lofree-flow-lowprofile-thinkpro-DeD.jpg",
      price: "3290000",
      discount: "-20%",
      color: ["#FFFFFF", "#000000", "#C0C0C0"],
      version: "Flow Lite - 100 Keys",
    },
    {
      name: "Bàn phím Cơ Lofree Flow Lite - 100 Keys",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/12/ban-phim-co-lofree-flow-lite-undefined-Np7.jpg",
      price: "2290000",
      discount: "-25%",
      color: ["#D3D3D3", "#FFFFFF", "#000000"],
      version: "Flow Lite - 100 Keys",
    },
    {
      name: "Bàn phím Lofree Flow 2 68 Keys",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/6/24/ban-phim-co-lofree-flow-v2-rei.jpg",
      price: "3590000",
      discount: "0%",
      color: ["#D8BFD8", "#C0C0C0"],
      version: "Flow 2 - 68 Keys",
    },
    {
      name: "Bàn phím Cơ Lofree Flow 2 100 Keys",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/4/ban-phim-co-nuphy-kick75-high-profile-zqk.jpg",
      price: "3590000",
      discount: "0%",
      color: ["#FFFFFF"],
      version: "Flow 2 - 100 Keys",
    },
    {
      name: "Bàn phím Cơ Lofree Flow Lite Flow - 84 Keys",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/12/ban-phim-co-aula-f108-pro-wa3.jpg",
      price: "2090000",
      discount: "-15%",
      color: ["#FFFFFF", "#C0C0C0", "#D3D3D3"],
      version: "Flow Lite - 84 Keys",
    },
    {
      name: "Bàn phím Cơ Aula F75 Max - LEOBOG Reaper Switch",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/12/ban-phim-co-lofree-flow-lite-undefined-Np7.jpg",
      price: "1090000",
      discount: "-10%",
      color: ["#FFFFFF", "#000000", "#808080", "#FFA500", "#00FF00"],
      version: "Max - LEOBOG Reaper Switch",
    },
    {
      name: "Bàn phím Cơ Aula F10B Pro Aula Zephyr Switch",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/6/24/ban-phim-co-lofree-flow-2-bdc.jpg",
      price: "1490000",
      discount: "-20%",
      color: ["#FFD700", "#00CED1", "#FF4500"],
      version: "Aula Zephyr Switch",
    },
  ],
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
  "ghế công thái học": [
    {
      name: "Lenovo Yoga Book 9 13IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/22/ghe-cong-thai-hoc-gami-crom-thinkpro-goodspace-mNF.jpg",
      price: "62000000",
      discount: "-10%",
      color: ["#808080"],
      version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    },
    {
      name: "Asus Vivobook S 15 S5507OA",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/5/6/ghe-cong-thai-hoc-manson-atum-thinkpro-goodspace-ua0.jpg",
      price: "35000000",
      discount: "-15%",
      color: ["#C0C0C0"],
      version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    },
    {
      name: "Lenovo Legion Pro 5 16IRX9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/5/6/ghe-van-phong-xiaomi-regal-thinkpro-goodspace-5nF.jpg",
      price: "55000000",
      discount: "-12%",
      color: ["#000000"],
      version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/9/20/ghe-cong-thai-hoc-manson-vera-thinkpro-nicespace.png",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/merryfair-work-7223-thumb.png",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
    {
      name: "Lenovo Yoga Book 9 13IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/6/8/ghe-cong-thai-hoc-manson-e3-lite-ytb.jpg",
      price: "62000000",
      discount: "-10%",
      color: ["#808080"],
      version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    },
    {
      name: "Asus Vivobook S 15 S5507OA",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/10/27/thumb/merryfair-reya-6144-thumb.png",
      price: "35000000",
      discount: "-15%",
      color: ["#C0C0C0"],
      version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    },
    {
      name: "Lenovo Legion Pro 5 16IRX9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/12/6/ghe-cong-thai-hoc-manson-iris-thinkpro-nicespace-k1n.jpg",
      price: "55000000",
      discount: "-12%",
      color: ["#000000"],
      version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/13/ghe-cong-thai-hoc-sihoo-xiaoqi-x5-ergonomic-gaming-chair-thinkpro-goodspace-U4q.jpg",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/13/ghe-cong-thai-hoc-sihoo-xiaoqi-x5-ergonomic-gaming-chair-thinkpro-goodspace-U4q.jpg",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
    {
      name: "Lenovo Yoga 9 2-in-1 14IMH9",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/13/ghe-cong-thai-hoc-sihoo-xiaoqi-x5-ergonomic-gaming-chair-thinkpro-goodspace-U4q.jpg",
      price: "45000000",
      discount: "-8%",
      color: ["#00CED1"],
      version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    },
    {
      name: "Lenovo ThinkPad T14 Gen 5",
      img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/7/13/ghe-cong-thai-hoc-sihoo-xiaoqi-x5-ergonomic-gaming-chair-thinkpro-goodspace-U4q.jpg",
      price: "30000000",
      discount: "-5%",
      color: ["#000000"],
      version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    },
  ],
  "bàn nâng hạ": [
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
};

const tabHighlightStyle = {
  laptop: { top: 4, left: 4, width: 70, height: 36 },
  "bàn phím": { top: 4, left: 74, width: 86, height: 36 },
  "ghế công thái học": { top: 4, left: 160, width: 143, height: 36 },
  "bàn nâng hạ": { top: 4, left: 303, width: 106, height: 36 },
};

export default function SuggestionProduct() {
  const [activeTab, setActiveTab] = useState("laptop");
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 10, suggestionProducts[activeTab].length)
    );
  };
  const dataSuggestionProducts = suggestionProducts[activeTab].slice(
    0,
    visibleCount
  );
  const [hasMore, setHasMore] = useState(
    visibleCount < suggestionProducts[activeTab].length
  );

  useEffect(() => {
    setHasMore(visibleCount < suggestionProducts[activeTab].length);
  }, [activeTab, visibleCount]);

  return (
    <section className="section-suggestion-product mt-10 md:mt-20">
      <div className="title flex md:justify-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-lexend font-bold">
          Gợi ý cho bạn
        </h2>
      </div>
      <div className="mt-4 md:mt-10 flex md:justify-center">
        <div className="flex overflow-hidden">
          <div className="overflow-auto scrollbar-hide">
            <div className="relative space-y-2">
              <div
                className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                }}
              >
                <div
                  className="absolute top-[4px] h-[36px] left-[4px] duration-200 ease-out focus:outline-none"
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
                  onClick={() => {
                    setActiveTab("laptop");
                    setVisibleCount(10);
                  }}
                >
                  <span className="truncate">Laptop</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => {
                    setActiveTab("bàn phím");
                    setVisibleCount(10);
                  }}
                >
                  <span className="truncate">Bàn phím</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => {
                    setActiveTab("ghế công thái học");
                    setVisibleCount(10);
                  }}
                >
                  <span className="truncate">Ghế công thái học</span>
                </button>
                <button
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => {
                    setActiveTab("bàn nâng hạ");
                    setVisibleCount(10);
                  }}
                >
                  <span className="truncate">Bàn nâng hạ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-10">
        <ProductList
          products={dataSuggestionProducts || []}
          title="Sản phẩm gợi ý"
        />
        {hasMore && (
          <div className="mt-10 flex justify-center">
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
    </section>
  );
}
