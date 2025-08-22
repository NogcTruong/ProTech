import "@/app/(home)/home.css";
import Banner from "@/app/(home)/components/Banner";
import CardProduct from "@/app/(home)/components/CardProduct";
import FeaturedCategories from "@/app/(home)/components/FeaturedCategories";
import Promotions from "@/app/(home)/components/Promotions";
import FlashSale from "@/app/(home)/components/FlashSale";
import Usp from "@/app/(home)/components/Usp";
import SuggestionProduct from "@/app/(home)/components/SuggestionProduct";
import TechNews from "@/app/(home)/components/TechNews";
import TopKeywords from "@/app/(home)/components/TopKeywords";
import Preorder from "@/app/(home)/components/Preorder";
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
