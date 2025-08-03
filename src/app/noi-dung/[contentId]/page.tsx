"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./content.css";

const dataRelatedArticle = [
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/06/cong-nghe-ar-la-gi-co-gi-khac-biet-voi-cong-nghe-vr-review-gdb.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/06/cong-nghe-ar-la-gi-co-gi-khac-biet-voi-cong-nghe-vr-review-gdb.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/06/cong-nghe-ar-la-gi-co-gi-khac-biet-voi-cong-nghe-vr-review-gdb.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/06/cong-nghe-ar-la-gi-co-gi-khac-biet-voi-cong-nghe-vr-review-gdb.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://media-api-beta.thinkpro.vn/media/social/articles/25/01/06/cong-nghe-ar-la-gi-co-gi-khac-biet-voi-cong-nghe-vr-review-gdb.jpg 800w",
    name: "Công nghệ AR là gì? Công nghệ AR khác gì VR",
    description:
      "Tại sao công nghệ AR đang trở thành xu hướng? So sánh sự khác biệt giữa AR và VR. Tìm hiểu chi tiết công nghệ AR và VR ngay hôm nay để nâng cao trải nghiệm làm việc, học tập, giải trí...",
    category: "Tutorial",
    author: "Phạm Quốc Toàn",
    date: "25-06-2025",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 800w",
    name: "SoC là gì? Những điều cần biết về SoC",
    description:
      "Hiểu rõ về SoC (System on Chip) và vai trò của nó trong các thiết bị điện tử hiện đại. Tìm hiểu ngay để nâng cao kiến thức công nghệ...",
    category: "Tutorial",
    author: "Lê Hoàng Thoa",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 800w",
    name: "Động kinh thực tế ảo với Google: Giả tạo ra sao?",
    description:
      "Giải thích cách sử dụng Google Cardboard để trải nghiệm thực tế ảo. Tìm hiểu chi tiết cách tạo ra hiệu ứng thực tế ảo để khám phá thế giới công nghệ...",
    category: "Tutorial",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 800w",
    name: "Google nâng cấp sản phẩm kính thực tế ảo Cardboard",
    description:
      "Cập nhật thông tin về sản phẩm kính thực tế ảo Cardboard của Google. Tìm hiểu các tính năng mới và cách sử dụng hiệu quả...",
    category: "News",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 800w",
    name: "Kính thực tế ảo là gì? Nguyên lý hoạt động và lợi ích",
    description:
      "Tìm hiểu về kính thực tế ảo, nguyên lý hoạt động và lợi ích mang lại. Khám phá cách sử dụng hiệu quả để nâng cao trải nghiệm...",
    category: "Tutorial",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/24/06/12/soc-la-gi-nhung-dieu-can-biet-ve-soc-review-zaN.png 800w",
    name: "SoC là gì? Những điều cần biết về SoC",
    description:
      "Hiểu rõ về SoC (System on Chip) và vai trò của nó trong các thiết bị điện tử hiện đại. Tìm hiểu ngay để nâng cao kiến thức công nghệ...",
    category: "Tutorial",
    author: "Lê Hoàng Thoa",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/google-cardboard-thinkpro-sLX.jpg 800w",
    name: "Động kinh thực tế ảo với Google: Giả tạo ra sao?",
    description:
      "Giải thích cách sử dụng Google Cardboard để trải nghiệm thực tế ảo. Tìm hiểu chi tiết cách tạo ra hiệu ứng thực tế ảo để khám phá thế giới công nghệ...",
    category: "Tutorial",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg 800w",
    name: "Google nâng cấp sản phẩm kính thực tế ảo Cardboard",
    description:
      "Cập nhật thông tin về sản phẩm kính thực tế ảo Cardboard của Google. Tìm hiểu các tính năng mới và cách sử dụng hiệu quả...",
    category: "News",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
  {
    image:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/1/21-thinkpro-bMs.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/208x117/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 208w, https://imagor.owtg.one/unsafe/fit-in/400x225/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 400w, https://imagor.owtg.one/unsafe/fit-in/416x234/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 416w, https://imagor.owtg.one/unsafe/fit-in/800x450/https://media-api-beta.thinkpro.vn/media/social/articles/24/12/18/kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-luu-y-khi-dung-review-AxE.jpg 800w",
    name: "Kính thực tế ảo là gì? Nguyên lý hoạt động và lợi ích",
    description:
      "Tìm hiểu về kính thực tế ảo, nguyên lý hoạt động và lợi ích mang lại. Khám phá cách sử dụng hiệu quả để nâng cao trải nghiệm...",
    category: "Tutorial",
    author: "Phạm Quốc Toàn",
    date: "27-07-2024",
    link: "#",
  },
];

export default function PostContent() {
  const params = useParams();
  const { contentId } = params;
  const lastScrollY = useRef(0);
  const [showOffset, setShowOffset] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [stickyInfoAuthor, setStickyInfoAuthor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.scrollY >= 48 && currentScrollY < lastScrollY.current) {
        setShowOffset(true);
      } else {
        setShowOffset(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleInfoAuthor = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - 1413;
      if (window.scrollY >= 420 && window.scrollY < distanceFromBottom) {
        setStickyInfoAuthor(true);
      } else {
        setStickyInfoAuthor(false);
      }
    };

    window.addEventListener("scroll", handleInfoAuthor);
    return () => {
      window.removeEventListener("scroll", handleInfoAuthor);
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, dataRelatedArticle.length));
  };
  const dataShowRelatedArticle = dataRelatedArticle.slice(0, visibleCount);
  const hasMore = visibleCount < dataRelatedArticle.length;

  return (
    <main className="md:py-10">
      <div
        className={`${
          showOffset
            ? "border-gray-200 border-b top-[var(--the-header-height)]"
            : "top-0"
        } bg-white h-12 py-2 sticky z-[11] transition-[top] duration-300`}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="container flex items-center justify-between space-x-4">
            <Link
              href="/tin-tuc"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
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
                  d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10"
                  clipRule="evenodd"
                />
              </svg>
              <span className="">Tin tức</span>
            </Link>
            <span
              className={`${
                showOffset ? "block" : "hidden"
              } text-sm font-bold font-lexend line-clamp-1`}
            >
              Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết
            </span>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="container mt-3 md:mt-4">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-5xl font-bold font-lexend">
              Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết
            </h1>
            <div className="section-author-description flex flex-col pb-4 border-b">
              <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
                <Link href="/" className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                    <Image
                      width="40"
                      height="40"
                      alt="avatar Phạm Quốc Toàn"
                      src="https://i.pinimg.com/736x/7c/e1/15/7ce115ed51c87099717528f35d819f21.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-lexend font-bold text-emerald-600">
                      Phạm Quốc Toàn
                    </span>
                    <span className="">11:06 04-07-2025</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="editor-viewer prose prose-base md:prose-lg">
              <h2 className="font-lexend">
                6 điều mà bạn cần biết về sản phẩm kính thực tế ảo
              </h2>
              <p>
                Không phải bất cứ ai cũng hiểu rõ kính thực tế ảo, về cách thức
                mà nó vẫn luôn hoạt động hay những thông tin cần phải biết về
                loại kính này. Tiếp theo đây mình sẽ bật mí cho các bạn 6 điều
                cần biết về kính thực tế ảo nhé.
              </p>
              <div data-type="imageBlock">
                <Image
                  width={820}
                  height={462}
                  alt="Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết"
                  src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/11/3/6-dieu-can-biet-ve-kinh-thuc-te-ao-thinkpro.jpg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-lexend">1/ Kính thực tế ảo là gì?</h3>
              <p>
                Ngày nay, dưới sự quảng bá của truyền thông, ắt hẳn chúng ta đã
                nghe rất nhiều về công nghệ VR cũng như về chiếc kính thực tế ảo
                mà hàng loạt các ông lớn thay nhau công bố sản phẩm đúng chứ?
              </p>
              <p>
                <a
                  target="_blank"
                  rel=""
                  href="https://thinkpro.vn/noi-dung/cong-nghe-thuc-te-ao-vr-va-cong-nghe-ar-ung-dung-thuc-te"
                >
                  Thực tế ảo
                </a>
                {` (virtual reality) có thể hiểu là công nghệ mô phỏng không gian
                thông qua bộ xử lý của máy tính. Thế giới được mô phỏng này có
                thể giống hệt thế giới thật hoặc là một thế giới ảo hóa trong
                trí tưởng tượng.`}
              </p>
              <div data-type="imageBlock">
                <Image
                  width={752}
                  height={424}
                  alt="Kính thực tế ảo là gì?"
                  src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/kinh-thuc-te-ao-la-gi-thinkpro-uFV.jpg"
                  loading="lazy"
                />
              </div>
              <p>
                Và
                <a
                  target="_blank"
                  rel=""
                  href="https://thinkpro.vn/noi-dung/tim-hieu-kinh-thuc-te-ao-la-gi-nguyen-ly-hoat-dong-va-cach-su-dung-kinh"
                >
                  kính thực tế ảo
                </a>
                {`  (virtual reality glasses) chính là công cụ để giúp con người có thể tiếp xúc với thế giới ảo hóa đó. Kính thực tế ảo có nguyên lý hoạt động khá tương tự với kính 3D khi nó sẽ cùng lúc chiếu cả 2 hình ảnh khác nhau mô phỏng tầm mắt của con người nhằm đánh lừa nhận thức không gian của não bộ.`}
              </p>
              <h3 className="font-lexend">2/ Lịch sử về kính thực tế ảo</h3>
              <p>
                Dù kính thực tế ảo mới trở nên phổ biến trong một vài năm trở
                lại đây nhưng ý tưởng về xây dựng một thiết bị giúp con người
                đắm chìm vào một thế giới khác đã hình thành từ rất lâu về
                trước.
              </p>
              <p>
                Từ những năm <strong>1968</strong>, nhà khoa học{" "}
                <strong>Ivan Sutherland</strong> đã phát triển một thiết bị gắn
                màn hình trên đầu và được xem như là chiếc kính VR đầu tiên.
                Nhảy đến năm 1993, <strong>SEGA</strong>, một hãng game vẫn cực
                kỳ nổi tiếng cho đến tận hôm nay đã phát triển và cho ra mắt
                chiếc kính <strong>Sega VR</strong> cho loại trò chơi của mình.
                Tuy dự án này không được thành công nhưng nó đã đánh dấu khởi
                đầu cho sự quan tâm của các hãng công nghệ và game đến khái niệm
                kính thực tế ảo.
              </p>
              <div data-type="imageBlock">
                <Image
                  width={820}
                  height={398}
                  alt="SEGA VR"
                  src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2023/10/31/sega-vr-thinkpro.jpg"
                  loading="lazy"
                />
              </div>
              <p>
                Nếu bạn là một tín đồ về phim điện ảnh như mình thì ắt hẳn bạn
                sẽ thấy quen thuộc với những tựa phim khai thác về đề tài này.
                Một số bộ phim tiêu biểu mà mình có thể kể đến như: The Matrix,
                Brainstorm, Avalon,... Ngoài ra bộ phim tuổi thơ của mình cũng
                như phần lớn mọi người “<strong>Mật mã Lyoko</strong>” cũng là
                một tác phẩm khai thác về đề tài thế giới ảo khá tốt.
              </p>
              <p>
                <strong>Xem thêm</strong>:
              </p>
              <ul>
                <li>
                  <p>
                    Liệu{" "}
                    <a
                      target="_blank"
                      rel=""
                      href="https://thinkpro.vn/noi-dung/lieu-kinh-thuc-te-ao-co-gay-hai-den-mat-khong-luu-y-khi-mang"
                    >
                      kính thực tế ảo có gây hại đến mắt không
                    </a>
                    ? Lưu ý khi mang
                  </p>
                </li>
                <li>
                  <p>
                    Hướng dẫn{" "}
                    <a
                      target="_blank"
                      rel=""
                      href="https://thinkpro.vn/noi-dung/huong-dan-cach-lua-chon-kinh-thuc-te-ao-phu-hop-nhat"
                    >
                      cách lựa chọn kính thực tế ảo
                    </a>{" "}
                    phù hợp nhất
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      rel=""
                      href="https://thinkpro.vn/noi-dung/review-kinh-thuc-te-ao-meta-quest-2-sau-hon-1-nam-su-dung"
                    >
                      Review kính thực tế ảo Meta Quest 2
                    </a>{" "}
                    sau hơn 1 năm sử dụng
                  </p>
                </li>
                <li>
                  <p>
                    Dòng{" "}
                    <a
                      target="_blank"
                      rel=""
                      href="https://thinkpro.vn/noi-dung/dong-kinh-thuc-te-ao-noi-tieng-cua-google-gio-ra-sao"
                    >
                      kính thực tế ảo nổi tiếng của Google
                    </a>{" "}
                    giờ ra sao?
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 md:mt-10">
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-5 md:w-3 md:h-7 bg-blue-600"
                style={{
                  "clip-path": "polygon(50% 0px, 100% 0px, 50% 100%, 0% 100%)",
                }}
              ></div>
              <span className="text-xl md:text-3xl font-bold">
                Bài viết liên quan
              </span>
            </div>
            <div className="flex flex-col space-y-6">
              {dataShowRelatedArticle.map((pro, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex flex-col space-y-2 mt-5 py-0 md:pb-6 md:flex-row md:mt-6 md:space-y-0 md:space-x-6 md:border-b"
                >
                  <div className="w-full md:w-[208px]">
                    <div className="content-aspect-w-16 content-aspect-h-9 rounded-lg overflow-hidden">
                      <Image
                        width={112}
                        height={63}
                        alt={pro.name}
                        sizes="(max-width: 768px) 400px, 208px"
                        srcset={pro.srcset}
                        src={pro.image}
                        className="w-full h-full lazyloaded"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2">
                    <span className="text-base md:text-xl font-bold font-lexend">
                      {pro.name}
                    </span>
                    <span className="text-sm md:text-base line-clamp-3">
                      {pro.description}
                    </span>
                    <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
                      <span className="font-semibold text-[#00C25C]">
                        {pro.author}
                      </span>
                      <span>/</span>
                      <span>{pro.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center btn-show-more"
                  onClick={handleShowMore}
                >
                  <span>Xem thêm</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-shrink-0"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* opacity-0 */}
        {stickyInfoAuthor && (
          <div className="opacity-100 group author-sticky cursor-pointer">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 border border-gray-50 rounded-full overflow-hidden">
                <Image
                  width={80}
                  height={80}
                  alt="Phạm Quốc Toàn"
                  src="https://i.pinimg.com/736x/7c/e1/15/7ce115ed51c87099717528f35d819f21.jpg"
                  className="w-full h-full object-cover lazyloaded"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 group-hover:opacity-0"
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
            </div>
            <div className="group-hover:flex flex-col space-y-2 hidden">
              <div>
                <div className="text-gray-600 text-xs font-semibold">
                  Bài viết bởi
                </div>
                <div className="text-sm font-bold font-lexend">
                  Phạm Quốc Toàn
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-600"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"
                    />
                  </svg>
                  <span className="text-sm">Chuyên gia công nghệ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-600"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6.042A8.97 8.97 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A9 9 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.97 8.97 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A9 9 0 0 0 18 18a8.97 8.97 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="text-sm">122 bài viết</span>
                </div>
              </div>
              <Link
                href="/tac-gia/pham-quoc-toan"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimary500 inline-flex items-center"
              >
                <span>Xem thông tin tác giả</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8L6.22 5.28a.75.75 0 0 1 0-1.06"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
