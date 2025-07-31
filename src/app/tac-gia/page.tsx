import Image from "next/image";
import Link from "next/link";
import "./author.css";

const dataAuthor = [
  {
    name: "Lê Văn Mạnh",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🐶",
    posts: 1,
  },
  {
    name: "Phan Như Ngọc",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "📮",
    posts: 219,
  },
  {
    name: "Huỳnh Thị Cám Từ",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🐼",
    posts: 108,
  },
  {
    name: "Vũ Lưu",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🐣",
    posts: 393,
  },
  {
    name: "Nguyễn Lâm Ngọc Hàn",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "👩‍🚀",
    posts: 22,
  },
  {
    name: "Vũơng Thị Yến Nhi",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🌸",
    posts: 31,
  },
  {
    name: "Hoàng Giá Chi Bảo",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "👾",
    posts: 4,
  },
  {
    name: "Nguyễn Tú Anh",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🐸",
    posts: 3,
  },
  {
    name: "Nguyễn Ngọc Bích",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "👹",
    posts: 1,
  },
  {
    name: "Hoàng Thị Thương",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🤖",
    posts: 1,
  },
  {
    name: "Đỗ Hương Giang",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "👽",
    posts: 48,
  },
  {
    name: "Nguyễn Thị Thủy Phương",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🌳",
    posts: 3,
  },
  {
    name: "Hữu Nguyễn",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🍇",
    posts: 1,
  },
  {
    name: "Nguyễn Hàn",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "😎",
    posts: 5,
  },
  {
    name: "Trương Thị Yến Nhi",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "👶",
    posts: 1,
  },
  {
    name: "Lê Hoàng Thoai",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🌴",
    posts: 24,
  },
  {
    name: "Vũ Hồng Kháng",
    image:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg",
    srcset:
      "https://imagor.owtg.one/unsafe/fit-in/56x56/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 1x, https://imagor.owtg.one/unsafe/fit-in/112x112/https://d28jzcg6y4v9j1.cloudfront.net/avatars/NV2438112.jpg 2x",
    avatar: "🐱",
    posts: 1,
  },
];

export default function Author() {
  return (
    <div className="author-listing-page container">
      <div className="max-w-[800px] py-5 md:py-10 mx-auto">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-2xl md:text-5xl font-bold font-lexend">
            Danh sách tác giả
          </h1>
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
            {dataAuthor.map((auth, idx) => (
              <Link key={idx} href="#" className="flex items-center space-x-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-solid border-white bg-gray-200 box-content drop-shadow-lg">
                  <Image
                    width={56}
                    height={56}
                    src={auth.image}
                    srcset={auth.srcset}
                    alt={auth.name}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-base font-bold">{auth.name}</span>
                  <span className="text-sm text-gray-600">
                    Chuyên gia công nghệ
                  </span>
                  <span className="text-sm">{auth.posts} bài viết</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
