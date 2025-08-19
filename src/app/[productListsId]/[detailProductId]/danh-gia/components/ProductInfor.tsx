import Image from "next/image";
import Link from "next/link";

interface ProductInforProps {
  responsiveWidth: boolean;
}

export default function ProductInfor({ responsiveWidth }: ProductInforProps) {
  return (
    <div className="flex-1 flex flex-col md:ml-20">
      <div className="w-[120px] h-[120px] rounded-lg bg-gray-100">
        <Image
          width={120}
          height={120}
          alt="Keycap Lofree Flow Series Dye-sub PBT Keycaps (Keycap Retro - 84keys - Retro - Mới, Sealed, Nhập khẩu)"
          src="https://imagor.owtg.one/unsafe/fit-in/120x120/https://media-api-beta.thinkpro.vn/media/core/products/2024/10/23/keycap-lofree-flow-series-dye-sub-pbt-keycaps-undefined-ERj.jpg"
          className="lazyloaded"
        />
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold font-lexend">
          Keycap Lofree Flow Series Dye-sub PBT Keycaps (Keycap Retro - 84keys -
          Retro - Mới, Sealed, Nhập khẩu)
        </span>
      </div>
      <div className="mt-2 flex items-center space-x-1">
        <span className="text-sm text-gray-600">SKU:</span>
        <span className="text-sm text-gray-600">KCLFFLOW01NF</span>
        <button className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-colorPrimary600"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9 9 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9 9 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <span className="text-sm text-gray-600">
          Keycap Retro - 84keys / Retro / Mới, Sealed, Nhập khẩu
        </span>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <span className="text-lg font-semibold text-rose-600">22.990.000</span>
        <span className="text-sm text-gray-800 line-through">31.990.000</span>
        <span className="inline-flex items-center font-medium rounded-md text-xs px-1.5 py-0.5 gap-0.5 bg-rose-500 text-white">
          -28%
        </span>
      </div>
      <div
        className={`${
          responsiveWidth
            ? "bottom-0 inset-x-0 px-4 py-2.5 bg-white border-t z-[11] flex items-center space-x-2"
            : ""
        } md:mt-6 dark fixed md:relative`}
      >
        <Link
          className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-black bg-colorPrimary400 hover:bg-colorPrimary500 disabled:bg-colorPrimary500 aria-disabled:bg-colorPrimary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary500 w-full flex justify-center items-center"
          href="/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
        >
          <span>Đến trang mua hàng</span>
        </Link>
      </div>
    </div>
  );
}
