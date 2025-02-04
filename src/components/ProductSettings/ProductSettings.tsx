import {View} from 'react-native';
import {styles} from './ProductSettings.styles';
import {translateSortingOption} from '../../utils/translateSortingOption';
import {ProductSettingOption} from './ProductSettingOptions';

export type Sorting = 'NEW' | 'PRICE_ASC' | 'PRICE_DESC';

export const sortingOptions = ['NEW', 'PRICE_ASC', 'PRICE_DESC'] as const;

interface ProductSettingsProps {
  showSorting: () => void;
  showFilter: () => void;
  selectedSorting: Sorting;
}

export const ProductSettings = (props: ProductSettingsProps) => {
  const {showSorting, showFilter, selectedSorting} = props;
  return (
    <View style={styles.container}>
      <ProductSettingOption
        onPress={showSorting}
        title={translateSortingOption(selectedSorting)}
        icon="swap"
      />
      <ProductSettingOption onPress={showFilter} title="Filter" icon="filter" />
    </View>
  );
};
