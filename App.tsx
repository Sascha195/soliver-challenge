import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStackNavigator} from './src/navigation/MainNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FavoritesProvider} from './src/context/FavoritesContext';
import {FiltersProvider} from './src/context/FiltersContext';

type RootStackParamList = StaticParamList<typeof MainStackNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const Navigation = createStaticNavigation(MainStackNavigator);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <FavoritesProvider>
          <FiltersProvider>
            <Navigation />
          </FiltersProvider>
        </FavoritesProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
