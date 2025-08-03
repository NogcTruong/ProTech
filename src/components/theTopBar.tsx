"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function theTopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={isHome ? "bg-[#e0f2fe] the-top-bar" : "bg-white the-top-bar"}
    >
      <div className="container h-12 py-2.5 hidden md:flex items-center">
        <div className="inline-flex -space-x-px rounded-full shadow-sm">
          <Link href="tel:1900633579" rel="noopener noreferrer">
            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-s-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-phone-call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-colorPrimary400"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
                />
              </svg>
              <span>1900.63.3579</span>
            </button>
          </Link>
          <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-e-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-support">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="text-green-500"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.712 4.33a9 9 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.01 9.01 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.01 9.01 0 0 1 0 9.424m-4.138-5.976a3.7 3.7 0 0 0-.88-1.388a3.7 3.7 0 0 0-1.388-.88m2.268 2.268a3.77 3.77 0 0 1 0 2.528m-2.268-4.796a3.77 3.77 0 0 0-2.528 0m4.796 4.796a3.75 3.75 0 0 1-.88 1.388a3.7 3.7 0 0 1-1.388.88m2.268-2.268l4.138 3.448m0 0a9 9 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.01 9.01 0 0 1-9.424 0m5.976-4.138a3.77 3.77 0 0 1-2.528 0m0 0a3.7 3.7 0 0 1-1.388-.88a3.7 3.7 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9 9 0 0 1-1.652-1.306a9 9 0 0 1-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.01 9.01 0 0 1 0-9.424m4.138 5.976a3.77 3.77 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.7 3.7 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9 9 0 0 0-1.652 1.306A9 9 0 0 0 4.33 7.288"
              />
            </svg>
            <span>Hỗ trợ</span>
          </button>
        </div>
        <div className="flex-1"></div>
        <Link
          className="cursor-pointer focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center justify-center btn-store-address"
          href="/dia-chi-cua-hang"
        >
          <span className="flex-shrink-0 h-4 w-4" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
              />
            </svg>
          </span>
          <span className="">Địa chỉ cửa hàng</span>
        </Link>
        <Link
          className="cursor-pointer focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center justify-center btn-store-address"
          href="/tin-tuc"
        >
          <span className="flex-shrink-0 h-4 w-4" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6z"
              />
            </svg>
          </span>
          <span className="">Tin tức</span>
        </Link>
      </div>
    </div>
  );
}
