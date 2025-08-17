import Image from "next/image";
import banner1 from "@/assets/images/bao-hanh-chinh-hang-phu-kien-6ww.webp";
import banner2 from "@/assets/images/back-to-school-2025-snp.webp";

export default function Banner() {
  return (
    <section className="mb-5 md:mb-8">
      <div className="relative w-full overflow-auto snap-x snap-mandatory scroll-smooth flex md:space-x-4 rounded-2xl md:rounded-3xl no-scrollbar">
        <div className="flex-none snap-start w-full md:w-[calc(50%-8px)] block aspect-w-3 aspect-h-1 md:aspect-w-6 md:aspect-h-1 rounded-2xl md:rounded-3xl overflow-hidden">
          <a href="#" rel="noopener noreferrer" target="_blank">
            <Image
              src={banner1}
              width={390}
              height={130}
              alt="Bảo hành chính hãng phụ kiện"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
        <div className="flex-none snap-start w-full md:w-[calc(50%-8px)] block aspect-w-3 aspect-h-1 md:aspect-w-6 md:aspect-h-1 rounded-2xl md:rounded-3xl overflow-hidden">
          <a href="#" rel="noopener noreferrer" target="_blank">
            <Image
              src={banner2}
              width={390}
              height={130}
              alt="Bảo hành chính hãng phụ kiện"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
