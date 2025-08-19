"use client";

import React from "react";

interface TabBarProps {
  activeTab: "info" | "config" | "review" | "post";
  onTabClick: (idx: number) => void;
  showHeaderOffset: boolean;
  responsiveWidth: boolean;
}

export default function TabBar({
  activeTab,
  onTabClick,
  showHeaderOffset,
  responsiveWidth,
}: TabBarProps) {
  return (
    <section
      className={`tabbar-animate ${showHeaderOffset ? "show" : "hide"} ${
        responsiveWidth
          ? "top-[var(--the-header-offset-mobile)]"
          : "top-[var(--the-header-offset)]"
      } bg-white sticky top-0 inset-x-0 overflow-hidden z-[11] pt-1`}
    >
      <div className="container overflow-x-auto scrollbar-hide">
        <div className="relative space-y-2">
          <div
            className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto h-11 inline-grid items-center mb-2"
            style={
              {
                gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
              } as React.CSSProperties
            }
          >
            <div
              className="absolute top-[4px] left-0 duration-200 ease-out focus:outline-none"
              style={{
                width: "90px",
                height: "36px",
                transform: `translateX(${
                  4 +
                  90 * ["info", "config", "review", "post"].indexOf(activeTab)
                }px)`,
              }}
            >
              <div className="w-full h-full bg-colorPrimary400 rounded-full shadow-sm"></div>
            </div>
            <button
              role="tab"
              className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
              onClick={() => onTabClick(0)}
            >
              <span className="truncate">Thông tin</span>
            </button>
            <button
              role="tab"
              className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
              onClick={() => onTabClick(1)}
            >
              <span className="truncate">Cấu hình</span>
            </button>
            <button
              role="tab"
              className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
              onClick={() => onTabClick(2)}
            >
              <span className="truncate">Đánh giá</span>
            </button>
            <button
              role="tab"
              className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
              onClick={() => onTabClick(3)}
            >
              <span className="truncate">Bài viết</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
