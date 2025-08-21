"use client";

import Link from "next/link";
import "./checkout.css";
import { useState } from "react";
import DeliveryMethod from "./components/DeliveryMethod";
import ProductOrders from "./components/ProductOrders";
import Promotion from "@/components/shoppingCart/Promotion";
import SummaryOrders from "@/components/shoppingCart/SummaryOrders";

export default function CheckoutClient() {
  const [openGiftPromotion, setOpenGiftPromotion] = useState(false);
  const [productsOrder, setProductsOrder] = useState(true);
  const [productsOrderModal, setProductsOrderModal] = useState(false);
  const [shippingMethod, setShippingMethod] = useState(2);
  const [shippingCity, setShippingCity] = useState(0);
  const [areaModal, setAreaModal] = useState(false);
  const [area, setArea] = useState({
    city: "",
    district: "",
    ward: "",
  });

  const handleProductsOrder = () => {
    setProductsOrder(!productsOrder);

    if (window.innerWidth < 768) {
      setProductsOrderModal(!productsOrderModal);
    }
  };

  return (
    <main className="checkout-page">
      <div className="hidden md:flex container items-center space-x-4 py-6">
        <span className="font-lexend font-bold text-lg">
          Thông tin giao hàng
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="w-5 h-5 text-gray-300"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-lexend font-bold text-lg text-gray-300">
          Thanh toán
        </span>
      </div>
      <div className="sticky md:hidden bg-gray-100 top-[var(--the-header-height)] left-0 right-0 z-10">
        <div className="relative shrink-0 h-12 px-[52px] py-2 border-b flex items-center">
          <Link
            href="/"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center absolute left-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="h-5 w-5 flex-shrink-0"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <div className="w-full text-center">
            <span className="text-lg font-bold font-lexend line-clamp-1">
              Thông tin giao hàng
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-10 md:gap-y-2 pb-10">
          <DeliveryMethod
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            shippingCity={shippingCity}
            setShippingCity={setShippingCity}
            area={area}
            setArea={setArea}
            areaModal={areaModal}
            setAreaModal={setAreaModal}
          />
          <div className="max-md:col-start-1 max-md:row-start-3 md:col-start-3 flex flex-col space-y-2">
          <Promotion
            openGiftPromotion={openGiftPromotion}
            setOpenGiftPromotion={() => setOpenGiftPromotion(true)}
            setCloseGiftPromotion={() => setOpenGiftPromotion(false)}
          />
          <SummaryOrders
            setOpenGiftPromotion={() => setOpenGiftPromotion(true)}
          />
          </div>
          <ProductOrders
            handleProductsOrder={handleProductsOrder}
            productsOrder={productsOrder}
            productsOrderModal={productsOrderModal}
            setProductsOrderModal={setProductsOrderModal}
          />
        </div>
      </div>
    </main>
  );
}
