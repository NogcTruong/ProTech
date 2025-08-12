"use client";

import { useEffect, useState } from "react";

type FilterProductListsModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const brands = [
  { brand: "Nintendo Switch" },
  { brand: "XREAL" },
  { brand: "Meta" },
  { brand: "Playstation" },
  { brand: "Rokid" },
  { brand: "Microsoft" },
  { brand: "Sony" },
  { brand: "STEAM DECK" },
  { brand: "Machenike" },
  { brand: "Apple" },
  { brand: "HGST" },
  // { brand: "Lenovo" },
];

export default function FilterProductListsModal({
  open,
  onClose,
  title,
}: FilterProductListsModalProps) {
  useEffect(() => {
    if (!open) return;

    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const [isOpenBrands, setIsOpenBrands] = useState(true);
  const [isOpenPrices, setIsOpenPrices] = useState(true);
  const [isOpenPromotion, setIsOpenPromotion] = useState(true);
  const [isOpenColors, setIsOpenColors] = useState(true);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [hasPromotion, setHasPromotion] = useState<boolean>(false);

  const handleOpenBrands = () => {
    setIsOpenBrands(!isOpenBrands);
  };

  const handleOpenPrices = () => {
    setIsOpenPrices(!isOpenPrices);
  };

  const handleOpenPromotion = () => {
    setIsOpenPromotion(!isOpenPromotion);
  };

  const handleOpenColors = () => {
    setIsOpenColors(!isOpenColors);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleButton = () => {
    setHasPromotion(!hasPromotion);
  };

  if (!open) return null;

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 overflow-y-hidden z-10">
        <div className="flex min-h-full items-end sm:items-center justify-center text-center max-md:h-full">
          <div className="relative text-left rtl:text-right flex flex-col bg-white shadow-xl w-screen h-full">
            <div className="h-full flex flex-col">
              <div className="relative shrink-0 h-12 px-[52px] py-2 border-b flex items-center">
                <div className="w-full text-center">
                  <span className="text-lg font-bold font-lexend line-clamp-1">
                    {title}
                  </span>
                </div>
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center absolute right-2 top-2"
                  onClick={onClose}
                  aria-label="Đóng"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 flex-shrink-0"
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
                </button>
              </div>
              <div className="flex-1 p-2 overflow-auto">
                <div className="w-full flex flex-col rounded-2xl border divide-y mb-4">
                  <div className="w-full flex flex-col px-1">
                    <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 text-white-500 bg-white-50 hover:bg-white-100 disabled:bg-white-50 aria-disabled:bg-white-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white-500 inline-flex items-center w-full mb-0">
                      <span className="text-left break-all line-clamp-1">
                        Sắp xếp
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="-rotate-180 w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="h-auto">
                      <div className="text-sm text-gray-500 pb-3 pt-0 px-3">
                        <div className="relative flex items-start">
                          <fieldset className="grid gap-2">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  type="radio"
                                  id="sortLate"
                                  name="sortProductMobile"
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="sortLate"
                                  className="text-sm font-medium text-gray-700"
                                >
                                  Nổi bật nhất
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  type="radio"
                                  id="sortAce"
                                  name="sortProductMobile"
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="sortAce"
                                  className="text-sm font-medium text-gray-700"
                                >
                                  Giá thấp → cao
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  type="radio"
                                  id="sortDesc"
                                  name="sortProductMobile"
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="sortDesc"
                                  className="text-sm font-medium text-gray-700"
                                >
                                  Giá cao → thấp
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-filter-listing">
                  <div className="w-full rounded-2xl bg-white border divide-y">
                    <div className="w-full flex flex-col px-1">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px] cursor-pointer"
                        onClick={handleOpenBrands}
                      >
                        <span className="truncate font-bold font-lexend">
                          Thương hiệu
                          <span
                            className={`${
                              selectedBrands.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedBrands.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedBrands.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedBrands([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenBrands ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            {brands.map((brand, index) => (
                              <div key={index} className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(
                                      brand.brand
                                    )}
                                    name="brands"
                                    id={`b-m-${index}`}
                                    onChange={() =>
                                      handleBrandChange(brand.brand)
                                    }
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor={`b-m-${index}`}
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    {brand.brand}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px] cursor-pointer"
                        onClick={handleOpenPrices}
                      >
                        <span className="truncate font-bold font-lexend">
                          Khoảng giá
                          <span
                            className={`${
                              selectedPrices.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedPrices.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedPrices.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedPrices([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenPrices ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-m-1_2"
                                  checked={selectedPrices.includes("1-2")}
                                  onChange={() => handlePriceChange("1-2")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-m-1_2"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Từ 1 - 2 triệu
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-m-2_5"
                                  checked={selectedPrices.includes("2-5")}
                                  onChange={() => handlePriceChange("2-5")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-m-2_5"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Từ 2 - 5 triệu
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-m-5"
                                  checked={selectedPrices.includes("5+")}
                                  onChange={() => handlePriceChange("5+")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-m-5"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Trên 5 triệu
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1 cursor-pointer">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px]"
                        onClick={handleOpenPromotion}
                      >
                        <span className="truncate font-bold font-lexend">
                          Có khuyến mại
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            hasPromotion ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setHasPromotion(false)}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${
                          isOpenPromotion ? "h-auto" : "h-0 hidden"
                        }`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <button
                            className={`${
                              hasPromotion
                                ? "bg-colorPrimaryDefault"
                                : "bg-gray-200"
                            } relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none h-5 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                            onClick={() => handleButton()}
                          >
                            <span
                              className={`${
                                hasPromotion
                                  ? "translate-x-4 rtl:-translate-x-4"
                                  : "translate-x-0 rtl:-translate-x-0"
                              } pointer-events-none relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 h-4 w-4`}
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1 cursor-pointer">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px]"
                        onClick={handleOpenColors}
                      >
                        <span className="truncate font-bold font-lexend">
                          Màu sắc
                          <span
                            className={`${
                              selectedColors.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedColors.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedColors.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedColors([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenColors ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-m-black"
                                  checked={selectedColors.includes("#000000")}
                                  onChange={() => handleColorChange("#000000")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-m-black"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Đen
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-m-grey"
                                  checked={selectedColors.includes("#C0C0C0")}
                                  onChange={() => handleColorChange("#C0C0C0")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-m-grey"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xám
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-m-green"
                                  checked={selectedColors.includes("#00CED1")}
                                  onChange={() => handleColorChange("#00CED1")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-m-green"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xanh lá
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-m-blue"
                                  checked={selectedColors.includes("#808080")}
                                  onChange={() => handleColorChange("#808080")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-m-blue"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xanh dương
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t grid grid-cols-2 gap-2 px-4 py-2.5">
                <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex justify-center items-center">
                  <span>Xóa bộ lọc</span>
                </button>
                <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
                  <span>Áp dụng</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}