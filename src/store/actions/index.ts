// actions.ts

import {AnyAction, createAction, Dispatch} from '@reduxjs/toolkit';
import {Product} from '../../../types';

export const fetchProducts = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'FETCH_PRODUCTS_REQUEST'});
      const response = await fetch(
        'https://my-json-server.typicode.com/benirvingplt/products/products',
      );
      console.log('shsshhs', response);
      const products: Product[] = await response.json();
      dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: products});
    } catch (error) {
      console.log('shsshhs', error);
      dispatch({
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: JSON.stringify(error),
      });
    }
  };
};

export const addToCart = createAction<{product: Product; quantity: number}>(
  'ADD_TO_CART',
);

export const removeFromCart = createAction<Product>('REMOVE_FROM_CART');

export const updateCartQuantity = createAction<{
  product: Product;
  quantity: number;
}>('UPDATE_CART_QUANTITY');
