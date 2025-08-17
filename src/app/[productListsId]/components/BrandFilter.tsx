"use client";

import { useEffect, useRef, useState } from "react";
import { brands } from "../data";

export default function BrandFilter() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      el.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/scrollable">
      <div className="flex items-center">
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex space-x-2 md:space-x-4">
            {brands.map((brand, index) => (
              <a
                key={index}
                href="#"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center min-w-[70px] justify-center"
              >
                <span>{brand.brand}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block group-hover/scrollable:opacity-100 opacity-100 md:opacity-0 transition-opacity duration-200">
        {showLeft && (
          <button
            onClick={() => scrollBy(-50)}
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center rtl:[&_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
            style={{ zIndex: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="h-5 w-5 flex-shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {showRight && (
          <button
            onClick={() => scrollBy(50)}
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center rtl:[&_span:last-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full"
            style={{ zIndex: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="h-5 w-5 flex-shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
