"use client";

import Image from "next/image";
import BaseModal from "../common/baseModal";
import Link from "next/link";
import { useState } from "react";

type AddComparativeProductsProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const Products = {
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

export default function AddComparativeProducts({
  open,
  onClose,
  title,
}: AddComparativeProductsProps) {
  const [activeCategory, setActiveCategory] = useState("bàn phím");

  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="flex w-full overflow-auto p-4 md:p-6 !w-[600px]">
        <div className="grid grid-cols-2 gap-4">
          {Products[activeCategory].map((product, proIndex) => (
            <Link
              key={proIndex}
              href="#!"
              className="t-product-card group relative border rounded-2xl transition-all bg-white"
            >
              <div className="h-full flex flex-col space-y-2 md:space-y-3">
                <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-white">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={165}
                      height={165}
                      className="h-full w-full object-contain lazyloaded"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col px-2 pb-3">
                  <span className="line-clamp-3 text-start font-medium text-sm md:text-body group-hover:underline">
                    {product.name}
                  </span>
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="font-medium text-rose-600">
                      {product.price}
                    </span>
                    <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                      {product.discount}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-1.5">
                    <span className="text-sm">Màu</span>
                    {product.color?.map((col, colIndex) => (
                      <span
                        key={colIndex}
                        aria-label="Black"
                        className="w-[14px] h-[14px] rounded-full ring-1"
                        style={{ background: col }}
                      ></span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-colorPray600">
                      Light Feather Silent Switch
                    </span>
                  </div>
                </div>
                <div className="mt-3 p-2 border-t">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 h-4 w-4"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    <span>So sánh</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BaseModal>
  );
}
