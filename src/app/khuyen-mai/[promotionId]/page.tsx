import { Metadata } from "next";
import PromotionIdClient from "./PromotionIdClient";

export const metadata: Metadata = {
  title: "Khuyến mãi - TechPro",
  description:
    "Khám phá các chương trình khuyến mãi hấp dẫn tại TechPro. Giảm giá laptop, bàn phím cơ, ghế công thái học, máy chơi game. Ưu đãi lớn, tiết kiệm tối đa.",
  keywords: [
    "khuyến mãi",
    "giảm giá",
    "flash sale",
    "ưu đãi",
    "laptop",
    "bàn phím cơ",
    "ghế công thái học",
    "techpro",
  ],
  alternates: {
    canonical: "/khuyen-mai",
  },
};

export default function PromotionPage() {
  return <PromotionIdClient />;
}
