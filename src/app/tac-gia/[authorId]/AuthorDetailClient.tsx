"use client";

import "./authorDetail.css";
import { useState } from "react";
import { authorData, dataPostAuthor } from "./data";
import BackButton from "./components/BackButton";
import AuthorProfile from "./components/AuthorProfile";
import TabFilter from "./components/TabFilter";
import ArticleList from "./components/ArticleList";
import LoadMoreButton from "@/components/common/LoadMoreButton";

export default function AuthorDetailClient() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeTab, setActiveTab] = useState("tất cả");

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, dataPostAuthor.length));
  };

  const hasMore = visibleCount < dataPostAuthor.length;

  return (
    <div className="author-detail-page container">
      <div className="max-w-[800px] py-6 mx-auto">
        <div className="flex flex-col py-0 md:py-6 space-y-5 md:space-y-10">
          <BackButton />
          <AuthorProfile
            name={authorData.name}
            avatar={authorData.avatar}
            posts={authorData.posts}
            description={authorData.description}
          />
          <div>
            <div className="flex flex-col space-y-4">
              <TabFilter activeTab={activeTab} onTabChange={setActiveTab} />
              <ArticleList visibleCount={visibleCount} />
              <LoadMoreButton hasMore={hasMore} onLoadMore={handleShowMore} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
