// components/ProductPage.tsx

import React from 'react';
import ProductList from '../components/ProductList';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';
import {useProductPage} from '../hooks/useProductPage';

export type ProductPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductPage'
>;
type Props = {
  navigation: ProductPageNavigationProp;
};

export default function ProductPage({navigation}: Props) {
  const {loading, error, products, handleGoToCart} = useProductPage(navigation);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      {products?.length ? (
        <>
          <ProductList products={products} />
          <View style={styles.goToCartstyle}>
            <Button title="Go to Cart" onPress={handleGoToCart} />
          </View>
        </>
      ) : (
        <Text>"No Products Available"</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  goToCartstyle: {marginBottom: 20},
  container: {flex: 1, backgroundColor: '#F2F2F2', padding: 16},
});
