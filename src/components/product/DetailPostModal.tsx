"use client";

import BaseModal from "@/components/common/baseModal";
import Image from "next/image";
import { useState } from "react";

type DetailPostModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function DetailPostModal({
  open,
  onClose,
  title,
}: DetailPostModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-4.png",
    "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-5.png",
    "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-6.png",
  ];

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="p-4 md:p-6 bg-white overflow-auto">
        <div className="editor-viewer prose prose-sm md:prose-base">
          <h2>
            Ghế công thái học Herman Miller Aeron: Thiết kế thông minh, tính
            chuyên nghiệp cao
          </h2>
          <div data-type="imageBlock">
            <Image
              width={752}
              height={501}
              alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1"
              src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1.png"
              loading="lazy"
            />
          </div>
          <p>
            Nếu bạn đã từng có cơ hội để sử dụng bất cứ dòng ghế công thái học
            nào trước đây, khi chuyển qua mẫu
            <a
              target="_blank"
              rel=""
              href="https://thinkpro.vn/ghe-cong-thai-hoc/ghe-cong-thai-hoc-herman-miller-aeron"
            >
              ghế Herman Miller Aeron chân nhôm
            </a>
            thì chắc hẳn ai trong số các chúng ta cũng đều phải bất ngờ. Ngay
            khi được trải nghiệm thực tế chiếc Aeron này, bạn sẽ cảm nhận ngay
            form ghế thực sự tuyệt vời - chuẩn câu nói “đắt xắt ra miếng”. Tổng
            quan về thiết kế
            <a
              target="_blank"
              rel=""
              href="https://thinkpro.vn/ghe-cong-thai-hoc"
            >
              ghế công thái học
            </a>
            , hãng đã mang đến cho người dùng một kiểu dáng liền mạch, chuyên
            nghiệp tạo tư thế ngồi tốt phù hợp cho mọi vóc dáng và giảm lực tác
            động lên lưng, cột sống và cổ.
          </p>
          <div data-type="imageBlock">
            <Image
              src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-2.png"
              width={752}
              height={501}
              alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-2"
              loading="lazy"
            />
          </div>
          <p>
            Phần lưng ghế công thái học Herman Miller Aeron cũng được thiết kế
            rộng, đứng form tạo cảm giác thoải mái, ôm sát lưng người ngồi. Theo
            nhà sản xuất công bố, ghế có trọng lượng là <strong>21kg</strong> và
            trọng tải tối đa lên đến <strong>160kg</strong>, thoải mái đáp ứng
            tối đa cho nhu cầu trải nghiệm của người dùng.
          </p>
          <p>
            Đặc biệt với
            <a
              target="_blank"
              rel=""
              href="https://thinkpro.vn/ghe-cong-thai-hoc-herman-miller"
            >
              ghế công thái học Herman Miller
            </a>
            , người dùng chỉ việc đẩy mông sát lên phần lưng ghế thì ngay lập
            tức thiết bị sẽ điều chỉnh tư thế chuẩn nhất cho người dùng. Và đó
            cũng là lý do chính giải thích cho câu hỏi vì sao hãng không sản
            xuất phần tựa đầu kèm như đại đa số những chiếc ghế công thái học
            khác trên thị trường. Bởi lẽ, nếu đã ngồi đúng tư tế thì người dùng
            cũng không quá cần thiết phải dùng đến phần tựa đầu.
          </p>
          <h2>Chất liệu cao cấp, độ bền vượt trội</h2>
          <div data-type="imageBlock">
            <Image
              src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-03.png"
              width={752}
              height={501}
              alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-2"
              loading="lazy"
            />
          </div>
          <p>
            Một trong những yếu tố giúp chiếc ghế công thái học Herman Miller
            Aeron chinh phục người dùng bởi bề mặt lưng và mâm ghế được làm từ
            chất liệu <strong>lưới</strong> thoáng khí.
          </p>
          <p>
            Cụ thể, nhà sản xuất sử dụng đệm ngồi và đệm lưng bằng chất liệu
            <strong>Pellicle</strong> độc quyền, do đó nó có khả năng chống đọng
            mồ hôi, hạn chế bí bách. Đây là điều chúng ta có thể thấy “khác bọt”
            hẳn so với những chiếc ghế gaming được làm bằng da thông thường.
          </p>
          <div className="t-image-album-view not-prose my-4 md:my-6">
            <div className="relative">
              <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg bg-gray-100 no-scrollbar">
                <div className="flex flex-none snap-center basis-full aspect-w-16 aspect-h-9">
                  <Image
                    width={640}
                    height={360}
                    src={images[currentIndex]}
                    alt={`Hình ảnh ${currentIndex + 1}`}
                    className="w-full h-full object-contain cursor-pointer ls-is-cached lazyloaded"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-colorPrimary400 inline-flex items-center rtl:[&amp;_span:first-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full"
                  onClick={handlePrevImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend text-sm gap-x-1.5 p-1.5 shadow-sm text-colorPray100 bg-colorPray900 hover:bg-colorPray800 disabled:bg-colorPray900 aria-disabled:bg-colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault dark:focus-visible:ring-colorPrimary400 inline-flex items-center rtl:[&amp;_span:last-child]:rotate-180 absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full"
                  onClick={handleNextImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative group/scrollable mt-2">
              <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex space-x-2 py-2 md:py-3 px-1">
                  {images.map((img, idx) => (
                    <div key={idx} className="shrink-0 w-[100px]">
                      <div
                        className={`${
                          currentIndex === idx
                            ? "ring-2 ring-colorPrimary400"
                            : ""
                        }  aspect-w-16 aspect-h-9 rounded overflow-hidden cursor-pointer`}
                        onClick={() => setCurrentIndex(idx)}
                      >
                        <Image
                          className="ls-is-cached lazyloaded"
                          src={img}
                          alt={`thumbnail ${idx + 1}`}
                          width={40}
                          height={40}
                          sizes="(max-width: 768px) 40px, 80px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p>
            Hơn thế nữa, độ chắc chắn và ổn định là điều người dùng có thể dễ
            dàng cảm nhận được khi trực tiếp trải nghiệm và “đặt lên bàn cân” để
            so sánh với những chiếc ghế văn phòng hay ghế CTH giá rẻ khác. Các
            bộ phận quan trọng, chịu lực chính của ghế như phần khung và chân
            ghế đều được làm từ chất liệu <strong>kim loại và nhựa</strong> dày
            bản cho độ chắc chắn cực kỳ cao.
          </p>
          <p>
            Nhìn một cách tổng quan mật độ vật liệu mà hãng mang lên chiếc ghế
            công thái học Herman Miller Aeron này cũng nhiều hơn đa phần những
            mẫu ghế CTH khác trên thị trường hiện nay.
          </p>
          <h2>
            Cảm giác ngồi thoải mái, hỗ trợ khả năng tùy chỉnh linh hoạt cho mọi
            form người
          </h2>
          <div data-type="imageBlock">
            <Image
              src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-7.png"
              width={752}
              height={501}
              alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-2"
              loading="lazy"
            />
          </div>
          <p>
            Điểm ấn tượng không thể bỏ qua của chiếc ghế công thái học Herman
            Miller Aeron chính là bệ tỳ tay làm bằng PU êm ái. Nó có khả năng{" "}
            <strong>di chuyển 4D</strong> linh hoạt bao gồm: nâng, hạ, xoay
            trái, xoay phải và trượt ra trượt vào.
          </p>
          <p>
            Mặc dù mẫu ghế công thái học Herman Miller Aeron không được tích hợp
            kèm theo tựa đầu nhưng nhà sản xuất đã thiết kế riêng bộ phận này.
            Vì thế, nếu đã quen với việc ngồi ghế có tựa thì người dùng hoàn
            toàn có thể đặt mua thêm.
          </p>
          <p></p>
        </div>
      </div>
    </BaseModal>
  );
}
