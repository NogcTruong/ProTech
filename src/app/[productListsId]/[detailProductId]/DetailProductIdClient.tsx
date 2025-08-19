"use client";

import { useParams, useRouter } from "next/navigation";
import "./detailProductId.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { reviews } from "./data";
import Breadcrumb from "@/components/common/Breadcrumb";

import TabBar from "./components/TabBar";
import ImageGallery from "./components/ImageGallery";
import ProductInfor from "./components/ProductInfor";
import PurchaseBox from "./components/PurchaseBox";
import BrandCard from "./components/BrandCard";
import Benefits from "./components/Benefits";
import Configuration from "./components/Configuration";
import ProductReviews from "./components/ProductReviews";
import DetailedArticle from "./components/DetailedArticle";

export default function DetailProductIdClient() {
  const router = useRouter();
  const { productListsId, detailProductId } = useParams();

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
  const [responsiveWidth, setResponsiveWidth] = useState(false);
  const [isSelectVersion, setIsSelectVersion] = useState(false);

  const lastScrollY = useRef(0);
  const infoRef = useRef<HTMLDivElement>(null);
  const configRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setResponsiveWidth(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    const tabValues = ["info", "config", "review", "post"];
    setActiveTab(tabValues[idx]);
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

  const handleSortChange: React.Dispatch<React.SetStateAction<string>> = (
    value
  ) => {
    setFilterOpenReview(value);
  };

  const handleFeedback = () => {
    setFeedback(true);
  };

  const handleIsSelectVersion = () => {
    setIsSelectVersion(true);
  };

  const filterTableCSS = isOpen
    ? ({
        inset: "0px 0px auto auto",
        transform: "translate(0px, 40px)",
        position: "absolute" as const,
        margin: "0px",
      } as React.CSSProperties)
    : {};

  return (
    <main className="product-detail-page mb-10">
      <div className={`${responsiveWidth ? "py-2" : "py-6"}`}>
        <div
          className={`${
            responsiveWidth ? "px-4 max-md:mb-2" : "container mb-4"
          }`}
        >
          <Breadcrumb
            items={[
              {
                label: "Ghế công thái học",
                href: `/${productListsId}`,
                isActive: false,
              },
              { label: "Herman Miller", href: "#", isActive: true },
            ]}
            className="min-w-0 relative"
          />
        </div>
        <TabBar
          activeTab={activeTab as "info" | "config" | "review" | "post"}
          onTabClick={handleTabClick}
          showHeaderOffset={showHeaderOffset}
          responsiveWidth={responsiveWidth}
        />
        {!responsiveWidth ? (
          <div className="mt-6 container grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="col-span-1" ref={infoRef}>
              <div className="flex flex-col h-full space-y-6">
                <ProductInfor
                  onSelectVersion={isSelectVersion}
                  setOnSelectVersion={setIsSelectVersion}
                  onIsSelectVersion={handleIsSelectVersion}
                  responsiveWidth={responsiveWidth}
                />
                <PurchaseBox
                  buttonPromotion={buttonPromotion as "buyNow" | "installment"}
                  onToggleBuyNow={handleToggleBuyNow}
                  onToggleInstallment={handleToggleInstallment}
                  onBuy={handleBuy}
                  responsiveWidth={responsiveWidth}
                />
                <BrandCard />
              </div>
            </div>
            <div className="col-span-2 flex flex-col order-first">
              <ImageGallery
                images={images}
                currentIndex={currentIndex}
                onPrev={handlePrevImage}
                onNext={handleNextImage}
                onSelect={(idx) => setCurrentIndex(idx)}
              />
              <Benefits responsiveWidth={responsiveWidth} />
              <div ref={configRef}>
                <Configuration
                  openSpecsModal={openSpecsModal}
                  onOpen={() => setOpenSpecsModal(true)}
                  onClose={() => setOpenSpecsModal(false)}
                />
              </div>
              <div ref={reviewRef}>
                <ProductReviews
                  filterOpenReview={
                    filterOpenReview as "latest" | "rating-desc" | "rating-asc"
                  }
                  onfeedback={feedback}
                  onOpenFilTab={isOpen}
                  onOpenFeedback={() => handleFeedback()}
                  onCloseFeedback={() => setFeedback(false)}
                  onToggle={handleToggle}
                  onSortChange={handleSortChange}
                  handleData={handleData}
                  detailProductId={`/${productListsId}/${detailProductId}`}
                />
              </div>
              <div ref={postRef}>
                <DetailedArticle
                  openDetailPostModal={openDetailPostModal}
                  onOpenDetailPostModal={() => setOpenDetailPostModal(true)}
                  onCloseDetailPostModal={() => setOpenDetailPostModal(false)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-1 flex flex-col space-y-5 px-4">
            <ImageGallery
              images={images}
              currentIndex={currentIndex}
              onPrev={handlePrevImage}
              onNext={handleNextImage}
              onSelect={(idx) => setCurrentIndex(idx)}
            />
            <ProductInfor
              onSelectVersion={isSelectVersion}
              setOnSelectVersion={setIsSelectVersion}
              onIsSelectVersion={handleIsSelectVersion}
              responsiveWidth={responsiveWidth}
            />
            <PurchaseBox
              buttonPromotion={buttonPromotion as "buyNow" | "installment"}
              onToggleBuyNow={handleToggleBuyNow}
              onToggleInstallment={handleToggleInstallment}
              onBuy={handleBuy}
              responsiveWidth={responsiveWidth}
            />
            <Benefits responsiveWidth={responsiveWidth} />
            <BrandCard />
            <div ref={configRef}>
              <Configuration
                openSpecsModal={openSpecsModal}
                onOpen={() => setOpenSpecsModal(true)}
                onClose={() => setOpenSpecsModal(false)}
              />
            </div>
            <div ref={reviewRef}>
              <ProductReviews
                filterOpenReview={
                  filterOpenReview as "latest" | "rating-desc" | "rating-asc"
                }
                onfeedback={feedback}
                onOpenFilTab={isOpen}
                onOpenFeedback={() => handleFeedback()}
                onCloseFeedback={() => setFeedback(false)}
                onToggle={handleToggle}
                onSortChange={handleSortChange}
                handleData={handleData}
                detailProductId={`/${detailProductId}`}
              />
            </div>
            <div ref={postRef}>
              <DetailedArticle
                openDetailPostModal={openDetailPostModal}
                onOpenDetailPostModal={() => setOpenDetailPostModal(true)}
                onCloseDetailPostModal={() => setOpenDetailPostModal(false)}
              />
            </div>
            <div className="fixed bottom-0 inset-x-0 px-4 pt-2.5 pb-safe-or-2.5 bg-white border-t z-[11]">
              <div className="w-full flex space-x-2">
                <div className="w-full">
                  <div>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
