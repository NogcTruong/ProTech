import { Metadata } from "next";
import StoreAddressClient from "./StoreAddressClient";

export const metadata: Metadata = {
  title: "Địa chỉ",
  description: "Các địa chỉ cửa hàng.",
  keywords: ["checkout", "địa chỉ", "address", "techpro"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/dia-chi-cua-hang",
  },
};

export default function StoreAddress() {
  return <StoreAddressClient />;
}
