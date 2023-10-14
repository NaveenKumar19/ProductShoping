import React from 'react';
import {render} from '@testing-library/react-native';
import {useCartPage} from '../hooks/useCartPage';
import CartPage from './CartPage';
import {CART_EMPTY} from '../constants';

jest.mock('../hooks/useCartPage');

describe('CartPage', () => {
  const mockCartItems = [
    {product: {id: 1, name: 'Product 1', price: 10}, quantity: 2},
    {product: {id: 2, name: 'Product 2', price: 20}, quantity: 1},
  ];

  const mockHandleRemoveFromCart = jest.fn();
  const mockHandleUpdateCartQuantity = jest.fn();

  beforeEach(() => {
    (useCartPage as jest.Mock).mockReturnValue({
      cartItems: mockCartItems,
      handleRemoveFromCart: mockHandleRemoveFromCart,
      handleUpdateCartQuantity: mockHandleUpdateCartQuantity,
      total: 50,
    });
    jest.clearAllMocks();
  });

  it('should render empty cart message', () => {
    (useCartPage as jest.Mock).mockReturnValue({
      cartItems: [],
      handleRemoveFromCart: mockHandleRemoveFromCart,
      handleUpdateCartQuantity: mockHandleUpdateCartQuantity,
      total: 0,
    });
    const {getByText} = render(<CartPage />);
    expect(getByText(CART_EMPTY)).toBeDefined();
  });

  it('should render cart items', () => {
    const {getByText} = render(<CartPage />);
    expect(getByText('Product 1')).toBeDefined();
    expect(getByText('Product 2')).toBeDefined();
  });

  it('should render empty cart message', () => {
    const {queryByTestId} = render(<CartPage />);
    expect(queryByTestId('empty-cart-message')).toBeDefined();
  });

  it('should render total', () => {
    const {getByText} = render(<CartPage />);
    expect(getByText('Pay Total: $50.00')).toBeDefined();
  });
});
