import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import CartItem from '../components/CartItem';
import {CartItem as CartItemType, RootStackParamList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCartPage} from '../hooks/useCartPage';
type ProductPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CartPage'
>;
type Props = {
  navigation: ProductPageNavigationProp;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartPage = ({navigation}: Props) => {
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
          <Text style={styles.emptyTextStyle}>
            "Oops! 😬 Your cart is feeling a little lonely. Let's add some
            goodies to keep it company and put a smile on its face! 😊🛒"
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
