"use client";

import Image from "next/image";
import uspImage1 from "@/assets/images/usp-1.png";
import uspImage2 from "@/assets/images/usp-2.png";
import uspImage3 from "@/assets/images/usp-3.png";
import uspImage4 from "@/assets/images/usp-4.png";
import uspImage5 from "@/assets/images/usp-5.png";
import { useEffect, useState } from "react";

const uspData = [
  {
    title: "Trải nghiệm tận tay",
    desc: (
      <>
        ThinkPro tiên phong trưng bày số lượng lớn sản phẩm. Khách hàng có thể
        trực tiếp trải nghiệm tận tay hàng trăm mẫu sản phẩm công nghệ hiện đại
        nhất cùng với các phần mềm, công cụ đã được cài đặt sẵn trên máy.
      </>
    ),
    img: uspImage1,
    bg: "bg-blue-700",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-5 h-5 xl:w-6 xl:h-6"
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
    ),
  },
  {
    title: "Từ vấn tận tâm",
    desc: (
      <>
        Được đào tạo bài bản, chuyên nghiệp về tác phong nghề nghiệp lẫn nghiệp
        vụ, kèm theo đó là kỹ năng giao tiếp và xử lý tình huống nhạy bén, đội
        ngũ tư vấn của ThinkPro đặt lợi ích của khách hàng lên hàng đầu, đề cao
        trách nhiệm giúp khách hàng chọn được sản phẩm phù hợp nhất với nhu cầu.
      </>
    ),
    img: uspImage2,
    bg: "bg-fuchsia-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-5 h-5 xl:w-6 xl:h-6"
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
    ),
  },
  {
    title: "Trung tâm khách hàng",
    desc: (
      <>
        Chuyên trang “Trung tâm bảo vệ quyền lợi khách hàng” ra đời với sứ mệnh
        thấu hiểu và hành động kịp thời để khách hàng luôn có cảm giác thoải
        mái. Mỗi đóng góp quý báu từ Quý khách hàng đều mang lại giá trị to lớn,
        chuyển hoá thành động lực để đội ngũ ThinkPro nỗ lực hoàn thiện, tiến
        gần hơn đến sứ mệnh cao cả phục vụ cộng đồng.
      </>
    ),
    img: uspImage3,
    bg: "bg-green-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-5 h-5 xl:w-6 xl:h-6"
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
    ),
  },
  {
    title: "Phục vụ 24 giờ",
    desc: (
      <>
        Lấy khách hàng làm trung tâm, đội ngũ ThinkPro luôn sẵn lòng để phục vụ
        và hỗ trợ khách hàng tới 24 giờ với chất lượng dịch vụ nhanh chóng, kết
        nối mọi lúc mọi nơi: Kênh bán hàng Offline mở cửa tới 22h (tuỳ chi
        nhánh) Kênh bán hàng online Tổng đài hỗ trợ kỹ thuật, bảo hành đến 24h
        mỗi ngày.
      </>
    ),
    img: uspImage4,
    bg: "bg-amber-700",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-5 h-5 xl:w-6 xl:h-6"
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
    ),
  },
  {
    title: "Clerk",
    desc: (
      <>
        Tập đoàn bán lẻ từ 2013 với nguyên tắc hoạt động: Khách hàng là trung
        tâm.
      </>
    ),
    img: uspImage5,
    bg: "bg-blue-950",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="flex-shrink-0 w-5 h-5 xl:w-6 xl:h-6"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        data-sentry-element="svg"
        data-sentry-component="LogoIcon"
        data-sentry-source-file="LogoIcon.tsx"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="3.74998"
          ry="3.75"
          data-sentry-element="ellipse"
          data-sentry-source-file="LogoIcon.tsx"
        ></ellipse>
        <path
          d="M18.7566 20.8788C19.0756 21.1978 19.0436 21.7261 18.6687 21.9772C16.7613 23.2548 14.4672 23.9999 11.9991 23.9999C9.5309 23.9999 7.23678 23.2548 5.32939 21.9772C4.95452 21.7261 4.92248 21.1978 5.24153 20.8788L7.98198 18.1383C8.22966 17.8906 8.6139 17.8515 8.92565 18.0112C9.84746 18.4835 10.8921 18.7499 11.9991 18.7499C13.106 18.7499 14.1507 18.4835 15.0725 18.0112C15.3842 17.8515 15.7685 17.8906 16.0161 18.1383L18.7566 20.8788Z"
          data-sentry-element="path"
          data-sentry-source-file="LogoIcon.tsx"
        ></path>
        <path
          fillOpacity="0.5"
          d="M18.6696 2.02275C19.0445 2.27385 19.0765 2.80207 18.7575 3.12111L16.017 5.86158C15.7693 6.10927 15.3851 6.14839 15.0733 5.98868C14.1515 5.51644 13.1068 5.25 11.9999 5.25C8.27204 5.25 5.24997 8.27208 5.24997 12C5.24997 13.1069 5.51641 14.1516 5.98866 15.0734C6.14836 15.3852 6.10924 15.7694 5.86156 16.0171L3.1211 18.7575C2.80206 19.0766 2.27384 19.0446 2.02274 18.6697C0.745142 16.7623 0 14.4682 0 12C0 5.37258 5.37256 0 11.9999 0C14.4681 0 16.7622 0.745147 18.6696 2.02275Z"
          data-sentry-element="path"
          data-sentry-source-file="LogoIcon.tsx"
        ></path>
      </svg>
    ),
  },
];

const tabHighlightStyleUspDesktop = {
  "Trải nghiệm tận tay": { top: 48, left: 0, width: 282, height: 60 },
  "Từ vấn tận tâm": { top: 108, left: 0, width: 282, height: 60 },
  "Trung tâm khách hàng": { top: 168, left: 0, width: 282, height: 60 },
  "Phục vụ 24 giờ": { top: 228, left: 0, width: 282, height: 60 },
  Clerk: { top: 288, left: 0, width: 282, height: 60 },
};

const tabHighlightStyleUspDesktopTablet = {
  "Trải nghiệm tận tay": { top: 0, left: 0, width: 194, height: 48 },
  "Từ vấn tận tâm": { top: 0, left: 194, width: 162, height: 48 },
  "Trung tâm khách hàng": { top: 0, left: 356, width: 215, height: 48 },
  "Phục vụ 24 giờ": { top: 0, left: 571, width: 157, height: 48 },
  Clerk: { top: 0, left: 729, width: 86, height: 48 },
};

const tabHighlightStyleUspTablet = {
  "Trải nghiệm tận tay": { top: 0, left: 0, width: 190, height: 48 },
  "Từ vấn tận tâm": { top: 0, left: 194, width: 158, height: 48 },
  "Trung tâm khách hàng": { top: 0, left: 348, width: 211, height: 48 },
  "Phục vụ 24 giờ": { top: 0, left: 559, width: 153, height: 48 },
  Clerk: { top: 0, left: 713, width: 86, height: 48 },
};

export default function Usp() {
  const [active, setActive] = useState(0);
  const [activeMobileSlide, setActiveMobileSlide] = useState(0);
  const [isHightLg, setIsHightLg] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isMdLgScreen, setIsMdLgScreenScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHightLg(window.innerWidth >= 1280);
      setIsLgScreen(window.innerWidth < 1280 && window.innerWidth >= 1024);
      setIsMdLgScreenScreen(
        window.innerWidth >= 768 && window.innerWidth < 1280
      );
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".mobile-scroll-container");
    const handleMobileScroll = () => {
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        const slideIndex = Math.round(scrollLeft / containerWidth);
        setActiveMobileSlide(slideIndex);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleMobileScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleMobileScroll);
      };
    }
  }, []);

  const getStyleUsp = () => {
    if (isHightLg) {
      const tab =
        Object.keys(tabHighlightStyleUspDesktop)[active] ||
        "trải nghiệm tận tay";
      return tabHighlightStyleUspDesktop[tab];
    } else if (isLgScreen) {
      const tab =
        Object.keys(tabHighlightStyleUspDesktopTablet)[active] ||
        "trải nghiệm tận tay";
      return tabHighlightStyleUspDesktopTablet[tab];
    } else if (isMdLgScreen) {
      const tab =
        Object.keys(tabHighlightStyleUspTablet)[active] ||
        "trải nghiệm tận tay";
      return tabHighlightStyleUspTablet[tab];
    }
  };

  return (
    <section className="section-usp mt-10 md:mt-20">
      <div className="title flex md:justify-center space-x-4">
        <span className="text-xl md:text-4xl lg:text-5xl font-lexend font-bold text-blue-600">
          Chọn TechPro
        </span>
        <span className="text-xl md:text-4xl lg:text-5xl font-lexend font-bold">
          Chọn sự yên tâm
        </span>
      </div>
      <div className="mt-4 md:mt-10">
        <div
          className={`${
            isMobile ? uspData[activeMobileSlide].bg : uspData[active].bg
          }  rounded-3xl flex flex-col xl:flex-row duration-1000 transition-all`}
        >
          <div className="xl:min-w-1/4 relative p-2 md:pt-6 xl:py-10 md:px-4 xl:px-6">
            <div className="hidden md:block overflow-hidden md:h-full">
              <div className="overflow-auto scrollbar-hide md:h-full">
                <div className="relative flex xl:flex-col justify-center w-max md:h-full">
                  <div
                    className="marker h-[60px] absolute bg-white rounded-full transition-all ease-out z-[0] overflow-hidden -top-[60px] w-[282px] inset-x-6"
                    style={getStyleUsp()}
                  ></div>
                  {uspData.map((item, idx) => (
                    <button
                      key={idx}
                      className={`p-3 xl:p-4 xl:w-full rounded-full outline-none inline-flex justify-start items-center space-x-1 lg:space-x-2 xl:space-x-4 z-[2] shrink-0 ${
                        active === idx ? "text-colorPray900" : "text-white"
                      }`}
                      aria-label="Nút trải nghiệm tận tay"
                      onClick={() => setActive(idx)}
                    >
                      {item.svg}
                      <span className="text-sm xl:text-lg font-bold font-lexend whitespace-nowrap max-xl:h-6">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden mt-2 grid grid-cols-5 gap-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`${
                    activeMobileSlide === index ? "bg-white" : "bg-white/20"
                  } rounded h-[2px] transition-colors duration-300`}
                ></div>
              ))}
            </div>
          </div>
          <div className="max-md:hidden flex-1 pl-4 md:pl-10 pb-6 pt-4 md:py-8 lg:py-12 flex flex-col md:flex-row justify-between items-center md:space-x-8 overflow-hidden">
            <div className="w-full md:w-1/2 text-white flex flex-col space-y-2 md:space-y-6">
              <span className="text-2xl md:text-5xl lg:text-6xl xl:text7xl font-lexend font-bold">
                {uspData[active].title}
              </span>
              <div className="*:list-disc *:list-inside text-sm lg:text-base">
                {uspData[active].desc}
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex-1 flex justify-end">
              <div className="w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] 2xl:w-[460px] 2xl:h-[460px]">
                <Image src={uspData[active].img} alt="Hình ảnh usp ThinkPro" />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="relative">
              <div className="mobile-scroll-container relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                {uspData.map((usp, uspIdx) => (
                  <div
                    key={uspIdx}
                    className="flex-none snap-center basis-full px-4 pb-6 pt-4 flex flex-col justify-between items-center"
                  >
                    <div className="w-full text-white flex flex-col space-y-2">
                      <span
                        className="text-2xl md:text-5xl lg:text-7xl font-lexend font-bold"
                        style={{ color: "rgb(var(--color-primary-100))" }}
                      >
                        {usp.title}
                      </span>
                      <div className="text-sm lg:text-base">{usp.desc}</div>
                    </div>
                    <div className="mt-6 md:mt-0 flex-1 flex justify-end">
                      <div className="h-[260px] md:w-[460px] md:h-[460px]">
                        <Image
                          width={260}
                          height={260}
                          alt="Hình ảnh usp ThinkPro"
                          src={usp.img}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
