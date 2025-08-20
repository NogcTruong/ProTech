import "./storeAddress.css";
import StoreAddressCard from "./components/StoreAddressCard";

export default function StoreAddressClient() {
  return (
    <div className="container py-5 md:py-10">
      <h1 className="text-2xl font-bold font-lexend md:text-5xl">
        Địa chỉ cửa hàng
      </h1>
      <div className="mt-5 md:mt-10 flex flex-col space-y-5">
        <div>
          <h2 className="text-base font-lexend font-bold">
            Thành phố Hồ Chí Minh
          </h2>
          <div className="mt-4 flex max-md:flex-col max-md:space-y-3 md:space-x-4">
            <StoreAddressCard
              href={
                "/dia-chi-cua-hang/5-7-nguyen-huy-tuong-p-6-quan-binh-thanh-tp-ho-chi-minh"
              }
              imageSrc={
                "https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/nguyen-huy-tuong-1.jpeg"
              }
              imageAlt={"store-1"}
              title={"Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh"}
              timeRange={"09:00 - 21:00"}
            />
            <StoreAddressCard
              href={
                "/dia-chi-cua-hang/95-tran-thien-chanh-f12-quan-10-tp-ho-chi-minh"
              }
              imageSrc={
                "https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/tran-thien-chanh-1.jpg"
              }
              imageAlt={"store-2"}
              title={"95 Trần Thiện Chánh, Q10"}
              timeRange={"09:00 - 21:00"}
            />
          </div>
        </div>
        <div>
          <h2 className="text-base font-lexend font-bold">Hà Nội</h2>
          <div className="mt-4 flex max-md:flex-col max-md:space-y-3 md:space-x-4">
            <StoreAddressCard
              href={
                "/dia-chi-cua-hang/53-thai-ha-quan-trung-liet-phuong-dong-da-tp-ha-noi"
              }
              imageSrc={
                "https://imagor.owtg.one/unsafe/fit-in/416x234/https://thinkpro.vn/stores/thai-ha-1.jpg"
              }
              imageAlt={"store-3"}
              title={"53 Thái Hà, Đống Đa"}
              timeRange={"09:00 - 21:00"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
