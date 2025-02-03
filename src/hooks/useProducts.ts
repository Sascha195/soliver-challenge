import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {Product} from '../types/product';
import {fetchProducts} from '../services/api/fetchProducts';

export const useProducts = (): UseQueryResult<Product[], unknown> => {
  return useQuery<Product[], unknown>({
    queryKey: ['product'],
    queryFn: fetchProducts,
  });
};
