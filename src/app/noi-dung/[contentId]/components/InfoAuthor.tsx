"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InfoAuthor() {
  const [stickyInfoAuthor, setStickyInfoAuthor] = useState(false);

  useEffect(() => {
    const handleInfoAuthor = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - 1413;
      if (window.scrollY >= 420 && window.scrollY < distanceFromBottom) {
        setStickyInfoAuthor(true);
      } else {
        setStickyInfoAuthor(false);
      }
    };

    window.addEventListener("scroll", handleInfoAuthor);
    return () => {
      window.removeEventListener("scroll", handleInfoAuthor);
    };
  }, []);

  return (
    <>
      {stickyInfoAuthor && (
        <div className="opacity-100 group author-sticky cursor-pointer">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-10 h-10 border border-gray-50 rounded-full overflow-hidden">
              <Image
                width={80}
                height={80}
                alt="Phạm Quốc Toàn"
                src="https://i.pinimg.com/736x/7c/e1/15/7ce115ed51c87099717528f35d819f21.jpg"
                className="w-full h-full object-cover lazyloaded"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 group-hover:opacity-0"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.25 4.5l7.5 7.5l-7.5 7.5"
              />
            </svg>
          </div>
          <div className="group-hover:flex flex-col space-y-2 hidden">
            <div>
              <div className="text-gray-600 text-xs font-semibold">
                Bài viết bởi
              </div>
              <div className="text-sm font-bold font-lexend">
                Phạm Quốc Toàn
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"
                  />
                </svg>
                <span className="text-sm">Chuyên gia công nghệ</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.042A8.97 8.97 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A9 9 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.97 8.97 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A9 9 0 0 0 18 18a8.97 8.97 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span className="text-sm">122 bài viết</span>
              </div>
            </div>
            <Link
              href="/tac-gia/pham-quoc-toan"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
            >
              <span>Xem thông tin tác giả</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="w-5 h-5 flex-shrink-0"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8L6.22 5.28a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
