interface BenefitsProps {
  responsiveWidth: boolean;
}

export default function Benefits({ responsiveWidth }: BenefitsProps) {
  return (
    <>
      <div
        className={`${
          responsiveWidth ? "" : "mt-10"
        } rounded-2xl bg-gray-50 border overflow-hidden p-4`}
      >
        <div className="flex space-x-6">
          <div className="shrink-0 flex items-center space-x-[6px]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9 9 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.5 4.5 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218c-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715q.068.633.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.5 4.5 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5q.125.307.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665a9 9 0 0 0 .654 3.375"
                />
              </svg>
            </div>
            <span className="text-sm font-lexend font-bold">
              Trải nghiệm tận tay
            </span>
          </div>
          <div className="shrink-0 flex items-center space-x-[6px]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"
                />
              </svg>
            </div>
            <span className="text-sm font-lexend font-bold">
              Tư vấn tận tâm
            </span>
          </div>
          <div className="shrink-0 flex items-center space-x-[6px]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                />
              </svg>
            </div>
            <span className="text-sm font-lexend font-bold">
              Trung tâm khách hàng
            </span>
          </div>
          <div className="shrink-0 flex items-center space-x-[6px]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                />
              </svg>
            </div>
            <span className="text-sm font-lexend font-bold">
              Phục vụ đến 24 giờ
            </span>
          </div>
        </div>
      </div>
      <div className={`${responsiveWidth ? "" : "mt-4"} rounded-2xl bg-gray-50 border overflow-hidden p-4`}>
        <div className="grid grid-cols-1 max-md:divide-y max-md:divide-space-y-3 md:divide-x md:divide-space-x-2 md:grid-cols-3">
          <div className="flex flex-row md:flex-col md:items-center">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
              />
            </svg>
            <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
              <span className="text-base font-semibold">
                Sẵn hàng và trưng bày
              </span>
              <button className="mt-1 flex items-center space-x-1 text-gray-600">
                <span className="text-sm">Tại 1 chi nhánh</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="w-3 h-3"
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
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col md:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.9 17.9 0 0 0-3.213-9.193a2.06 2.06 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.6 48.6 0 0 0-10.026 0a1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
              <span className="text-base font-semibold">
                Vẫn chuyển miễn phí
              </span>
              <span className="mt-1 text-sm text-gray-600">
                Nội thành HN & TP.HCM
              </span>
            </div>
          </div>
          <div className="flex flex-row md:flex-col md:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
              />
            </svg>
            <div className="max-md:ml-3 md:mt-2 flex flex-col md:items-center">
              <span className="text-base font-semibold">
                Bảo hành và đổi trả
              </span>
              <span className="mt-1 text-sm text-gray-600">
                <ul>
                  <li>Sản phẩm phân phối nhập khẩu</li>
                  <li>
                    Bảo hành <strong>60 tháng</strong>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
