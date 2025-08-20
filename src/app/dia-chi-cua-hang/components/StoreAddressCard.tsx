"use client";

import Image from "next/image";
import Link from "next/link";
import "../storeAddress.css";
import { useEffect, useState } from "react";

type StoreAddressCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  timeRange: string;
};

export default function StoreAddressCard({
  href,
  imageSrc,
  imageAlt,
  title,
  timeRange,
}: StoreAddressCardProps) {
  const [openingTime, setOpeningTime] = useState(false);

  useEffect(() => {
    const realTime = new Date().getHours();
    if (realTime >= 9 && realTime <= 21) {
      setOpeningTime(true);
    }
  }, [openingTime]);

  return (
    <Link
      href={href}
      className="border rounded-2xl shadow-sm p-4 overflow-hidden md:w-[450px]"
    >
      <div className="store-aspect-w-16 store-aspect-h-9 rounded-lg overflow-hidden">
        <div className="transition-transform hover:scale-105">
          <Image
            width={416}
            height={234}
            src={imageSrc}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-4 flex-col space-y-3">
        <h3 className="text-sm font-bold font-lexend">{title}</h3>
        <div className="text-sm flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
            />
          </svg>
          <span>{timeRange}</span>
          <span>·</span>
          <span className="font-semibold">{`${
            openingTime ? "Đang mở" : "Đóng cửa"
          }`}</span>
        </div>
      </div>
      <div className="mt-3">
        <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="w-5 h-5 flex-shrink-0"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
            </g>
          </svg>
          <span>Chỉ đường</span>
        </button>
      </div>
    </Link>
  );
}
