"use client";

import Image from "next/image";
import "./review.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReviewModal from "@/components/product/ReviewModal";
import clsx from "clsx";

import Breadcrumb from "@/components/common/Breadcrumb";
import ProductInfor from "./components/ProductInfor";
import { useParams } from "next/navigation";
import SumReview from "./components/SumReview";
import { products, Review } from "./data";
import GuestPhoto from "./components/GuestPhoto";
import FilterReviews from "./components/FilterReviews";
import Reviews from "./components/Reviews";

export default function ReviewClient() {
  const { productListsId, detailProductId } = useParams<{
    productListsId: string;
    detailProductId: string;
  }>();
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

  const handleSortChange: React.Dispatch<React.SetStateAction<string>> = (
    value
  ) => {
    setSortBy(value);
    setIsOpen(false);
  };

  const handleOpenReviewModal = (review: Review) => {
    setReviewModal(review);
    setIsOpenReviewModal(true);
  };

  const categoryMap: { [key: string]: string } = {
    laptop: "Laptop",
    "ghe-cong-thai-hoc-herman-miller-aeron":
      "Ghế Công Thái Học Herman Miller Aeron",
    "ghe-cong-thai-hoc": "Ghế công thái học",
    "ban-nang-ha": "Bàn nâng hạ",
    "may-choi-game": "Máy chơi game",
    "thuc-te-ao": "Thực tế ảo",
    "game-console": "Game Console",
  };

  const categoryName =
    categoryMap[decodeURIComponent(detailProductId)] ||
    decodeURIComponent(detailProductId);

  return (
    <main className="reviews-detail-page">
      <div className="container py-6">
        <Breadcrumb
          showHome={false}
          items={[
            { label: categoryName, href: "#", isActive: false },
            { label: "Đánh giá", href: "#", isActive: true },
          ]}
          className="min-w-0 hidden md:block"
        />
        <Link
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
          <span>{categoryName}</span>
        </Link>
        <div className="mt-5 md:mt-6 flex md:flex-row-reverse">
          <ProductInfor responsiveWidth={responsiveWidth} />
          <div className="md:w-2/3 mt-5 md:mt-0 flex flex-col space-y-4 md:space-y-10">
            <span className="block md:hidden text-xl font-lexend font-bold">
              Đánh giá sản phẩm
            </span>
            <SumReview
              feedback={feedback}
              onOpenFeedback={handleFeedback}
              onCloseFeedback={() => setFeedback(false)}
            />
            <GuestPhoto />
            <FilterReviews
              filterTab={filterTab as "tất cả" | "5" | "4" | "3" | "2" | "1"}
              setFilterTab={setFilterTab}
              onToggle={handleToggle}
              sortBy={sortBy as "latest" | "rating-desc" | "rating-asc"}
              onOpenFilTab={isOpen}
              onSortChange={handleSortChange}
              onSelectedReview={handleSelectedReview}
            />
            <Reviews
              columns={columns}
              onOpenReviewModal={handleOpenReviewModal}
            />
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
