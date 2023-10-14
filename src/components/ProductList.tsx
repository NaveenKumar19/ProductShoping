// components/ProductList.tsx

import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../../types';
import ProductCard from './ProductCard';

export type ProductListProps = {
  products: Product[];
};
export default function ProductList({products}: ProductListProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={item => JSON.stringify(item.id)}
      renderItem={({item}) => <ProductCard key={item.id} product={item} />}
    />
  );
}
