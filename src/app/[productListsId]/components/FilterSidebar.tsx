import { brands } from "../data";

interface FilterSidebarProps {
  selectedBrands: string[];
  selectedPrices: string[];
  selectedColors: string[];
  hasPromotion: boolean;
  isOpenBrands: boolean;
  isOpenPrices: boolean;
  isOpenPromotion: boolean;
  isOpenColors: boolean;
  onBrandChange: (brand: string) => void;
  onPriceChange: (price: string) => void;
  onColorChange: (color: string) => void;
  onPromotionChange: () => void;
  onOpenBrands: () => void;
  onOpenPrices: () => void;
  onOpenPromotion: () => void;
  onOpenColors: () => void;
  onClearBrands: () => void;
  onClearPrices: () => void;
  onClearColors: () => void;
  onClearPromotion: () => void;
  dataLength: number;
}

export default function FilterSidebar({
  selectedBrands,
  selectedPrices,
  selectedColors,
  hasPromotion,
  isOpenBrands,
  isOpenPrices,
  isOpenPromotion,
  isOpenColors,
  onBrandChange,
  onPriceChange,
  onColorChange,
  onPromotionChange,
  onOpenBrands,
  onOpenPrices,
  onOpenPromotion,
  onOpenColors,
  onClearBrands,
  onClearPrices,
  onClearColors,
  onClearPromotion,
  dataLength,
}: FilterSidebarProps) {
  return (
    <div className="pb-6">
      <div className="font-bold font-lexend hidden md:flex items-center space-x-1 py-4">
        <span>{dataLength} sản phẩm</span>
      </div>
      <div className="section-filter-listing max-md:hidden">
        <div className="w-full rounded-2xl bg-white border divide-y">
          <div className="w-full flex flex-col px-1">
            <div
              className="flex items-center space-x-1 px-4 py-3 h-[52px] cursor-pointer"
              onClick={onOpenBrands}
            >
              <span className="truncate font-bold font-lexend">
                Thương hiệu
                <span
                  className={`${
                    selectedBrands.length > 0 ? "inline-block" : "hidden"
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
                onClick={onClearBrands}
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
            <div className={`${isOpenBrands ? "h-auto" : "h-0 hidden"}`}>
              <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                <div className="w-full grid grid-cols-2 gap-3">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-5 flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand.brand)}
                          id={`b-${index}`}
                          onChange={() => onBrandChange(brand.brand)}
                          className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                        />
                      </div>
                      <div className="ms-3 flex flex-col">
                        <label
                          htmlFor={`b-${index}`}
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
              onClick={onOpenPrices}
            >
              <span className="truncate font-bold font-lexend">
                Khoảng giá
                <span
                  className={`${
                    selectedPrices.length > 0 ? "inline-block" : "hidden"
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
                onClick={onClearPrices}
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
            <div className={`${isOpenPrices ? "h-auto" : "h-0 hidden"}`}>
              <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        type="checkbox"
                        id="p-1_2"
                        checked={selectedPrices.includes("1-2")}
                        onChange={() => onPriceChange("1-2")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="p-1_2"
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
                        id="p-2_5"
                        checked={selectedPrices.includes("2-5")}
                        onChange={() => onPriceChange("2-5")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="p-2_5"
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
                        id="p-5"
                        checked={selectedPrices.includes("5+")}
                        onChange={() => onPriceChange("5+")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="p-5"
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
              onClick={onOpenPromotion}
            >
              <span className="truncate font-bold font-lexend">
                Có khuyến mại
              </span>
              <div className="flex-1"></div>
              <button
                className={`${
                  hasPromotion ? "block" : "hidden"
                } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                onClick={onClearPromotion}
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
            <div className={`${isOpenPromotion ? "h-auto" : "h-0 hidden"}`}>
              <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                <button
                  className={`${
                    hasPromotion ? "bg-colorPrimaryDefault" : "bg-gray-200"
                  } relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none h-5 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                  onClick={onPromotionChange}
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
              onClick={onOpenColors}
            >
              <span className="truncate font-bold font-lexend">
                Màu sắc
                <span
                  className={`${
                    selectedColors.length > 0 ? "inline-block" : "hidden"
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
                onClick={onClearColors}
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
            <div className={`${isOpenColors ? "h-auto" : "h-0 hidden"}`}>
              <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        type="checkbox"
                        id="c-black"
                        checked={selectedColors.includes("#000000")}
                        onChange={() => onColorChange("#000000")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="c-black"
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
                        id="c-grey"
                        checked={selectedColors.includes("#C0C0C0")}
                        onChange={() => onColorChange("#C0C0C0")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="c-grey"
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
                        id="c-green"
                        checked={selectedColors.includes("#00CED1")}
                          onChange={() => onColorChange("#00CED1")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="c-green"
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
                        id="c-blue"
                        checked={selectedColors.includes("#808080")}
                        onChange={() => onColorChange("#808080")}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="c-blue"
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
  );
}
