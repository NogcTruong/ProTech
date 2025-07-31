export interface LocationData {
  id: string;
  name: string;
  districts?: District[];
}

export interface District {
  id: string;
  name: string;
  wards?: Ward[];
}

export interface Ward {
  id: string;
  name: string;
}

export const locationData: LocationData[] = [
  {
    id: "1",
    name: "Hà Nội",
    districts: [
      {
        id: "1-1",
        name: "Ba Đình",
        wards: [
          { id: "1-1-1", name: "Phúc Tân" },
          { id: "1-1-2", name: "Đồng Xuân" },
          { id: "1-1-3", name: "Hàng Mã" },
          { id: "1-1-4", name: "Hàng Buồm" },
          { id: "1-1-5", name: "Hàng Đào" },
          { id: "1-1-6", name: "Hàng Bồ" },
          { id: "1-1-7", name: "Cửa Đông" },
          { id: "1-1-8", name: "Lý Thái Tổ" },
        ],
      },
      {
        id: "1-2",
        name: "Hoàn Kiếm",
        wards: [
          { id: "1-2-1", name: "Phúc Tân" },
          { id: "1-2-2", name: "Đồng Xuân" },
          { id: "1-2-3", name: "Hàng Mã" },
          { id: "1-2-4", name: "Hàng Buồm" },
          { id: "1-2-5", name: "Hàng Đào" },
          { id: "1-2-6", name: "Hàng Bồ" },
          { id: "1-2-7", name: "Cửa Đông" },
          { id: "1-2-8", name: "Lý Thái Tổ" },
        ],
      },
      {
        id: "1-3",
        name: "Hai Bà Trưng",
        wards: [
          { id: "1-3-1", name: "Phố Huế" },
          { id: "1-3-2", name: "Đồng Nhân" },
          { id: "1-3-3", name: "Phạm Đình Hổ" },
          { id: "1-3-4", name: "Lê Đại Hành" },
          { id: "1-3-5", name: "Đồng Tâm" },
          { id: "1-3-6", name: "Bách Khoa" },
          { id: "1-3-7", name: "Minh Khai" },
          { id: "1-3-8", name: "Quỳnh Lôi" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Hồ Chí Minh",
    districts: [
      {
        id: "2-1",
        name: "Quận 1",
        wards: [
          { id: "2-1-1", name: "Bến Nghé" },
          { id: "2-1-2", name: "Bến Thành" },
          { id: "2-1-3", name: "Cầu Kho" },
          { id: "2-1-4", name: "Cầu Ông Lãnh" },
          { id: "2-1-5", name: "Cô Giang" },
          { id: "2-1-6", name: "Đa Kao" },
          { id: "2-1-7", name: "Nguyễn Cư Trinh" },
          { id: "2-1-8", name: "Nguyễn Thái Bình" },
        ],
      },
      {
        id: "2-2",
        name: "Quận 3",
        wards: [
          { id: "2-2-1", name: "Phường 1" },
          { id: "2-2-2", name: "Phường 2" },
          { id: "2-2-3", name: "Phường 3" },
          { id: "2-2-4", name: "Phường 4" },
          { id: "2-2-5", name: "Phường 5" },
          { id: "2-2-6", name: "Phường 6" },
          { id: "2-2-7", name: "Phường 7" },
          { id: "2-2-8", name: "Phường 8" },
        ],
      },
      {
        id: "2-3",
        name: "Quận 5",
        wards: [
          { id: "2-3-1", name: "Phường 1" },
          { id: "2-3-2", name: "Phường 2" },
          { id: "2-3-3", name: "Phường 3" },
          { id: "2-3-4", name: "Phường 4" },
          { id: "2-3-5", name: "Phường 5" },
          { id: "2-3-6", name: "Phường 6" },
          { id: "2-3-7", name: "Phường 7" },
          { id: "2-3-8", name: "Phường 8" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Đà Nẵng",
    districts: [
      {
        id: "3-1",
        name: "Hải Châu",
        wards: [
          { id: "3-1-1", name: "Bình Hiên" },
          { id: "3-1-2", name: "Bình Thuận" },
          { id: "3-1-3", name: "Hải Châu I" },
          { id: "3-1-4", name: "Hải Châu II" },
          { id: "3-1-5", name: "Hòa Cường Bắc" },
          { id: "3-1-6", name: "Hòa Cường Nam" },
          { id: "3-1-7", name: "Hòa Thuận Đông" },
          { id: "3-1-8", name: "Hòa Thuận Tây" },
          { id: "3-1-9", name: "Bình Hiên" },
          { id: "3-1-10", name: "Bình Thuận" },
          { id: "3-1-11", name: "Hải Châu I" },
          { id: "3-1-12", name: "Hải Châu II" },
          { id: "3-1-13", name: "Hòa Cường Bắc" },
          { id: "3-1-14", name: "Hòa Cường Nam" },
          { id: "3-1-15", name: "Hòa Thuận Đông" },
          { id: "3-1-16", name: "Hòa Thuận Tây" },
        ],
      },
      {
        id: "3-2",
        name: "Thanh Khê",
        wards: [
          { id: "3-2-1", name: "An Khê" },
          { id: "3-2-2", name: "Chính Gián" },
          { id: "3-2-3", name: "Hòa Khê" },
          { id: "3-2-4", name: "Tam Thuận" },
          { id: "3-2-5", name: "Tân Chính" },
          { id: "3-2-6", name: "Thạc Gián" },
          { id: "3-2-7", name: "Thanh Khê Đông" },
          { id: "3-2-8", name: "Thanh Khê Tây" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Hải Phòng",
    districts: [
      {
        id: "4-1",
        name: "Hồng Bàng",
        wards: [
          { id: "4-1-1", name: "Hạ Lý" },
          { id: "4-1-2", name: "Hoàng Văn Thụ" },
          { id: "4-1-3", name: "Hùng Vương" },
          { id: "4-1-4", name: "Minh Khai" },
          { id: "4-1-5", name: "Nam Sơn" },
          { id: "4-1-6", name: "Phạm Hồng Thái" },
          { id: "4-1-7", name: "Phan Bội Châu" },
          { id: "4-1-8", name: "Quán Toan" },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Cần Thơ",
    districts: [
      {
        id: "5-1",
        name: "Ninh Kiều",
        wards: [
          { id: "5-1-1", name: "An Bình" },
          { id: "5-1-2", name: "An Cư" },
          { id: "5-1-3", name: "An Hòa" },
          { id: "5-1-4", name: "An Khánh" },
          { id: "5-1-5", name: "An Lạc" },
          { id: "5-1-6", name: "An Nghiệp" },
          { id: "5-1-7", name: "An Phú" },
          { id: "5-1-8", name: "Cái Khế" },
        ],
      },
    ],
  },
];

export const getCities = () => locationData;

export const getDistricts = (cityId: string) => {
  const city = locationData.find((city) => city.id === cityId);
  return city?.districts || [];
};

export const getWards = (cityId: string, districtId: string) => {
  const city = locationData.find((city) => city.id === cityId);
  const district = city?.districts?.find(
    (district) => district.id === districtId
  );
  return district?.wards || [];
};
