import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './SortModal.styles';
import {Sort} from '../../ProductSelection/ProductSelection';

interface SortOptionProps {
  option: Sort;
  updateSort: (sort: Sort) => void;
  selectedSort: Sort;
}

export const SortOption = ({
  option,
  updateSort,
  selectedSort,
}: SortOptionProps) => {
  return (
    <Pressable
      style={styles.optionContainer}
      onPress={() => updateSort(option)}>
      <Text style={styles.optionTitle}>{option}</Text>
      {selectedSort === option && <Icon name="check" size={15} color="black" />}
    </Pressable>
  );
};
