import {Sorting} from '../components/ProductSettings/ProductSettings';

export const translateSortingOption = (sorting: Sorting) => {
  switch (sorting) {
    case 'PRICE_ASC':
      return 'Preis aufsteigend';
    case 'PRICE_DESC':
      return 'Preis absteigend';
    default:
      return 'Neuheiten';
  }
};
