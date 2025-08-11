import Image from "next/image";
import BaseModal from "../common/baseModal";
import Link from "next/link";

type SelectVersionProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function SelectVersionModal({
  open,
  onClose,
  title,
}: SelectVersionProps) {
  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="flex-1 flex flex-col p-4">
        <div className="flex items-center space-x-4">
          <div className="w-[120px] h-[120px]">
            <Image
              width={120}
              height={120}
              alt="Hình ảnh Ghế Công Thái Học Herman Miller Aeron (Size B - Chân nhựa - Graphite - Mới, Full box, Nhập khẩu)"
              src="https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/2/20/aeron_02.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-medium text-lg text-rose-600">
              22.990.000
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm line-through">31.990.000</span>
              <span className="inline-flex items-center font-medium rounded-full text-xs px-1.5 py-0.5 gap-0.5 bg-[#fe3464] text-white">
                -28%
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <div>
            <span className="text-sm font-lexend font-bold">Phiên bản</span>
            <div
              className="t-flex-gap mt-2"
              style={{ "--gap-x": "8px", "--gap-y": "8px" }}
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    Size B - Chân nhựa
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Size B - Chân Nhôm
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Size B - Chân Hợp Kim
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-lexend font-bold">Màu</span>
            <div
              className="t-flex-gap mt-2"
              style={{ "--gap-x": "8px", "--gap-y": "8px" }}
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    White Mineral
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Grey carbon
                  </span>
                </a>
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 rounded-full ring-1">
                    Graphite
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-lexend font-bold">Loại hàng</span>
            <div
              className="t-flex-gap mt-2"
              style={{ "--gap-x": "8px", "--gap-y": "8px" }}
            >
              <div className="flex flex-wrap t-flex-gap__wrapper">
                <a href="#">
                  <span className="inline-flex items-center font-medium text-sm px-2 py-1 gap-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 !ring-colorPrimary600 !ring-2 rounded-full">
                    Mới, Full box, Nhập khẩu
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-3 pb-safe-or-3 border-t">
        <div className="w-full flex space-x-2">
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div className="dark">
              <button className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center">
                Mua ngay
              </button>
            </div>
            <div>
              <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-800 disabled:bg-gray-950 aria-disabled:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center">
                <span className="text-left break-all line-clamp-1">
                  Thêm vào giỏ
                </span>
              </button>
            </div>
          </div>
          <Link href="tel:19000000" rel="noopener noreferrer">
            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 p-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="flex-shrink-0 h-6 w-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="1.5"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </BaseModal>
  );
}
