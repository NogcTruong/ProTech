import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant: string;
  discount?: string;
}

interface ProductListProps {
  products: Product[];
  showCompareButton?: boolean;
}

export default function ProductList({ products, showCompareButton = true }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <Link
            href={`/product/${product.id}`}
            className="block"
          >
            <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-white">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="h-full w-full object-contain lazyloaded"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col space-y-2">
              <span className="line-clamp-2 text-start font-medium text-sm md:text-body group-hover:underline">
                {product.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-rose-600">
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  }).format(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      minimumFractionDigits: 0,
                    }).format(product.originalPrice)}
                  </span>
                )}
                {product.discount && (
                  <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>
          </Link>
          
          <div className="mt-3">
            <AddToCartButton
              product={product}
              className="text-sm py-2"
            >
              Thêm vào giỏ
            </AddToCartButton>
          </div>
          
          {showCompareButton && (
            <div className="mt-2">
              <button className="w-full focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-4 w-4"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
                <span>So sánh</span>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}