import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './FilterModal.styles';
import {Color, Size} from '../../../types/product';
import {ColorFilterOption} from './ColorFilterOption';
import {useFilters} from '../../../context/FiltersContext';
import {SizeFilterOption} from './SizeFilterOption';
import {PriceFilter} from './PriceFilter';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface ColorFilter {
  color: Color;
  colorAsHex: string;
}

const colorFilters: ColorFilter[] = [
  {color: 'Black', colorAsHex: '#000000'},
  {color: 'White', colorAsHex: '#FFFFF0'},
  {color: 'Blue', colorAsHex: '#0000FF'},
  {color: 'Navy', colorAsHex: '#000080'},
  {color: 'Beige', colorAsHex: '#F5F5DC'},
];
const sizeFilters: Size[] = ['XS', 'One Size', '29/30'];

export const FilterModal = ({isVisible, onClose}: FilterModalProps) => {
  const {filters, updateFilters} = useFilters();
  const [selectedColors, setSelectedColors] = useState<Color[]>(
    filters.selectedColors,
  );
  const [selectedSizes, setSelectedSizes] = useState<Size[]>(
    filters.selectedSizes,
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >(filters.selectedPriceRange);

  useEffect(() => {
    updateFilters({
      selectedColors,
      selectedSizes: filters.selectedSizes,
      selectedPriceRange: filters.selectedPriceRange,
    });
  }, [selectedColors]);

  useEffect(() => {
    updateFilters({
      selectedColors: filters.selectedColors,
      selectedSizes,
      selectedPriceRange: filters.selectedPriceRange,
    });
  }, [selectedSizes]);

  useEffect(() => {
    updateFilters({
      selectedColors: filters.selectedColors,
      selectedSizes: filters.selectedSizes,
      selectedPriceRange,
    });
  }, [selectedPriceRange]);

  const toggleColor = (color: Color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color],
    );
  };

  const toggleSize = (size: Size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(z => z !== size) : [...prev, size],
    );
  };

  const togglePrice = (priceRange: [number, number]) => {
    setSelectedPriceRange(priceRange);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Filter einstellen</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>

        {/* Color Filter */}
        <View style={styles.filterSectionContainer}>
          <Text style={styles.filterTitle}>Farbe</Text>
          <View style={styles.filterItemsContainer}>
            {colorFilters.map((colorFilter, index) => (
              <ColorFilterOption
                key={`${colorFilter}-${index}`}
                colorFilter={colorFilter}
                toggleColorFilter={toggleColor}
                selectedColorFilters={selectedColors}
              />
            ))}
          </View>
        </View>

        {/* Size Filter */}
        <View style={styles.filterSectionContainer}>
          <Text style={styles.filterTitle}>Größe</Text>
          <View style={styles.filterItemsContainer}>
            {sizeFilters.map((sizeFilter, index) => (
              <SizeFilterOption
                key={`${sizeFilter}-${index}`}
                sizeFilter={sizeFilter}
                toggleSizeFilter={toggleSize}
                selectedSizeFilters={selectedSizes}
              />
            ))}
          </View>
        </View>

        {/* Price Filter */}
        <View style={styles.filterSectionContainer}>
          <Text style={styles.filterTitle}>Preis</Text>
          <PriceFilter
            togglePriceFilter={togglePrice}
            selectedPriceRangeFilter={selectedPriceRange}
          />
        </View>
      </View>
    </Modal>
  );
};
