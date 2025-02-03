import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProductList} from '../../components/ProductList/ProductList';
import {styles} from './HomeScreen.styles';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {
  ProductSelection,
  Sort,
} from '../../components/ProductSelection/ProductSelection';
import {FilterModal} from '../../components/Modal/Filter/FilterModal';
import {SortModal} from '../../components/Modal/Sort/SortModal';

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState<Sort>('Neuheiten');

  const insets = useSafeAreaInsets();

  const showSortModal = useCallback(() => setSortModalVisible(true), []);
  const showFilterModal = useCallback(() => setFilterModalVisible(true), []);
  const hideSortModal = useCallback(() => setSortModalVisible(false), []);
  const hideFilterModal = useCallback(() => setFilterModalVisible(false), []);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <ProductSelection
        showFilter={showFilterModal}
        showSort={showSortModal}
        selectedSort={selectedSort}
      />
      <ProductList searchQuery={searchQuery} selectedSort={selectedSort} />

      {/* Modals */}
      <FilterModal isVisible={filterModalVisible} onClose={hideFilterModal} />
      <SortModal
        isVisible={sortModalVisible}
        onClose={hideSortModal}
        updateSort={setSelectedSort}
        selectedSort={selectedSort}
      />
    </View>
  );
};
