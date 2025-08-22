"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StickyHeader() {
  const [showOffset, setShowOffset] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.scrollY >= 48 && currentScrollY < lastScrollY.current) {
        setShowOffset(true);
      } else {
        setShowOffset(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        showOffset
          ? "border-gray-200 border-b top-[var(--the-header-height)]"
          : "top-0"
      } bg-white h-12 py-2 sticky z-[11] transition-[top] duration-300`}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="container flex items-center justify-between space-x-4">
          <Link
            href="/tin-tuc"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10"
                clipRule="evenodd"
              />
            </svg>
            <span className="">Tin tức</span>
          </Link>
          <span
            className={`${
              showOffset ? "block" : "hidden"
            } text-sm font-bold font-lexend line-clamp-1`}
          >
            Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết
          </span>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
