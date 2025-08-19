"use client";

import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function ImageGallery({
  images,
  currentIndex,
  onPrev,
  onNext,
  onSelect,
}: ImageGalleryProps) {
  return (
    <div className="w-full scroll-mt-40">
      <div className="relative">
        <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth bg-white border rounded-2xl no-scrollbar">
          <div className="flex flex-none snap-center basis-full aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9">
            <Image
              width={640}
              height={360}
              src={images[currentIndex]}
              alt={`Hình ảnh ${currentIndex + 1}`}
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-colorPrimary400 inline-flex items-center rtl:[&_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
            onClick={onPrev}
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
            onClick={onNext}
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
      </div>
      <div className="relative group/scrollable mt-2">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex space-x-2 py-2 md:py-3 px-1">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`${
                  currentIndex === idx ? "ring-2 ring-black" : ""
                } shrink-0 w-10 h-10 md:w-[80px] md:h-[80px] rounded-lg md:rounded-2xl overflow-hidden cursor-pointer`}
                onClick={() => onSelect(idx)}
              >
                <Image
                  className="w-full h-full object-contain lazyloaded"
                  src={img.replace("1760x990", "160x160")}
                  alt={`thumbnail ${idx + 1}`}
                  width={40}
                  height={40}
                  sizes="(max-width: 768px) 40px, 80px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
