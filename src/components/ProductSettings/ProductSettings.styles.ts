import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  filterContainer: {
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  filterText: {
    fontSize: 14,
    paddingLeft: 5,
    color: 'black',
  },
});
