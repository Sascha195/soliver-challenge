import React, {createContext, useContext, useState} from 'react';
import {Color, Size} from '../types/product';

export interface Filters {
  selectedColors: Color[];
  selectedSizes: Size[];
  selectedPriceRange: [number, number];
}

interface FiltersContextType {
  filters: Filters;
  updateSelectedColors: (colors: Color[]) => void;
  updateSelectedSizes: (sizes: Size[]) => void;
  updateSelectedPriceRange: (range: [number, number]) => void;
  resetFilters: () => void;
}

export const MIN_PRICE_FILTER_RANGE = 12.99;
export const MAX_PRICE_FILTER_RANGE = 149.99;

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({
    selectedColors: [],
    selectedSizes: [],
    selectedPriceRange: [MIN_PRICE_FILTER_RANGE, MAX_PRICE_FILTER_RANGE],
  });

  const updateSelectedColors = (colors: Color[]) => {
    setFilters(prev => ({...prev, selectedColors: colors}));
  };

  const updateSelectedSizes = (sizes: Size[]) => {
    setFilters(prev => ({...prev, selectedSizes: sizes}));
  };

  const updateSelectedPriceRange = (range: [number, number]) => {
    setFilters(prev => ({...prev, selectedPriceRange: range}));
  };

  const resetFilters = () => {
    setFilters({
      selectedColors: [],
      selectedSizes: [],
      selectedPriceRange: [MIN_PRICE_FILTER_RANGE, MAX_PRICE_FILTER_RANGE],
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        updateSelectedColors,
        updateSelectedSizes,
        updateSelectedPriceRange,
        resetFilters,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
