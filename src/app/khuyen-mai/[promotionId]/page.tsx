import { Metadata } from "next";
import PromotionIdClient from "./PromotionIdClient";

export async function generateMetadata({
  params,
}: {
  params: { promotionId: string };
}): Promise<Metadata> {
  const { promotionId } = params;
  const decodedPromotionId = decodeURIComponent(promotionId);

  return {
    title: `Khuyến mãi ${decodedPromotionId} - TechPro`,
    description: `Khám phá chương trình khuyến mãi ${decodedPromotionId} tại TechPro. Giảm giá laptop, bàn phím cơ, ghế công thái học, máy chơi game. Ưu đãi lớn, tiết kiệm tối đa.`,
    keywords: [
      "khuyến mãi",
      decodedPromotionId,
      "giảm giá",
      "flash sale",
      "ưu đãi",
      "laptop",
      "bàn phím cơ",
      "ghế công thái học",
      "techpro",
    ],
    alternates: {
      canonical: `/khuyen-mai/${promotionId}`,
    },
  };
}

export default function PromotionPage() {
  return <PromotionIdClient />;
}
