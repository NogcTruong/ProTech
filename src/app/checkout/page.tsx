import { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Thanh toán - TechPro",
  description:
    "Hoàn tất đơn hàng của bạn tại TechPro. Chọn phương thức thanh toán, nhập thông tin giao hàng và xác nhận đơn hàng an toàn.",
  keywords: ["thanh toán", "checkout", "đơn hàng", "giao hàng", "techpro"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/checkout",
  },
};

export default function Checkout() {
  return <CheckoutClient />;
}
