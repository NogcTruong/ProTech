import Image from "next/image";

interface FilterCategoryProps {
  setActiveCategory: (catogory: string) => void;
  activeCategory: "all" | "laptop" | "máy chơi game/ game console";
}

export default function FilterCategory({
  setActiveCategory,
  activeCategory,
}: FilterCategoryProps) {
  return (
    <div className="mt-4 md:mt-10 flex space-x-4">
      <button
        onClick={() => setActiveCategory("all")}
        className="hover:underline flex flex-col items-center space-y-2"
      >
        <span
          className={`${
            activeCategory === "all"
              ? "ring-colorPrimaryDefault"
              : "ring-colorPray300"
          } w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full ring-2 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
            />
          </svg>
        </span>
        <span className="text-sm font-lexend font-bold">Tất cả</span>
      </button>
      <div className="w-[1px] h-[60px] md:h-[80px] bg-colorPray300 rotate-8"></div>
      <button
        onClick={() => setActiveCategory("laptop")}
        className="hover:underline flex flex-col items-center space-y-2"
      >
        <span
          className={`${
            activeCategory === "laptop"
              ? "ring-colorPrimaryDefault ring-2"
              : "bg-gray-100"
          } transition-all w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center overflow-hidden`}
        >
          <Image
            src="https://imagor.owtg.one/unsafe/fit-in/80x80/https://d2j0501oehjiz9.cloudfront.net/media/core/categories/2024/12/12/laptop-1-1.png"
            width={60}
            height={60}
            alt="icon Laptop"
          />
        </span>
        <span className="text-sm font-lexend font-bold">Laptop</span>
      </button>
      <button
        onClick={() => setActiveCategory("máy chơi game/ game console")}
        className="hover:underline flex flex-col items-center space-y-2"
      >
        <span
          className={`${
            activeCategory === "máy chơi game/ game console"
              ? "ring-colorPrimaryDefault ring-2"
              : "bg-gray-100"
          } transition-all w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center overflow-hidden`}
        >
          <Image
            src="https://imagor.owtg.one/unsafe/fit-in/120x120/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2023/3/25/danh-muc-icon-may-choi-game-game-console-thinkpro.vn.png"
            width={60}
            height={60}
            alt="icon Laptop"
          />
        </span>
        <span className="text-sm font-lexend font-bold">
          Máy chơi game/ Game Console
        </span>
      </button>
    </div>
  );
}
