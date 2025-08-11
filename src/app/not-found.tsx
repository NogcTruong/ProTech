"use client";

import Link from "next/link";
import { useEffect } from "react";
import img404 from "@/assets/images/404.jpg";
import Image from "next/image";

export default function NotFound() {
  useEffect(() => {
    const header = document.querySelector(".the-header") as HTMLElement;
    const footer = document.querySelector(".the-footer") as HTMLElement;
    const topBar = document.querySelector(".the-top-bar") as HTMLElement;

    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    if (topBar) topBar.style.display = "none";

    return () => {
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      if (topBar) topBar.style.display = "";
    };
  }, []);

  return (
    <main className="container py-10">
      <div className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[300px] h-[300px]">
            <Image
              src={img404}
              alt="error image 404"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold font-lexend">
            Không thể tải trang này
          </h1>
          <div className="text-sm">
            <span>Một số nguyên nhân phổ biến:</span>
            <ul className="list-disc list-inside">
              <li>
                Các kỹ sư ThinkPro đang thực hiện bảo trì, bạn có thể thử truy
                cập lại sau
              </li>
              <li>
                Thanh URL bị gõ nhầm một ký tự nào đó (bạn thử check lại xem
                nhé)
              </li>
              <li>Trang đã bị gỡ khỏi hệ thống</li>
            </ul>
          </div>
          <div className="">
            <Link
              href="/"
              className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Quay về trang chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
