import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TabFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabHighlightStyle = {
  "tất cả": { top: 4, left: 4, width: 63, height: 36 },
  "thủ thuật": { top: 4, left: 67, width: 88, height: 36 },
  "tin tức": { top: 4, left: 156, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 226, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 308, width: 69, height: 36 },
};

const tabs = [
  { key: "tất cả", label: "Tất cả" },
  { key: "thủ thuật", label: "Thủ thuật" },
  { key: "tin tức", label: "Tin tức" },
  { key: "đánh giá", label: "Đánh giá" },
  { key: "tư vấn", label: "Tư vấn" },
];

export default function TabFilter({ activeTab, onTabChange }: TabFilterProps) {
  return (
    <>
      <div className="flex flex-col space-y-2 space-x-0 md:block md:space-y-0 md:space-x-2">
        <h2 className="text-2xl font-lexend font-bold">Bài viết bởi tác giả</h2>
        <span className="text-sm font-medium text-gray-600">122 bài</span>
      </div>
      <div className="flex overflow-hidden">
        <div className="overflow-auto scrollbar-hide">
          <div className="relative space-y-2">
            <div className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center">
              <div
                className="absolute top-1 left-[4px] duration-200 ease-out focus:outline-none"
                style={{
                  ...tabHighlightStyle[
                    activeTab as keyof typeof tabHighlightStyle
                  ],
                }}
              >
                <div className="w-full h-full bg-colorPrimaryDefault rounded-full shadow-sm"></div>
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                  role="tab"
                  type="button"
                  onClick={() => onTabChange(tab.key)}
                >
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
