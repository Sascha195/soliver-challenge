import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './FilterModal.styles';
import {
  MAX_PRICE_FILTER_RANGE,
  MIN_PRICE_FILTER_RANGE,
} from '../../../context/FiltersContext';

interface PriceFilterProps {
  togglePriceFilter: (priceRange: [number, number]) => void;
  selectedPriceRangeFilter: [number, number];
}

export const PriceFilter = (props: PriceFilterProps) => {
  const {togglePriceFilter, selectedPriceRangeFilter} = props;

  const [range, setRange] = useState([
    selectedPriceRangeFilter[0],
    selectedPriceRangeFilter[1],
  ]);

  const sliderWidth = Dimensions.get('window').width - 50;
  return (
    <View style={styles.priceFilterContainer}>
      <Text>{`${range[0].toFixed(2).replace('.', ',')} € bis ${range[1]
        .toFixed(2)
        .replace('.', ',')} €`}</Text>
      <MultiSlider
        values={[selectedPriceRangeFilter[0], selectedPriceRangeFilter[1]]}
        sliderLength={sliderWidth}
        onValuesChange={values => setRange(values)}
        onValuesChangeFinish={values =>
          togglePriceFilter([values[0], values[1]])
        }
        min={MIN_PRICE_FILTER_RANGE}
        max={MAX_PRICE_FILTER_RANGE}
        step={1}
        allowOverlap={false}
        snapped
        minMarkerOverlapDistance={50}
      />
    </View>
  );
};
