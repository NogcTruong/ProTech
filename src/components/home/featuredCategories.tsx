import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Laptop nhập khẩu",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/logo/laptop-nhap-khau-khong-nen.png",
    href: "#",
  },
  {
    name: "Laptop chính hãng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/logo/laptop-chinh-hang-khong-nen.png",
    href: "#",
  },
  {
    name: "Máy chơi game/Game Console",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/25/danh-muc-icon-may-choi-game-game-console-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Kính Thực Tế Ảo VR/AR",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/3/27/danh-muc-icon-kinh-thuc-te-ao-vrar-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Bàn phím",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-ban-phim-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Ghế công thái học",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/23/danh-muc-icon-ghe-cong-thai-hoc-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Bàn nâng hạ",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/18/danh-muc-icon-ban-nang-ha-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Hộp đựng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2022/12/14/danh-muc-icon-hoc-tu-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Âm thanh",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-am-thanh-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Chuột",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d2j0501oehjiz9.cloudfront.net/media/core/categories/2024/12/12/chuot.png",
    href: "#",
  },
  {
    name: "Ba lô, Túi",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2024/1/24/danh-muc-icon-balo-tui-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Arm màn hình",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2022/3/15/danh-muc-icon-arm-man-hinh-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "Phụ kiện Setup",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/30/danh-muc-icon-phu-kien-setup-thinkpro.vn.png",
    href: "#",
  },
  {
    name: "RAM",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/categories/2025/1/20/32d4sam3200-512x512-png.png",
    href: "#",
  },
  {
    name: "Ổ cứng",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://owtg-upload.s3.ap-southeast-1.amazonaws.com/media/core/categories/2025/1/20/samsung-990-512x512png.png",
    href: "#",
  },
  {
    name: "Sạc",
    img: "https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2021/12/29/danh-muc-icon-sac-thinkpro.vn.png",
    href: "#",
  },
];

export default function Featuredcategoryegories() {
  return (
    <section className="section-featured-categoryegories mt-6 md:mt-10">
      <h2 className="md:text-3xl font-lexend font-bold">Danh mục nổi bật</h2>
      <div className="mt-6 grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {categories.map((category, idx) => (
          <Link href={category.href} className="group" key={idx}>
            <div className="aspect-w-1 aspect-h-1">
              <div className="p-3 flex items-center justify-center">
                <div className="background rounded-xl transition-all !transform-gpu duration-400 ease-out-back bg-colorPrimary400 opacity-0 absolute inset-10 group-hover:scale-[220%] group-hover:opacity-100"></div>
                <div className="w-[120px] h-[120px] transition-all !transform-gpu duration-400 ease-out-back group-hover:scale-105 group-hover:rotate-8">
                  <Image
                    src={category.img}
                    className="t-img w-full h-full object-cover"
                    width={120}
                    height={120}
                    alt={category.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-1">
              <span className="text-base font-bold group-hover:underline underline-offset-2">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
