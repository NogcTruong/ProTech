"use client";

import Image from "next/image";
import BaseModal from "../common/baseModal";
import { useEffect, useState } from "react";

type ReviewModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  review?: {
    id: number;
    name: string;
    price: number;
    rating: number;
    description: string;
    image?: string[];
  } | null;
};

export default function ReviewModal({
  open,
  onClose,
  title,
  review,
}: ReviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

  const handlePrevImage = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const isLastImage =
    review?.image && currentIndex === review?.image.length - 1;
  const isFirstImage = currentIndex === 0;
  console.log(currentIndex);

  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="flex-1 p-4 flex flex-col md:flex-row md:space-x-10 w-[800px]">
        <div className="shrink-0 md:w-1/2">
          <div className="review-aspect-w-1 review-aspect-h-1">
            <div className="relative h-full">
              {review?.image && review?.image.length > 0 ? (
                <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-full no-scrollbar">
                  <div className="flex flex-none snap-center basis-full">
                    <Image
                      width={810}
                      height={1080}
                      srcset={`${review?.image[currentIndex]} 1x, ${review?.image[currentIndex]} 2x`}
                      src={review?.image[currentIndex]}
                      alt="Review Image"
                      className="w-full h-full object-contain cursor-pointer lazyloaded"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-gray-500">No images available</span>
                </div>
              )}
              {review?.image && review?.image.length > 1 && (
                <div className="flex items-center justify-between">
                  <button
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-colorPrimary400 inline-flex items-center rtl:[&_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
                    onClick={handlePrevImage}
                    disabled={isFirstImage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-colorPrimary400 inline-flex items-center rtl:[&_span:last-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full"
                    onClick={handleNextImage}
                    disabled={isLastImage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-1">
            <span className="text-sm font-semibold">{review?.name}</span>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">{review?.rating}.0</span>
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
          </div>
          <div className="mt-2 text-sm">{review?.description}</div>
        </div>
      </div>
    </BaseModal>
  );
}
