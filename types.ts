export type Product = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type CartState = {
  cartItems: CartItem[];
};

export type FetchProductsSuccessAction = {
  type: 'FETCH_PRODUCTS_SUCCESS';
  payload: Product[];
};

export type FetchProductsFailureAction = {
  type: 'FETCH_PRODUCTS_FAILURE';
  payload: string;
};

export type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: {
    product: Product;
    quantity: number;
  };
};

export type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: Product;
};

export type UpdateCartQuantityAction = {
  type: 'UPDATE_CART_QUANTITY';
  payload: {
    product: Product;
    quantity: number;
  };
};

export type ProductAction =
  | {type: 'FETCH_PRODUCTS_REQUEST'}
  | {type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[]}
  | {type: 'FETCH_PRODUCTS_FAILURE'; payload: string};

export type CartAction =
  | {type: 'ADD_TO_CART'; payload: {product: Product; quantity: number}}
  | {type: 'REMOVE_FROM_CART'; payload: Product}
  | {
      type: 'UPDATE_CART_QUANTITY';
      payload: {product: Product; quantity: number};
    };

export type RootState = {
  productState: ProductState;
  cartState: CartState;
};

export type RootStackParamList = {
  ProductPage: undefined;
  CartPage: undefined;
};
