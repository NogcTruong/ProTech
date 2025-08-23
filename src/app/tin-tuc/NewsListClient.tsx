"use client";

import Image from "next/image";
import Link from "next/link";
import "./newslist.css";
import { useState } from "react";
import { data, dataNews, recommendedProducts } from "./data";
import FilterCategory from "@/components/common/FilterCategory";
import NewsHeader from "./components/NewsHeader";
import FeaturedNews from "./components/FeaturedNews";
import NewsList from "./components/NewsList";
import RecommendedProducts from "./components/RecommendedProducts";

type TabKey = "tất cả" | "tin tức" | "đánh giá" | "tư vấn" | "thủ thuật";

const tabs = [
  { key: "tất cả", label: "Tất cả" },
  { key: "tin tức", label: "Tin tức" },
  { key: "đánh giá", label: "Đánh giá" },
  { key: "tư vấn", label: "Tư vấn" },
  { key: "thủ thuật", label: "Thủ thuật" },
];

const tabHighlightStyle = {
  "tất cả": { top: 4, left: 4, width: 63, height: 36 },
  "tin tức": { top: 4, left: 67, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 137, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 220, width: 69, height: 36 },
  "thủ thuật": { top: 4, left: 289, width: 88, height: 36 },
};

export default function NewsListClient() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [activeTab, setActiveTab] = useState<TabKey>("tất cả");

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, data.length));
  };
  const visibleData = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;
  const currentNewsData = dataNews[activeTab];

  return (
    <main className="container py-5 md:py-6">
      <FilterCategory
        activeTab={activeTab}
        onTabChange={(tab: string) => setActiveTab(tab as TabKey)}
        tabs={tabs}
        tabHighlightStyle={tabHighlightStyle}
      />
      <NewsHeader title={currentNewsData?.title || ""} />
      <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-20 md:gap-y-10">
        <FeaturedNews
          mainNews={currentNewsData?.main || []}
          subNews={currentNewsData?.newsSub || []}
        />
        <NewsList
          news={visibleData}
          hasMore={hasMore}
          onLoadMore={handleShowMore}
        />
        <RecommendedProducts products={recommendedProducts} />
      </div>
    </main>
  );
}
