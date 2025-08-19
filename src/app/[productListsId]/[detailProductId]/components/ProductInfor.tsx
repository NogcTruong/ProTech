"use client";

import SelectVersionModal from "@/app/[productListsId]/[detailProductId]/components/modals/SelectVersionModal";
import { Dispatch, SetStateAction } from "react";

interface ProductInforProps {
  onSelectVersion: boolean;
  setOnSelectVersion: Dispatch<SetStateAction<boolean>>;
  onIsSelectVersion: () => void;
  responsiveWidth: boolean;
}

export default function ProductInfor({
  onSelectVersion,
  setOnSelectVersion,
  onIsSelectVersion,
  responsiveWidth,
}: ProductInforProps) {
  return responsiveWidth ? (
    <div className="flex flex-col">
      <div className="flex items-center space-x-1 justify-between">
        <span className="font-lexend font-bold">Chọn phiên bản</span>
        <span className="text-sm text-gray-600">Còn 5 phiên bản</span>
      </div>
      <div className="mt-3">
        <button
          className="rounded-2xl border border-gray-300 bg-white px-3 py-2 flex items-center space-x-2"
          onClick={onIsSelectVersion}
        >
          <span className="flex-1 text-sm font-semibold text-left">
            Red Nano Switch / Nova White / Mới, Full box, Chính hãng
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="w-5 h-5"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <SelectVersionModal
        open={onSelectVersion}
        onClose={() => setOnSelectVersion(false)}
        title="Chọn phiên bản"
      />
    </div>
  ) : (
    <section className="scroll-mt-20">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div className="flex flex-col space-y-2">
          <div>
            <div
              className="rounded-l-[20px] md:rounded-l-3xl rounded-r-lg p-[6px] md:p-2 inline-flex items-center space-x-1"
              style={{
                background:
                  "linear-gradient(90deg, rgb(192, 247, 141) 0%, rgb(231, 255, 209) 100%)",
              }}
            >
              <svg
                className="w-7 h-72 md:w-8 md:h-8"
                fill="none"
                height="18"
                viewBox="0 0 18 18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00007 1.71533C7.55909 1.71533 6.15048 2.14263 4.95235 2.9432C3.75422 3.74376 2.82039 4.88163 2.26895 6.21292C1.71751 7.54421 1.57323 9.00913 1.85435 10.4224C2.13547 11.8357 2.82937 13.1339 3.84829 14.1528C4.86722 15.1717 6.16541 15.8656 7.5787 16.1468C8.99199 16.4279 10.4569 16.2836 11.7882 15.7322C13.1195 15.1807 14.2574 14.2469 15.0579 13.0488C15.8585 11.8506 16.2858 10.442 16.2858 9.00104C16.2858 7.06875 15.5182 5.2156 14.1518 3.84927C12.7855 2.48293 10.9324 1.71533 9.00007 1.71533Z"
                  fill="#4ACD00"
                ></path>
                <path
                  d="M16.6542 5.42682L9.75026 12.3319C9.58559 12.4966 9.38771 12.628 9.16848 12.7181C8.94926 12.8083 8.71319 12.8553 8.47441 12.8565H8.46672C8.22934 12.8565 7.99437 12.8111 7.77573 12.723C7.55708 12.6349 7.35922 12.5059 7.19384 12.3437L4.84332 10.0523C4.66888 9.89577 4.52954 9.70715 4.4337 9.49786C4.33786 9.28858 4.28751 9.06296 4.2857 8.83463C4.28388 8.6063 4.33062 8.37999 4.42312 8.16934C4.51561 7.95869 4.65194 7.76808 4.82386 7.609C4.99579 7.44992 5.19976 7.32567 5.42347 7.24375C5.64717 7.16182 5.88598 7.12393 6.12548 7.13234C6.36498 7.14075 6.60021 7.19529 6.81698 7.29269C7.03375 7.39008 7.22757 7.5283 7.38673 7.69901L8.45194 8.72915L14.0818 3.09658C14.2424 2.93566 14.4347 2.80645 14.6477 2.71633C14.8607 2.6262 15.0903 2.57694 15.3233 2.57134C15.5563 2.56574 15.7881 2.60392 16.0056 2.68369C16.2231 2.76347 16.422 2.88328 16.5909 3.03628C16.7598 3.18929 16.8955 3.37249 16.99 3.57543C17.0846 3.77838 17.1363 3.99708 17.1422 4.21906C17.1481 4.44104 17.108 4.66195 17.0243 4.86918C16.9406 5.07641 16.8148 5.26589 16.6542 5.42682Z"
                  fill="url(#paint0_linear_10882_67852)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_10882_67852"
                    gradientUnits="userSpaceOnUse"
                    x1="12.8183"
                    x2="10.8208"
                    y1="9.40991"
                    y2="7.20906"
                  >
                    <stop stopColor="#7ED44F"></stop>
                    <stop offset="1" stopColor="white"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col">
                <span className="font-lexend text-sm font-bold">
                  HÀNG CHÍNH HÃNG
                </span>
                <span className="font-lexend text-[8px] md:text-[10px] font-bold">
                  Giá luôn tốt nhất thị trường
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold">
            Ghế Công Thái Học Herman Miller Aeron (Size B - Chân nhựa - Graphite
            - Mới, Full box, Nhập khẩu)
          </h1>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">SKU:</span>
            <span className="text-sm text-gray-600">HMAeron01NF</span>
            <button className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-colorPrimary600"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9 9 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9 9 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-sm">5.0</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="ml-1"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
            <a href="#" className="ml-3 text-sm underline">
              3 đánh giá
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            <span className="text-sm font-lexend font-bold">Phiên bản</span>
            <div
              className="t-flex-gap mt-2"
              style={
                {
                  "--gap-x": "8px",
                  "--gap-y": "8px",
                } as React.CSSProperties
              }
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    Size B - Chân nhựa
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Size B - Chân Nhôm
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Size B - Chân Hợp Kim
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-lexend font-bold">Màu</span>
            <div
              className="t-flex-gap mt-2"
              style={
                {
                  "--gap-x": "8px",
                  "--gap-y": "8px",
                } as React.CSSProperties
              }
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    White Mineral
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Grey carbon
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Graphite
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-lexend font-bold">Loại hàng</span>
            <div
              className="t-flex-gap mt-2"
              style={
                {
                  "--gap-x": "8px",
                  "--gap-y": "8px",
                } as React.CSSProperties
              }
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    Mới, Full box, Nhập khẩu
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
