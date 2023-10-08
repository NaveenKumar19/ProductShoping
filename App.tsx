// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store/store';
import ProductPage from './src/pages/ProductPage';
import CartPage from './src/pages/CartPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductPage" component={ProductPage} />
          <Stack.Screen name="CartPage" component={CartPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
