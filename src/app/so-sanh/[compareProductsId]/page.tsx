"use client";

import Image from "next/image";
import "./compareProductsId.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddComparativeProducts from "@/components/product/AddComparativeProducts";

export default function CompareProducts() {
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
                <div
                  className={`${
                    fixedProducts ? "px-3 pt-1" : "p-4"
                  } md:min-w-[260px] flex-1`}
                >
                  <div
                    className={`${
                      fixedProducts ? "hidden" : ""
                    } flex items-baseline space-x-2`}
                  >
                    <span className="text-2xl font-bold font-lexend">
                      So sánh
                    </span>
                    <span className="text-sm text-gray-600">2 sản phẩm</span>
                  </div>
                  <div
                    className={`${fixedProducts ? "md:mt-2" : "mt-4 md:mt-6"}`}
                  >
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="showDifference"
                          className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                        />
                      </div>
                      <div className="ms-3 flex flex-col">
                        <label
                          htmlFor="showDifference"
                          className="text-sm font-medium text-gray-900"
                        >
                          Chỉ hiển thị điểm khác biệt
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="t-scroll-sync--horizontal t-scroll-sync flex">
                  <div
                    className={`${
                      fixedProducts ? "px-3" : "px-2"
                    } py-4 w-[185px] md:w-[260px] shrink-0`}
                  >
                    <div
                      className={`${
                        fixedProducts
                          ? "flex-row space-x-2"
                          : "flex-col space-y-2 md:space-y-3"
                      } flex`}
                    >
                      <div
                        className={`${
                          fixedProducts
                            ? "w-10 h-10 rounded-lg "
                            : "compare-aspect-w-1 compare-aspect-h-1 rounded-2xl"
                        } overflow-hidden bg-gray-100 shrink-0`}
                      >
                        <Image
                          width={169}
                          height={169}
                          alt="Dell Inspiron 16 5630 - i5 1340P, QHD+ 16GB, 512GB"
                          src="https://imagor.owtg.one/unsafe/fit-in/488x488/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/products/2025/1/20/dell-inspiron-16-5630-8zy.png"
                          className="h-full w-full object-contain lazyloaded"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span
                          className={`${
                            fixedProducts
                              ? "line-clamp-2 text-sm"
                              : "line-clamp-3 md:text-base"
                          }  text-sm text-start font-semibold`}
                        >
                          Dell Inspiron 16 5630 - i5 1340P, QHD+ 16GB, 512GB
                        </span>
                        <div className="mt-3 flex items-center space-x-2">
                          <span
                            className={`${
                              fixedProducts ? "text-sm" : "md:text-base"
                            } font-medium text-rose-600`}
                          >
                            2.490.000
                          </span>
                          <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                            -13%
                          </span>
                        </div>
                        {!fixedProducts && (
                          <div className="mt-2 flex items-center space-x-1.5">
                            <span className="text-sm">Màu</span>
                            <span
                              aria-label="Black"
                              className="w-[14px] h-[14px] rounded-full ring-1"
                              style={{ background: "#000000" }}
                            ></span>
                          </div>
                        )}
                      </div>
                      {!fixedProducts && (
                        <div className="mt-2 flex flex-col space-y-2">
                          <Link
                            type="button"
                            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
                            href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                          >
                            <span>Xem ngay</span>
                          </Link>
                          <Link
                            type="button"
                            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
                            href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 flex-shrink-0"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            <span>Xóa</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      fixedProducts ? "px-3" : "px-2"
                    } py-4 w-[185px] md:w-[260px] shrink-0`}
                  >
                    <div
                      className={`${
                        fixedProducts
                          ? "flex-row space-x-2"
                          : "flex-col space-y-2 md:space-y-3"
                      } flex`}
                    >
                      <div
                        className={`${
                          fixedProducts
                            ? "w-10 h-10 rounded-lg "
                            : "compare-aspect-w-1 compare-aspect-h-1 rounded-2xl"
                        } overflow-hidden bg-gray-100 shrink-0`}
                      >
                        <Image
                          width={169}
                          height={169}
                          alt="Lenovo ThinkBook 14 G5+ - R7 7735H, 16GB, 512GB, 2.8K 90Hz"
                          src="https://imagor.owtg.one/unsafe/fit-in/488x488/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-bmA.png"
                          className="h-full w-full object-contain lazyloaded"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span
                          className={`${
                            fixedProducts
                              ? "line-clamp-2 text-sm"
                              : "line-clamp-3 md:text-base"
                          }  text-sm text-start font-semibold`}
                        >
                          Lenovo ThinkBook 14 G5+ - R7 7735H, 16GB, 512GB, 2.8K
                          90Hz
                        </span>
                        <div className="mt-3 flex items-center space-x-2">
                          <span
                            className={`${
                              fixedProducts ? "text-sm" : "md:text-base"
                            } font-medium text-rose-600`}
                          >
                            2.490.000
                          </span>
                          <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                            -13%
                          </span>
                        </div>
                        {!fixedProducts && (
                          <div className="mt-2 flex items-center space-x-1.5">
                            <span className="text-sm">Màu</span>
                            <span
                              aria-label="Black"
                              className="w-[14px] h-[14px] rounded-full ring-1"
                              style={{ background: "#000000" }}
                            ></span>
                          </div>
                        )}
                      </div>
                      {!fixedProducts && (
                        <div className="mt-2 flex flex-col space-y-2">
                          <Link
                            type="button"
                            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
                            href="#!"
                          >
                            <span>Xem ngay</span>
                          </Link>
                          <Link
                            type="button"
                            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
                            href="#!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 flex-shrink-0"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            <span>Xóa</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      fixedProducts ? "px-3" : "px-2"
                    }  py-4 w-[185px] md:w-[260px] shrink-0`}
                  >
                    <div
                      className={`${
                        fixedProducts
                          ? "min-h-[72px] md:min-h-[90px]"
                          : "min-h-[170px] md:min-h-[480px]"
                      } flex flex-col items-center justify-center h-full text-center`}
                    >
                      <button
                        type="button"
                        className={`${
                          fixedProducts
                            ? "text-sm gap-x-2 p-2"
                            : "text-base gap-x-2.5 p-2.5"
                        } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full ring-1 ring-inset ring-current text-colorPrimary500 hover:bg-colorPrimary50 disabled:bg-transparent aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center`}
                        onClick={() => setIsOpenAddCompareProducts(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`${
                            fixedProducts ? "h-5 w-5" : "h-6 w-6"
                          }  flex-shrink-0 `}
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                      <span className="mt-2 text-sm font-bold font-lexend text-colorPrimary500">
                        Thêm sản phẩm khác
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${
                      fixedProducts ? "px-3" : "px-2"
                    }  py-4 w-[185px] md:w-[260px] shrink-0`}
                  >
                    <div
                      className={`${
                        fixedProducts
                          ? "min-h-[72px] md:min-h-[90px]"
                          : "min-h-[170px] md:min-h-[480px]"
                      } flex flex-col items-center justify-center h-full text-center`}
                    >
                      <button
                        type="button"
                        className={`${
                          fixedProducts
                            ? "text-sm gap-x-2 p-2"
                            : "text-base gap-x-2.5 p-2.5"
                        } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full ring-1 ring-inset ring-current text-colorPrimary500 hover:bg-colorPrimary50 disabled:bg-transparent aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center`}
                        onClick={() => setIsOpenAddCompareProducts(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`${
                            fixedProducts ? "h-5 w-5" : "h-6 w-6"
                          }  flex-shrink-0 `}
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                      <span className="mt-2 text-sm font-bold font-lexend text-colorPrimary500">
                        Thêm sản phẩm khác
                      </span>
                    </div>
                    <AddComparativeProducts
                      open={isOpenAddCompareProducts}
                      onClose={() => setIsOpenAddCompareProducts(false)}
                      title="Thêm sản phẩm so sánh"
                    />
                  </div>
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
