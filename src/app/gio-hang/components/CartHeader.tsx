interface CartHeaderProps {
  totalQuantity: number;
  onClearAll?: () => void;
}

export default function CartHeader({
  totalQuantity,
  onClearAll,
}: CartHeaderProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl font-bold font-lexend">Giỏ hàng</span>
      <span className="text-sm font-medium text-gray-600 mb-0.5 self-end">
        {totalQuantity || 0} sản phẩm
      </span>
      <div className="flex-1"></div>
      {onClearAll && (
        <button
          onClick={onClearAll}
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="flex-shrink-0 h-5 w-5"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21q.512.078 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48 48 0 0 0-3.478-.397m-12 .562q.51-.088 1.022-.165m0 0a48 48 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a52 52 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a49 49 0 0 0-7.5 0"
            />
          </svg>
          <span className="hidden md:inline-block">Xóa tất cả</span>
        </button>
      )}
    </div>
  );
}
