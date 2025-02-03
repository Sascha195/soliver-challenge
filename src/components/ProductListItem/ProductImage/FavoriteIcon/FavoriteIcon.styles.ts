import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  favoriteContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    right: 10,
    top: 10,
    zIndex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
});
