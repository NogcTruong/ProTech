"use client";

import Link from "next/link";
import Image from "next/image";
import imgMascot from "@/assets/logos/mascot-logo.png";
import imgLogo from "@/assets/logos/logo-techpro-book.png";
import imgLogoMobile from "@/assets/logos/logo-techpro.png";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Search from "./home/Search";

const dataMenu = {
  categories: [
    {
      name: "Laptop",
      increase: ["ThinkPad", "Asus Vivobook", "Dell XPS", "Dell Inspiron"],
      suggest: [
        "Lenovo",
        "Dell",
        "Asus",
        "Acer",
        "Apple",
        "HP",
        "LG",
        "ThinkPad",
        "Asus Vivobook",
        "Dell XPS",
        "Dell Inspiron",
      ],
      products: [
        {
          name: "Dell",
          brand: [
            "XPS",
            "Inspiron",
            "Precision",
            "Latitude",
            "Alienware",
            "XPS 13",
            "Dell Inspiron 15",
          ],
        },
        {
          name: "HP",
          brand: ["ENVY", "Zbook", "Pavilion"],
        },
        {
          name: "Microsoft",
          brand: ["Surface Pro", "Office", "Surface Laptop"],
        },
        {
          name: "Acer",
          brand: ["Swift", "Nitro", "Predator"],
        },
      ],
    },
    {
      name: "Bàn phím, Chuột",
      children: [
        {
          name: "Bàn phím",
          brand: [
            "Keychron",
            "Lofree",
            "NuPhy",
            "AULA",
            "CIDOO",
            "WOB",
            "SATECHI",
            "LEOBOG",
            "Microsoft",
            "HyperWork",
            "XINMENG",
            "Weikav",
            "Akko",
            "FL-ESPORT",
            "Monsgeek",
            "MONKA",
            "Ducky",
            "HEIJISHE",
          ],
        },
        {
          name: "Chuột",
          brand: [
            "ATTACK SHARK",
            "Logitech",
            "Keychron",
            "HyperWork",
            "Ducky",
            "Lenovo",
            "Ugreen",
            "Pulsar",
            "Darmoshark",
            "Lofree",
            "AULA",
            "SATECHI",
          ],
        },
      ],
    },
    {
      name: "Balo",
      children: [
        {
          name: "Balo",
          brand: [
            "Keychron",
            "Lofree",
            "NuPhy",
            "AULA",
            "CIDOO",
            "WOB",
            "SATECHI",
          ],
        },
      ],
    },
  ],
};

export default function HeaderPage() {
  const boxCart = 400;
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartTop, setCartTop] = useState(110);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(1);
  const [widthFull, setWidthFull] = useState<number>(0);
  const pathname = usePathname();

  const currentCategory = dataMenu.categories[activeMenuIndex];

  useEffect(() => {
    const handleResize = () => setWidthFull(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && window.scrollY >= 48) {
        headerRef.current.classList.add("shadow-md");
      } else if (headerRef.current) {
        headerRef.current.classList.remove("shadow-md");
      }

      const y = window.scrollY;
      if (y >= 48) setCartTop(62);
      else setCartTop(110 - y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpenMenu || isOpenSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu, isOpenSearch]);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const openCart = isOpenCart
    ? {
        position: "fixed",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: `translate(${widthFull - boxCart - 23}px, ${cartTop}px)`,
      }
    : {};

  return (
    <header
      ref={headerRef}
      className={`the-header sticky top-0 z-20 ${
        pathname === "/" ? "!bg-[#e0f2fe]" : "!bg-white"
      } bg-white`}
    >
      <div className="container flex items-center space-x-2 py-2 h-full">
        <div className="flex items-center space-x-2">
          <div className="the-menu block md:hidden">
            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6 flex-shrink-0"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <Link href="/" className="header-logo">
            <Image
              src={imgLogo}
              alt="icon TechPro"
              aria-label="Đi đến trang chủ"
              width={85}
              height={40}
              className="w-[85px] h-10 max-w-[85px] hidden md:block"
            />
            <Image
              src={imgLogoMobile}
              alt="icon TechPro"
              aria-label="Đi đến trang chủ"
              width={48}
              height={24}
              className="w-12 h-6 block md:hidden"
            />
          </Link>
          <div className="the-menu hidden md:block">
            <button
              type="button"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
              onClick={handleOpenMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12m0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden md:block">Sản phẩm</span>
            </button>
            {isOpenMenu && (
              <div className="fixed top-[var(--the-header-offset-menu)] left-0 right-0 bottom-0">
                <div
                  className="backdrop-blur-md bg-transparent absolute inset-0 transition"
                  onClick={() => setIsOpenMenu(false)}
                ></div>
                <div className="!relative shadow-md absolute inset-0 overflow-y-auto">
                  <div className="!block !min-h-fit">
                    <div
                      className={`${
                        pathname === "/" ? "bg-[#DFF2FD]" : "bg-white"
                      } wrapper w-full`}
                    >
                      <div className="container h-[500px] flex pt-4 divide-x divide-space-x-4">
                        <div className="w-[300px] overflow-auto scroll-hidden">
                          <nav className="flex flex-col">
                            {dataMenu.categories.map((cat, idx) =>
                              cat.children ? (
                                <div
                                  key={cat.name}
                                  className="space-x-1 px-4 py-2 flex items-center rounded-lg hover:bg-gray-100 cursor-pointer"
                                  onMouseEnter={() => setActiveMenuIndex(idx)}
                                >
                                  {cat.children.map((child, cidx) => (
                                    <Link
                                      key={child.name}
                                      href="/ghe-cong-thai-hoc"
                                      className="text-left font-bold font-lexend hover:text-colorPrimary500"
                                    >
                                      {child.name}
                                      {cidx < cat.children.length - 1 && ","}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <Link
                                  key={cat.name}
                                  href="/ghe-cong-thai-hoc"
                                  className="px-4 py-2 flex items-center rounded-lg hover:bg-gray-100 cursor-pointer"
                                  onMouseEnter={() => setActiveMenuIndex(idx)}
                                >
                                  <span className="text-left font-bold font-lexend hover:text-colorPrimary500">
                                    {cat.name}
                                  </span>
                                </Link>
                              )
                            )}
                          </nav>
                        </div>
                        <div className="flex-1 h-full flex flex-col space-y-6 p-4 overflow-auto scrollbar-hide">
                          {dataMenu.categories[0] === currentCategory && (
                            <div className="">
                              <span className="text-xl font-bold font-lexend">
                                ⭐ Gợi ý cho bạn
                              </span>
                              <div
                                style={{ "--gap-x": "8px", "--gap-y": "8px" } as React.CSSProperties & Record<string, string>}
                              >
                                <div className="flex flex-wrap t-flex-gap__wrapper">
                                  {dataMenu.categories[0]?.suggest?.map(
                                    // suggest
                                    (title, index) => (
                                      <Link
                                        key={index}
                                        className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center min-w-[70px] justify-center"
                                        href="#"
                                      >
                                        <span>
                                          {dataMenu.categories[0]?.increase?.includes(
                                            title
                                          ) && (
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              className="flex-shrink-0 text-blue-600 h-5 w-5"
                                            >
                                              <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.942"
                                              />
                                            </svg>
                                          )}
                                        </span>
                                        <span>{title}</span>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                              {Array.isArray(currentCategory.children) ? (
                                <>
                                  <div className="flex flex-col space-y-4">
                                    <div>
                                      <Link
                                        href="#"
                                        className="flex items-center space-x-2"
                                      >
                                        <span className="text-xl font-bold font-lexend">
                                          {currentCategory.children[0].name}
                                        </span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          className="w-6 h-6"
                                        >
                                          <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                          />
                                        </svg>
                                      </Link>
                                      <div className="mt-4 flex flex-col space-y-2">
                                        {currentCategory.children[0].brand.map(
                                          (brand, bidx) => (
                                            <Link
                                              key={bidx}
                                              href="#"
                                              className="flex items-center space-x-2 hover:underline"
                                            >
                                              <span>{brand}</span>
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  {currentCategory?.children[1]?.name && (
                                    <div className="flex flex-col space-y-4">
                                      <div>
                                        <Link
                                          href="#"
                                          className="flex items-center space-x-2"
                                        >
                                          <span className="text-xl font-bold font-lexend">
                                            {currentCategory?.children[1]?.name}
                                          </span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="1.5"
                                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                          </svg>
                                        </Link>
                                        <div className="mt-4 flex flex-col space-y-2">
                                          {currentCategory?.children[1]?.brand.map(
                                            (brand, bidx) => (
                                              <Link
                                                key={bidx}
                                                href="#"
                                                className="flex items-center space-x-2 hover:underline"
                                              >
                                                <span>{brand}</span>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <>
                                  <div className="flex flex-col space-y-4">
                                    {currentCategory.products
                                      ?.filter((_, idx) => idx % 2 === 0)
                                      .map((product, index) => (
                                        <div key={index}>
                                          <Link
                                            href="#"
                                            className="flex items-center space-x-2"
                                          >
                                            <span className="text-xl font-bold font-lexend">
                                              {product.name}
                                            </span>
                                          </Link>
                                          <div className="mt-4 flex flex-col space-y-2">
                                            {Array.isArray(product.brand) &&
                                              product.brand.map(
                                                (brand, bidx) => (
                                                  <Link
                                                    key={bidx}
                                                    href="#"
                                                    className="flex items-center space-x-2 hover:underline"
                                                  >
                                                    <span>{brand}</span>
                                                  </Link>
                                                )
                                              )}
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                  <div className="flex flex-col space-y-4">
                                    {currentCategory.products
                                      ?.filter((_, idx) => idx % 2 !== 0)
                                      .map((product, index) => (
                                        <div key={index}>
                                          <Link
                                            href="#"
                                            className="flex items-center space-x-2"
                                          >
                                            <span className="text-xl font-bold font-lexend">
                                              {product.name}
                                            </span>
                                            {/* ...icon... */}
                                          </Link>
                                          <div className="mt-4 flex flex-col space-y-2">
                                            {Array.isArray(product.brand) &&
                                              product.brand.map(
                                                (brand, bidx) => (
                                                  <Link
                                                    key={bidx}
                                                    href="#"
                                                    className="flex items-center space-x-2 hover:underline"
                                                  >
                                                    <span>{brand}</span>
                                                  </Link>
                                                )
                                              )}
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-[300px] p-4 overflow-auto scrollbar-hide">
                          <span className="text-xl font-semibold font-lexend">
                            Sản phẩm nổi bật
                          </span>
                          <div className="mt-6 flex flex-col space-y-2">
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white p-2 border"
                            >
                              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                                <Image
                                  width={72}
                                  height={72}
                                  alt="Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U, 16GB, 512GB, FHD+ Touch"
                                  src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png"
                                  className="lazyloaded"
                                />
                              </div>
                              <div className="flex-1 flex flex-col space-y-1">
                                <span className="text-sm md:text-base font-medium line-clamp-2">
                                  Lenovo ThinkPad X1 Carbon Gen 11 i7 1355U,
                                  16GB, 512GB, FHD+ Touch
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm md:text-base text-rose-600 font-medium">
                                    26.790.000
                                  </span>
                                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                                    -19%
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="the-input-search flex-1 md:flex-none">
          <label
            className="block relative ring-1 ring-gray-300 shadow-sm rounded-full overflow-hidden"
            onClick={handleOpenSearch}
          >
            <span className="search-icon w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-colorPrimary400 absolute top-1 left-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Xin chào, bạn đang tìm gì?"
              className="hidden md:block w-full md:w-[343px] h-10 pl-14 md:h-12 pr-15 outline-none bg-colorPray100"
            />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="block md:hidden w-full md:w-[343px] h-10 pl-14 md:h-12 pr-15 outline-none bg-colorPray100"
            />
            <Image
              src={imgMascot}
              alt="logo mascot"
              className="hidden lg:block absolute right-0 bottom-0"
              width={40}
              height={40}
            />
          </label>
          {isOpenSearch && <Search onClose={() => setIsOpenSearch(false)} />}
        </div>
        <div className="md:flex-1"></div>
        <div className="cursor-pointer focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault items-center btn-account hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.982 18.725A7.49 7.49 0 0 0 12 15.75a7.49 7.49 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.963 0m11.962 0A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
            />
          </svg>
          <SignedOut>
            <SignUpButton>Đăng nhập</SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="relative">
          <div className="inline-flex w-full">
            <div className="relative inline-flex items-center justify-center flex-shrink-0">
              <div className="dark">
                <button
                  className="hidden md:inline-flex focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-2.5 py-2.5 shadow-sm colorPray900 bg-[#00E1F9] hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault items-center btn-cart"
                  aria-label="Giỏ hàng"
                  onClick={handleOpenCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 md:w-6 md:h-6"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
                    />
                  </svg>
                  <span className="hidden lg:block">31.990.000 ₫</span>
                </button>
                <Link
                  href="/gio-hang"
                  className="inline-flex md:hidden focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm text-white bg-colorPrimary400 hover:bg-colorPrimary600 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 dark:focus-visible:outline-colorPrimary400 items-center btn-cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 md:w-6 md:h-6 text-black"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
                    />
                  </svg>
                </Link>
              </div>
              <span className="absolute rounded-full ring-1 ring-white flex items-center justify-center text-colorPray50 font-medium whitespace-nowrap top-1 right-2 h-3.5 min-w-[0.875rem] text-[11px] p-1 top-0 right-0 -translate-y-1/2 translate-x-1/2 transform bg-orange-500">
                1
              </span>
            </div>
          </div>
          {isOpenCart && (
            <div className="z-50 group" style={openCart}>
              <div className="overflow-hidden focus:outline-none relative bg-white ring-1 ring-gray-200 rounded-2xl shadow-lg">
                <div className="flex flex-col w-[400px]">
                  <div className="border-b flex justify-between items-center space-x-2 px-4 py-2 bg-gray-100">
                    <span className="text-lg font-lexend font-bold">
                      Giỏ hàng (1)
                    </span>
                    <a
                      href="/gio-hang"
                      className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                    >
                      <span className="">Xem tất cả</span>
                    </a>
                  </div>
                  <div className="p-4">
                    <a
                      href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                      className="group/cart relative flex items-center space-x-3 shrink-0 py-2 px-3 rounded-2xl hover:bg-gray-100"
                    >
                      <div className="w-[72px] h-[72px] overflow-hidden rounded-lg">
                        <Image
                          width={72}
                          height={72}
                          alt="Ghế Công Thái Học Manson Atum"
                          src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://media-api-beta.thinkpro.vn/media/core/products/2024/11/28/ghe-cong-thai-hoc-manson-atum-thinkpro-goodspace-6iG.jpg"
                          className="lazyloaded"
                        />
                      </div>
                      <div className="flex-1 flex flex-col space-y-1">
                        <span className="text-sm font-medium line-clamp-2">
                          Ghế Công Thái Học Manson Atum
                        </span>
                        <span className="text-xs text-gray-600">
                          Bản Pro - Kèm kê chân / Gray / Mới, Full box, Chính
                          hãng
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-rose-600 font-medium">
                            6.790.000
                          </span>
                          <span className="text-sm line-through">
                            7.990.000
                          </span>
                          <div className="flex-1"></div>
                          <span className="text-sm">x1</span>
                        </div>
                      </div>
                      <div className="group-hover/cart:opacity-100 opacity-0 transition-opacity absolute top-1 right-1">
                        <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
                            />
                          </svg>
                        </button>
                      </div>
                    </a>
                  </div>
                  <div className="border-t px-4 py-2.5 flex items-center space-x-2">
                    <div className="flex flex-col w-2/5">
                      <span className="text-xs text-gray-600">Tổng cộng</span>
                      <span className="text-lg font-semibold">6.790.000</span>
                    </div>
                    <div className="flex-1 dark">
                      <a
                        href="/checkout"
                        className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center"
                      >
                        <span className="">Đặt hàng</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
