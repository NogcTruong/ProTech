export function hexToColorName(hex: string): string {
  const map: Record<string, string> = {
    "#FFFFFF": "Trắng",
    "#000000": "Đen",
    "#FF0000": "Đỏ",
    "#00FF00": "Xanh lá",
    "#0000FF": "Xanh dương",
    "#808080": "Xám",
    "#C0C0C0": "Bạc",
    "#D3D3D3": "Xám nhạt",
    "#FFD700": "Vàng",
    "#00CED1": "Xanh ngọc",
    "#FF4500": "Cam đỏ",
    "#D8BFD8": "Tím nhạt",
  };
  const key = String(hex).trim().toUpperCase();
  return map[key] ?? hex;
}
