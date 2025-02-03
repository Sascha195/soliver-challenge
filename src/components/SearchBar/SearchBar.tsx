import {TextInput, View} from 'react-native';
import {styles} from './SearchBar.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce';

interface SearchBarProps {
  updateSearchQuery: (text: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const {updateSearchQuery} = props;

  const [inputValue, setInputValue] = useState('');

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    updateSearchQuery(debouncedValue);
  }, [debouncedValue, updateSearchQuery]);

  return (
    <View style={styles.container}>
      <Icon name="search1" size={15} color="black" />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Suche nach Artikeln"
      />
    </View>
  );
};
