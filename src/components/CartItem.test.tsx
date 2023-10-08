import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CartItem from './CartItem';
import {CartItem as CartItemType, Product} from '../../types';

describe('CartItem', () => {
  let product = {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    img: 'https://example.com/product1.jpg',
  } as Product;

  let item = {
    product,
    quantity: 3,
  } as CartItemType;

  const onQuantityChange = jest.fn();
  const onRemove = jest.fn();

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <CartItem
        item={item}
        product={product}
        onQuantityChange={onQuantityChange}
        onRemove={onRemove}
      />,
    );

    expect(getByText(product.name)).toBeDefined();
    expect(getByText(`$${product.price.toFixed(2)}`)).toBeDefined();
    expect(getByTestId('quantity-picker')).toBeDefined();
    expect(getByText('Remove')).toBeDefined();
  });

  it('calls onRemove when remove button is pressed', () => {
    const {getByText} = render(
      <CartItem
        item={item}
        product={product}
        onQuantityChange={onQuantityChange}
        onRemove={onRemove}
      />,
    );

    fireEvent.press(getByText('Remove'));

    expect(onRemove).toHaveBeenCalledWith(product);
  });
});
