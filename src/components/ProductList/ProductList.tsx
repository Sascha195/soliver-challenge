import {useProducts} from '../../hooks/useProducts';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ProductListItem} from '../ProductListItem/ProductListItem';
import {styles} from './ProductList.styles';
import {useMemo, useState} from 'react';
import {Sorting} from '../ProductSettings/ProductSettings';
import {filterAndSortProducts} from '../../utils/filterAndSort';
import {useFilters} from '../../context/FiltersContext';
import {EmptyList} from './EmptyList';
import {Button} from '../Button/Button';

interface ProductListProps {
  searchQuery: string;
  selectedSort: Sorting;
}

export const ProductList = (props: ProductListProps) => {
  const {searchQuery, selectedSort} = props;

  const {isLoading, isError, data, refetch} = useProducts();
  const {filters} = useFilters();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    refetch().then(() => setIsRefreshing(false));
  };

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(data, searchQuery, selectedSort, filters);
  }, [data, searchQuery, selectedSort, filters]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Produkte werden geladen...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>
          Oops! Da ist etwas schief gelaufen.
        </Text>
        <Button
          containerStyle={styles.errorButton}
          title="Erneut versuchen"
          onPress={onRefresh}
          disabled={isRefreshing}
        />
        {isRefreshing && (
          <ActivityIndicator style={styles.loadingIndicator} size="large" />
        )}
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
      refreshing={isRefreshing}
      ListEmptyComponent={<EmptyList />}
    />
  );
};
