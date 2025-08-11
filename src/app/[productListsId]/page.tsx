"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import banner1 from "@/assets/images/bao-hanh-chinh-hang-phu-kien-6ww.webp";
import banner2 from "@/assets/images/back-to-school-2025-snp.webp";
import ProductList from "@/components/common/productList";
import { useEffect, useRef, useState } from "react";
import "./productLists.css";
import Link from "next/link";
import clsx from "clsx";
import FilterProductListsModal from "@/components/product/productLists/FilterProductListsModal";

const brands = [
  { brand: "Nintendo Switch" },
  { brand: "XREAL" },
  { brand: "Meta" },
  { brand: "Playstation" },
  { brand: "Rokid" },
  { brand: "Microsoft" },
  { brand: "Sony" },
  { brand: "STEAM DECK" },
  { brand: "Machenike" },
  { brand: "Apple" },
  { brand: "HGST" },
  // { brand: "Lenovo" },
];

const laptopProducts = [
  {
    name: "Lenovo Yoga Book 9 13IMH9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/16/lenovo-yoga-book-9-13imu9-83ff001svn-undefined.png",
    price: "6200000",
    discount: "-10%",
    color: ["#808080"],
    version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    brand: "Nintendo Switch",
  },
  {
    name: "Asus Vivobook S 15 S5507OA",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-zenbook-s14-oled-ux5406sa-pv140ws-undefined-M13.png",
    price: "3500000",
    discount: "-15%",
    color: ["#C0C0C0"],
    version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    brand: "XREAL",
  },
  {
    name: "Lenovo Legion Pro 5 16IRX9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/17/lenovo-yoga-9-2-in-1-14imh9-83ac000svn-undefined-Dvb.png",
    price: "5500000",
    discount: "-12%",
    color: ["#000000"],
    version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    brand: "XREAL",
  },
  {
    name: "Lenovo Yoga 9 2-in-1 14IMH9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
    price: "4500000",
    discount: "-8%",
    color: ["#00CED1"],
    version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    brand: "Playstation",
  },
  {
    name: "Lenovo ThinkPad T14 Gen 5",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
    price: "3000000",
    discount: "-5%",
    color: ["#000000"],
    version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    brand: "Rokid",
  },
  {
    name: "Lenovo Yoga Book 9 13IMH9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/16/lenovo-yoga-book-9-13imu9-83ff001svn-undefined.png",
    price: "6200000",
    discount: "-10%",
    color: ["#808080"],
    version: "Ultra 7 155U, 32GB, 1TB, 2.8K OLED Touch",
    brand: "Microsoft",
  },
  {
    name: "Asus Vivobook S 15 S5507OA",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-zenbook-s14-oled-ux5406sa-pv140ws-undefined-M13.png",
    price: "3500000",
    discount: "-15%",
    color: ["#C0C0C0"],
    version: "Snapdragon X1E, 32GB, 1TB, 3K OLED 120Hz",
    brand: "Sony",
  },
  {
    name: "Lenovo Legion Pro 5 16IRX9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/17/lenovo-yoga-9-2-in-1-14imh9-83ac000svn-undefined-Dvb.png",
    price: "5500000",
    discount: "-12%",
    color: ["#000000"],
    version: "i9 14900HX, RTX 4070 8GB, 32GB, WQXGA 240Hz",
    brand: "STEAM DECK",
  },
  {
    name: "Lenovo Yoga 9 2-in-1 14IMH9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
    price: "4500000",
    discount: "-8%",
    color: ["#00CED1"],
    version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    brand: "Machenike",
  },
  {
    name: "Lenovo ThinkPad T14 Gen 5",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
    price: "3000000",
    discount: "-5%",
    color: ["#000000"],
    version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    brand: "Apple",
  },
  {
    name: "Lenovo Yoga 9 2-in-1 14IMH9",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2024/9/18/lenovo-legion-pro-5-16irx9-83df0046vn-undefined-B0k.png",
    price: "4500000",
    discount: "-8%",
    color: ["#00CED1"],
    version: "Ultra 7 155H, 16GB, 1TB, 2.8K 120Hz Touch",
    brand: "HGST",
  },
  {
    name: "Lenovo ThinkPad T14 Gen 5",
    img: "https://imagor.owtg.one/unsafe/fit-in/280x280/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/laptop-asus-vivobook-s-15-s5507qa-ma090ws-undefined-4oS.png",
    price: "3000000",
    discount: "-5%",
    color: ["#000000"],
    version: "Ultra 5 125U, 16GB, 512GB, WUXGA",
    brand: "Lenovo",
  },
];

export default function ProductListsPage() {
  const params = useParams();
  const { productListsId } = params;
  const [activeCategory, setActiveCategory] = useState("laptop");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [buttonCompare, setButtonCompare] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(true);
  const [isOpenPrices, setIsOpenPrices] = useState(true);
  const [isOpenPromotion, setIsOpenPromotion] = useState(true);
  const [isOpenColors, setIsOpenColors] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isOpenIndex, setIsOpenIndex] = useState(false);
  const [infoBox, setInfoBox] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [sortBy, setSortBy] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [hasPromotion, setHasPromotion] = useState<boolean>(false);
  const router = useRouter();
  const totalSelected =
    selectedBrands.length +
    selectedPrices.length +
    selectedColors.length +
    (hasPromotion ? 1 : 0);

  const handleButton = () => {
    setHasPromotion(!hasPromotion);
  };

  // handle filter
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const filterTableCSS = isOpen
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute",
        margin: "0px",
      }
    : {};

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleButtonCompare = () => {
    setButtonCompare(!buttonCompare);
  };

  const handleComparative = () => {
    router.push(
      "/so-sanh/ban-phim-co-leobog-amg65-vs-ban-phim-co-keychron-k10-max"
    );
  };

  const handleOpenBrands = () => {
    setIsOpenBrands(!isOpenBrands);
  };

  const handleOpenPrices = () => {
    setIsOpenPrices(!isOpenPrices);
  };

  const handleOpenPromotion = () => {
    setIsOpenPromotion(!isOpenPromotion);
  };

  const handleOpenColors = () => {
    setIsOpenColors(!isOpenColors);
  };

  const handleOpenIndex = () => {
    setIsOpenIndex(!isOpenIndex);
  };

  const handleInfoBox = () => {
    setInfoBox(!infoBox);
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const getFilteredProducts = () => {
    let products = laptopProducts;

    if (selectedBrands.length > 0) {
      products = products.filter((product) =>
        selectedBrands.some(
          (brand) =>
            product.brand && product.brand.toLowerCase() === brand.toLowerCase()
        )
      );
    }

    if (selectedPrices.length > 0) {
      products = products.filter((product) => {
        const price = Number(product.price);
        return selectedPrices.some((priceRange) => {
          if (priceRange === "1-2") return price >= 1000000 && price <= 2000000;
          if (priceRange === "2-5") return price >= 2000000 && price <= 5000000;
          if (priceRange === "5+") return price >= 5000000;
          return true;
        });
      });
    }

    if (selectedColors.length > 0) {
      products = products.filter((product) =>
        product.color.some((c) => selectedColors.includes(c))
      );
    }

    if (sortBy === "price-asc") {
      products = [...products].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (sortBy === "price-desc") {
      products = [...products].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    return products;
  };

  const data = getFilteredProducts();

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, data.length));
  };

  const dataProductLists = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  // Handle chev of category
  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      el.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="collection-page">
        <div className="container py-5 md:py-10">
          <div className="mb-5 md:mb-8">
            <nav className="min-w-0 hidden md:block">
              <ol className="flex items-center gap-x-1.5">
                <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
                  <a
                    href="#"
                    type="button"
                    className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
                  >
                    <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                      Trang chủ
                    </span>
                  </a>
                  <span role="presentation">/</span>
                </li>
                <li className="flex items-center gap-x-1.5 text-colorPray500 text-sm leading-6 min-w-0">
                  <a
                    href="#"
                    type="button"
                    className="flex items-center gap-x-1.5 group font-semibold min-w-0"
                  >
                    <span className="dark">
                      <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 bg-colorPrimary400 rounded-full truncate text-colorPray900">
                        Ghế công thái học
                      </span>
                    </span>
                  </a>
                </li>
              </ol>
            </nav>
            <a
              href="#"
              type="button"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-colorPray300 text-colorPray700 bg-colorPray50 hover:bg-colorPray100 disabled:bg-colorPray50 aria-disabled:bg-colorPray50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75"
                  clipRule="evenodd"
                />
              </svg>
              <span>Ghế công thái học</span>
            </a>
          </div>
          <section className="mb-5 md:mb-8">
            <div className="relative w-full overflow-auto snap-x snap-mandatory scroll-smooth flex md:space-x-4 rounded-2xl md:rounded-3xl no-scrollbar">
              <div className="flex-none snap-start w-full md:w-[calc(50%-8px)] block aspect-w-3 aspect-h-1 md:aspect-w-6 md:aspect-h-1 rounded-2xl md:rounded-3xl overflow-hidden">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <Image
                    src={banner1}
                    width={390}
                    height={130}
                    alt="Bảo hành chính hãng phụ kiện"
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
              <div className="flex-none snap-start w-full md:w-[calc(50%-8px)] block aspect-w-3 aspect-h-1 md:aspect-w-6 md:aspect-h-1 rounded-2xl md:rounded-3xl overflow-hidden">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <Image
                    src={banner2}
                    width={390}
                    height={130}
                    alt="Bảo hành chính hãng phụ kiện"
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </div>
          </section>
          <div className="mb-5 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-bold font-lexend">
              Thực tế ảo/ Game Console
            </h1>
          </div>
          <div className="relative group/scrollable">
            <div className="flex items-center">
              <div
                ref={scrollRef}
                className="overflow-x-auto overflow-y-auto scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="flex space-x-2 md:space-x-4">
                  {brands.map((brand, index) => (
                    <a
                      key={index}
                      href="#"
                      className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center min-w-[70px] justify-center"
                    >
                      <span>{brand.brand}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block group-hover/scrollable:opacity-100 opacity-100 md:opacity-0 transition-opacity duration-200">
              {showLeft && (
                <button
                  onClick={() => scrollBy(-50)}
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center rtl:[&_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
                  style={{ zIndex: 1 }}
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
              )}
              {showRight && (
                <button
                  onClick={() => scrollBy(50)}
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center rtl:[&_span:last-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full"
                  style={{ zIndex: 1 }}
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
              )}
            </div>
          </div>
          <div className="mt-4 md:mt-6 flex md:space-x-6">
            <div className="fixed md:sticky md:w-1/4 md:top-[var(--the-header-offset)] z-10 h-[calc(100vh_-_var(--the-header-height))] overflow-auto">
              <div className="pb-6">
                <div className="font-bold font-lexend hidden md:flex items-center space-x-1 py-4">
                  <span>50 sản phẩm</span>
                </div>
                <div className="section-filter-listing">
                  <div className="w-full rounded-2xl bg-white border divide-y">
                    <div className="w-full flex flex-col px-1">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px] cursor-pointer"
                        onClick={handleOpenBrands}
                      >
                        <span className="truncate font-bold font-lexend">
                          Thương hiệu
                          <span
                            className={`${
                              selectedBrands.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedBrands.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedBrands.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedBrands([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenBrands ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            {brands.map((brand, index) => (
                              <div key={index} className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(
                                      brand.brand
                                    )}
                                    id={`b-${index}`}
                                    onChange={() =>
                                      handleBrandChange(brand.brand)
                                    }
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor={`b-${index}`}
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    {brand.brand}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px] cursor-pointer"
                        onClick={handleOpenPrices}
                      >
                        <span className="truncate font-bold font-lexend">
                          Khoảng giá
                          <span
                            className={`${
                              selectedPrices.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedPrices.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedPrices.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedPrices([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenPrices ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-1_2"
                                  checked={selectedPrices.includes("1-2")}
                                  onChange={() => handlePriceChange("1-2")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-1_2"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Từ 1 - 2 triệu
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-2_5"
                                  checked={selectedPrices.includes("2-5")}
                                  onChange={() => handlePriceChange("2-5")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-2_5"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Từ 2 - 5 triệu
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="p-5"
                                  checked={selectedPrices.includes("5+")}
                                  onChange={() => handlePriceChange("5+")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="p-5"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Trên 5 triệu
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1 cursor-pointer">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px]"
                        onClick={handleOpenPromotion}
                      >
                        <span className="truncate font-bold font-lexend">
                          Có khuyến mại
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            hasPromotion ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setHasPromotion(false)}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${
                          isOpenPromotion ? "h-auto" : "h-0 hidden"
                        }`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <button
                            className={`${
                              hasPromotion
                                ? "bg-colorPrimaryDefault"
                                : "bg-gray-200"
                            } relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none h-5 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                            onClick={() => handleButton()}
                          >
                            <span
                              className={`${
                                hasPromotion
                                  ? "translate-x-4 rtl:-translate-x-4"
                                  : "translate-x-0 rtl:-translate-x-0"
                              } pointer-events-none relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 h-4 w-4`}
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col px-1 cursor-pointer">
                      <div
                        className="flex items-center space-x-1 px-4 py-3 h-[52px]"
                        onClick={handleOpenColors}
                      >
                        <span className="truncate font-bold font-lexend">
                          Màu sắc
                          <span
                            className={`${
                              selectedColors.length > 0
                                ? "inline-block"
                                : "hidden"
                            }`}
                          >
                            ({selectedColors.length})
                          </span>
                        </span>
                        <div className="flex-1"></div>
                        <button
                          className={`${
                            selectedColors.length > 0 ? "block" : "hidden"
                          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend`}
                          onClick={() => setSelectedColors([])}
                        >
                          <span>Xóa lọc</span>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`${isOpenColors ? "h-auto" : "h-0 hidden"}`}
                      >
                        <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                          <div className="w-full grid grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-black"
                                  checked={selectedColors.includes("#000000")}
                                  onChange={() => handleColorChange("#000000")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-black"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Đen
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-grey"
                                  checked={selectedColors.includes("#C0C0C0")}
                                  onChange={() => handleColorChange("#C0C0C0")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-grey"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xám
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-green"
                                  checked={selectedColors.includes("#00CED1")}
                                  onChange={() => handleColorChange("#00CED1")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-green"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xanh lá
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  type="checkbox"
                                  id="c-blue"
                                  checked={selectedColors.includes("#808080")}
                                  onChange={() => handleColorChange("#808080")}
                                  className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                />
                              </div>
                              <div className="ms-3 flex flex-col">
                                <label
                                  htmlFor="c-blue"
                                  className="text-sm font-medium text-colorPray900"
                                >
                                  Xanh dương
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="bottom-6 right-1/2 translate-x-1/2 transition-all ease-linear duration-300 fixed z-[11]">
                  <div className="dark">
                    <button
                      className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-gray-900 bg-colorPrimaryDefault hover:bg-colorPrimary600 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault inline-flex items-center button-sticky-filterable"
                      onClick={handleOpenFilter}
                    >
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
                          strokeWidth="1.5"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                        />
                      </svg>
                      <span>Lọc</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="visible-filterable flex-1">
              <div className="h-9 flex items-center space-x-6 my-1 md:my-3 md:py-2">
                <div>
                  <button
                    className={`${
                      totalSelected === 0 ? "!hidden" : "block"
                    } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-900  bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault items-center hidden md:block`}
                    onClick={() => {
                      setSelectedBrands([]);
                      setSelectedPrices([]);
                      setSelectedColors([]);
                      setHasPromotion(false);
                    }}
                  >
                    <span>Xóa hết lọc ({totalSelected})</span>
                  </button>
                  <span className="font-bold font-lexend md:hidden">
                    41 sản phẩm
                  </span>
                </div>
                <div className="flex-1"></div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">So sánh</span>
                    <button
                      className={`${
                        buttonCompare ? "bg-colorPrimaryDefault" : "bg-gray-200"
                      } relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none h-5 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                      onClick={handleButtonCompare}
                    >
                      <span
                        className={`${
                          buttonCompare
                            ? "translate-x-4 rtl:-translate-x-4"
                            : "translate-x-0 rtl:-translate-x-0"
                        } pointer-events-none relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 h-4 w-4`}
                      ></span>
                    </button>
                  </div>
                  {/*  */}
                  <div
                    className={clsx(
                      buttonCompare ? "" : "translate-y-[calc(100%_+_16px)]",
                      "transition-transform duration-300 hidden md:block fixed bottom-0 left-0 right-0 z-[11] bg-white shadow-inverse-md"
                    )}
                  >
                    <div className="container py-2 flex space-x-4">
                      <Link
                        href="#!"
                        className="group flex space-x-3 w-[240px] hover:bg-gray-100 p-2 rounded-lg"
                      >
                        <div className="w-[72px] h-[72px] rounded-lg bg-gray-100 overflow-hidden relative">
                          <Image
                            width={72}
                            height={72}
                            alt=""
                            src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/28/ban-phim-co-leobog-amg65-qkd.jpg"
                          />
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1 left-1">
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 h-5 w-5"
                              >
                                <path
                                  fill="currentColor"
                                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 line-clamp-3">
                          <span className="text-sm font-medium">
                            Bàn Phím Cơ Leobog AMG65 Light Feather Silent Switch
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="#!"
                        className="group flex space-x-3 w-[240px] hover:bg-gray-100 p-2 rounded-lg"
                      >
                        <div className="w-[72px] h-[72px] rounded-lg bg-gray-100 overflow-hidden relative">
                          <Image
                            width={72}
                            height={72}
                            alt=""
                            src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/28/ban-phim-co-leobog-amg65-qkd.jpg"
                          />
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1 left-1">
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 h-5 w-5"
                              >
                                <path
                                  fill="currentColor"
                                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 line-clamp-3">
                          <span className="text-sm font-medium">
                            Bàn Phím Cơ Leobog AMG65 Light Feather Silent Switch
                          </span>
                        </div>
                      </Link>
                      <div className="flex-1"></div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                        >
                          <span>Xóa tất cả</span>
                        </button>
                        <div className="w-full">
                          <button
                            className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-primary-500 aria-disabled:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 inline-flex items-center"
                            onClick={handleComparative}
                          >
                            <span>So sánh</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="flex-shrink-0 h-6 w-6"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative hidden md:block min-w-[160px]"
                  onClick={handleToggle}
                >
                  <div className="w-full">
                    <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
                      <span className="block truncate">
                        {sortBy === "featured"
                          ? "Nổi bật nhất"
                          : sortBy === "price-asc"
                          ? "Giá thấp → cao"
                          : "Giá cao → thấp"}
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
                  {isOpen && (
                    <div
                      className="w-full z-20 group m-0"
                      style={filterTableCSS}
                    >
                      <div className="">
                        <ul className="relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-colorPray200 rounded-md shadow-lg bg-white p-1 max-h-60">
                          <li
                            className="relative cursor-default select-none flex items-center justify-between gap-1 rounded-md px-1.5 py-1.5 text-sm text-colorPray900 hover:bg-colorPray100 hover:pe-7"
                            role="option"
                            aria-selected="true"
                            onClick={() => {
                              setSortBy("featured");
                              setIsOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">Nổi bật nhất</span>
                            </div>
                            {sortBy === "featured" && (
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
                            onClick={() => {
                              setSortBy("price-asc");
                              setIsOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">Giá thấp → cao</span>
                            </div>
                            {sortBy === "price-asc" && (
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
                            onClick={() => {
                              setSortBy("price-desc");
                              setIsOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">Giá cao → thấp</span>
                            </div>
                            {sortBy === "price-desc" && (
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
              <div className="mt-2">
                <ProductList
                  products={dataProductLists}
                  title="Sản phẩm khuyến mãi"
                  showCompareButton={buttonCompare}
                />
                {hasMore && (
                  <div className="mt-10 flex justify-center">
                    <button
                      className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more"
                      onClick={handleShowMore}
                    >
                      <span>Xem thêm</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 flex-shrink-0"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:container">
          <section className="section-info-box">
            {/* ${
                handleInfoBox ? "is-active" : ""
              } */}
            <div
              className={`${
                infoBox ? "is-active" : ""
              } section-info-box__wrapper`}
            >
              <div className="editor-viewer prose prose-base md:prose-lg mx-auto">
                <p>
                  <a href="#!">Laptop </a>đã trở thành thiết bị không thể thiếu
                  trong cuộc sống hiện đại. Với sự nhỏ gọn, tiện lợi và khả năng
                  xử lý đa dạng các tác vụ, laptop đáp ứng đầy đủ nhu cầu học
                  tập, làm việc đến giải trí của mọi người. Trong bài viết này
                  <strong> ThinkPro </strong>
                  sẽ cung cấp cho bạn hướng dẫn tìm hiểu chi tiết từ A đến Z về
                  laptop.
                </p>
                <div data-type="tableOfContents" onClick={handleOpenIndex}>
                  <div className="toc-title--wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 icon-bar-index"
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
                    <span className="toc-title">Mục lục bài viết</span>
                  </div>
                  <div className="toc-expand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className={`${
                        isOpenIndex ? "" : "rotate-180"
                      } h-5 w-5 toc-icon--expand`}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m19.5 8.25l-7.5 7.5l-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${isOpenIndex && "!flex"} toc-anchor--wrapper`}
                  >
                    <Link
                      href="#LT1"
                      className="#LT1"
                      data-origin-level="2"
                      rel="nofollow"
                    >
                      1. Lịch sử ra đời của laptop (máy tính xách tay)
                    </Link>
                    <Link
                      href="#LT2"
                      className="#LT1"
                      data-origin-level="2"
                      rel="nofollow"
                    >
                      2. Thông số kỹ thuật cơ bản của laptop
                    </Link>
                    <Link
                      href="#LT2.1"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      2.1. CPU
                    </Link>
                    <Link
                      href="#LT2.2"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      2.2. RAM
                    </Link>
                    <Link
                      href="#LT"
                      className="#LT1"
                      data-origin-level="2.3"
                      rel="nofollow"
                    >
                      2.3. Ổ cứng
                    </Link>
                    <Link
                      href="#LT2.4"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      2.4. Card đồ họa
                    </Link>
                    <Link
                      href="#LT2.5"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      2.5. Màn hình
                    </Link>
                    <Link
                      href="#LT2.6"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      2.6. Độ phân giải
                    </Link>
                    <Link
                      href="#LT3"
                      className="#LT1"
                      data-origin-level="2"
                      rel="nofollow"
                    >
                      3. Các dòng laptop đang kinh doanh tại ThinkPro
                    </Link>
                    <Link
                      href="#LT3.1"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      3.1. Laptop văn phòng - học tập
                    </Link>
                    <Link
                      href="#LT3.2"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      3.2. Laptop Gaming
                    </Link>
                    <Link
                      href="#LT3.3"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      3.3. Laptop đồ họa
                    </Link>
                    <Link
                      href="#LT3.4"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      3.4. Laptop lập trình
                    </Link>
                    <Link
                      href="#LT4"
                      className="#LT1"
                      data-origin-level="2"
                      rel="nofollow"
                    >
                      5. Các thương hiệu laptop đang kinh doanh tại ThinkPro
                    </Link>
                    <Link
                      href="#LT5.1"
                      className="#LT1"
                      data-origin-level="3"
                      rel="nofollow"
                    >
                      5.1. Laptop Lenovo
                    </Link>
                    <Link
                      href="#LT5.1.1"
                      className="#LT1"
                      data-origin-level="4"
                      rel="nofollow"
                    >
                      5.1.1 Lenovo Thinkpad
                    </Link>
                    <Link
                      href="#LT1"
                      className="#LT1"
                      data-origin-level="4"
                      rel="nofollow"
                    >
                      5.1.2. Lenovo Thinkbook
                    </Link>
                    <Link
                      href="#LT1"
                      className="#LT1"
                      data-origin-level="4"
                      rel="nofollow"
                    >
                      5.1.3. Lenovo Legion
                    </Link>
                    <Link
                      href="#LT1"
                      className="#LT1"
                      data-origin-level="4"
                      rel="nofollow"
                    >
                      5.1.4. Lenovo Yoga
                    </Link>
                  </div>
                </div>
                <h2 id="LT1" className="font-lexend">
                  <strong>
                    1. Lịch sử ra đời của laptop (máy tính xách tay)
                  </strong>
                </h2>
                <p>
                  <strong>Laptop</strong>
                  (máy tính xách tay) đã trải qua một hành trình phát triển đáng
                  kể kể từ khi được ra đời vào năm 1981 bởi Adam Osborne với
                  chiếc Osborne 1. Từ khi Osborne 1 xuất hiện, laptop đã trải
                  qua một loạt sự thay đổi và cải tiến đáng kể. Kích thước đã
                  giảm, hiệu suất tăng lên đáng kể, trọng lượng giảm và tính di
                  động được nâng cao.
                </p>
                <figure data-type="figure">
                  <div data-type="imageBlock">
                    <Image
                      width={868}
                      height={542}
                      alt="Chiếc máy tính này được gọi là"
                      src="https://d28jzcg6y4v9j1.cloudfront.net/laptop_1_1718991238018.jpg"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="not-prose">
                    <p>Chiếc máy tính này được gọi là &quot;Osborne 1&quot;</p>
                  </figcaption>
                </figure>
                <p>
                  Các tiến bộ trong công nghệ đã đóng một vai trò quan trọng
                  trong việc thúc đẩy sự phát triển của laptop. Vi xử lý tiên
                  tiến, bộ nhớ lớn hơn, màn hình cảm ứng và ổ SSD đã làm cho
                  laptop trở nên mạnh mẽ và tiện ích hơn. Những thay đổi này
                  không chỉ làm tăng hiệu suất mà còn tạo ra những trải nghiệm
                  người dùng tốt hơn.
                </p>
                <p>
                  Sự phát triển của laptop đã tạo ra sức ảnh hưởng lớn đối với
                  đời sống và kinh tế. Trong môi trường kinh doanh, laptop cho
                  phép người dùng làm việc từ bất kỳ đâu, giúp tăng năng suất và
                  sự linh hoạt.
                </p>
                <figure data-type="figure">
                  <div data-type="imageBlock">
                    <Image
                      width={868}
                      height={542}
                      alt="Laptop đã trở thành một phần không thể thiếu trong cuộc sống hiện đại"
                      src="https://d28jzcg6y4v9j1.cloudfront.net/laptop_2_1718991238097.jpg"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="not-prose">
                    <p>
                      Laptop đã trở thành một phần không thể thiếu trong cuộc
                      sống hiện đại
                    </p>
                  </figcaption>
                </figure>
                <p>
                  Trong tương lai, dự kiến ​​rằng laptop sẽ tiếp tục phát triển
                  với sự tích hợp của trí tuệ nhân tạo (AI), thực tế ảo (VR) và
                  Internet of Things (IoT), mở ra nhiều cơ hội mới cho người
                  dùng. Mục tiêu là làm cho laptop trở nên mỏng nhẹ hơn, mạnh mẽ
                  hơn và có thời lượng pin kéo dài hơn. Tuy nhiên, với sự tiến
                  bộ, an ninh và bảo mật cũng sẽ là một trọng tâm quan trọng để
                  đảm bảo dữ liệu của người dùng được bảo vệ.
                </p>
              </div>
            </div>
            <div className="mt-4 mb-10 flex justify-center relative z-[3]">
              <button
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more cursor-pointer"
                onClick={handleInfoBox}
              >
                <span>{`${infoBox ? "Thu hồi" : "Xem thêm"}`}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`${infoBox && "rotate-180"} h-6 w-6 flex-shrink-0`}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </main>
      <div hidden>
        <div className="relative z-50">
          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-end sm:items-center justify-center text-center max-md:h-full">
              <div className="relative text-left rtl:text-right flex flex-col bg-white shadow-xl w-screen h-full md:h-screen">
                <div className="h-full flex flex-col">
                  <div className="relative shrink-0 h-12 px-[52px] py-2 border-b flex items-center">
                    <div className="w-full text-center">
                      <span className="font-bold font-lexend text-lg line-clamp-1">
                        Bộ lọc
                      </span>
                    </div>
                    <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center absolute right-2 top-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 p-2 overflow-auto">
                    <div className="w-full flex flex-col rounded-2xl border divide-y mb-4">
                      <div className="w-full flex flex-col px-1">
                        <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 text-white-500 bg-white-50 hover:bg-white-100 disabled:bg-white-50 aria-disabled:bg-white-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white-500 inline-flex items-center w-full mb-0">
                          <span className="text-left break-all line-clamp-1">
                            Sắp xếp
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="text-sm text-gray-500 pb-3 pt-0 px-3">
                          <div className="relative flex items-start">
                            <fieldset className="grid gap-2">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    type="radio"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                    value="1"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-gray-700"
                                  >
                                    Nổi bật nhất
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    type="radio"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-gray-700"
                                  >
                                    Giá thấp → cao
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    type="radio"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-gray-700"
                                  >
                                    Giá cao → thấp
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full flex flex-col rounded-2xl bg-white border divide-y">
                        <div className="w-full flex flex-col px-1">
                          <div className="flex items-center space-x-1 px-4 py-3 h-[52px]">
                            <span className="truncate font-bold font-lexend">
                              Thương hiệu
                              <span>(1)</span>
                            </span>
                            <div className="flex-1"></div>
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend">
                              <span>Xóa lọc</span>
                            </button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className={``}>
                            <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                              <div className="w-full grid grid-cols-2 gap-3">
                                {brands.map((brand, index) => (
                                  <div key={index} className="flex items-start">
                                    <div className="h-5 flex items-center">
                                      <input
                                        type="checkbox"
                                        id={`v-${index}`}
                                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                      />
                                    </div>
                                    <div className="ms-3 flex flex-col">
                                      <label
                                        htmlFor={`v-${index}`}
                                        className="text-sm font-medium text-colorPray900"
                                      >
                                        {brand.brand}
                                      </label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col px-1">
                          <div className="flex items-center space-x-1 px-4 py-3 h-[52px]">
                            <span className="truncate font-bold font-lexend">
                              Khoảng giá
                              <span>(1)</span>
                            </span>
                            <div className="flex-1"></div>
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend">
                              <span>Xóa lọc</span>
                            </button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                            <div className="w-full grid grid-cols-2 gap-3">
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Từ 1 - 2 triệu
                                  </label>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Từ 2 - 5 triệu
                                  </label>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Trên 5 triệu
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col px-1">
                          <div className="flex items-center space-x-1 px-4 py-3 h-[52px]">
                            <span className="truncate font-bold font-lexend">
                              Có khuyến mại
                              <span>(1)</span>
                            </span>
                            <div className="flex-1"></div>
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend">
                              <span>Xóa lọc</span>
                            </button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                            {/* bg-colorPrimaryDefault */}
                            <button className="relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none h-5 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white bg-gray-200">
                              {/* translate-x-4 rtl:-translate-x-4 */}
                              <span className="pointer-events-none relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 h-4 w-4 translate-x-0 rtl:-translate-x-0"></span>
                            </button>
                          </div>
                        </div>
                        <div className="w-full flex flex-col px-1">
                          <div className="flex items-center space-x-1 px-4 py-3 h-[52px]">
                            <span className="truncate font-bold font-lexend">
                              Màu sắc
                              <span>(1)</span>
                            </span>
                            <div className="flex-1"></div>
                            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center font-lexend">
                              <span>Xóa lọc</span>
                            </button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 rotate-100 transform transition-transform duration-200"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-sm text-colorPray500 pb-3 pt-0 px-3">
                            <div className="w-full grid grid-cols-2 gap-3">
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Đen
                                  </label>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Trắng
                                  </label>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary400"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Xanh lá
                                  </label>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimaryDefault"
                                  />
                                </div>
                                <div className="ms-3 flex flex-col">
                                  <label
                                    htmlFor=""
                                    className="text-sm font-medium text-colorPray900"
                                  >
                                    Xanh dương
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t grid grid-cols-2 gap-2 px-4 py-2.5">
                    <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center justify-center">
                      Xóa bộ lọc
                    </button>
                    <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 w-full flex justify-center items-center">
                      <span>Áp dụng</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterProductListsModal
        open={isOpenFilter}
        onClose={() => setIsOpenFilter(false)}
        title="Bộ lọc"
      />
    </>
  );
}
