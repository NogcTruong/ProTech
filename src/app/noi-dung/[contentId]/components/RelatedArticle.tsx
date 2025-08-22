"use client";

import Image from "next/image";
import Link from "next/link";
import { dataRelatedArticle } from "../data";
import { useState } from "react";

export default function RelatedArticle() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, dataRelatedArticle.length));
  };
  const dataShowRelatedArticle = dataRelatedArticle.slice(0, visibleCount);
  const hasMore = visibleCount < dataRelatedArticle.length;

  return (
    <>
      <div className="flex items-center space-x-2">
        <div
          className="w-2 h-5 md:w-3 md:h-7 bg-blue-600"
          style={{
            clipPath: "polygon(50% 0px, 100% 0px, 50% 100%, 0% 100%)",
          }}
        ></div>
        <span className="text-xl md:text-3xl font-bold">
          Bài viết liên quan
        </span>
      </div>
      <div className="flex flex-col space-y-6">
        {dataShowRelatedArticle.map((pro, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex flex-col space-y-2 mt-5 py-0 md:pb-6 md:flex-row md:mt-6 md:space-y-0 md:space-x-6 md:border-b"
          >
            <div className="w-full md:w-[208px]">
              <div className="relative content-aspect-w-16 content-aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  fill
                  alt={pro.name}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  src={pro.image}
                  className="object-cover object-center lazyloaded"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2">
              <span className="text-base md:text-xl font-bold font-lexend">
                {pro.name}
              </span>
              <span className="text-sm md:text-base line-clamp-3">
                {pro.description}
              </span>
              <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
                <span className="font-semibold text-[#00C25C]">
                  {pro.author}
                </span>
                <span>/</span>
                <span>{pro.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="mt-6 flex justify-center">
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
    </>
  );
}
