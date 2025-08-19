import Image from "next/image";
import { products } from "../data";

export default function GuestPhoto() {
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-xl font-bold font-lexend">Ảnh chụp từ khách</span>
      <div className="relative group">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex space-x-2">
            {products.map((product) =>
              product.image?.map((img, imgIndex) => (
                <div
                  key={`${product.id}-${imgIndex}`}
                  className="w-[80px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200"
                >
                  <Image
                    width={80}
                    height={80}
                    alt={`Hinh anh khach hang danh gia san pham ${product.name}`}
                    src={img}
                    className="w-full h-full object-contain lazyloaded"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
