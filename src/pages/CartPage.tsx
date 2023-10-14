import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import CartItem from '../components/CartItem';
import {CartItem as CartItemType, RootStackParamList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCartPage} from '../hooks/useCartPage';
import {CART_EMPTY} from '../constants';
type ProductPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CartPage'
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = {
  navigation: ProductPageNavigationProp;
};

const CartPage = () => {
  const {cartItems, handleRemoveFromCart, handleUpdateCartQuantity, total} =
    useCartPage();
  const renderItem = ({item}: {item: CartItemType}) => {
    const product = cartItems.find(p => p.product.id === item.product.id);
    if (!product?.product) {
      return null;
    }
    return (
      <CartItem
        item={item}
        product={product.product}
        onQuantityChange={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
      />
    );
  };
  return (
    <View style={styles.container}>
      {cartItems?.length ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.product.id.toString()}
          />
          <View style={styles.buttonStyle}>
            <Button title={`Pay Total: $${total.toFixed(2)}`} />
          </View>
        </>
      ) : (
        <View style={styles.emptyStyle}>
          <Text style={styles.emptyTextStyle} testID="empty-cart-message">
            {CART_EMPTY}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  emptyStyle: {
    flex: 1,
    paddingTop: 30,
  },
  emptyTextStyle: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    padding: 16,
    marginBottom: 20,
  },
});

export default CartPage;
