import FormOrderModal from "@/app/checkout/components/modals/FormOrderModal";
import Link from "next/link";

interface DeliveryMethodProps {
  shippingMethod: number;
  setShippingMethod: (method: number) => void;
  shippingCity: number;
  setShippingCity: (city: number) => void;
  area: { city: string; district: string; ward: string };
  setArea: (area: { city: string; district: string; ward: string }) => void;
  areaModal: boolean;
  setAreaModal: (modal: boolean) => void;
}

export default function DeliveryMethod({
  shippingMethod,
  setShippingMethod,
  shippingCity,
  setShippingCity,
  area,
  setArea,
  areaModal,
  setAreaModal,
}: DeliveryMethodProps) {
  return (
    <div className="max-md:col-start-1 max-md:row-start-2 md:col-span-2 md:row-span-2">
      <span className="text-lg md:text-xl font-bold font-lexend">
        Phương thức giao hàng
      </span>
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
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
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
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
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
                            <span className="text-sm">53 Thái Hà, Đống Đa</span>
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
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
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
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06"
                          clipRule="evenodd"
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
  );
}
