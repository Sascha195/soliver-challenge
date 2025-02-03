import {Pressable, Text, View} from 'react-native';
import {Size} from '../../../types/product';
import {useMemo} from 'react';
import {styles} from './FilterModal.styles';

interface SizeFilterOptionProps {
  sizeFilter: Size;
  toggleSizeFilter: (color: Size) => void;
  selectedSizeFilters: Size[];
}

export const SizeFilterOption = (props: SizeFilterOptionProps) => {
  const {sizeFilter, toggleSizeFilter, selectedSizeFilters} = props;
  const isSelected = useMemo(
    () => selectedSizeFilters.includes(sizeFilter),
    [selectedSizeFilters, sizeFilter],
  );

  return (
    <Pressable
      style={[
        styles.sizeContainer,
        {backgroundColor: isSelected ? 'black' : 'white'},
      ]}
      onPress={() => toggleSizeFilter(sizeFilter)}>
      <Text style={[styles.sizeTitle, {color: isSelected ? 'white' : 'black'}]}>
        {sizeFilter}
      </Text>
    </Pressable>
  );
};
