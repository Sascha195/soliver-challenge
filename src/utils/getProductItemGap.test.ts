import {PRODUCT_LIST_ITEM_MARGIN} from '../components/ProductListItem/ProductListItem.styles';
import {getProductItemGap} from '../utils/getProductItemGap';

describe('getProductItemGap', () => {
  it('should return correct padding for even index', () => {
    const index = 0; // Even index
    const result = getProductItemGap(index);

    expect(result).toEqual({
      paddingRight: PRODUCT_LIST_ITEM_MARGIN / 2,
      paddingLeft: 0,
    });
  });

  it('should return correct padding for odd index', () => {
    const index = 1; // Odd index
    const result = getProductItemGap(index);

    expect(result).toEqual({
      paddingRight: 0,
      paddingLeft: PRODUCT_LIST_ITEM_MARGIN / 2,
    });
  });

  it('should return correct padding for another even index', () => {
    const index = 2; // Another even index
    const result = getProductItemGap(index);

    expect(result).toEqual({
      paddingRight: PRODUCT_LIST_ITEM_MARGIN / 2,
      paddingLeft: 0,
    });
  });

  it('should return correct padding for another odd index', () => {
    const index = 3; // Another odd index
    const result = getProductItemGap(index);

    expect(result).toEqual({
      paddingRight: 0,
      paddingLeft: PRODUCT_LIST_ITEM_MARGIN / 2,
    });
  });
});
