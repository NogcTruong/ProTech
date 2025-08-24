import { Metadata } from "next";
import AuthorClient from "./AuthorClient";

export const metadata: Metadata = {
  title: "Tác giả",
  description:
    "Khám phá các tác giả chuyên viết về công nghệ tại TechPro. Đội ngũ chuyên gia chia sẻ kiến thức về laptop, bàn phím cơ, ghế công thái học và các sản phẩm công nghệ khác.",
  keywords: [
    "tác giả",
    "chuyên gia công nghệ",
    "review sản phẩm",
    "techpro",
    "công nghệ",
    "laptop",
    "bàn phím cơ",
  ],
  alternates: {
    canonical: "/tac-gia",
  },
};

export default function Author() {
  return <AuthorClient />;
}
