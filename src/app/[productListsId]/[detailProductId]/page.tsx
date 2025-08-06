"use client";

import { useParams, useRouter } from "next/navigation";
import "./detailProductId.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProductSpecsModal from "@/components/product/ProductSpecsModal";
import DetailPostModal from "@/components/product/DetailPostModal";
import FeedbackModal from "@/components/product/FeedbackModal";
import Link from "next/link";

const reviews = [
  {
    name: "Nguyễn Văn An",
    rating: 4.8,
    review: "Ghế rất thoải mái, hỗ trợ lưng tốt!",
    image_url:
      "https://imagor.owtg.one/unsafe/fit-in/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/product-reviews/ghe-cong-thai-hoc-herman-miller-aeron/1qf-7bg.jpg",
    alt_text:
      "Hinh anh khach hang danh gia san pham Ghế Công Thái Học Herman Miller Aeron 1",
  },
  {
    name: "Trần Thị Bích",
    rating: 5.0,
    review: "Thiết kế đẹp, ngồi lâu không mệt.",
    image_url:
      "https://imagor.owtg.one/unsafe/fit-in/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/product-reviews/ghe-cong-thai-hoc-herman-miller-aeron/1qf-7bg.jpg",
    alt_text:
      "Hinh anh khach hang danh gia san pham Ghế Công Thái Học Herman Miller Aeron 2",
  },
  {
    name: "Nguyễn Văn An",
    rating: 4.8,
    review: "Ghế rất thoải mái, hỗ trợ lưng tốt!",
    image_url:
      "https://imagor.owtg.one/unsafe/fit-in/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/product-reviews/ghe-cong-thai-hoc-herman-miller-aeron/1qf-7bg.jpg",
    alt_text:
      "Hinh anh khach hang danh gia san pham Ghế Công Thái Học Herman Miller Aeron 1",
  },
  {
    name: "Trần Thị Bích",
    rating: 5.0,
    review: "Thiết kế đẹp, ngồi lâu không mệt.",
    image_url:
      "https://imagor.owtg.one/unsafe/fit-in/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/social/product-reviews/ghe-cong-thai-hoc-herman-miller-aeron/1qf-7bg.jpg",
    alt_text:
      "Hinh anh khach hang danh gia san pham Ghế Công Thái Học Herman Miller Aeron 2",
  },
];

export default function DetailProductPage() {
  const params = useParams();
  const router = useRouter();
  const { productListsId, detailProductId } = params;

  const [isOpen, setIsOpen] = useState(false);
  const [buttonPromotion, setButtonPromotion] = useState("buyNow");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openSpecsModal, setOpenSpecsModal] = useState(false);
  const [openDetailPostModal, setOpenDetailPostModal] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [showHeaderOffset, setShowHeaderOffset] = useState(true);
  const [feedback, setFeedback] = useState(false);
  const [filterOpenReview, setFilterOpenReview] = useState("latest");
  const [showDataReview] = useState(2);

  const lastScrollY = useRef(0);
  const infoRef = useRef<HTMLDivElement>(null);
  const configRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setShowHeaderOffset(true);
      } else {
        setShowHeaderOffset(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFilteredReviews = () => {
    let resultSort = reviews;

    if (filterOpenReview === "rating-desc") {
      resultSort = [...resultSort].sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    } else if (filterOpenReview === "rating-asc") {
      resultSort = [...resultSort].sort(
        (a, b) => Number(a.rating) - Number(b.rating)
      );
    }

    return resultSort;
  };

  const data = getFilteredReviews();

  const handleData = data.slice(0, showDataReview);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    let ref: React.RefObject<HTMLDivElement> | null = null;
    if (idx === 0) ref = infoRef;
    if (idx === 1) ref = configRef;
    if (idx === 2) ref = reviewRef;
    if (idx === 3) ref = postRef;
    if (ref && ref.current) {
      const offset = 100;
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const images = [
    "https://imagor.owtg.one/unsafe/fit-in/1760x990/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/2/20/aeron_01.jfif",
    "https://imagor.owtg.one/unsafe/fit-in/1760x990/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/2/20/aeron_02.png",
    "https://imagor.owtg.one/unsafe/fit-in/1760x990/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/2/20/aeron_05.png",
    "https://imagor.owtg.one/unsafe/fit-in/1760x990/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/2/20/aeron_06.png",
  ];

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleToggleBuyNow = () => {
    setButtonPromotion("buyNow");
  };

  const handleToggleInstallment = () => {
    setButtonPromotion("installment");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBuy = () => {
    router.push("/gio-hang");
  };

  const handleSortChange = (sortType: string) => {
    setFilterOpenReview(sortType);
    // setOpen
  };

  const handleFeedback = () => {
    setFeedback(true);
  };

  const filterTableCSS = isOpen
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute",
        margin: "0px",
      }
    : {};

  return (
    <main className="product-detail-page">
      <div className="py-6">
        <div className="container mb-4">
          <nav className="min-w-0 hidden md:block">
            <ol className="flex items-center gap-x-1.5">
              <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
                <Link
                  href="/"
                  type="button"
                  className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
                >
                  <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                    Trang chủ
                  </span>
                </Link>
                <span role="presentation">/</span>
              </li>
              <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
                <Link
                  href={`/${productListsId}`}
                  type="button"
                  className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
                >
                  <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                    Ghế công thái học
                  </span>
                </Link>
                <span role="presentation">/</span>
              </li>
              <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
                <Link
                  href="#"
                  type="button"
                  className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
                >
                  <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                    Herman Miller
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <section
          className={`tabbar-animate ${
            showHeaderOffset ? "show top-[var(--the-header-offset)]" : "hide"
          } bg-white sticky inset-x-0 overflow-hidden z-[11] pt-1`}
        >
          <div className="container overflow-x-auto scrollbar-hide">
            <div className="relative space-y-2">
              <div
                className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto h-11 inline-grid items-center mb-2"
                style={{
                  "grid-template-columns": "repeat(4, minmax(0px, 1fr))",
                }}
              >
                <div
                  className="absolute top-[4px] left-0 duration-200 ease-out focus:outline-none"
                  style={{
                    width: "90px",
                    height: "36px",
                    transform: `translateX(${4 + 90 * activeTab}px)`,
                  }}
                >
                  <div className="w-full h-full bg-colorPrimary400 rounded-full shadow-sm"></div>
                </div>
                <button
                  role="tab"
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
                  onClick={() => handleTabClick(0)}
                >
                  <span className="truncate">Thông tin</span>
                </button>
                <button
                  role="tab"
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
                  onClick={() => handleTabClick(1)}
                >
                  <span className="truncate">Cấu hình</span>
                </button>
                <button
                  role="tab"
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
                  onClick={() => handleTabClick(2)}
                >
                  <span className="truncate">Đánh giá</span>
                </button>
                <button
                  role="tab"
                  className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out w-[90px] h-9 px-3 text-sm font-bold rounded-md text-gray-900"
                  onClick={() => handleTabClick(3)}
                >
                  <span className="truncate">Bài viết</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-6 container grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="col-span-1" ref={infoRef}>
            <div className="flex flex-col h-full space-y-6">
              <section className="scroll-mt-20">
                <div className="flex flex-col space-y-4 md:space-y-6">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <div
                        className="rounded-l-[20px] md:rounded-l-3xl rounded-r-lg p-[6px] md:p-2 inline-flex items-center space-x-1"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(192, 247, 141) 0%, rgb(231, 255, 209) 100%)",
                        }}
                      >
                        <svg
                          className="w-7 h-72 md:w-8 md:h-8"
                          fill="none"
                          height="18"
                          viewBox="0 0 18 18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00007 1.71533C7.55909 1.71533 6.15048 2.14263 4.95235 2.9432C3.75422 3.74376 2.82039 4.88163 2.26895 6.21292C1.71751 7.54421 1.57323 9.00913 1.85435 10.4224C2.13547 11.8357 2.82937 13.1339 3.84829 14.1528C4.86722 15.1717 6.16541 15.8656 7.5787 16.1468C8.99199 16.4279 10.4569 16.2836 11.7882 15.7322C13.1195 15.1807 14.2574 14.2469 15.0579 13.0488C15.8585 11.8506 16.2858 10.442 16.2858 9.00104C16.2858 7.06875 15.5182 5.2156 14.1518 3.84927C12.7855 2.48293 10.9324 1.71533 9.00007 1.71533Z"
                            fill="#4ACD00"
                          ></path>
                          <path
                            d="M16.6542 5.42682L9.75026 12.3319C9.58559 12.4966 9.38771 12.628 9.16848 12.7181C8.94926 12.8083 8.71319 12.8553 8.47441 12.8565H8.46672C8.22934 12.8565 7.99437 12.8111 7.77573 12.723C7.55708 12.6349 7.35922 12.5059 7.19384 12.3437L4.84332 10.0523C4.66888 9.89577 4.52954 9.70715 4.4337 9.49786C4.33786 9.28858 4.28751 9.06296 4.2857 8.83463C4.28388 8.6063 4.33062 8.37999 4.42312 8.16934C4.51561 7.95869 4.65194 7.76808 4.82386 7.609C4.99579 7.44992 5.19976 7.32567 5.42347 7.24375C5.64717 7.16182 5.88598 7.12393 6.12548 7.13234C6.36498 7.14075 6.60021 7.19529 6.81698 7.29269C7.03375 7.39008 7.22757 7.5283 7.38673 7.69901L8.45194 8.72915L14.0818 3.09658C14.2424 2.93566 14.4347 2.80645 14.6477 2.71633C14.8607 2.6262 15.0903 2.57694 15.3233 2.57134C15.5563 2.56574 15.7881 2.60392 16.0056 2.68369C16.2231 2.76347 16.422 2.88328 16.5909 3.03628C16.7598 3.18929 16.8955 3.37249 16.99 3.57543C17.0846 3.77838 17.1363 3.99708 17.1422 4.21906C17.1481 4.44104 17.108 4.66195 17.0243 4.86918C16.9406 5.07641 16.8148 5.26589 16.6542 5.42682Z"
                            fill="url(#paint0_linear_10882_67852)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_10882_67852"
                              gradientUnits="userSpaceOnUse"
                              x1="12.8183"
                              x2="10.8208"
                              y1="9.40991"
                              y2="7.20906"
                            >
                              <stop stopColor="#7ED44F"></stop>
                              <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="flex flex-col">
                          <span className="font-lexend text-sm font-bold">
                            HÀNG CHÍNH HÃNG
                          </span>
                          <span className="font-lexend text-[8px] md:text-[10px] font-bold">
                            Giá luôn tốt nhất thị trường
                          </span>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-2xl font-bold">
                      Ghế Công Thái Học Herman Miller Aeron (Size B - Chân nhựa
                      - Graphite - Mới, Full box, Nhập khẩu)
                    </h1>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-600">SKU:</span>
                      <span className="text-sm text-gray-600">HMAeron01NF</span>
                      <button className="inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-colorPrimary600"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9 9 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9 9 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm">5.0</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="ml-1"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                          clipRule="evenodd"
                        />
                      </svg>
                      <a href="#" className="ml-3 text-sm underline">
                        3 đánh giá
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>
                      <span className="text-sm font-lexend font-bold">
                        Phiên bản
                      </span>
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
                      <span className="text-sm font-lexend font-bold">
                        Loại hàng
                      </span>
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
              </section>
              <div className="w-full flex space-x-2">
                <div className="w-full">
                  <div className="buy-option-switcher">
                    <div className="flex">
                      <button
                        className={`${
                          buttonPromotion === "buyNow" ? "active " : ""
                        } tab-installment`}
                        onClick={() => handleToggleBuyNow()}
                      >
                        <div className="font-bold">Mua ngay</div>
                        <div className="text-sm text-neutral-600">
                          Trả hết một giá
                        </div>
                      </button>
                      <button
                        className={`${
                          buttonPromotion === "installment" ? "active " : ""
                        } tab-installment`}
                        onClick={() => handleToggleInstallment()}
                      >
                        <div className="font-bold">Trả góp</div>
                        <div className="text-sm text-neutral-600">
                          0%, rất đơn giản
                        </div>
                      </button>
                    </div>
                    <div className="rounded-tr-2xl p-4 bg-white">
                      <div className="flex flex-col space-y-2">
                        {buttonPromotion === "buyNow" ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-lg md:text-2xl font-semibold text-rose-600">
                              22.990.000
                            </span>
                            <span className="text-sm text-gray-800 line-through">
                              31.990.000
                            </span>
                            <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                              -28%
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1.5">
                            <span className="text-lg md:text-2xl font-semibold text-rose-600">
                              22.990.000
                            </span>
                            <span className="text-sm text-gray-800">
                              /tháng
                            </span>
                          </div>
                        )}
                        <div>
                          {buttonPromotion === "buyNow" ? (
                            <div className="flex space-x-2">
                              <div className="flex-1 grid grid-cols-2 gap-2">
                                <div className="dark">
                                  <button
                                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center"
                                    onClick={handleBuy}
                                  >
                                    Mua ngay
                                  </button>
                                </div>
                                <div>
                                  <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-800 disabled:bg-gray-950 aria-disabled:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center">
                                    <svg
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.5 20.25H4.92284C4.30753 20.25 3.83819 19.6996 3.9354 19.092L5.6154 8.59201C5.69302 8.10688 6.11154 7.75 6.60284 7.75H17.3974C17.8887 7.75 18.3072 8.10688 18.3848 8.59201L18.5948 9.90451"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                      ></path>
                                      <path
                                        d="M8.75 12.25V6C8.75 4.21 10.21 2.75 12 2.75C13.79 2.75 15.25 4.21 15.25 6V10"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                      ></path>
                                      <path
                                        d="M17.5 15.7V19.3M19.3 17.5H15.7M22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22C18.7426 22 19.8676 21.4963 20.682 20.682C21.4963 19.8676 22 18.7426 22 17.5Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                      ></path>
                                    </svg>
                                    <span className="text-left break-all line-clamp-1">
                                      Thêm vào giỏ
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <button className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-[#00e973] hover:bg-[#00c25c] disabled:bg-[#00e973] aria-disabled:bg-[#00e973] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full flex justify-center items-center">
                              <span className="text-left break-all line-clamp-1">
                                Mua trả góp
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-2xl p-4 flex space-x-4 bg-white">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    width={48}
                    height={48}
                    alt="Herman Miller"
                    src="https://imagor.owtg.one/unsafe/fit-in/96x96/https://d28jzcg6y4v9j1.cloudfront.net/media/core/brands/2024/4/11/thuong-hieu-icon-herman-miller-thinkpro.vn.png"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">Herman Miller</span>
                  </div>
                  <div>
                    <p className="text-sm line-clamp-4">
                      Thành lập từ năm 1927 tại Mỹ, Herman Miller được biết như
                      một trong những nhà sản xuất nội thất hàng đầu tại Mỹ. Sản
                      phẩm của Herman Miller rất đa dạng với sản phẩm ghế công
                      thái học vô cùng cao cấp được rất nhiều người trên thế
                      giới tin dùng với khả năng
                    </p>
                  </div>
                  <div>
                    <Link
                      className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                      href="/ghe-cong-thai-hoc"
                    >
                      <span>Xem tất cả sản phẩm</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 h-5 w-5"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col order-first">
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
                    onClick={handlePrevImage}
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
                        onClick={() => setCurrentIndex(idx)}
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
            <div className="rounded-2xl bg-gray-50 border overflow-hidden p-4 mt-10">
              <div className="flex space-x-6">
                <div className="shrink-0 flex items-center space-x-[6px]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9 9 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.5 4.5 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218c-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715q.068.633.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.5 4.5 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5q.125.307.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665a9 9 0 0 0 .654 3.375"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-lexend font-bold">
                    Trải nghiệm tận tay
                  </span>
                </div>
                <div className="shrink-0 flex items-center space-x-[6px]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-lexend font-bold">
                    Tư vấn tận tâm
                  </span>
                </div>
                <div className="shrink-0 flex items-center space-x-[6px]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-lexend font-bold">
                    Trung tâm khách hàng
                  </span>
                </div>
                <div className="shrink-0 flex items-center space-x-[6px]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-white"
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
                  </div>
                  <span className="text-sm font-lexend font-bold">
                    Phục vụ đến 24 giờ
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 border overflow-hidden p-4 mt-4">
              <div className="grid grid-cols-1 max-md:divide-y max-md:divide-space-y-3 md:divide-x md:divide-space-x-2 md:grid-cols-3">
                <div className="flex flex-row md:flex-col md:items-center">
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
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
                    />
                  </svg>
                  <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
                    <span className="text-base font-semibold">
                      Sẵn hàng và trưng bày
                    </span>
                    <button className="mt-1 flex items-center space-x-1 text-gray-600">
                      <span className="text-sm">Tại 1 chi nhánh</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className="w-3 h-3"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col md:items-center">
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
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.9 17.9 0 0 0-3.213-9.193a2.06 2.06 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.6 48.6 0 0 0-10.026 0a1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
                    <span className="text-base font-semibold">
                      Vẫn chuyển miễn phí
                    </span>
                    <span className="mt-1 text-sm text-gray-600">
                      Nội thành HN & TP.HCM
                    </span>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col md:items-center">
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
                      d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                    />
                  </svg>
                  <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
                    <span className="text-base font-semibold">
                      Bảo hành và đổi trả
                    </span>
                    <span className="mt-1 text-sm text-gray-600">
                      <ul>
                        <li>Sản phẩm phân phối nhập khẩu</li>
                        <li>
                          Bảo hành <strong>60 tháng</strong>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-specifications scroll-mt-20 flex flex-col space-y-4 md:space-y-6 mt-10"
              ref={configRef}
            >
              <h2 className="text-xl md:text-3xl font-bold font-lexend">
                Cấu hình & đặc điểm
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <table className="w-full ring-1 ring-gray-200 rounded-2xl overflow-hidden bg-white">
                  <tbody>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Chất liệu lưng ghế
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Lưới</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Chất liệu mâm ghế
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Lưới</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Khung lưng
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Nhựa</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Chân ghế
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Nhựa</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Tựa đầu
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Không có</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Bệ tỳ tay
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Điều chỉnh 4D</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Piston
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Samhongsa Class 4</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="text-sm odd:bg-gray-50">
                      <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                        Điều chỉnh thắng lực
                      </td>
                      <td className="flex-1 px-3 py-2">
                        <span>
                          <span>Có - Dạng tay quay</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                  onClick={() => setOpenSpecsModal(true)}
                >
                  <span>Xem tất cả</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                    />
                  </svg>
                </button>
                <ProductSpecsModal
                  open={openSpecsModal}
                  onClose={() => setOpenSpecsModal(false)}
                  title="Cấu hình & đặc điểm"
                />
              </div>
            </div>
            <div className="scroll-mt-20 mt-10" ref={reviewRef}>
              <h3 className="font-bold text-xl md:text-3xl">
                Đánh giá sản phẩm
              </h3>
              <div className="mt-4 md:mt-6">
                <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
                  <div className="">
                    <span className="text-3xl font-bold font-lexend">
                      5.0 / 5
                    </span>
                    <div className="mt-1">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-0 md:mt-1">
                      <span className="text-xs">3 đánh giá</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col space-y-0.5">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-0.5 w-7">
                        <span className="w-2 text-xs">5</span>
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
                      <div className="flex flex-col gap-2 w-[200px]">
                        <progress
                          className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                          value={3}
                          max={3}
                        >
                          100%
                        </progress>
                      </div>
                      <span className="w-10 flex-shrink-0 text-xs">3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-0.5 w-7">
                        <span className="w-2 text-xs">4</span>
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
                      <div className="flex flex-col gap-2 w-[200px]">
                        <progress
                          className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                          value={0}
                          max={0}
                        >
                          100%
                        </progress>
                      </div>
                      <span className="w-10 flex-shrink-0 text-xs">0</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-0.5 w-7">
                        <span className="w-2 text-xs">3</span>
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
                      <div className="flex flex-col gap-2 w-[200px]">
                        <progress
                          className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                          value={0}
                          max={0}
                        >
                          100%
                        </progress>
                      </div>
                      <span className="w-10 flex-shrink-0 text-xs">0</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-0.5 w-7">
                        <span className="w-2 text-xs">2</span>
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
                      <div className="flex flex-col gap-2 w-[200px]">
                        <progress
                          className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                          value={0}
                          max={0}
                        >
                          100%
                        </progress>
                      </div>
                      <span className="w-10 flex-shrink-0 text-xs">0</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-0.5 w-7">
                        <span className="w-2 text-xs">1</span>
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
                      <div className="flex flex-col gap-2 w-[200px]">
                        <progress
                          className="block appearance-none border-none overflow-hidden w-full [&::-webkit-progress-bar]:w-full h-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full text-gray-900 [&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current indeterminate:relative indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
                          value={0}
                          max={0}
                        >
                          100%
                        </progress>
                      </div>
                      <span className="w-10 flex-shrink-0 text-xs">0</span>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="mt-4 md:mt-0 flex md:flex-col items-center justify-between space-x-4 md:space-x-0 md:space-y-4">
                    <div>
                      <button
                        type="button"
                        className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center md:w-[160px]"
                        onClick={() => handleFeedback()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        <span>Viết đánh giá</span>
                      </button>
                      <FeedbackModal
                        open={feedback}
                        onClose={() => setFeedback(false)}
                        title="Đánh giá và nhận xét"
                      />
                    </div>
                    <div
                      className="relative min-w-[160px]"
                      onClick={handleToggle}
                    >
                      <div className="w-full">
                        <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
                          <span className="block truncate">
                            {filterOpenReview === "latest" && "Mới nhất"}
                            {filterOpenReview === "rating-desc" &&
                              "Đánh giá cao → thấp"}
                            {filterOpenReview === "rating-asc" &&
                              "Đánh giá thấp → cao"}
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
                                onClick={() => handleSortChange("latest")}
                              >
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <span className="truncate">Mới nhất</span>
                                </div>
                                {filterOpenReview === "latest" && (
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
                                onClick={() => handleSortChange("rating-desc")}
                              >
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <span className="truncate">
                                    Đánh giá cao → thấp
                                  </span>
                                </div>
                                {filterOpenReview === "rating-desc" && (
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
                                onClick={() => handleSortChange("rating-asc")}
                              >
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <span className="truncate">
                                    Giá thấp → cao
                                  </span>
                                </div>
                                {filterOpenReview === "rating-asc" && (
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
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {handleData.map((review, ridx) => (
                    <div
                      key={ridx}
                      className="shadow-md rounded-2xl p-3 cursor-pointer"
                    >
                      <div className="w-full relative rounded-lg overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1 hover:scale-105 transition-transform">
                          <Image
                            width={223}
                            height={223}
                            src={review.image_url}
                            alt={review.alt_text}
                            className="w-full h-full object-cover ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="mt-2 flex items-center space-x-1">
                          <span className="text-sm font-semibold">
                            {review.name}
                          </span>
                          <div className="flex-1"></div>
                          <span className="text-sm">{review.rating}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mt-2 text-sm">{review.review}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href={`${detailProductId}/danh-gia`}
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                  >
                    <span>Xem tất cả</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="section-detailed-article relative md:p-6 md:border md:rounded-2xl md:shadow-md scroll-mt-20 mt-10"
              ref={postRef}
            >
              <h3 className="text-xl md:text-3xl font-bold font-lexend">
                Bài viết chi tiết
              </h3>
              <div className="mt-4 md:mt-6 section-detailed-article__wrapper">
                <div className="editor-viewer prose prose-sm md:prose-base">
                  <h2 className="font-bold font-lexend">
                    Ghế công thái học Herman Miller Aeron: Thiết kế thông minh,
                    tính chuyên nghiệp cao
                  </h2>
                  <div data-type="imageBlock">
                    <Image
                      width={739}
                      height={493}
                      alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1"
                      src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1.png"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-[3] max-md:flex max-md:justify-center">
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                  onClick={() => setOpenDetailPostModal(true)}
                >
                  <span>Xem tất cả</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="flex-shrink-0 h-5 w-5"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                    />
                  </svg>
                </button>
                <DetailPostModal
                  open={openDetailPostModal}
                  onClose={() => setOpenDetailPostModal(false)}
                  title="Bài viết chi tiết"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
