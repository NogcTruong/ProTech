"use client";
import Link from "next/link";
import "./checkout.css";
import { useState } from "react";
import PromotionalCode from "@/components/shoppingCart/promotionalCode";
import Image from "next/image";
import ProductsOrderModal from "@/components/shoppingCart/productsOrderModal";
import FormOrderModal from "@/components/product/formOrderModal";

export default function Checkout() {
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
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
            clip-rule="evenodd"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
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
          <div className="max-md:col-start-1 max-md:row-start-2 md:col-span-2 md:row-span-2">
            <span className="text-lg md:text-xl font-bold font-lexend">
              Phương thức giao hàng
            </span>
            {/* Phương thức giao hàng */}
            <div className="mt-4">
              <div className="relative flex items-start">
                <fieldset className="flex space-x-6">
                  <div className="relative flex items-start">
                    <div className="flex">
                      <input
                        type="radio"
                        id="shippingMethod2"
                        name="shippingMethod"
                        checked={shippingMethod === 2}
                        onChange={() => setShippingMethod(2)}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                        value={2}
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="shippingMethod2"
                        className="text-sm font-medium text-gray-700"
                      >
                        Nhận tại cửa hàng
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex">
                      <input
                        type="radio"
                        id="shippingMethod1"
                        name="shippingMethod"
                        checked={shippingMethod === 1}
                        onChange={() => setShippingMethod(1)}
                        className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                        value={1}
                      />
                    </div>
                    <div className="ms-3 flex flex-col">
                      <label
                        htmlFor="shippingMethod1"
                        className="text-sm font-medium text-gray-700"
                      >
                        Giao tận nơi
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* Thành phố Hồ Chí Minh */}
            <form>
              {shippingMethod === 2 && (
                <div className="mt-5 md:mt-10 flex flex-col">
                  <div className="">
                    <div className="flex flex-col space-y-4 md:space-y-6">
                      <div>
                        <span className="text-lg md:text-lg font-bold font-lexend">
                          Thành phố Hồ Chí Minh
                        </span>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                          <div className="relative flex flex-row-reverse px-4 py-3 border rounded-2xl items-center justify-between bg-white">
                            <div className="flex items-center h-5">
                              <input
                                type="radio"
                                id="shippingCity16"
                                name="shippingCity"
                                checked={shippingCity === 16}
                                onChange={() => setShippingCity(16)}
                                className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                value={16}
                              />
                            </div>
                            <div className="flex flex-col ms-0 mr-3 flex-1">
                              <label
                                htmlFor="shippingCity16"
                                className="text-sm font-medium text-gray-700"
                              >
                                <div className="flex flex-col items-start space-y-2 cursor-pointer">
                                  <span className="text-sm">
                                    Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                                  </span>
                                  <Link
                                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                                    href="/"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                      >
                                        <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                                      </g>
                                    </svg>
                                    <span>Chỉ đường</span>
                                  </Link>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="relative flex flex-row-reverse px-4 py-3 border rounded-2xl items-center justify-between bg-white">
                            <div className="flex items-center h-5">
                              <input
                                type="radio"
                                id="shippingCity30"
                                name="shippingCity"
                                checked={shippingCity === 30}
                                onChange={() => setShippingCity(30)}
                                className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                value={30}
                              />
                            </div>
                            <div className="flex flex-col ms-0 mr-3 flex-1">
                              <label
                                htmlFor="shippingCity30"
                                className="text-sm font-medium text-gray-700"
                              >
                                <div className="flex flex-col items-start space-y-2 cursor-pointer">
                                  <span className="text-sm">
                                    95 Trần Thiện Chánh, Q10
                                  </span>
                                  <Link
                                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                                    href="/"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                      >
                                        <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                                      </g>
                                    </svg>
                                    <span>Chỉ đường</span>
                                  </Link>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-lg md:text-lg font-bold font-lexend">
                          Hà Nội
                        </span>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                          <div className="relative flex flex-row-reverse px-4 py-3 border rounded-2xl items-center justify-between bg-white">
                            <div className="flex items-center h-5">
                              <input
                                type="radio"
                                id="shippingCity32"
                                name="shippingCity"
                                checked={shippingCity === 32}
                                onChange={() => setShippingCity(32)}
                                className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-radio bg-white border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
                                value={32}
                              />
                            </div>
                            <div className="flex flex-col ms-0 mr-3 flex-1">
                              <label
                                htmlFor="shippingCity32"
                                className="text-sm font-medium text-gray-700"
                              >
                                <div className="flex flex-col items-start space-y-2 cursor-pointer">
                                  <span className="text-sm">
                                    53 Thái Hà, Đống Đa
                                  </span>
                                  <Link
                                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
                                    href="/"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                      >
                                        <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                                      </g>
                                    </svg>
                                    <span>Chỉ đường</span>
                                  </Link>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <span className="text-lg md:text-xl font-bold font-lexend">
                      Thông tin người nhận
                    </span>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex content-center items-center justify-between text-sm">
                          <label className="block font-medium text-gray-700">
                            Họ và tên
                          </label>
                        </div>
                        <div className="mt-1 relative">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Nguyễn Văn A"
                              className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex content-center items-center justify-between text-sm">
                          <label className="block font-medium text-gray-700">
                            Số điện thoại
                          </label>
                        </div>
                        <div className="mt-1 relative">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="0987654321"
                              className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {shippingMethod === 1 && (
                <div className="mt-5 md:mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4">
                    <div>
                      <div className="flex content-center items-center justify-between text-sm">
                        <label
                          htmlFor="name"
                          className="block font-medium text-gray-700"
                        >
                          Họ và tên
                        </label>
                      </div>
                      <div className="mt-1 relative">
                        <div className="relative">
                          <input
                            id="name"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex content-center items-center justify-between text-sm">
                        <label
                          htmlFor="phone"
                          className="block font-medium text-gray-700"
                        >
                          Số điện thoại
                        </label>
                      </div>
                      <div className="mt-1 relative">
                        <div className="relative">
                          <input
                            id="phone"
                            type="text"
                            placeholder="0987654321"
                            className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex content-center items-center justify-between text-sm">
                        <label
                          htmlFor="area"
                          className="block font-medium text-gray-700"
                        >
                          Khu vực
                        </label>
                      </div>
                      <div className="mt-1 relative">
                        <div className="relative">
                          <input
                            id="area"
                            type="text"
                            placeholder="Chọn khu vực..."
                            value={
                              [area.city, area.district, area.ward]
                                .filter(Boolean)
                                .join(", ") || ""
                            }
                            className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500 cursor-pointer"
                            onClick={() => setAreaModal(true)}
                            readOnly
                          />
                          <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 flex-shrink-0 text-gray-400"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <FormOrderModal
                          open={areaModal}
                          onClose={() => setAreaModal(false)}
                          title="Chọn Tỉnh / Thành phố"
                          value={area}
                          onSelect={(value) => setArea(value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex content-center items-center justify-between text-sm">
                        <label
                          htmlFor="location"
                          className="block font-medium text-gray-700"
                        >
                          Địa chỉ nhận hàng
                        </label>
                      </div>
                      <div className="mt-1 relative">
                        <div className="relative">
                          <input
                            id="location"
                            type="text"
                            placeholder="Số nhà, tên đường, phường xã"
                            className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="max-md:col-start-1 max-md:row-start-3 md:col-start-3 flex flex-col space-y-2">
            <section className="overflow-hidden p-4 hidden md:flex flex-col space-y-4 rounded-2xl border bg-white">
              <div className="flex items-center space-x-2 md:space-x-0">
                <span className="text-sm md:text-xl font-bold font-lexend">
                  Khuyến mãi
                </span>
              </div>
              <div className="md:mt-4">
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 w-full flex justify-center items-center"
                  onClick={() => setOpenGiftPromotion(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <span className="">Chọn hoặc nhập mã khuyến mãi</span>
                </button>
                <PromotionalCode
                  open={openGiftPromotion}
                  onClose={() => setOpenGiftPromotion(false)}
                  title="Chọn hoặc nhập mã khuyến mãi"
                />
              </div>
            </section>
            <section className="border rounded-2xl overflow-hidden p-4 flex flex-col space-y-4 bg-white">
              <span className="text-xl font-bold font-lexend">
                Tóm tắt đơn hàng
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tạm tính</span>
                <span className="text-sm font-semibold">33.950.000</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">Tổng cộng</span>
                <span className="text-base font-semibold">33.950.000</span>
              </div>
              <div className="max-md:bottom-0 max-md:inset-x-0 max-md:bg-white max-md:z-[11] max-md:flex max-md:flex-col max-md:shadow-inverse-md fixed md:relative">
                <section className="flex md:hidden overflow-hidden p-4 flex-col space-y-4 rounded-2xl border bg-white border-x-0 !space-y-0 !flex-row justify-between items-center">
                  <div className="flex items-center space-x-2 md:space-x-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 flex-shrink-0"
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
                    <span className="text-sm md:text-xl font-bold font-lexend">
                      Khuyến mãi
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-2"
                    // onClick={() => setOpenGiftPromotion(true)}
                  >
                    <span className="text-gray-600">Chọn hoặc nhập mã</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                      />
                    </svg>
                  </div>
                </section>
                <div className="flex items-center space-x-2 w-full px-4 py-2.5 md:space-x-0 md:px-0 md:py-0">
                  <div className="w-1/2 flex md:hidden flex-col items-end">
                    <span className="text-sm">Tổng cộng</span>
                    <span className="text-lg font-semibold">33.950.000</span>
                  </div>
                  <div className="flex-1">
                    <Link
                      href="#"
                      className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 w-full flex justify-center items-center"
                    >
                      <span>Đặt hàng</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="max-md:col-start-1 max-md:row-start-1 md:col-start-3 md:row-start-2">
            <div className="rounded-2xl border bg-white">
              <button
                className="w-full flex items-center space-x-2 p-4"
                onClick={handleProductsOrder}
              >
                <span className="flex-1 text-lg md:text-xl font-lexend font-bold text-left">
                  Sản phẩm trong đơn (1)
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className={`w-6 h-6 transform transition-transform ${
                    productsOrder ? " md:rotate-180" : ""
                  }`}
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {/* Desktop */}
              {productsOrder && (
                <div className="hidden md:flex flex-col space-y-2 px-4 pb-4">
                  <Link
                    href="#!"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative flex items-center space-x-3 shrink-0 py-2 px-3 rounded-2xl hover:bg-gray-100"
                  >
                    <div className="w-[72px] h-[72px] overflow-hidden rounded-lg">
                      <Image
                        width={72}
                        height={72}
                        alt="Chuột không dây DAGK G300SE Silent"
                        src="https://imagor.owtg.one/unsafe/fit-in/72x72/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/5/6/chuot-khong-day-dagk-g300se-silent-sp7.jpg"
                        sizes="72px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col space-y-1">
                      <span className="text-sm font-medium line-clamp-2">
                        Chuột không dây DAGK G300SE Silent
                      </span>
                      <span className="text-xs text-gray-600">
                        Black / Mới, Full box, Nhập khẩu
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-rose-600 font-medium">
                          149.000
                        </span>
                        <span className="text-sm line-through">399.000</span>
                        <div className="flex-1"></div>
                        <span className="text-sm">x1</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
              {/* Mobile */}
              <div className="md:hidden">
                <ProductsOrderModal
                  open={productsOrderModal}
                  onClose={() => setProductsOrderModal(false)}
                  title="Sản phẩm trong đơn (1)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
