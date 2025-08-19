export type Review = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image?: string[];
  purchased: boolean;
};

export const products: Review[] = [
  {
    id: 1,
    name: "Bàn phím cơ Bach Tuấn",
    price: 1200000,
    rating: 5,
    description:
      "Bàn phím cơ chất lượng cao, thiết kế tối giản, phù hợp cho lập trình viên.",
    image: [
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-bdf.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-tse.jpg",
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/wkr-ymr.jpg",
    ],
    purchased: false,
  },
  {
    id: 2,
    name: "Bàn phím Qưin VD",
    price: 1500000,
    rating: 4,
    description: "Bàn phím cơ với đèn LED RGB, trải nghiệm gõ mượt mà.",
    image: [
      "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/vmd-onj.jpg",
    ],
    purchased: false,
  },
  // {
  //   id: 3,
  //   name: "Bàn phím Phong Chi",
  //   price: 1300000,
  //   rating: 5,
  //   description: "Thiết kế nhỏ gọn, phím gõ êm ái, phù hợp làm việc văn phòng.",
  //   image: [
  //     "https://imagor.owtg.one/unsafe/fit-in/https://d28jzcg6y4v9j1.cloudfront.net/social/product-reviews/ban-phim-co-lofree-flow/n2n-lxq.jpg",
  //   ],
  //   purchased: false,
  // },
];
