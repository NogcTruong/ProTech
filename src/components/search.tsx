import Image from "next/image";
import imgLogo from "@/assets/logos/logo-techpro-book.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchProps {
  onClose: () => void;
}

export default function Search({ onClose }: SearchProps) {
  const pathname = usePathname();

  return (
    <div className="the-input-search-modal z-50 top-0 md:top-[calc(var(--the-header-offset-menu)_-_var(--the-header-offset))] fixed left-0 right-0 bottom-0">
      <div
        className="absolute inset-0 transition-opacity backdrop-blur-md bg-transparent"
        onClick={onClose}
      ></div>
      <div className="flex items-end sm:items-center justify-center text-center max-md:h-full h-full md:h-fit min-h-fit p-4 sm:p-0 !p-0">
        <div
          className={`relative text-left rtl:text-right flex flex-col h-full ${
            pathname === "/" ? "bg-[#DFF2FD]" : "bg-white"
          } shadow-xl w-full sm:max-w-[600px] !max-w-full rounded-lg sm:my-8 !m-0`}
        >
          <div
            className={`wrapper md:container w-full h-full ${
              pathname === "/" ? "bg-[#DFF2FD]" : "bg-white"
            }`}
          >
            {/* pathname */}
            <div className="h-full flex md:space-x-2 py-2">
              <div className="hidden md:flex space-x-2">
                <Image
                  src={imgLogo}
                  alt="logo"
                  loading="lazy"
                  width={85}
                  height={40}
                  className="w-[85px] h-[40px] logo"
                />
                <div className="w-[140px] h-[44px] shrink-0"></div>
              </div>
              <div className="h-full w-full max-w-[900px] flex flex-col">
                <div className="flex items-center space-x-3 px-2 md:px-0">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 h-10 md:h-12 form-input rounded-full placeholder-gray-400 text-base px-3.5 py-2.5 shadow-sm bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault ps-12"
                    />
                    <span className="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 flex-shrink-0 text-gray-400"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[60px]">
                    <button
                      className="text-xs md:text-md font-bold font-lexend"
                      onClick={onClose}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
                <div className="mt-6 px-4 md:px-0 flex-1 h-full overflow-auto">
                  <div className="flex flex-col space-y-6 pb-10">
                    <section>
                      <span className="font-bold font-lexend">
                        Lịch sử tìm kiếm
                      </span>
                      <div className="mt-3 flex flex-col space-y-2">
                        <Link href="#" className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
                              />
                            </svg>
                          </span>
                          <span className="text-sm">bảo hành</span>
                        </Link>
                        <Link href="#" className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
                              />
                            </svg>
                          </span>
                          <span className="text-sm">gói bảo hành</span>
                        </Link>
                      </div>
                    </section>
                    <section>
                      <span className="font-bold font-lexend">
                        Khuyến mãi nổi bật
                      </span>
                      <div className="mt-3 flex flex-col space-y-2">
                        <Link
                          href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                          className="flex items-center space-x-2"
                          onClick={onClose}
                        >
                          <div className="w-6 h-6 rounded-full bg-rose-500 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-white"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
                              />
                            </svg>
                          </div>
                          <span className="text-sm">
                            LENOVO THINKPAD X1 - LAPTOP DOANH NHÂN &apos; SỐ
                            1&apos;
                          </span>
                        </Link>
                        <Link
                          href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                          className="flex items-center space-x-2"
                          onClick={onClose}
                        >
                          <div className="w-6 h-6 rounded-full bg-rose-500 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-white"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
                              />
                            </svg>
                          </div>
                          <span className="text-sm">
                            DELL XPS - LAPTOP WINDOW ĐẸP NHẤT
                          </span>
                        </Link>
                        <Link
                          href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                          className="flex items-center space-x-2"
                          onClick={onClose}
                        >
                          <div className="w-6 h-6 rounded-full bg-rose-500 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-white"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
                              />
                            </svg>
                          </div>
                          <span className="text-sm">
                            LAPTOP GAMER GIÁ SIÊU ƯU ĐÃI
                          </span>
                        </Link>
                        <Link
                          href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                          className="flex items-center space-x-2"
                          onClick={onClose}
                        >
                          <div className="w-6 h-6 rounded-full bg-rose-500 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-white"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
                              />
                            </svg>
                          </div>
                          <span className="text-sm">
                            🔥 LAPTOP CHÍNH HÃNG - DEAL RẺ VÔ ĐỊCH
                          </span>
                        </Link>
                        <Link
                          href="/khuyen-mai/laptop-chinh-hang-deal-soc"
                          className="flex items-center space-x-2"
                        >
                          <div className="w-6 h-6 rounded-full bg-rose-500 flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-white"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
                              />
                            </svg>
                          </div>
                          <span className="text-sm">
                            LENOVO THINKBOOK - HIỆU SUẤT CAO
                          </span>
                        </Link>
                      </div>
                    </section>
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
