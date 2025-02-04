import {Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {ColorFilterOption} from './ColorFilterOption';
import {useFilters} from '../../../context/FiltersContext';
import {Color} from '../../../types/product';
import {ColorFilter as ColorFilterType} from './FilterModal';

const colorFilters: ColorFilterType[] = [
  {color: 'Black', colorAsHex: '#000000'},
  {color: 'White', colorAsHex: '#FFFFF0'},
  {color: 'Blue', colorAsHex: '#0000FF'},
  {color: 'Navy', colorAsHex: '#000080'},
  {color: 'Beige', colorAsHex: '#F5F5DC'},
];

export const ColorFilter = () => {
  const {filters, updateSelectedColors} = useFilters();

  const toggleColor = (color: Color) => {
    updateSelectedColors(
      filters.selectedColors.includes(color)
        ? filters.selectedColors.filter(c => c !== color)
        : [...filters.selectedColors, color],
    );
  };

  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Farbe</Text>
      <View style={styles.filterItemsContainer}>
        {colorFilters.map((colorFilter, index) => (
          <ColorFilterOption
            key={`${colorFilter.color}-${index}`}
            colorFilter={colorFilter}
            toggleColorFilter={toggleColor}
            selectedColorFilters={filters.selectedColors}
          />
        ))}
      </View>
    </View>
  );
};
