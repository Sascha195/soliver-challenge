import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Favorite = {
  productId: number;
  variantId: number;
};

type FavoritesContextType = {
  favorites: Favorite[];
  toggleFavorite: (productId: number, variantId: number) => void;
  isFavorite: (productId: number, variantId: number) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({children}: {children: ReactNode}) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, []);

  const saveFavorites = async (newFavorites: Favorite[]) => {
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const toggleFavorite = (productId: number, variantId: number) => {
    setFavorites(currentFavorites => {
      const isFav = currentFavorites.some(
        fav => fav.productId === productId && fav.variantId === variantId,
      );
      const newFavorites = isFav
        ? currentFavorites.filter(
            fav =>
              !(fav.productId === productId && fav.variantId === variantId),
          )
        : [...currentFavorites, {productId, variantId}];

      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (productId: number, variantId: number) => {
    return favorites.some(
      fav => fav.productId === productId && fav.variantId === variantId,
    );
  };

  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorite, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};
