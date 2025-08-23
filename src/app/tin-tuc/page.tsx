import "./newslist.css";
import { Metadata } from "next";
import NewsListClient from "./NewsListClient";

export const metadata: Metadata = {
  title: "Tin tức công nghệ",
  description:
    "Cập nhật tin tức công nghệ mới nhất, đánh giá sản phẩm, hướng dẫn sử dụng laptop, bàn phím cơ, ghế công thái học. Thông tin chính xác, cập nhật hàng ngày từ TechPro.",
  keywords: [
    "tin tức công nghệ",
    "hướng dẫn laptop",
    "bàn phím cơ",
    "ghế công thái học",
    "techpro",
    "công nghệ",
  ],
  alternates: {
    canonical: "/tin-tuc",
  },
};

export default function NewsList() {
  return <NewsListClient />;
}
