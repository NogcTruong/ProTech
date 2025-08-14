"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/cartSlice";
import { formatPrice } from "@/utils/formatters";
import Image from "next/image";

interface CartDropdownProps {
  isOpen: boolean;
}

export default function CartDropdown({ isOpen }: CartDropdownProps) {
  const cart = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string, variant: string) => {
    dispatch(removeFromCart({ id, variant }));
  };

  // const handleUpdateQuantity = (
  //   id: string,
  //   variant: string,
  //   quantity: number
  // ) => {
  //   dispatch(updateQuantity({ id, variant, quantity }));
  // };

  if (!isOpen) return null;

  return (
    <div className="overflow-hidden focus:outline-none relative bg-white ring-1 ring-gray-200 rounded-2xl shadow-lg">
      <div className="flex flex-col w-[400px]">
        <div className="border-b flex justify-between items-center space-x-2 px-4 py-2 bg-gray-100">
          <span className="text-lg font-lexend font-bold">
            Giỏ hàng ({cart?.totalQuantity})
          </span>
          <a
            href="/gio-hang"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
          >
            <span className="">Xem tất cả</span>
          </a>
        </div>
        {!cart?.items || cart.items.length === 0 ? (
          <div className="p-4">
            <section className="border rounded-2xl overflow-hidden p-6 flex flex-col items-center space-y-4">
              <div className="w-20 h-20">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M13.1194 61.3954H66.8805"
                    stroke="#2339FF"
                    stroke-width="2.23256"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.7442 19.3489H63.2558L67.5587 69.2618C67.746 71.4348 66.0325 73.3024 63.8515 73.3024H16.1484C13.9674 73.3024 12.2539 71.4348 12.4413 69.2618L16.7442 19.3489Z"
                    stroke="#121331"
                    stroke-width="2.23256"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M52.093 26.0465V15.814C52.093 9.13527 46.6789 3.72095 40 3.72095C33.3211 3.72095 27.907 9.13527 27.907 15.814V26.0465"
                    stroke="#2339FF"
                    stroke-width="2.23256"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-bold font-lexend">
                Giỏ hàng trống
              </span>
              <span className="mt-2">
                Hãy thoải mái lựa chọn sản phẩm bạn nhé
              </span>
            </section>
          </div>
        ) : (
          <>
            <div className="p-4">
              {cart.items.map((item: any) => (
                <a
                  key={`${item.id}-${item.variant}`}
                  href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                  className="group/cart relative flex items-center space-x-3 shrink-0 py-2 px-3 rounded-2xl hover:bg-gray-100"
                >
                  <div className="w-[72px] h-[72px] overflow-hidden rounded-lg">
                    <Image
                      width={72}
                      height={72}
                      alt="Ghế Công Thái Học Manson Atum"
                      src={item.image}
                      className="lazyloaded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <span className="text-sm font-medium line-clamp-2">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-600">
                      {item.version}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-rose-600 font-medium">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-sm line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                      <div className="flex-1"></div>
                      <span className="text-sm">x{item.quantity}</span>
                    </div>
                  </div>
                  <div className="group-hover/cart:opacity-100 opacity-0 transition-opacity absolute top-1 right-1">
                    <button
                      className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                      onClick={() => handleRemoveItem(item.id, item.variant)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>
              ))}
            </div>
            <div className="border-t px-4 py-2.5 flex items-center space-x-2">
              <div className="flex flex-col w-2/5">
                <span className="text-xs text-gray-600">Tổng cộng</span>
                <span className="text-lg font-semibold">
                  {formatPrice(cart?.totalAmount || 0)}
                </span>
              </div>
              <div className="flex-1 dark">
                <a
                  href="/checkout"
                  className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimaryDefault aria-disabled:bg-colorPrimaryDefault focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimaryDefault w-full flex justify-center items-center"
                >
                  <span className="">Đặt hàng</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

{
  /* Demo */
}
{
  /* {!cart?.items || cart.items.length === 0 ? (
        ) : (
          <>
           
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            item.variant,
                            item.quantity - 1
                          )
                        }
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            item.variant,
                            item.quantity + 1
                          )
                        }
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100"
                      >
                        +
                      </button>
    </div> */
}
