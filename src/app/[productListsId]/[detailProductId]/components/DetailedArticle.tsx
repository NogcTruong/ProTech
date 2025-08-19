import DetailPostModal from "@/app/[productListsId]/[detailProductId]/components/modals/DetailPostModal";
import Image from "next/image";

interface DetailedArticleProps {
  openDetailPostModal: boolean;
  onOpenDetailPostModal: () => void;
  onCloseDetailPostModal: () => void;
}

export default function DetailedArticle({openDetailPostModal, onOpenDetailPostModal, onCloseDetailPostModal }: DetailedArticleProps) {
  return (
    <div className="section-detailed-article relative md:p-6 md:border md:rounded-2xl md:shadow-md scroll-mt-20 mt-10">
      <h3 className="text-xl md:text-3xl font-bold font-lexend">
        Bài viết chi tiết
      </h3>
      <div className="mt-4 md:mt-6 section-detailed-article__wrapper">
        <div className="editor-viewer prose prose-sm md:prose-base">
          <h2 className="font-bold font-lexend">
            Ghế công thái học Herman Miller Aeron: Thiết kế thông minh, tính
            chuyên nghiệp cao
          </h2>
          <div data-type="imageBlock">
            <Image
              width={739}
              height={493}
              alt="ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1"
              src="https://d28jzcg6y4v9j1.cloudfront.net/media/social/articles/2022/8/15/ghe-cong-thai-hoc-herman-miller-aeron-thinkpro-1.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-[3] max-md:flex max-md:justify-center">
        <button
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
          onClick={onOpenDetailPostModal}
        >
          <span>Xem tất cả</span>
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
        </button>
        <DetailPostModal
          open={openDetailPostModal}
          onClose={onCloseDetailPostModal}
          title="Bài viết chi tiết"
        />
      </div>
    </div>
  );
}
