import "./shoppingCart.css";
import { Metadata } from "next";
import ShoppingCartClient from "./ShoppingCartClient";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description:
    "Xem và quản lý giỏ hàng của bạn tại TechPro. Kiểm tra sản phẩm, cập nhật số lượng, áp dụng mã giảm giá và tiến hành thanh toán an toàn.",
  keywords: ["giỏ hàng", "shopping cart", "thanh toán", "mua hàng", "techpro"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/gio-hang",
  },
};

export default function ShoppingCart() {
  return <ShoppingCartClient />;
}
