import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface FilterReviewsProps {
  filterTab: "tất cả" | "5" | "4" | "3" | "2" | "1";
  setFilterTab: Dispatch<SetStateAction<string>>;
  onToggle: () => void;
  sortBy: "latest" | "rating-desc" | "rating-asc";
  onOpenFilTab: boolean;
  onSortChange: Dispatch<SetStateAction<string>>;
  onSelectedReview: (selected: string) => void;
}

export default function FilterReviews({
  filterTab,
  setFilterTab,
  onToggle,
  sortBy,
  onOpenFilTab,
  onSortChange,
  onSelectedReview,
}: FilterReviewsProps) {
  const filterTableCSS = onOpenFilTab
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute" as const,
        margin: "0px",
      }
    : {};

  return (
    <div className="flex flex-col space-y-4">
      <span className="text-xl font-lexend font-bold">Lọc đánh giá</span>
      <div className="flex space-x-2">
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "tất cả" }
          )}
          onClick={() => setFilterTab("tất cả")}
        >
          <span className="inline-flex items-center space-x-1">Tất cả</span>
        </span>
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "5" }
          )}
          onClick={() => setFilterTab("5")}
        >
          <span className="inline-flex items-center space-x-1">
            <span>5</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "4" }
          )}
          onClick={() => setFilterTab("4")}
        >
          <span className="inline-flex items-center space-x-1">
            <span>4</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "3" }
          )}
          onClick={() => setFilterTab("3")}
        >
          <span className="inline-flex items-center space-x-1">
            <span>3</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "2" }
          )}
          onClick={() => setFilterTab("2")}
        >
          <span className="inline-flex items-center space-x-1">
            <span>2</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <span
          className={clsx(
            "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
            { "!ring-colorPrimary600 !ring-2": filterTab === "1" }
          )}
          onClick={() => setFilterTab("1")}
        >
          <span className="inline-flex items-center space-x-1">
            <span>1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </div>
      <div className="flex flex-wrap md:items-center gap-4">
        <div
          className="relative min-w-[160px] max-md:w-full md:w-[200px]"
          onClick={onToggle}
        >
          <div className="flex items-center w-full">
            <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
              <span className="block truncate">
                {sortBy === "latest" && "Mới nhất"}
                {sortBy === "rating-desc" && "Đánh giá cao → thấp"}
                {sortBy === "rating-asc" && "Đánh giá thấp → cao"}
              </span>
              <span className="absolute inset-y-0 end-0 flex items-center px-2.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* filter Table */}
          {onOpenFilTab && (
            <div className="w-full z-20 group m-0" style={filterTableCSS}>
              <div className="">
                <ul className="relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-colorPray200 rounded-md shadow-lg bg-white p-1 max-h-60">
                  <li
                    className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                    role="option"
                    aria-selected={sortBy === "latest"}
                    onClick={() => onSortChange("latest")}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="truncate">Mới nhất</span>
                    </div>
                    {sortBy === "latest" && (
                      <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 flex-shrink-0 text-colorPray900"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.5 12.75l6 6l9-13.5"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                  <li
                    className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                    role="option"
                    aria-selected={sortBy === "rating-desc"}
                    onClick={() => onSortChange("rating-desc")}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="truncate">Đánh giá cao → thấp</span>
                    </div>
                    {sortBy === "rating-desc" && (
                      <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 flex-shrink-0 text-colorPray900"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.5 12.75l6 6l9-13.5"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                  <li
                    className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                    role="option"
                    aria-selected={sortBy === "rating-asc"}
                    onClick={() => onSortChange("rating-asc")}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="truncate">Giá thấp → cao</span>
                    </div>
                    {sortBy === "rating-asc" && (
                      <span className="absolute inset-y-0 end-0 flex items-center pe-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 flex-shrink-0 text-colorPray900"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.5 12.75l6 6l9-13.5"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="Image"
              className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
              onChange={() => onSelectedReview("selectedImage")}
            />
          </div>
          <div className="ms-3 flex flex-col">
            <label
              htmlFor="Image"
              className="text-sm font-medium text-gray-900"
            >
              Có hình ảnh
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="purchased"
              className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
              onChange={() => onSelectedReview("selectedPurchased")}
            />
          </div>
          <div className="ms-3 flex flex-col">
            <label
              htmlFor="purchased"
              className="text-sm font-medium text-gray-900"
            >
              Đã mua hàng
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
