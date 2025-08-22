import Image from "next/image";

interface AuthorProfileProps {
  name: string;
  avatar: string;
  posts: number;
  description: string;
}

export default function AuthorProfile({
  name,
  avatar,
  posts,
  description,
}: AuthorProfileProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-solid border-white bg-gray-200 box-content drop-shadow-lg">
          <Image
            width={80}
            height={80}
            alt={name}
            src={avatar}
            className="h-full w-full object-cover lazyloaded"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1">
            <h1 className="text-2xl font-lexend font-bold">{name}</h1>
            <span className="text-sm text-gray-600">Chuyên gia công nghệ</span>
            <span className="text-sm">{posts} bài viết</span>
          </div>
        </div>
      </div>
      <div className="relative pl-10 pt-4">
        <svg
          className="absolute left-0 top-0 z-[-1]"
          width="64"
          height="53"
          viewBox="0 0 64 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6903 52.6445C12.6624 52.6445 10.1849 52.0255 8.25807 50.7874C6.33118 49.5493 4.74839 47.9673 3.50968 46.0414C2.13333 43.7027 1.16989 41.2953 0.619355 38.8191C0.206452 36.2054 0 34.0731 0 32.4223C0 25.6816 1.72043 19.5599 5.16129 14.0572C8.60215 8.55459 13.9699 4.08369 21.2645 0.644531L23.1226 4.35882C18.8559 6.14718 15.1398 8.96729 11.9742 12.8191C8.94624 16.671 7.43226 20.5916 7.43226 24.581C7.43226 26.2318 7.63871 27.6763 8.05161 28.9144C10.2538 27.126 12.8 26.2318 15.6903 26.2318C19.2688 26.2318 22.3656 27.4011 24.9806 29.7398C27.5957 32.0784 28.9032 35.3112 28.9032 39.4382C28.9032 43.29 27.5957 46.4541 24.9806 48.9302C22.3656 51.4064 19.2688 52.6445 15.6903 52.6445ZM50.7871 52.6445C47.7591 52.6445 45.2817 52.0255 43.3548 50.7874C41.428 49.5493 39.8452 47.9673 38.6065 46.0414C37.2301 43.7027 36.2667 41.2953 35.7161 38.8191C35.3032 36.2054 35.0968 34.0731 35.0968 32.4223C35.0968 25.6816 36.8172 19.5599 40.2581 14.0572C43.6989 8.55459 49.0667 4.08369 56.3613 0.644531L58.2194 4.35882C53.9527 6.14718 50.2366 8.96729 47.071 12.8191C44.043 16.671 42.529 20.5916 42.529 24.581C42.529 26.2318 42.7355 27.6763 43.1484 28.9144C45.3505 27.126 47.8968 26.2318 50.7871 26.2318C54.3656 26.2318 57.4624 27.4011 60.0774 29.7398C62.6925 32.0784 64 35.3112 64 39.4382C64 43.29 62.6925 46.4541 60.0774 48.9302C57.4624 51.4064 54.3656 52.6445 50.7871 52.6445Z"
            fill="#00E1F9"
          ></path>
        </svg>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}
