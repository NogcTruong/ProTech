interface Tab {
  key: string;
  label: string;
}

interface TabHighlightStyle {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface TabFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Tab[];
  tabHighlightStyle: Record<string, TabHighlightStyle>;
}

export default function FilterCategory({
  activeTab,
  onTabChange,
  tabs,
  tabHighlightStyle,
}: TabFilterProps) {
  return (
    <div className="flex overflow-hidden">
      <div className="overflow-auto scrollbar-hide">
        <div className="relative space-y-2">
          <div className="relative !inline-flex bg-colorPray100 rounded-full p-1 w-auto md:w-full h-11 items-center">
            <div
              className="absolute top-1 left-[4px] duration-200 ease-out focus:outline-none"
              style={{
                ...tabHighlightStyle[
                  activeTab as keyof typeof tabHighlightStyle
                ],
              }}
            >
              <div className="w-full h-full bg-colorPrimaryDefault rounded-full shadow-sm"></div>
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className="relative inline-flex items-center justify-center flex-shrink-0 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-colorPrimaryDefault dark:ui-focus-visible:ring-colorPrimary400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out !w-fit h-9 px-3 text-sm font-bold rounded-md text-colorPray900"
                role="tab"
                type="button"
                onClick={() => onTabChange(tab.key)}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
