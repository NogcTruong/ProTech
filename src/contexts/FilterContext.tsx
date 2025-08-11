"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface FilterState {
  selectedBrands: string[];
  selectedPrices: string[];
  selectedColors: string[];
  hasPromotion: boolean;
  sortBy: string;
}

interface FilterContextType {
  filterState: FilterState;
  updateFilterState: (newState: Partial<FilterState>) => void;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used widthin a FilterProvider");
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterState, setFilterState] = useState<FilterState>({
    selectedBrands: [],
    selectedPrices: [],
    selectedColors: [],
    hasPromotion: false,
    sortBy: "featured",
  });

  const updateFilterState = (newState: Partial<FilterState>) => {
    setFilterState((prev) => ({ ...prev, ...newState }));
  };

  const resetFilters = () => {
    setFilterState({
      selectedBrands: [],
      selectedPrices: [],
      selectedColors: [],
      hasPromotion: false,
      sortBy: "featured",
    });
  };

  return (
    <FilterContext.Provider
      value={{ filterState, updateFilterState, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
