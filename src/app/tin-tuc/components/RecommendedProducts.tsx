import { formatPrice } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
}

interface RecommendedProductsProps {
  products: Product[];
}

export default function RecommendedProducts({
  products,
}: RecommendedProductsProps) {
  return (
    <div className="md:col-space-1">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-1 bg-green-500 rotate-[15deg]"></div>
          <h2 className="text-xl md:text-3xl font-bold font-lexend">
            Có thể bạn cũng thích
          </h2>
        </div>
        <div className="flex flex-col space-y-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/noi-dung/sua-loi-laptop-tu-ngat-wifi-win-10"
              className="flex items-center space-x-3 shrink-1 rounded-2xl bg-white border p-2"
            >
              <div className="w-[72px] h-[72px] overflow-hidden rounded-2xl bg-white">
                <Image
                  width={72}
                  height={72}
                  alt={product.name}
                  src={product.image}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-1">
                <span className="text-sm md:text-base font-medium line-clamp-2">
                  {product.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm md:text-base text-rose-600 font-medium">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm md:text-base line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-500 ring-opacity-25">
                    {product.discount}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
