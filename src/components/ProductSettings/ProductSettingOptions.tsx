import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './ProductSettings.styles';

interface ProductSettingOptionProps {
  onPress: () => void;
  title: string;
  icon: string;
}

export const ProductSettingOption = (props: ProductSettingOptionProps) => {
  const {onPress, title, icon} = props;

  return (
    <TouchableOpacity style={styles.filterContainer} onPress={onPress}>
      <Icon name={icon} size={18} color="black" />
      <Text style={styles.filterText}>{title}</Text>
    </TouchableOpacity>
  );
};
