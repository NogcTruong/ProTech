import Image from "next/image";
import Link from "next/link";
import ProductsOrderModal from "@/app/checkout/components/modals/ProductsOrderModal";

interface ProductOrdersProps {
  handleProductsOrder: () => void;
  productsOrder: boolean;
  productsOrderModal: boolean;
  setProductsOrderModal: (productsOrderModal: boolean) => void;
}
export default function ProductOrders({
  handleProductsOrder,
  productsOrder,
  productsOrderModal,
  setProductsOrderModal,
}: ProductOrdersProps) {
  return (
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
              fillRule="evenodd"
              d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06z"
              clipRule="evenodd"
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
  );
}
