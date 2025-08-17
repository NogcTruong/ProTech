import "@/app/(home)/home.css";
import Banner from "@/components/home/Banner";
import CardProduct from "@/components/home/CardProduct";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Promotions from "@/components/home/Promotions";
import FlashSale from "@/components/home/FlashSale";
import Usp from "@/components/home/Usp";
import SuggestionProduct from "@/components/home/SuggestionProduct";
import TechNews from "@/components/home/TechNews";
import TopKeywords from "@/components/home/TopKeywords";
import Preorder from "@/components/home/Preorder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "TechPro - Cửa hàng công nghệ hàng đầu Việt Nam chuyên cung cấp Laptop, Bàn phím cơ, Ghế công thái học, Máy chơi game PS5, Nintendo. Giá tốt nhất, bảo hành chính hãng, giao hàng miễn phí toàn quốc.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="home-page bg-[#e0f2fe]">
      <div className="container py-6 flex flex-col">
        <Banner />
        <CardProduct />
        <FeaturedCategories />
        <FlashSale />
        <Promotions />
        <Preorder />
        <Usp />
        <SuggestionProduct />
        <TechNews />
        <TopKeywords />
      </div>
    </main>
  );
}
