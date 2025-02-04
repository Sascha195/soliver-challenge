import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './FilterModal.styles';
import {Color} from '../../../types/product';
import {PriceFilter} from './PriceFilter';
import {SizeFilter} from './SizeFilter';
import {ColorFilter} from './ColorFilter';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface ColorFilter {
  color: Color;
  colorAsHex: string;
}

export const FilterModal = ({isVisible, onClose}: FilterModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Filter einstellen</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
        <ColorFilter />
        <SizeFilter />
        <PriceFilter />
      </View>
    </Modal>
  );
};
