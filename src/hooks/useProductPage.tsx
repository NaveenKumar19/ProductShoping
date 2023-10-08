import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProductState} from '../../types';
import {fetchProducts} from '../store/actions';
import {ProductPageNavigationProp} from '../pages/ProductPage';
import {AnyAction} from 'redux';

export const useProductPage = (navigation: ProductPageNavigationProp) => {
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector(
    (state: {products: ProductState}) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts() as unknown as AnyAction);
  }, [dispatch]);

  const handleGoToCart = () => {
    navigation.navigate('CartPage');
  };

  return {products, loading, error, handleGoToCart};
};
