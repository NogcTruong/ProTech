import Image from "next/image";
import Link from "next/link";

export default function BrandCard() {
  return (
    <div className="border rounded-2xl p-4 flex space-x-4 bg-white">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
        <Image
          width={48}
          height={48}
          alt="Herman Miller"
          src="https://imagor.owtg.one/unsafe/fit-in/96x96/https://d28jzcg6y4v9j1.cloudfront.net/media/core/brands/2024/4/11/thuong-hieu-icon-herman-miller-thinkpro.vn.png"
        />
      </div>
      <div className="flex-1 flex flex-col space-y-1">
        <div className="flex items-center space-x-1">
          <span className="font-semibold">Herman Miller</span>
        </div>
        <div>
          <p className="text-sm line-clamp-4">
            Thành lập từ năm 1927 tại Mỹ, Herman Miller được biết như một trong
            những nhà sản xuất nội thất hàng đầu tại Mỹ. Sản phẩm của Herman
            Miller rất đa dạng với sản phẩm ghế công thái học vô cùng cao cấp
            được rất nhiều người trên thế giới tin dùng với khả năng
          </p>
        </div>
        <div>
          <Link
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
            href="/ghe-cong-thai-hoc"
          >
            <span>Xem tất cả sản phẩm</span>
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
          </Link>
        </div>
      </div>
    </div>
  );
}
