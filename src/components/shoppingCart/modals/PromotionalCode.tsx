import BaseModal from "@/components/common/BaseModal";

type ProductsOrderModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function ProductsOrderModal({
  open,
  onClose,
  title,
}: ProductsOrderModalProps) {
  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="p-4 md:p-6 w-[600px]">
        <div className="flex space-x-2">
          <div className="flex-1 flex flex-col space-y-1">
            <input
              type="text"
              placeholder="Nhập mã khuyến mại"
              className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-3.5 py-2.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
            />
          </div>
          <div>
            <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center">
              <span>Áp dụng</span>
            </button>
          </div>
        </div>
        <div className="py-4">
          <span className="text-sm">Bạn có thể chọn 1 khuyến mãi</span>
        </div>
      </div>
    </BaseModal>
  );
}
