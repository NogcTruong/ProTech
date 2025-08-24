import { Metadata } from "next";
import ContentIdClient from "./ContentIdClient";

export async function generateMetadata({
  params,
}: {
  params: { contentId: string };
}): Promise<Metadata> {
  const { contentId } = params;
  const decodedContentId = decodeURIComponent(contentId);

  return {
    title: `${decodedContentId} - Nội dung`,
    description: `Đọc bài viết ${decodedContentId} tại TechPro. Chia sẻ kiến thức chuyên sâu về công nghệ, đánh giá sản phẩm và hướng dẫn sử dụng chi tiết.`,
    keywords: [
      decodedContentId,
      "bài viết công nghệ",
      "nội dung",
      "hướng dẫn",
      "đánh giá sản phẩm",
      "techpro",
      "công nghệ",
    ],
    alternates: {
      canonical: `/noi-dung/${contentId}`,
    },
  };
}

export default function PostContent() {
  return <ContentIdClient />;
}
