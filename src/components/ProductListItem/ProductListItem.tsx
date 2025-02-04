import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import {Product} from '../../types/product';
import {styles} from './ProductListItem.styles';
import {getProductItemGap} from '../../utils/getProductItemGap';
import {calculateRetailPrice} from '../../utils/calculateRetailPrice';
import {ColorSelection} from './ColorSelection/ColorSelection';
import {ProductImage} from './ProductImage/ProductImage';
import {formatPriceWithCurrency} from '../../utils/formatPriceWithCurrency';

interface ProductListItemProps {
  product: Product;
  index: number;
}

export const ProductListItem = ({product, index}: ProductListItemProps) => {
  const [selectedProductVariant, setSelectedProductVariant] = useState(
    product.variants[0],
  );

  const calculatedRetailPrice = useMemo(
    () => calculateRetailPrice(product.retailPrice, product.discount),
    [product.retailPrice, product.discount],
  );

  return (
    <View style={[styles.container, getProductItemGap(index)]}>
      <ProductImage
        productID={product.id}
        selectedProductVariant={selectedProductVariant}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.retailPrice,
              product.discount ? styles.retailPriceDiscounted : {},
            ]}>
            {formatPriceWithCurrency(calculatedRetailPrice)}
          </Text>
          {!!product.discount && (
            <Text style={styles.discountPrice}>
              {formatPriceWithCurrency(product.retailPrice)}
            </Text>
          )}
        </View>
        <View style={styles.colorSelectionContainer}>
          {product.variants.map(productVariant => {
            return (
              <ColorSelection
                key={productVariant.key}
                productVariant={productVariant}
                updateProductVariant={setSelectedProductVariant}
                isSelected={selectedProductVariant.key === productVariant.key}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
