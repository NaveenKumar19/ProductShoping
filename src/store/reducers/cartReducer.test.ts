import {CartItem, CartAction} from '../../../types';
import cartReducer from './cartReducer';

describe('cartReducer', () => {
  it('should add a new item to the cart', () => {
    const initialState: CartItem[] = [];
    const action: CartAction = {
      type: 'ADD_TO_CART',
      payload: {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
    };
    const expectedState: CartItem[] = [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
    ];
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('should update the quantity of an existing item in the cart', () => {
    const initialState: CartItem[] = [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
    ];
    const action: CartAction = {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 2,
      },
    };
    const expectedState: CartItem[] = [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 2,
      },
    ];
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('should remove an item from the cart', () => {
    const initialState: CartItem[] = [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
      {
        product: {
          id: 2,
          name: 'Product 2',
          price: 20,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
    ];
    const action: CartAction = {
      type: 'REMOVE_FROM_CART',
      payload: {
        id: 1,
        name: 'Product 1',
        price: 10,
        colour: '',
        img: '',
      },
    };
    const expectedState: CartItem[] = [
      {
        product: {
          id: 2,
          name: 'Product 2',
          price: 20,
          colour: '',
          img: '',
        },
        quantity: 1,
      },
    ];
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
