import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 40,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  closeButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  optionTitle: {
    fontSize: 14,
  },
});
