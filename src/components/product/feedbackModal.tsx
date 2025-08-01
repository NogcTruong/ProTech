import Image from "next/image";
import BaseModal from "../common/baseModal";
import "../../app/(productLists)/[productListsId]/[detailProductId]/danh-gia/review.css";

type FeedbackProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function Feedback({ open, onClose, title }: FeedbackProps) {
  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="flex-1 p-4 flex flex-col overflow-auto w-[600px]">
        <div className="flex items-start space-x-5">
          <div className="w-[80px] h-[80px] bg-gray-100 rounded-lg">
            <Image
              height={80}
              width={80}
              alt="Bàn phím cơ PMO Wave75 Aluminum CNC (Sliver Mirror Glass Weight (Tạ Gương) - RGB - Black - Mới, Full box, Nhập khẩu)"
              srcset="https://imagor.owtg.one/unsafe/fit-in/80x80/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/3/ban-phim-co-pmo-wave75-aluminium-cnc-3rv.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/160x160/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/3/ban-phim-co-pmo-wave75-aluminium-cnc-3rv.jpg 2x"
              src="https://imagor.owtg.one/unsafe/fit-in/80x80/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2025/4/3/ban-phim-co-pmo-wave75-aluminium-cnc-3rv.jpg"
            />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <span className="text-base font-lexend font-bold">
              Bàn phím cơ PMO Wave75 Aluminum CNC (Sliver Mirror Glass Weight
              (Tạ Gương) - RGB - Black - Mới, Full box, Nhập khẩu)
            </span>
            <span className="text-sm text-gray-600">
              Sliver Mirror Glass Weight (Tạ Gương) - RGB / Black / Mới, Full
              box, Nhập khẩu
            </span>
            <div>
              <form action="" className="rating">
                <div className="rating__stars">
                  <label
                    htmlFor="rating-1"
                    className="rating__label rating__label--delay1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor="rating-1"
                    className="rating__label rating__label--delay1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor="rating-1"
                    className="rating__label rating__label--delay1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor="rating-1"
                    className="rating__label rating__label--delay1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor="rating-1"
                    className="rating__label rating__label--delay1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-600"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"
                      />
                    </svg>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <textarea
            rows="3"
            placeholder="Mọi sản phẩm đề có ưu, nhược riêng. Chia sẻ chi tiết cho anh em về sản phẩm bạn nhé"
            className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500 resize-none"
          ></textarea>
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">
            Thêm ảnh thực tế (tối đa 3 ảnh)
          </span>
          <div className="mt-3 flex items-center space-x-4">
            <label htmlFor="t-upload">
              <div className="w-[80px] h-[80px] border rounded-lg flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5m10.5-11.25h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
                  />
                </svg>
              </div>
              <input
                id="t-upload__input"
                multiple
                type="file"
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
        <form className="mt-4 grid grid-rows-2 gap-4">
          <div>
            <div>
              <div className="flex">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-900 after:content-['*'] after:ms-0.5 after:text-red-500"
                >
                  Họ và tên
                </label>
              </div>
            </div>
            <div className="mt-1 relative">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Nguyễn Văn A"
                  className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                />
              </div>
              <p className="hidden mt-2 text-red-500 text-sm">
                Vui lòng nhập họ tên
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-900 after:content-['*'] after:ms-0.5 after:text-red-500"
                >
                  Số điện thoại
                </label>
              </div>
            </div>
            <div className="mt-1 relative">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  placeholder="0987654###"
                  className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-colorPrimary500"
                  autoComplete="tel"
                />
              </div>
              <p className="hidden mt-2 text-red-500 text-sm">
                Vui lòng nhập số điện thoại
              </p>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="shareFriend"
                className="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-colorPrimary500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-colorPrimary500"
              />
            </div>
            <div className="ms-3 flex flex-col">
              <label
                htmlFor="shareFriend"
                className="text-sm font-medium text-gray-900"
              >
                Tôi sẽ giới thiệu cho bạn bè, người thân mua sản phẩm này tại
                ThinkPro
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-3 pb-safe-or-3">
        <button className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-gray-950 hover:bg-gray-900 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimary500 w-full flex justify-center items-center">
          <span>Gửi đánh giá</span>
        </button>
      </div>
    </BaseModal>
  );
}
