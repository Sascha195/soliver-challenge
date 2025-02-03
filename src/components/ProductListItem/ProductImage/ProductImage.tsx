import React from 'react';
import {Image, View} from 'react-native';
import {ProductVariant} from '../../../types/product';
import {styles} from './ProductImage.styles';
import {FavoriteIcon} from './FavoriteIcon/FavoriteIcon';

interface ProductImageProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const ProductImage = ({
  productID,
  selectedProductVariant,
}: ProductImageProps) => {
  return (
    <View>
      <FavoriteIcon
        productID={productID}
        selectedProductVariant={selectedProductVariant}
      />
      <Image
        source={{uri: selectedProductVariant.images[0]}}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};
