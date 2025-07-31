import "@/app/(home)/home.css";
import Banner from "@/components/home/banner";
import ViewedProduct from "@/components/home/viewedProduct";
import FeaturedCategories from "@/components/home/featuredCategories";
import Promotions from "@/components/home/promotions";
// import FlashSale from "@/components/Home/flashSale";
import Usp from "@/components/home/usp";
import SuggestionProduct from "@/components/home/suggestionProduct";
import TechNews from "@/components/home/techNews";
import TopKeywords from "@/components/home/topKeywords";

export default function Home() {
  return (
    <main className="home-page bg-[#e0f2fe]">
      <div className="container py-6 flex flex-col">
        <Banner />
        <ViewedProduct />
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
