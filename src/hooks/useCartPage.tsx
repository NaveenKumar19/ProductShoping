import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CartState, Product} from '../../types';
import {removeFromCart, updateCartQuantity} from '../store/actions';

export const useCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartState) => state.cartItems);

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleUpdateCartQuantity = (product: Product, quantity: number) => {
    dispatch(updateCartQuantity({product, quantity}));
  };

  const total = useMemo(() => {
    const totalAmount = cartItems.reduce((acc, item) => {
      const product = cartItems.find(p => p.product.id === item.product.id);
      if (!product?.product) {
        return acc;
      }
      return acc + product.product.price * item.quantity;
    }, 0);
    return totalAmount;
  }, [cartItems]);

  return {cartItems, handleRemoveFromCart, handleUpdateCartQuantity, total};
};
