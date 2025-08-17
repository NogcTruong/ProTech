"use client";

import { formatPrice } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  discount: number;
  color: string[];
  version: string;
}

interface ProductListProps {
  products: Product[];
  showCompareButton: boolean;
}

export default function ProductList({
  products,
  showCompareButton,
}: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const result = Array.isArray(products) ? [...products] : [];
    setFilteredProducts(result);
  }, [products]);

  return (
    <div className="t-product-list @container">
      <div className="grid grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 gap-3 @md:gap-y-6">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Link
              key={index}
              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
              className="t-product-card group relative border rounded-2xl transition-all bg-white"
            >
              <div className="h-full flex flex-col space-y-2 md:space-y-3">
                <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-white">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={165}
                      height={165}
                      className="h-full w-full object-contain lazyloaded"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div
                        className="rounded-l-2xl md:rounded-l-[20px] rounded-r md:rounded-r-lg p-[2px] pr-[6px] md:p-1 md:pr-2 inline-flex items-center space-x-1"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(192, 247, 141) 0%, rgb(231, 255, 209) 100%)",
                        }}
                      >
                        <svg
                          className="w-4 h-4 md:w-6 md:h-6"
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
                          <span className="font-lexend text-[7px] md:text-[10px] leading-[1.2] font-bold">
                            HÀNG CHÍNH HÃNG
                          </span>
                          <span className="font-lexend text-[7px] md:text-[8px] font-bold">
                            Phân Phối Tại Việt Nam
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col px-2 pb-3">
                  <span className="line-clamp-3 text-start font-medium text-sm md:text-body group-hover:underline">
                    {product.name}
                  </span>
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="font-medium text-rose-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                      {product.discount}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 dark:bg-rose-400 dark:bg-opacity-10 text-rose-500 dark:text-rose-400 space-x-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.754a3.375 3.375 0 0 1 5.432 3.997h3.943a1.874 1.874 0 0 1 1.875 1.874v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3m1.875 9.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6zm1.5 0v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75z"
                        />
                      </svg>
                      <span>Quà {formatPrice(product.price)}</span>
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-gray-50 text-gray-500">
                      <span>Trả góp {product.discount}</span>
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-1.5">
                    <span className="text-sm">Màu</span>
                    {product.color?.map((colorValue, index) => (
                      <span
                        key={index}
                        aria-label="Black"
                        className="w-[14px] h-[14px] rounded-full ring-1"
                        style={{ background: colorValue }}
                      ></span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-colorPray600">
                      {product.version}
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 text-cyan-500 ring-1 ring-inset ring-cyan-400">
                      +5 tùy chọn khác
                    </span>
                  </div>
                </div>
                <div
                  className={`${
                    showCompareButton ? "" : "hidden"
                  } mt-3 p-2 border-t`}
                >
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 h-4 w-4"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    <span>So sánh</span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Không có sản phẩm nào khớp với bộ lọc.</p>
        )}
      </div>
    </div>
  );
}
