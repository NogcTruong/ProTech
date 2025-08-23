interface ProductHeaderProps {
  fixedProducts: boolean;
}

export default function ProductHeader({ fixedProducts }: ProductHeaderProps) {
  return (
    <div
      className={`${
        fixedProducts ? "px-3 pt-1" : "p-4"
      } md:min-w-[260px] flex-1`}
    >
      <div
        className={`${
          fixedProducts ? "hidden" : ""
        } flex items-baseline space-x-2`}
      >
        <span className="text-2xl font-bold font-lexend">So sánh</span>
        <span className="text-sm text-gray-600">2 sản phẩm</span>
      </div>
      <div className={`${fixedProducts ? "md:mt-2" : "mt-4 md:mt-6"}`}>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="showDifference"
              className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
            />
          </div>
          <div className="ms-3 flex flex-col">
            <label
              htmlFor="showDifference"
              className="text-sm font-medium text-gray-900"
            >
              Chỉ hiển thị điểm khác biệt
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
