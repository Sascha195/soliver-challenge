import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './Button.styles';

interface ButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {title, onPress, containerStyle, disabled} = props;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
