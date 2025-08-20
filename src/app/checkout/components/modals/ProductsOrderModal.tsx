import Image from "next/image";
import BaseModal from "@/components/common/BaseModal";
import Link from "next/link";

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
      <div className="flex-col space-y-2 p-4 max-h-[80vh] overflow-y-auto">
        <div>
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
      </div>
    </BaseModal>
  );
}
