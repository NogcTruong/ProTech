import { RawProduct, CartProduct } from "@/types/product";

export const transformToCartProduct = (
  rawProduct: RawProduct,
  index: number,
  category: string
): CartProduct => {
  const id = `${category}-${index}`;

  const price = parseInt(rawProduct.price.replace(/\D/g, ""));

  let originalPrice: number | undefined;
  if (rawProduct.discount && rawProduct.discount !== "0%") {
    const discountPercent = parseInt(rawProduct.discount.replace(/\D/g, ""));
    originalPrice = Math.round(price / (1 - discountPercent / 100));
  }

  const variant = ` ${rawProduct.version}`;

  return {
    id,
    name: rawProduct.name,
    price,
    originalPrice,
    image: rawProduct.img,
    variant,
    quantity: 1,
    discount: rawProduct.discount,
    colors: rawProduct.color,
    version: rawProduct.version,
  };
};

export const transformProductList = (
  rawProducts: RawProduct[],
  category: string
): CartProduct[] => {
  return rawProducts.map((product, index) =>
    transformToCartProduct(product, index, category)
  );
};
