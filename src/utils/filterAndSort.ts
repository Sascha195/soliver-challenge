import {Sorting} from '../components/ProductSettings/ProductSettings';
import {
  Filters,
  MAX_PRICE_FILTER_RANGE,
  MIN_PRICE_FILTER_RANGE,
} from '../context/FiltersContext';
import {Product} from '../types/product';
import {calculateRetailPrice} from '../utils/calculateRetailPrice';

const filterProductsBySearchQuery = (
  products: Product[],
  searchQuery: string,
): Product[] => {
  if (!products) {
    return [];
  }
  if (searchQuery.length === 0) {
    return products;
  }

  return products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
};

export const filterProductsByFilters = (
  products: Product[],
  filters: Filters,
): Product[] => {
  if (!products) {
    return [];
  }

  let filteredProducts = [...products];

  if (filters.selectedColors.length > 0) {
    filteredProducts = filteredProducts
      .map(product => {
        const filteredVariants = product.variants.filter(variant =>
          filters.selectedColors.includes(variant.color),
        );

        return filteredVariants.length > 0
          ? {...product, variants: filteredVariants}
          : null;
      })
      .filter(Boolean) as Product[];
  }

  if (filters.selectedSizes.length > 0) {
    filteredProducts = filteredProducts
      .map(product => {
        const filteredVariants = product.variants.filter(variant =>
          variant.sizes.some(size => filters.selectedSizes.includes(size)),
        );

        return filteredVariants.length > 0
          ? {...product, variants: filteredVariants}
          : null;
      })
      .filter(Boolean) as Product[];
  }

  if (
    filters.selectedPriceRange[0] > MIN_PRICE_FILTER_RANGE ||
    filters.selectedPriceRange[1] < MAX_PRICE_FILTER_RANGE
  ) {
    filteredProducts = filteredProducts.filter(product => {
      const calculatedRetailPrice = calculateRetailPrice(
        product.retailPrice,
        product.discount,
      );
      return (
        calculatedRetailPrice >= filters.selectedPriceRange[0] &&
        calculatedRetailPrice <= filters.selectedPriceRange[1]
      );
    });
  }

  return filteredProducts;
};

const sortProducts = (products: Product[], sortingType: Sorting): Product[] => {
  if (!products) {
    return [];
  }

  if (sortingType === 'PRICE_ASC') {
    return [...products].sort(
      (a, b) =>
        calculateRetailPrice(a.retailPrice, a.discount) -
        calculateRetailPrice(b.retailPrice, b.discount),
    );
  }

  if (sortingType === 'PRICE_DESC') {
    return [...products].sort(
      (a, b) =>
        calculateRetailPrice(b.retailPrice, b.discount) -
        calculateRetailPrice(a.retailPrice, a.discount),
    );
  }

  return products;
};

export const filterAndSortProducts = (
  products: Product[] | undefined,
  searchQuery: string,
  sortingType: Sorting,
  filters: Filters,
): Product[] => {
  if (!products) {
    return [];
  }

  let filteredProducts = filterProductsBySearchQuery(products, searchQuery);
  filteredProducts = filterProductsByFilters(filteredProducts, filters);
  return sortProducts(filteredProducts, sortingType);
};
