import { Metadata } from "next";
import ProductListsClient from "./ProductListsClient";

export async function generateMetadata({
  params,
}: {
  params: { productListsId: string };
}): Promise<Metadata> {
  const { productListsId } = params;

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

  const title = `${categoryName} - Giá tốt nhất, bảo hành chính hãng | TechPro`;
  const description = `Mua ${categoryName} chính hãng tại TechPro. Giá tốt nhất, bảo hành chính hãng, giao hàng miễn phí. Tư vấn tận tâm, hỗ trợ 24/7.`;

  return {
    title,
    description,
    keywords: [categoryName, "TechPro", "chính hãng", "giá tốt", "bảo hành"],
    alternates: {
      canonical: `/${productListsId}`,
    },
  };
}

export default function ProductListsPage({
  params,
}: {
  params: { productListsId: string };
}) {
  return <ProductListsClient params={params} />;
}
