import React, {useContext, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {FavoritesContext} from '../../../../context/FavoritesContext';
import {styles} from './FavoriteIcon.styles';
import {ProductVariant} from '../../../../types/product';

interface FavoriteIconProps {
  productID: number;
  selectedProductVariant: ProductVariant;
}

export const FavoriteIcon = ({
  productID,
  selectedProductVariant,
}: FavoriteIconProps) => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) return null;

  const {isFavorite, toggleFavorite} = favoritesContext;

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(productID, selectedProductVariant.key);
  }, [toggleFavorite, productID, selectedProductVariant.key]);

  return (
    <TouchableOpacity
      style={styles.favoriteContainer}
      onPress={handleToggleFavorite}>
      <Icon
        name={
          isFavorite(productID, selectedProductVariant.key) ? 'heart' : 'hearto'
        }
        size={15}
        color="red"
      />
    </TouchableOpacity>
  );
};
