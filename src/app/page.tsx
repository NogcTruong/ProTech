import "@/app/(home)/home.css";
import Banner from "@/components/home/Banner";
import CardProduct from "@/components/home/CardProduct";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Promotions from "@/components/home/Promotions";
// import FlashSale from "@/components/Home/flashSale";
import Usp from "@/components/home/Usp";
import SuggestionProduct from "@/components/home/SuggestionProduct";
import TechNews from "@/components/home/TechNews";
import TopKeywords from "@/components/home/TopKeywords";

export default function Home() {
  return (
    <main className="home-page bg-[#e0f2fe]">
      <div className="container py-6 flex flex-col">
        <Banner />
        <CardProduct />
        <FeaturedCategories />
        <Promotions />
        {/* <FlashSale /> */}
        <Usp />
        <SuggestionProduct />
        <TechNews />
        <TopKeywords />
      </div>
    </main>
  );
}
