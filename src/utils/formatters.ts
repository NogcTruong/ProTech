export const formatPrice = (price: number, unit?: string): string => {
  const format = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return unit ? `${format} ${unit}` : format;
};
