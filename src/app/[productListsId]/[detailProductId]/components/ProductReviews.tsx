"use client";

import FeedbackModal from "@/components/common/FeedbackModal";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ReviewItem {
  name: string;
  rating: number;
  review: string;
  image_url: string;
  alt_text: string;
}

interface ProductReviewsProps {
  filterOpenReview: "latest" | "rating-desc" | "rating-asc";
  onfeedback: boolean;
  onOpenFilTab: boolean;
  onOpenFeedback: () => void;
  onCloseFeedback: () => void;
  onToggle: () => void;
  onSortChange: Dispatch<SetStateAction<string>>;
  handleData: ReviewItem[];
  detailProductId: string;
}

export default function ProductReviews({
  filterOpenReview,
  onfeedback,
  onOpenFilTab,
  onOpenFeedback,
  onCloseFeedback,
  onToggle,
  onSortChange,
  handleData,
  detailProductId,
}: ProductReviewsProps) {
  const filterTableCSS = onOpenFilTab
    ? ({
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute" as const,
        margin: "0px",
      } as React.CSSProperties)
    : {};

  return (
    <div className="scroll-mt-20 mt-10">
      <h3 className="font-bold text-xl md:text-3xl">Đánh giá sản phẩm</h3>
      <div className="mt-4 md:mt-6">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
          <div className="flex flex-col">
            <span className="text-3xl font-bold font-lexend">5.0 / 5</span>
            <div className="mt-1">
              <div className="t-rating-readonly t-rating">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-0 md:mt-1">
              <span className="text-xs">3 đánh giá</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col space-y-0.5">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-0.5 w-7">
                <span className="w-2 text-xs">5</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <progress
                  className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                  value={3}
                  max={3}
                >
                  100%
                </progress>
              </div>
              <span className="w-10 flex-shrink-0 text-xs">3</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-0.5 w-7">
                <span className="w-2 text-xs">4</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <progress
                  className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                  value={0}
                  max={0}
                >
                  100%
                </progress>
              </div>
              <span className="w-10 flex-shrink-0 text-xs">0</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-0.5 w-7">
                <span className="w-2 text-xs">3</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <progress
                  className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                  value={0}
                  max={0}
                >
                  100%
                </progress>
              </div>
              <span className="w-10 flex-shrink-0 text-xs">0</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-0.5 w-7">
                <span className="w-2 text-xs">2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <progress
                  className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                  value={0}
                  max={0}
                >
                  100%
                </progress>
              </div>
              <span className="w-10 flex-shrink-0 text-xs">0</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-0.5 w-7">
                <span className="w-2 text-xs">1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <progress
                  className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                  value={0}
                  max={0}
                >
                  100%
                </progress>
              </div>
              <span className="w-10 flex-shrink-0 text-xs">0</span>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="mt-4 md:mt-0 flex md:flex-col items-center justify-between space-x-4 md:space-x-0 md:space-y-4">
            <div>
              <button
                type="button"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center md:w-[160px]"
                onClick={onOpenFeedback}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span>Viết đánh giá</span>
              </button>
              <FeedbackModal
                open={onfeedback}
                onClose={onCloseFeedback}
                title="Đánh giá và nhận xét"
              />
            </div>
            <div className="relative min-w-[160px]" onClick={onToggle}>
              <div className="w-full">
                <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
                  <span className="block truncate">
                    {filterOpenReview === "latest" && "Mới nhất"}
                    {filterOpenReview === "rating-desc" &&
                      "Đánh giá cao → thấp"}
                    {filterOpenReview === "rating-asc" && "Đánh giá thấp → cao"}
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
                        aria-selected="true"
                        onClick={() => onSortChange("latest")}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="truncate">Mới nhất</span>
                        </div>
                        {filterOpenReview === "latest" && (
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
                        aria-selected="true"
                        onClick={() => onSortChange("rating-desc")}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="truncate">Đánh giá cao → thấp</span>
                        </div>
                        {filterOpenReview === "rating-desc" && (
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
                        aria-selected="true"
                        onClick={() => onSortChange("rating-asc")}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="truncate">Giá thấp → cao</span>
                        </div>
                        {filterOpenReview === "rating-asc" && (
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
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {handleData.map((review, ridx) => (
            <div
              key={ridx}
              className="shadow-md rounded-2xl p-3 cursor-pointer"
            >
              <div className="w-full relative rounded-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 hover:scale-105 transition-transform">
                  <Image
                    width={223}
                    height={223}
                    src={review.image_url}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt={review.alt_text}
                    className="w-full h-full object-cover ls-is-cached lazyloaded"
                  />
                </div>
                <div className="mt-2 flex items-center space-x-1">
                  <span className="text-sm font-semibold">{review.name}</span>
                  <div className="flex-1"></div>
                  <span className="text-sm">{review.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-sm">{review.review}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href={`${detailProductId}/danh-gia`}
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
          >
            <span>Xem tất cả</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="flex-shrink-0 h-5 w-5"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.25 4.5l7.5 7.5l-7.5 7.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
