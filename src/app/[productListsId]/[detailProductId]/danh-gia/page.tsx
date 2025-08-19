import { Metadata } from "next";
import ReviewClient from "./ReviewClient";

export async function generateMetadata({
  params,
}: {
  params: { productListsId: string; detailProductId: string };
}): Promise<Metadata> {
  const { productListsId, detailProductId } = params;

  const decodedProductId = decodeURIComponent(detailProductId);
  const decodedCategoryId = decodeURIComponent(productListsId);

  const categoryMap: { [key: string]: string } = {
    laptop: "Laptop",
    "ban-phim-co": "Bàn phím cơ",
    "ghe-cong-thai-hoc": "Ghế công thái học",
    "ban-nang-ha": "Bàn nâng hạ",
    "may-choi-game": "Máy chơi game",
    "thuc-te-ao": "Thực tế ảo",
    "game-console": "Game Console",
  };

  const categoryName = categoryMap[decodedCategoryId] || decodedCategoryId;

  const productTitle = `${decodedProductId} - ${categoryName} | TechPro`;
  const productDescription = `Đánh giá ${decodedProductId}.`;

  return {
    title: productTitle,
    description: productDescription,
    keywords: [
      decodedProductId,
      categoryName,
      "TechPro",
      "chính hãng",
      "giá tốt",
    ],
    alternates: {
      canonical: `/${productListsId}/${detailProductId}/danh-gia`,
    },
  };
}

export default function Review() {
  return <ReviewClient  />
}