import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {
  MAX_PRICE_FILTER_RANGE,
  MIN_PRICE_FILTER_RANGE,
  useFilters,
} from '../../../context/FiltersContext';
import {formatPriceWithCurrency} from '../../../utils/formatPriceWithCurrency';

export const PriceFilter = () => {
  const {filters, updateSelectedPriceRange} = useFilters();

  const [range, setRange] = useState([
    filters.selectedPriceRange[0],
    filters.selectedPriceRange[1],
  ]);

  const togglePrice = (priceRange: [number, number]) => {
    updateSelectedPriceRange(priceRange);
  };

  const sliderWidth = Dimensions.get('window').width - 70;
  return (
    <View style={styles.filterSectionContainer}>
      <Text style={styles.filterTitle}>Preis</Text>
      <View style={styles.priceFilterContainer}>
        <Text>{`${formatPriceWithCurrency(
          range[0],
        )} bis ${formatPriceWithCurrency(range[1])}`}</Text>
        <MultiSlider
          values={[
            filters.selectedPriceRange[0],
            filters.selectedPriceRange[1],
          ]}
          sliderLength={sliderWidth}
          onValuesChange={values => setRange(values)}
          onValuesChangeFinish={values => togglePrice([values[0], values[1]])}
          min={MIN_PRICE_FILTER_RANGE}
          max={MAX_PRICE_FILTER_RANGE}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          markerStyle={styles.sliderMarker}
          selectedStyle={styles.sliderSelectedTrack}
        />
      </View>
    </View>
  );
};
