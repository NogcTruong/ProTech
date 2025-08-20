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
    "ghe-cong-thai-hoc-herman-miller-aeron":
      "Ghế Công Thái Học Herman Miller Aeron",
  };

  const detailProductMap: { [key: string]: string } = {
    "ghe-cong-thai-hoc-herman-miller-aeron":
      "Ghế Công Thái Học Herman Miller Aeron",
  };

  const categoryName = categoryMap[decodedCategoryId] || decodedCategoryId;
  const detailProduct = detailProductMap[decodedProductId] || decodedProductId;

  const productTitle = `Đánh giá | ${detailProduct} - ${categoryName} | TechPro`;
  const productDescription = `Đánh giá | ${detailProduct}.`;

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
  return <ReviewClient />;
}
