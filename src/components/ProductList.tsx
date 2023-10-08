// components/ProductList.tsx

import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../../types';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

export default function ProductList({products}: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={item => JSON.stringify(item.id)}
      renderItem={({item}) => <ProductCard key={item.id} product={item} />}
    />
  );
}
