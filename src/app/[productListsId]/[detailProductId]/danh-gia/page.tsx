"use client";

import Image from "next/image";
import "./review.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReviewModal from "@/components/product/ReviewModal";
import clsx from "clsx";
import { useParams } from "next/navigation";
import FeedbackModal from "@/components/product/FeedbackModal";

type Review = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image?: string[];
  purchased: boolean;
};

const products: Review[] = [
  {
    id: 1,
    name: "Bàn phím cơ Bach Tuấn",
    price: 1200000,
    rating: 5,
    description:
      "Bàn phím cơ chất lượng cao, thiết kế tối giản, phù hợp cho lập trình viên.",
    image: [
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-bdf.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-tse.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-ymr.jpg",
    ],
    purchased: false,
  },
  {
    id: 2,
    name: "Bàn phím Qưin VD",
    price: 1500000,
    rating: 4,
    description: "Bàn phím cơ với đèn LED RGB, trải nghiệm gõ mượt mà.",
    image: [
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/vmd-onj.jpg",
    ],
    purchased: false,
  },
  // {
  //   id: 3,
  //   name: "Bàn phím Phong Chi",
  //   price: 1300000,
  //   rating: 5,
  //   description: "Thiết kế nhỏ gọn, phím gõ êm ái, phù hợp làm việc văn phòng.",
  //   image: [
  //     "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/n2n-lxq.jpg",
  //   ],
  //   purchased: false,
  // },
];

export default function Review() {
  const params = useParams();
  const { detailProductId, productListsId } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);
  const [filterTab, setFilterTab] = useState("tất cả");
  const [sortBy, setSortBy] = useState("latest");
  const [selectedReview, setSelectedReview] = useState<string[]>([]);
  const [reviewModal, setReviewModal] = useState<Review | null>(null);
  const [feedback, setFeedback] = useState(false);
  const [responsiveWidth, setResponsiveWidth] = useState(false);

  const getFilteredReviews = () => {
    let reviews = products;
    const ratingReview = Number(filterTab);

    if (
      filterTab === "1" ||
      filterTab === "2" ||
      filterTab === "3" ||
      filterTab === "4" ||
      filterTab === "5"
    ) {
      reviews = reviews.filter((review) => review.rating === ratingReview);
    }

    if (sortBy === "rating-asc") {
      reviews = [...reviews].sort(
        (a, b) => Number(a.rating) - Number(b.rating)
      );
    } else if (sortBy === "rating-desc") {
      reviews = [...reviews].sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    if (selectedReview.includes("selectedImage")) {
      reviews = reviews.filter((rev) => rev.image && rev.image.length > 0);
    }

    if (selectedReview.includes("selectedPurchased")) {
      reviews = reviews.filter((rev) => rev.purchased);
    }

    return reviews;
  };

  useEffect(() => {
    const handleResize = () => setResponsiveWidth(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(window.innerWidth);
  console.log("responsiveWidth", responsiveWidth);

  const columns = [];
  const filteredReviews = getFilteredReviews();
  for (let i = 0; i < filteredReviews.length; i += 2) {
    columns.push(filteredReviews.slice(i, i + 2));
  }

  const handleSelectedReview = (selectedFeedback: string) => {
    setSelectedReview((prev) =>
      prev.includes(selectedFeedback)
        ? prev.filter((seF) => seF !== selectedFeedback)
        : [...prev, selectedFeedback]
    );
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFeedback = () => {
      setFeedback(true);
  };

  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
    setIsOpen(false);
  };

  const handleOpenReviewModal = (review: Review) => {
    setReviewModal(review);
    setIsOpenReviewModal(true);
  };

  const filterTableCSS = isOpen
    ? {
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute" as const,
        margin: "0px",
      }
    : {};

  return (
    <main className="reviews-detail-page">
      <div className="container py-6">
        <nav className="min-w-0 hidden md:block">
          <ol className="flex items-center gap-x-1.5">
            <li className="flex items-center gap-x-1.5 text-colorPray400 text-sm leading-6 min-w-0">
              <Link
                href={`/${productListsId}/${detailProductId}`}
                type="button"
                className="flex items-center gap-x-1.5 group font-semibold min-w-0 hover:text-colorPray700"
              >
                <span className="inline-flex items-center font-medium text-xs px-2 py-1 gap-1 ring-1 ring-inset ring-colorPray300 bg-colorPray50 rounded-full truncate text-colorPray700">
                  Keycap Lofree Flow Series Dye-sub PBT Keycaps
                </span>
              </Link>
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
                    Đánh giá
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
          <span>Keycap Lofree Flow Series Dye-sub PBT Keycaps</span>
        </a>
        <div className="mt-5 md:mt-6 flex md:flex-row-reverse">
          <div className="flex-1 flex flex-col md:ml-20">
            <div className="w-[120px] h-[120px] rounded-lg bg-gray-100">
              <Image
                width={120}
                height={120}
                alt="Keycap Lofree Flow Series Dye-sub PBT Keycaps (Keycap Retro - 84keys - Retro - Mới, Sealed, Nhập khẩu)"
                src="https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/keycap-lofree-flow-series-dye-sub-pbt-keycaps-undefined-ERj.jpg"
                className="lazyloaded"
              />
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold font-lexend">
                Keycap Lofree Flow Series Dye-sub PBT Keycaps (Keycap Retro -
                84keys - Retro - Mới, Sealed, Nhập khẩu)
              </span>
            </div>
            <div className="mt-2 flex items-center space-x-1">
              <span className="text-sm text-gray-600">SKU:</span>
              <span className="text-sm text-gray-600">KCLFFLOW01NF</span>
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
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Keycap Retro - 84keys / Retro / Mới, Sealed, Nhập khẩu
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-lg font-semibold text-rose-600">
                22.990.000
              </span>
              <span className="text-sm text-gray-800 line-through">
                31.990.000
              </span>
              <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                -28%
              </span>
            </div>
            <div
              className={`${
                responsiveWidth
                  ? "bottom-0 inset-x-0 px-4 py-2.5 bg-white border-t z-[11] flex items-center space-x-2"
                  : ""
              } md:mt-6 dark fixed md:relative`}
            >
              <Link
                className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 w-full flex justify-center items-center"
                href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
              >
                <span>Đến trang mua hàng</span>
              </Link>
            </div>
          </div>
          <div className="md:w-2/3 mt-5 md:mt-0 flex flex-col space-y-4 md:space-y-10">
            <span className="block md:hidden text-xl font-lexend font-bold">
              Đánh giá sản phẩm
            </span>
            <div className="flex flex-col md:flex-row md:items-end max-md:space-y-4 md:space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-lexend">5.0 / 5</span>
                <div className="mt-1">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#171717] flex"
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
                      className="w-6 h-6 text-[#171717] flex"
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
                      className="w-6 h-6 text-[#171717] flex"
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
                      className="w-6 h-6 text-[#171717] flex"
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
                      className="w-6 h-6 text-[#171717] flex"
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
                <div className="mt-2">
                  <span className="text-xs">3 đánh giá</span>
                </div>
              </div>
              <div className="flex flex-col space-y-0.5">
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
              <div className="flex flex-col space-y-4 md:w-[200px]">
                <div>
                  <button
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center"
                    onClick={handleFeedback}
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
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-xl font-bold font-lexend">
                Ảnh chụp từ khách
              </span>
              <div className="relative group">
                <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
                  <div className="flex space-x-2">
                    {products.map((product) =>
                      product.image?.map((img, imgIndex) => (
                        <div
                          key={`${product.id}-${imgIndex}`}
                          className="w-[80px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200"
                        >
                          <Image
                            width={80}
                            height={80}
                            alt={`Hinh anh khach hang danh gia san pham ${product.name}`}
                            src={img}
                            className="w-full h-full object-contain lazyloaded"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-xl font-lexend font-bold">
                Lọc đánh giá
              </span>
              <div className="flex space-x-2">
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "tất cả" }
                  )}
                  onClick={() => setFilterTab("tất cả")}
                >
                  <span className="inline-flex items-center space-x-1">
                    Tất cả
                  </span>
                </span>
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "5" }
                  )}
                  onClick={() => setFilterTab("5")}
                >
                  <span className="inline-flex items-center space-x-1">
                    <span>5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "4" }
                  )}
                  onClick={() => setFilterTab("4")}
                >
                  <span className="inline-flex items-center space-x-1">
                    <span>4</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "3" }
                  )}
                  onClick={() => setFilterTab("3")}
                >
                  <span className="inline-flex items-center space-x-1">
                    <span>3</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "2" }
                  )}
                  onClick={() => setFilterTab("2")}
                >
                  <span className="inline-flex items-center space-x-1">
                    <span>2</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  className={clsx(
                    "inline-flex items-center font-medium text-sm px-2 py-1 ring-1 ring-inset ring-gray-300 text-gray-900 bg-white rounded-full cursor-pointer",
                    { "!ring-colorPrimary600 !ring-2": filterTab === "1" }
                  )}
                  onClick={() => setFilterTab("1")}
                >
                  <span className="inline-flex items-center space-x-1">
                    <span>1</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap md:items-center gap-4">
                <div
                  className="relative min-w-[160px] max-md:w-full md:w-[200px]"
                  onClick={handleToggle}
                >
                  <div className="flex items-center w-full">
                    <button className="relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimaryDefault pe-9">
                      <span className="block truncate">
                        {sortBy === "latest" && "Mới nhất"}
                        {sortBy === "rating-desc" && "Đánh giá cao → thấp"}
                        {sortBy === "rating-asc" && "Đánh giá thấp → cao"}
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
                            aria-selected={sortBy === "latest"}
                            onClick={() => handleSortChange("latest")}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">Mới nhất</span>
                            </div>
                            {sortBy === "latest" && (
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
                            aria-selected={sortBy === "rating-desc"}
                            onClick={() => handleSortChange("rating-desc")}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">
                                Đánh giá cao → thấp
                              </span>
                            </div>
                            {sortBy === "rating-desc" && (
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
                            aria-selected={sortBy === "rating-asc"}
                            onClick={() => handleSortChange("rating-asc")}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">Giá thấp → cao</span>
                            </div>
                            {sortBy === "rating-asc" && (
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
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="Image"
                      className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                      onChange={() => handleSelectedReview("selectedImage")}
                    />
                  </div>
                  <div className="ms-3 flex flex-col">
                    <label
                      htmlFor="Image"
                      className="text-sm font-medium text-gray-900"
                    >
                      Có hình ảnh
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="purchased"
                      className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                      onChange={() => handleSelectedReview("selectedPurchased")}
                    />
                  </div>
                  <div className="ms-3 flex flex-col">
                    <label
                      htmlFor="purchased"
                      className="text-sm font-medium text-gray-900"
                    >
                      Đã mua hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row max-md:space-y-4 md:space-x-4">
              {columns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="md:w-1/3 flex flex-col space-y-5"
                >
                  {column.map((review) => (
                    <div
                      key={review.id}
                      className="shadow-md rounded-2xl p-3 cursor-pointer"
                      onClick={() => handleOpenReviewModal(review)}
                    >
                      {Array.isArray(review.image) &&
                      review.image.length > 0 ? (
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
                        <span className="text-sm font-semibold">
                          {review.name}
                        </span>
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
            <ReviewModal
              open={isOpenReviewModal}
              onClose={() => setIsOpenReviewModal(false)}
              title="Đánh giá và nhận xét"
              review={reviewModal}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
