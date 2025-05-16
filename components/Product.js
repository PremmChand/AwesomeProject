import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './redux/action';

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    const exists = cartItems.some((element) => element.name === item.name);
    setIsAdded(exists);
  }, [cartItems]);

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.detail}>Color: {item.color}</Text>
      <Text style={styles.detail}>₹ {item.price}</Text>

      <View style={styles.buttonWrapper}>
        {isAdded ? (
          <Button title="Remove from Cart" onPress={handleRemoveFromCart} color="#FF3B30" />
        ) : (
          <Button title="Add to Cart" onPress={handleAddToCart} color="#34C759" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  buttonWrapper: {
    marginTop: 16,
    width: '80%',
  },
});

export default Product;
