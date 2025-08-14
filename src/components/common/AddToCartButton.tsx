"use client";

import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import { transformToCartProduct } from "@/utils/productTransform";
import { RawProduct } from "@/types/product";

interface AddToCartButtonProps {
  product: RawProduct;
  index: number;
  category: string;
  className?: string;
  children?: React.ReactNode;
}

export default function AddToCartButton({
  product,
  index,
  category,
  className = "",
  children,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);

    const cartProduct = transformToCartProduct(product, index, category);

    setTimeout(() => {
      dispatch(addToCart(cartProduct));
      setIsLoading(false);
    }, 500);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-800 disabled:bg-gray-950 aria-disabled:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center ${className}`}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 20.25H4.92284C4.30753 20.25 3.83819 19.6996 3.9354 19.092L5.6154 8.59201C5.69302 8.10688 6.11154 7.75 6.60284 7.75H17.3974C17.8887 7.75 18.3072 8.10688 18.3848 8.59201L18.5948 9.90451"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M8.75 12.25V6C8.75 4.21 10.21 2.75 12 2.75C13.79 2.75 15.25 4.21 15.25 6V10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M17.5 15.7V19.3M19.3 17.5H15.7M22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22C18.7426 22 19.8676 21.4963 20.682 20.682C21.4963 19.8676 22 18.7426 22 17.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
          <span className="text-left break-all line-clamp-1">{children}</span>
        </>
      )}
    </button>
  );
}
