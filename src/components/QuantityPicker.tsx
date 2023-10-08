import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

type QuantityPickerProps = {
  quantity: number;
  onQuantityChange: (amount: number) => void;
};

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  quantity,
  onQuantityChange,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = currentQuantity + amount;
    if (newQuantity >= 1) {
      setCurrentQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <View style={{flexDirection: 'row'}} testID="quantity-picker">
      <Button title="-" onPress={() => handleQuantityChange(-1)} />
      <TextInput
        value={currentQuantity.toString()}
        onChangeText={text => setCurrentQuantity(Number(text))}
      />
      <Button title="+" onPress={() => handleQuantityChange(1)} />
    </View>
  );
};

export default QuantityPicker;
