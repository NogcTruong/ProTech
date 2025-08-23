"use client";

import Image from "next/image";
import "./compareProductsId.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddComparativeProducts from "@/components/product/AddComparativeProducts";
import ProductHeader from "./components/ProductHeader";
import ProductCard from "./components/ProductCard";
import AddProductCard from "./components/AddProductCard";

export default function CompareProductsIdClient() {
  const [isDropInfo, setIsDropInfo] = useState(true);
  const [isDropCha, setIsDropCha] = useState(true);
  const [isDropMass, setIsDropMass] = useState(true);
  const [isDropBattery, setIsDropBattery] = useState(true);
  const [isDropSize, setIsDropSize] = useState(true);
  const [isOpenAddCompareProducts, setIsOpenAddCompareProducts] =
    useState(false);
  const [fixedProducts, setFixedProducts] = useState(false);

  useEffect(() => {
    const scrollElements = document.querySelectorAll(
      ".t-scroll-sync--horizontal"
    );

    const syncScroll = (element: Event) => {
      const target = element.target as HTMLElement;
      const scrollLeft = target.scrollLeft;

      scrollElements.forEach((element) => {
        if (element != target) {
          element.scrollLeft = scrollLeft;
        }
      });
    };

    scrollElements.forEach((element) => {
      element.addEventListener("scroll", syncScroll);
    });

    return () => {
      scrollElements.forEach((element) => {
        element.removeEventListener("scroll", syncScroll);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshld = 613;

      if (scrollTop > threshld) {
        setFixedProducts(true);
      } else {
        setFixedProducts(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropCha = () => {
    setIsDropCha(!isDropCha);
  };

  const handleDropInfo = () => {
    setIsDropInfo(!isDropInfo);
  };

  const handleDropMass = () => {
    setIsDropMass(!isDropMass);
  };

  const handleDropBattery = () => {
    setIsDropBattery(!isDropBattery);
  };

  const handleDropSize = () => {
    setIsDropSize(!isDropSize);
  };

  return (
    <>
      <main className="compare-page">
        <div className="md:container md:py-10">
          <div className="md:rounded-2xl overflow-hidden border-b md:border mb-10">
            <div className="h-[530px] md:h-[520px]">
              <div
                className={` ${
                  fixedProducts
                    ? "transition-all fixed top-[var(--the-header-height)] left-0 right-0 md:container z-[11] shadow-md"
                    : ""
                } flex flex-col md:flex-row bg-white`}
              >
                <ProductHeader fixedProducts={fixedProducts} />

                <div className="t-scroll-sync--horizontal t-scroll-sync flex">
                  <ProductCard fixedProducts={fixedProducts} />
                  <ProductCard fixedProducts={fixedProducts} />
                  <AddProductCard fixedProducts={fixedProducts} />
                  <AddProductCard fixedProducts={fixedProducts} />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="flex w-full flex-col">
                <div className="w-full flex flex-col transform transition-transform duration-200">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-base gap-x-2.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 inline-flex items-center mb-0 rounded-none border-y text-gray-900"
                    onClick={handleDropInfo}
                  >
                    <span className="text-left break-all line-clamp-1">
                      Thông tin hàng hóa
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`${
                        isDropInfo && "-rotate-180"
                      } h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0`}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    style={{
                      height: isDropInfo ? "auto" : "0",
                      display: isDropInfo ? "" : "none",
                    }}
                  >
                    <div className="text-sm text-gray-500 pt-0 pb-0">
                      <div className="flex flex-col divide-y text-gray-900">
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Loại switch
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Light Feather Silent Switch
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Keychron Super Red - Hỗ trợ hotswap
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-base gap-x-2.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 inline-flex items-center mb-0 rounded-none border-y text-gray-900"
                    onClick={handleDropCha}
                  >
                    <span className="text-left break-all line-clamp-1">
                      Đặc điểm
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`${
                        isDropCha && "-rotate-180"
                      } h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0`}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className=""
                    style={{
                      height: isDropCha ? "auto" : "0",
                      display: isDropCha ? "" : "none",
                    }}
                  >
                    <div className="text-sm text-gray-500 pt-0 pb-0">
                      <div className="flex flex-col divide-y text-gray-900">
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Kết nối qua
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Bluetooth/Wireless/USB Type C
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Bluetooth/Wireless/USB Type C
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Loại kết nối
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Không dây/Có dây, Bluetooth/Wireless/USB Type C
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                Không dây/Có dây, Bluetooth/Wireless/USB Type C
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Chất liệu khung
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">ABS Plastic</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">ABS</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Số nút bấm
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">68Nút</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">108Nút</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Số nút bấm
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">68Nút</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">108Nút</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Loại bàn phím
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">Phím Cơ</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">Phím Cơ</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-base gap-x-2.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 inline-flex items-center mb-0 rounded-none border-y text-gray-900"
                    onClick={handleDropMass}
                  >
                    <span className="text-left break-all line-clamp-1">
                      Khối lượng
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`${
                        isDropMass && "-rotate-180"
                      } h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0`}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className=""
                    style={{
                      height: isDropMass ? "auto" : "0",
                      display: isDropMass ? "" : "none",
                    }}
                  >
                    <div className="text-sm text-gray-500 pt-0 pb-0">
                      <div className="flex flex-col divide-y text-gray-900">
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Khối lượng
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">1kg</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-base gap-x-2.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 inline-flex items-center mb-0 rounded-none border-y text-gray-900"
                    onClick={handleDropBattery}
                  >
                    <span className="text-left break-all line-clamp-1">
                      Pin
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`${
                        isDropBattery && "-rotate-180"
                      } h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0`}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className=""
                    style={{
                      height: isDropBattery ? "auto" : "0",
                      display: isDropBattery ? "" : "none",
                    }}
                  >
                    <div className="text-sm text-gray-500 pt-0 pb-0">
                      <div className="flex flex-col divide-y text-gray-900">
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Thời lượng pin
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">
                                8000mAh (4000mAh x2)
                              </span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">4000mAh</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-base gap-x-2.5 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 inline-flex items-center mb-0 rounded-none border-y text-gray-900"
                    onClick={handleDropSize}
                  >
                    <span className="text-left break-all line-clamp-1">
                      Kích thước
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`${
                        isDropSize && "-rotate-180"
                      } h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0`}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className=""
                    style={{
                      height: isDropSize ? "auto" : "0",
                      display: isDropSize ? "" : "none",
                    }}
                  >
                    <div className="text-sm text-gray-500 pt-0 pb-0">
                      <div className="flex flex-col divide-y text-gray-900">
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Chiều dài
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">32cm</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">44.7cm</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
                          <div className="px-3 py-2 md:min-w-[260px] flex-1">
                            <span className="font-semibold text-sm">
                              Chiều rộng
                            </span>
                          </div>
                          <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">12,7cm</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm">14cm</span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                            <div className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AddComparativeProducts
        open={isOpenAddCompareProducts}
        onClose={() => setIsOpenAddCompareProducts(false)}
        title="Thêm sản phẩm so sánh"
      />
    </>
  );
}
