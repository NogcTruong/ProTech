import Image from "next/image";
import Link from "next/link";

interface ProductHeaderProps {
  fixedProducts: boolean;
}

export default function ProductCard({ fixedProducts }: ProductHeaderProps) {
  return (
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
  );
}
