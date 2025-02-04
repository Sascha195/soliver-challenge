import {Text, View} from 'react-native';
import {styles} from './ProductList.styles';
import {useFilters} from '../../context/FiltersContext';
import {Button} from '../Button/Button';

export const EmptyList = () => {
  const {resetFilters} = useFilters();

  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListTitle}>Keine Produkte gefunden</Text>
      <Text style={styles.emptyListSubtitle}>
        Deine ausgewählten Such- oder Filtereinstellungen stimmen leider mit
        keinem unserer Produkte überein. Bitte ändere deine Einstellungen.
      </Text>
      <Button
        containerStyle={styles.emptyListButton}
        title="Filter zurücksetzen"
        onPress={resetFilters}
      />
    </View>
  );
};
