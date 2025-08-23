import FilterCategory from "@/components/common/FilterCategory";

interface TabFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { key: "tất cả", label: "Tất cả" },
  { key: "thủ thuật", label: "Thủ thuật" },
  { key: "tin tức", label: "Tin tức" },
  { key: "đánh giá", label: "Đánh giá" },
  { key: "tư vấn", label: "Tư vấn" },
];

const tabHighlightStyle = {
  "tất cả": { top: 4, left: 4, width: 63, height: 36 },
  "thủ thuật": { top: 4, left: 67, width: 88, height: 36 },
  "tin tức": { top: 4, left: 156, width: 70, height: 36 },
  "đánh giá": { top: 4, left: 226, width: 83, height: 36 },
  "tư vấn": { top: 4, left: 308, width: 69, height: 36 },
};

export default function TabFilter({ activeTab, onTabChange }: TabFilterProps) {
  return (
    <>
      <div className="flex flex-col space-y-2 space-x-0 md:block md:space-y-0 md:space-x-2">
        <h2 className="text-2xl font-lexend font-bold">Bài viết bởi tác giả</h2>
        <span className="text-sm font-medium text-gray-600">122 bài</span>
      </div>
      <FilterCategory
        activeTab={activeTab}
        onTabChange={onTabChange}
        tabs={tabs}
        tabHighlightStyle={tabHighlightStyle}
      />
    </>
  );
}
