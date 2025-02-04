import {Pressable, View} from 'react-native';
import {styles} from './ColorSelection.styles';
import {ProductVariant} from '../../../types/product';

interface ColorSelectionProps {
  productVariant: ProductVariant;
  updateProductVariant: (productVariant: ProductVariant) => void;
  isSelected: boolean;
}

export const ColorSelection = (props: ColorSelectionProps) => {
  const {productVariant, updateProductVariant, isSelected} = props;

  return (
    <Pressable
      style={[styles.container, isSelected ? styles.selected : {}]}
      onPress={() => updateProductVariant(productVariant)}
      disabled={isSelected}>
      <View
        style={[styles.colorCircle, {backgroundColor: productVariant.hexColor}]}
      />
    </Pressable>
  );
};
