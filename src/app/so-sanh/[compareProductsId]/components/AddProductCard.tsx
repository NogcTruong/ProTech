interface ProductHeaderProps {
  fixedProducts: boolean;
}

export default function AddProductCard({ fixedProducts }: ProductHeaderProps) {
  return (
    <div
      className={`${
        fixedProducts ? "px-3" : "px-2"
      }  py-4 w-[185px] md:w-[260px] shrink-0`}
    >
      <div
        className={`${
          fixedProducts
            ? "min-h-[72px] md:min-h-[90px]"
            : "min-h-[170px] md:min-h-[480px]"
        } flex flex-col items-center justify-center h-full text-center`}
      >
        <button
          type="button"
          className={`${
            fixedProducts ? "text-sm gap-x-2 p-2" : "text-base gap-x-2.5 p-2.5"
          } focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full ring-1 ring-inset ring-current text-colorPrimary500 hover:bg-colorPrimary50 disabled:bg-transparent aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center`}
          onClick={() => setIsOpenAddCompareProducts(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${
              fixedProducts ? "h-5 w-5" : "h-6 w-6"
            }  flex-shrink-0 `}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <span className="mt-2 text-sm font-bold font-lexend text-colorPrimary500">
          Thêm sản phẩm khác
        </span>
      </div>
    </div>
  );
}
