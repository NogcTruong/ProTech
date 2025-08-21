import { useAppSelector } from "@/store/hooks";
import { formatPrice } from "@/utils/formatters";
import Link from "next/link";

interface SummaryOrdersProps {
  setOpenGiftPromotion: () => void;
}

export default function SummaryOrders({
  setOpenGiftPromotion,
}: SummaryOrdersProps) {
  const { totalAmount } = useAppSelector((state: any) => state.cart);

  return (
    <section className="border rounded-2xl overflow-hidden p-4 flex flex-col space-y-4 bg-white">
      <span className="text-xl font-bold font-lexend">Tóm tắt đơn hàng</span>
      <div className="flex items-center justify-between">
        <span className="text-sm">Tạm tính</span>
        <span className="text-sm font-semibold">
          {formatPrice(totalAmount)}
        </span>
      </div>
      <div className="border-t border-dashed border-gray-300"></div>
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">Tổng cộng</span>
        <span className="text-base font-semibold">
          {formatPrice(totalAmount)}
        </span>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
              />
            </svg>
            <span className="text-sm md:text-xl font-bold font-lexend">
              Khuyến mãi
            </span>
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={setOpenGiftPromotion}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.25 4.5l7.5 7.5l-7.5 7.5"
              />
            </svg>
          </div>
        </section>
        <div className="flex items-center space-x-2 w-full px-4 py-2.5 md:space-x-0 md:px-0 md:py-0">
          <div className="w-1/2 flex md:hidden flex-col items-end">
            <span className="text-sm">Tổng cộng</span>
            <span className="text-lg font-semibold">
              {formatPrice(totalAmount)}
            </span>
          </div>
          <div className="flex-1">
            <Link
              href="/checkout"
              className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 w-full flex justify-center items-center"
            >
              <span>Đặt hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
