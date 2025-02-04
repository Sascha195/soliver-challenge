import React, {useState} from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      onLayout={() => {
        setIsVisible(true);
      }}>
      <FavoriteIcon
        productID={productID}
        selectedProductVariant={selectedProductVariant}
      />
      {isVisible ? (
        <Image
          source={{uri: selectedProductVariant.images[0]}}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.image} />
      )}
    </View>
  );
};
