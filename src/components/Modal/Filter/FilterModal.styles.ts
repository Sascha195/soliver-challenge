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
  filterSectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 15,
  },
  filterTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  filterItemsContainer: {
    flexDirection: 'row',
  },
  colorOptionContainer: {
    marginRight: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorOptionInside: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  colorTitle: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
  },
  sizeContainer: {
    height: 38,
    paddingHorizontal: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  sizeTitle: {
    fontSize: 14,
  },
  priceFilterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderMarker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  sliderSelectedTrack: {
    backgroundColor: 'black',
  },
});
