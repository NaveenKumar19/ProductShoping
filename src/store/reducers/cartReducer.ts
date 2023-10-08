import {CartItem, CartAction} from '../../../types';

const cartReducer = (state: CartItem[] = [], action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(
        item => item.product.id === action.payload.product.id,
      );
      if (existingItem) {
        return state.map(item => {
          if (item.product.id === action.payload.product.id) {
            return {
              product: item.product,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.product.id !== action.payload.id);
    case 'UPDATE_CART_QUANTITY':
      return state.map(item => {
        if (item.product.id === action.payload.product.id) {
          return {product: item.product, quantity: action.payload.quantity};
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default cartReducer;
