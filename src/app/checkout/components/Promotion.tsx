import PromotionalCode from "@/app/checkout/components/modals/PromotionalCode";

interface PromotionProps {
  openGiftPromotion: boolean;
  setOpenGiftPromotion: (open: boolean) => void;
}

export default function Promotion({
  openGiftPromotion,
  setOpenGiftPromotion,
}: PromotionProps) {
  return (
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
  );
}
