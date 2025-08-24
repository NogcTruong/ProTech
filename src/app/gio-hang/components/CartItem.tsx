import { hexToColorName } from "@/utils/colors";
import { formatPrice } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";

interface CartItemProps {
  item: any;
  onUpdateQuantity: (id: string, variant: string, quantity: number) => void;
  onRemoveItem: (id: string, variant: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemoveItem,
  onInputChange,
}: CartItemProps) {
  return (
    <div
      key={`${item.id} - ${item.variant}`}
      className="rounded-2xl border overflow-hidden p-3 bg-white shadow-md"
    >
      <div className="flex space-x-3">
        <div className="w-[72px] h-[72px] shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <Image
            width={72}
            height={72}
            src={item.image}
            alt={item.name}
            className="lazyloaded"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between max-md:space-x-2">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">{item.name}</span>
              <Link
                href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold rounded-lg text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
              >
                <span className="text-xs font-normal text-gray-600">
                  {item.variant} - {hexToColorName(item.colors[0])}
                </span>
              </Link>
            </div>
            <div className="flex md:flex-col md:space-y-0.5 max-md:space-x-2">
              <span className="text-sm font-medium">
                {formatPrice(item.price)}
              </span>
              <span className="text-sm text-gray-600 line-through">
                {formatPrice(item.originalPrice)}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex -space-x-px rounded-full shadow-sm">
              <button
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-s-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-colorPrimary500 inline-flex items-center"
                onClick={() =>
                  onUpdateQuantity(item.id, item.variant, item.quantity - 1)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="relative w-16">
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={item.quantity}
                  onChange={onInputChange}
                  className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 text-center form-input rounded-none placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                />
              </div>
              <button
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-e-full text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center"
                onClick={() =>
                  onUpdateQuantity(item.id, item.variant, item.quantity + 1)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5z"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={() => onRemoveItem(item.id, item.variant)}
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-700  hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
