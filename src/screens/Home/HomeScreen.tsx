import React, {useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProductList} from '../../components/ProductList/ProductList';
import {styles} from './HomeScreen.styles';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {FilterModal} from '../../components/Modal/Filter/FilterModal';
import {SortingModal} from '../../components/Modal/Sorting/SortingModal';
import {
  ProductSettings,
  Sorting,
} from '../../components/ProductSettings/ProductSettings';

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState<Sorting>('NEW');

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <ProductSettings
        showFilter={() => setFilterModalVisible(true)}
        showSorting={() => setSortModalVisible(true)}
        selectedSorting={selectedSorting}
      />
      <ProductList searchQuery={searchQuery} selectedSort={selectedSorting} />

      {/* Modals */}
      <FilterModal
        isVisible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      />
      <SortingModal
        isVisible={sortModalVisible}
        onClose={() => setSortModalVisible(false)}
        updateSorting={setSelectedSorting}
        selectedSorting={selectedSorting}
      />
    </View>
  );
};
