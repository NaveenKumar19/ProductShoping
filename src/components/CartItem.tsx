import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import QuantityPicker from './QuantityPicker';
import {CartItem as CartItemType, Product} from '../../types';

export type CartItemProps = {
  item: CartItemType;
  product: Product;
  onQuantityChange: (product: Product, quantity: number) => void;
  onRemove: (product: Product) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  product,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(product, quantity);
  };

  const handleRemove = () => {
    onRemove(product);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: product.img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
        <QuantityPicker
          quantity={item.quantity}
          onQuantityChange={handleQuantityChange}
        />
      </View>
      <Text style={styles.remove} onPress={handleRemove}>
        Remove
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    aspectRatio: 0.8,
    marginRight: 10,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  remove: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CartItem;
