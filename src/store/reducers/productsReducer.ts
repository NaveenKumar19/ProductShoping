import {ProductState, ProductAction} from '../../../types';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productsReducer = (
  state = initialState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {...state, loading: true, error: null};
    case 'FETCH_PRODUCTS_SUCCESS':
      return {...state, products: action.payload, loading: false, error: null};
    case 'FETCH_PRODUCTS_FAILURE':
      return {...state, products: [], loading: false, error: action.payload};
    default:
      return state;
  }
};

export default productsReducer;
