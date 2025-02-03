import {StyleSheet} from 'react-native';

export const PRODUCT_LIST_ITEM_MARGIN = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginBottom: PRODUCT_LIST_ITEM_MARGIN,
  },
  productDetails: {
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  productName: {
    fontSize: 14,
    paddingBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  retailPrice: {
    fontSize: 14,
  },
  retailPriceDiscounted: {
    color: 'red',
  },
  discountPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    paddingLeft: 5,
  },
  colorSelectionContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
