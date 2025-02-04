import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './SortingModal.styles';
import {Sorting} from '../../ProductSettings/ProductSettings';
import {translateSortingOption} from '../../../utils/translateSortingOption';

interface SortingOptionProps {
  sortingOption: Sorting;
  updateSorting: (sorting: Sorting) => void;
  selectedSorting: Sorting;
}

export const SortingOption = ({
  sortingOption,
  updateSorting,
  selectedSorting,
}: SortingOptionProps) => {
  return (
    <Pressable
      style={styles.optionContainer}
      onPress={() => updateSorting(sortingOption)}>
      <Text style={styles.optionTitle}>
        {translateSortingOption(sortingOption)}
      </Text>
      {selectedSorting === sortingOption && (
        <Icon name="check" size={15} color="black" />
      )}
    </Pressable>
  );
};
