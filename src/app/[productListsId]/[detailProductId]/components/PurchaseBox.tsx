"use client";

import AddToCartButton from "@/components/common/AddToCartButton";

interface PurchaseBoxProps {
  buttonPromotion: "buyNow" | "installment";
  onToggleBuyNow: () => void;
  onToggleInstallment: () => void;
  onBuy: () => void;
  responsiveWidth: boolean;
}

export default function PurchaseBox({
  buttonPromotion,
  onToggleBuyNow,
  onToggleInstallment,
  onBuy,
  responsiveWidth,
}: PurchaseBoxProps) {
  return (
    <div className="w-full flex space-x-2">
      <div className="w-full">
        {responsiveWidth ? (
          <div>
            <div className="buy-option-switcher">
              <div className="flex">
                <button
                  className={`${
                    buttonPromotion === "buyNow" ? "active " : ""
                  } tab-installment`}
                  onClick={() => onToggleBuyNow()}
                >
                  <div className="font-bold">Mua ngay</div>
                  <div className="text-sm text-neutral-600">
                    Trả hết một giá
                  </div>
                </button>
                <button
                  className={`${
                    buttonPromotion === "installment" ? "active " : ""
                  } tab-installment`}
                  onClick={() => onToggleInstallment()}
                >
                  <div className="font-bold">Trả góp</div>
                  <div className="text-sm text-neutral-600">
                    0%, rất đơn giản
                  </div>
                </button>
              </div>
              <div className="rounded-tr-2xl p-4 bg-white">
                <div className="flex flex-col space-y-2">
                  {buttonPromotion === "buyNow" ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-lg md:text-2xl font-semibold text-rose-600">
                        22.990.000
                      </span>
                      <span className="text-sm text-gray-800 line-through">
                        31.990.000
                      </span>
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                        -28%
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1.5">
                      <span className="text-lg md:text-2xl font-semibold text-rose-600">
                        22.990.000
                      </span>
                      <span className="text-sm text-gray-800">/tháng</span>
                    </div>
                  )}
                  <div>
                    {!responsiveWidth &&
                      (buttonPromotion === "buyNow" ? (
                        <div className="flex space-x-2">
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            <div className="dark">
                              <button
                                className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center"
                                onClick={onBuy}
                              >
                                Mua ngay
                              </button>
                            </div>
                            <div>
                              <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-800 disabled:bg-gray-950 aria-disabled:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center">
                                <svg
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.5 20.25H4.92284C4.30753 20.25 3.83819 19.6996 3.9354 19.092L5.6154 8.59201C5.69302 8.10688 6.11154 7.75 6.60284 7.75H17.3974C17.8887 7.75 18.3072 8.10688 18.3848 8.59201L18.5948 9.90451"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                  ></path>
                                  <path
                                    d="M8.75 12.25V6C8.75 4.21 10.21 2.75 12 2.75C13.79 2.75 15.25 4.21 15.25 6V10"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                  ></path>
                                  <path
                                    d="M17.5 15.7V19.3M19.3 17.5H15.7M22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22C18.7426 22 19.8676 21.4963 20.682 20.682C21.4963 19.8676 22 18.7426 22 17.5Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                  ></path>
                                </svg>
                                <span className="text-left break-all line-clamp-1">
                                  Thêm vào giỏ
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-[#00e973] hover:bg-[#00c25c] disabled:bg-[#00e973] aria-disabled:bg-[#00e973] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full flex justify-center items-center">
                          <span className="text-left break-all line-clamp-1">
                            Mua trả góp
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="buy-option-switcher">
            <div className="flex">
              <button
                className={`${
                  buttonPromotion === "buyNow" ? "active " : ""
                } tab-installment`}
                onClick={() => onToggleBuyNow()}
              >
                <div className="font-bold">Mua ngay</div>
                <div className="text-sm text-neutral-600">Trả hết một giá</div>
              </button>
              <button
                className={`${
                  buttonPromotion === "installment" ? "active " : ""
                } tab-installment`}
                onClick={() => onToggleInstallment()}
              >
                <div className="font-bold">Trả góp</div>
                <div className="text-sm text-neutral-600">0%, rất đơn giản</div>
              </button>
            </div>
            <div className="rounded-tr-2xl p-4 bg-white">
              <div className="flex flex-col space-y-2">
                {buttonPromotion === "buyNow" ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-2xl font-semibold text-rose-600">
                      22.990.000
                    </span>
                    <span className="text-sm text-gray-800 line-through">
                      31.990.000
                    </span>
                    <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                      -28%
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1.5">
                    <span className="text-lg md:text-2xl font-semibold text-rose-600">
                      22.990.000
                    </span>
                    <span className="text-sm text-gray-800">/tháng</span>
                  </div>
                )}
                <div>
                  {!responsiveWidth &&
                    (buttonPromotion === "buyNow" ? (
                      <div className="flex space-x-2">
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          <div className="dark">
                            <button
                              className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center"
                              onClick={onBuy}
                            >
                              Mua ngay
                            </button>
                          </div>
                          <div>
                            <AddToCartButton
                              product={{
                                name: "Bàn phím Cơ Aula F75 LEOBOG Reaper Switch",
                                img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/1/20/ban-phim-co-khong-day-aula-f75-thinkpro-nicespace-2K9.jpg",
                                price: "969000",
                                discount: "-5%",
                                color: [
                                  "#FFFFFF",
                                  "#000000",
                                  "#FF0000",
                                  "#0000FF",
                                  "#FFC0CB",
                                ],
                                version: "LEOBOG Reaper Switch",
                              }}
                              index={0}
                              category="bàn phím"
                              className="text-left break-all line-clamp-1"
                            >
                              Thêm vào giỏ
                            </AddToCartButton>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-[#00e973] hover:bg-[#00c25c] disabled:bg-[#00e973] aria-disabled:bg-[#00e973] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full flex justify-center items-center">
                        <span className="text-left break-all line-clamp-1">
                          Mua trả góp
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
