import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ProductPage, {ProductPageNavigationProp} from './ProductPage';
import {useProductPage} from '../hooks/useProductPage';

jest.mock('../hooks/useProductPage');

describe('ProductPage component', () => {
  let navigation: MockStackNavigationProp;
  type MockStackNavigationProp = ProductPageNavigationProp & {
    dispatch: jest.Mock<any, any, any>;
    navigate: jest.Mock<any, any, any>;
    goBack: jest.Mock<any, any, any>;
    reset: jest.Mock<any, any, any>;
    isFocused: jest.Mock<any, any, any>;
    canGoBack: jest.Mock<any, any, any>;
    setParams: jest.Mock<any, any, any>;
    setOptions: jest.Mock<any, any, any>;
    addListener: jest.Mock<any, any, any>;
    removeListener: jest.Mock<any, any, any>;
  };
  it('renders loading message when loading is true', () => {
    (useProductPage as jest.Mock).mockReturnValue({loading: true});
    const {getByText} = render(<ProductPage navigation={navigation} />);
    expect(getByText('Loading...')).toBeDefined();
  });

  it('renders error message when error exists', async () => {
    (useProductPage as jest.Mock).mockReturnValue({error: 'An error occurred'});
    const {getByText} = render(<ProductPage navigation={navigation} />);
    await waitFor(() => {
      expect(getByText('Error: An error occurred')).toBeDefined();
    });
  });

  it('renders ProductList component when products exist', async () => {
    const products = [
      {id: 1, name: 'Product 1'},
      {id: 2, name: 'Product 2'},
    ];
    (useProductPage as jest.Mock).mockReturnValue(jest.fn(() => ({products})));
    const {getByTestId} = render(<ProductPage navigation={navigation} />);
    await waitFor(() => {
      expect(getByTestId('product-list')).toBeDefined();
    });
  });
});
