import ProductSpecsModal from "@/app/[productListsId]/[detailProductId]/components/modals/ProductSpecsModal";

interface ConfigurationProps {
  openSpecsModal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function Configuration({
  openSpecsModal,
  onOpen,
  onClose,
}: ConfigurationProps) {
  return (
    <div
      className="section-specifications scroll-mt-20 flex flex-col space-y-4 md:space-y-6 mt-10"
    >
      <h2 className="text-xl md:text-3xl font-bold font-lexend">
        Cấu hình & đặc điểm
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <table className="w-full ring-1 ring-gray-200 rounded-2xl overflow-hidden bg-white">
          <tbody>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Chất liệu lưng ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Chất liệu mâm ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Khung lưng
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Chân ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Tựa đầu
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Không có</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Bệ tỳ tay
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Điều chỉnh 4D</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Piston
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Samhongsa Class 4</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm odd:bg-gray-50">
              <td className="w-[166px] px-3 py-2 align-top md:w-[318px]">
                Điều chỉnh thắng lực
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Có - Dạng tay quay</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
          onClick={onOpen}
        >
          <span>Xem chi tiết</span>
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
              d="m8.25 4.5l7.5 7.5l-7.5 7.5"
            />
          </svg>
        </button>
        <ProductSpecsModal
          open={openSpecsModal}
          onClose={onClose}
          title="Cấu hình & đặc điểm"
        />
      </div>
    </div>
  );
}
