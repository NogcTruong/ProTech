import Image from "next/image";
import type { Review } from "../data";

interface ReviewsProps {
  columns: Review[][];
  onOpenReviewModal: (review: Review) => void;
}

export default function Reviews({ columns, onOpenReviewModal }: ReviewsProps) {
  return (
    <div className="flex flex-col md:flex-row max-md:space-y-4 md:space-x-4">
      {columns.map((column: Review[], columnIndex: number) => (
        <div key={columnIndex} className="md:w-1/3 flex flex-col space-y-5">
          {column.map((review: Review) => (
            <div
              key={review.id}
              className="shadow-md rounded-2xl p-3 cursor-pointer"
              onClick={() => onOpenReviewModal(review)}
            >
              {Array.isArray(review.image) && review.image.length > 0 ? (
                <div className="w-full relative rounded-lg overflow-hidden">
                  <div className="review-aspect-w-1 review-aspect-h-1 hover:scale-105 transition-transform">
                    <Image
                      width={232}
                      height={232}
                      alt={`Hinh anh khach hang danh gia san pham ${review.name}`}
                      src={review.image[0]}
                      className="w-full h-full object-cover lazyloaded"
                    />
                  </div>
                  {review.image.length > 1 && (
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white">
                        +{review.image.length - 1}
                      </span>
                    </div>
                  )}
                </div>
              ) : null}
              <div className="mt-2 flex items-center space-x-1">
                <span className="text-sm font-semibold">{review.name}</span>
                <div className="flex-1"></div>
                <span className="text-sm">{review.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-2 text-sm">{review?.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
