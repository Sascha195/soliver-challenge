import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './ProductSelection.styles';
import {useState} from 'react';

export type Sort = 'Neuheiten' | 'Preis aufsteigend' | 'Preis absteigend';

export const sortOptions = [
  'Neuheiten',
  'Preis aufsteigend',
  'Preis absteigend',
] as const;

interface ProductSelectionProps {
  showSort: () => void;
  showFilter: () => void;
  selectedSort: string;
}

export const ProductSelection = (props: ProductSelectionProps) => {
  const {showSort, showFilter, selectedSort} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterContainer} onPress={showSort}>
        <Icon name="swap" size={18} color="black" />
        <Text style={styles.filterText}>{selectedSort}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterContainer} onPress={showFilter}>
        <Icon name="filter" size={18} color="black" />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};
