import { Metadata } from "next";
import StoreAddressIdClient from "./StoreAddressIdClient";

export async function generateMetadata({
  params,
}: {
  params: { storeAddressId: string };
}): Promise<Metadata> {
  const { storeAddressId } = params;
  const decodedStoreId = decodeURIComponent(storeAddressId);

  return {
    title: `Cửa hàng ${decodedStoreId}`,
    description: `Thông tin chi tiết cửa hàng ${decodedStoreId} của TechPro. Địa chỉ, giờ làm việc, liên hệ và các dịch vụ tại cửa hàng.`,
    keywords: [
      "cửa hàng",
      decodedStoreId,
      "địa chỉ",
      "techpro",
      "showroom",
      "bán hàng",
    ],
    alternates: {
      canonical: `/dia-chi-cua-hang/${storeAddressId}`,
    },
  };
}

export default function AddressDetails() {
  return <StoreAddressIdClient />;
}
