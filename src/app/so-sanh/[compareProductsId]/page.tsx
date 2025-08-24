import { Metadata } from "next";
import CompareProductsIdClient from "./CompareProductsIdClient";

export async function generateMetadata({
  params,
}: {
  params: { compareProductsId: string };
}): Promise<Metadata> {
  const { compareProductsId } = params;
  const decodedCompareId = decodeURIComponent(compareProductsId);

  return {
    title: `So sánh sản phẩm - ${decodedCompareId}`,
    description: `So sánh chi tiết các sản phẩm ${decodedCompareId} tại TechPro. Đánh giá tính năng, giá cả và lựa chọn sản phẩm phù hợp nhất cho nhu cầu của bạn.`,
    keywords: [
      "so sánh sản phẩm",
      decodedCompareId,
      "đánh giá sản phẩm",
      "laptop",
      "bàn phím cơ",
      "ghế công thái học",
      "techpro",
    ],
    alternates: {
      canonical: `/so-sanh/${compareProductsId}`,
    },
  };
}

export default function CompareProducts() {
  return <CompareProductsIdClient />;
}
