"use client";

import Link from "next/link";
import StoreMap from "@/app/dia-chi-cua-hang/[storeAddressId]/components/modals/StoreMap";
import "../storeAddress.css";
import DetailedAddInfo from "./components/DetailedAddInfo";

export default function StoreAddressIdClient() {
  return (
    <div className="container py-5 md:py-10">
      <div>
        <Link
          href="/dia-chi-cua-hang"
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="flex-shrink-0 h-5 w-5"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10"
              clipRule="evenodd"
            />
          </svg>
          <span>Tất cả cửa hàng</span>
        </Link>
      </div>
      <div className="mt-5 flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-12 md:h-12"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
          />
        </svg>
        <h1 className="flex-1 text-xl md:text-4xl font-bold font-lexend">
          Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
        </h1>
      </div>
      <div className="mt-5 flex max-md:flex-col">
        <DetailedAddInfo />
        <div className="max-md:mt-5 md:ml-10 flex-1">
          <div className="store-aspect-w-4 store-aspect-h-3 rounded-2xl overflow-hidden">
            <StoreMap
              storeName="ProTech"
              address="Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
              latitude={10.8231}
              longitude={106.6297}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
