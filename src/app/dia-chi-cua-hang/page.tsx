import Image from "next/image";
import Link from "next/link";
import "./storeAddress.css";

export default function StoreAddress() {
  return (
    <div className="container py-5 md:py-10">
      <h1 className="text-2xl font-bold font-lexend md:text-5xl">
        Địa chỉ cửa hàng
      </h1>
      <div className="mt-5 md:mt-10 flex flex-col space-y-5">
        <div>
          <h2 className="text-base font-lexend font-bold">
            Thành phố Hồ Chí Minh
          </h2>
          <div className="mt-4 flex max-md:flex-col max-md:space-y-3 md:space-x-4">
            <Link
              href="/dia-chi-cua-hang/5-7-nguyen-huy-tuong-p-6-quan-binh-thanh-tp-ho-chi-minh"
              className="border rounded-2xl shadow-sm p-4 overflow-hidden md:w-[450px]"
            >
              <div className="store-aspect-w-16 store-aspect-h-9 rounded-lg overflow-hidden">
                <div className="transition-transform hover:scale-105">
                  <Image
                    width={416}
                    height={234}
                    src="https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/nguyen-huy-tuong-1.jpeg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt="Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 flex-col space-y-3">
                <h3 className="text-sm font-bold font-lexend">
                  Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                </h3>
                <div className="text-sm flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                  <span>09:00 - 21:00</span>
                  <span>·</span>
                  <span className="font-semibold">Đóng cửa</span>
                </div>
              </div>
              <div className="mt-3">
                <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                    </g>
                  </svg>
                  <span>Chỉ đường</span>
                </button>
              </div>
            </Link>
            <Link
              href="/dia-chi-cua-hang/95-tran-thien-chanh-f12-quan-10-tp-ho-chi-minh"
              className="border rounded-2xl shadow-sm p-4 overflow-hidden md:w-[450px]"
            >
              <div className="store-aspect-w-16 store-aspect-h-9 rounded-lg overflow-hidden">
                <div className="transition-transform hover:scale-105">
                  <Image
                    width={416}
                    height={234}
                    src="https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/tran-thien-chanh-1.jpg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt="store-1"
                    className="w-full h-full object-cover lazyloaded"
                  />
                </div>
              </div>
              <div className="mt-4 flex-col space-y-3">
                <h3 className="text-sm font-bold font-lexend">
                  95 Trần Thiện Chánh, Q10
                </h3>
                <div className="text-sm flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                  <span>09:00 - 21:00</span>
                  <span>·</span>
                  <span className="font-semibold">Đóng cửa</span>
                </div>
              </div>
              <div className="mt-3">
                <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                    </g>
                  </svg>
                  <span>Chỉ đường</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-base font-lexend font-bold">Hà Nội</h2>
          <div className="mt-4 flex max-md:flex-col max-md:space-y-3 md:space-x-4">
            <Link
              href="/dia-chi-cua-hang/53-thai-ha-quan-trung-liet-phuong-dong-da-tp-ha-noi"
              className="border rounded-2xl shadow-sm p-4 overflow-hidden md:w-[450px]"
            >
              <div className="store-aspect-w-16 store-aspect-h-9 rounded-lg overflow-hidden">
                <div className="transition-transform hover:scale-105">
                  <Image
                    width={416}
                    height={234}
                    src="https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/thai-ha-1.jpg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt="store-1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 flex-col space-y-3">
                <h3 className="text-sm font-bold font-lexend">
                  53 Thái Hà, Đống Đa
                </h3>
                <div className="text-sm flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                  <span>09:00 - 21:00</span>
                  <span>·</span>
                  <span className="font-semibold">Đang mở cửa</span>
                </div>
              </div>
              <div className="mt-3">
                <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                    </g>
                  </svg>
                  <span>Chỉ đường</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
