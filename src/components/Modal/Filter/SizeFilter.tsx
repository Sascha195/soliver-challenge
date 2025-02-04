import {Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {SizeFilterOption} from './SizeFilterOption';
import {useFilters} from '../../../context/FiltersContext';
import {Size} from '../../../types/product';

const sizeFilters: Size[] = ['XS', 'One Size', '29/30'];

export const SizeFilter = () => {
  const {filters, updateSelectedSizes} = useFilters();

  const toggleSize = (size: Size) => {
    updateSelectedSizes(
      filters.selectedSizes.includes(size)
        ? filters.selectedSizes.filter(s => s !== size)
        : [...filters.selectedSizes, size],
    );
  };

  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Größe</Text>
      <View style={styles.filterItemsContainer}>
        {sizeFilters.map((sizeFilter, index) => (
          <SizeFilterOption
            key={`${sizeFilter}-${index}`}
            sizeFilter={sizeFilter}
            toggleSizeFilter={toggleSize}
            selectedSizeFilters={filters.selectedSizes}
          />
        ))}
      </View>
    </View>
  );
};
