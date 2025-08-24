import { Metadata } from "next";
import AuthorDetailClient from "./AuthorDetailClient";

export async function generateMetadata({
  params,
}: {
  params: { authorId: string };
}): Promise<Metadata> {
  const { authorId } = params;
  const decodedAuthorId = decodeURIComponent(authorId);

  return {
    title: `${decodedAuthorId} - Tác giả`,
    description: `Khám phá các bài viết của tác giả ${decodedAuthorId} tại TechPro. Chia sẻ kiến thức chuyên sâu về công nghệ, đánh giá sản phẩm và hướng dẫn sử dụng.`,
    keywords: [
      decodedAuthorId,
      "tác giả",
      "bài viết công nghệ",
      "review sản phẩm",
      "techpro",
      "công nghệ",
    ],
    alternates: {
      canonical: `/tac-gia/${authorId}`,
    },
  };
}

export default function AuthorPost() {
  return <AuthorDetailClient />;
}
