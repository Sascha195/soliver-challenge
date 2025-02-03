import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './SortModal.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Sort, sortOptions} from '../../ProductSelection/ProductSelection';
import {SortOption} from './SortOption';

interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
  updateSort: (sort: Sort) => void;
  selectedSort: Sort;
}

export const SortModal = ({
  isVisible,
  onClose,
  updateSort,
  selectedSort,
}: SortModalProps) => {
  const selectSort = useCallback(
    (sort: Sort) => {
      updateSort(sort);
      onClose();
    },
    [updateSort, onClose],
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={1}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sortieren</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
        {sortOptions.map((option, index) => (
          <SortOption
            key={`${option}-${index}`}
            option={option}
            updateSort={selectSort}
            selectedSort={selectedSort}
          />
        ))}
      </View>
    </Modal>
  );
};
