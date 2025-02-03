import {useProducts} from '../../hooks/useProducts';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ProductListItem} from '../ProductListItem/ProductListItem';
import {styles} from './ProductList.styles';
import {useMemo, useState} from 'react';
import {Sort} from '../ProductSelection/ProductSelection';
import {filterAndSortProducts} from '../../utils/filterAndSort';
import {useFilters} from '../../context/FiltersContext';

interface ProductListProps {
  searchQuery: string;
  selectedSort: Sort;
}

export const ProductList = (props: ProductListProps) => {
  const {searchQuery, selectedSort} = props;

  const {isLoading, isError, data, refetch, error} = useProducts();
  const {filters} = useFilters();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  };

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(data, searchQuery, selectedSort, filters);
  }, [data, searchQuery, selectedSort, filters]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Oops! Something went wrong.</Text>
        <Text>{`${error}`}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.footer}
      data={filteredProducts}
      renderItem={item => (
        <ProductListItem product={item.item} index={item.index} />
      )}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};
