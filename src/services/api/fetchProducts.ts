import {Platform} from 'react-native';
import {Product} from '../../types/product';

const API_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001' // Android Emulator
    : 'http://localhost:3001'; // iOS & Web

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
