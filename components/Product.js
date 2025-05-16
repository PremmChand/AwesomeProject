/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet, Image, Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,removeFromCart } from './redux/action';

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch(); // it is react-redux hook, it hels to call function
  const cartItems = useSelector((state) => state.cart)
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (item) =>{
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
    let result = cartItems.filter((element)=>{
        return element.name === item.name
    })

    if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false) 
    }
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(element => {
    //     if (element.name === item.name) {
    //       setIsAdded(true)
    //     }
    //   });
    // }
  }, [cartItems])
  return (
    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10, margin: 30 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      {
        isAdded ? <Button title='Remove To Cart' onPress={() => handleRemoveFromCart(item)} style={styles.btn} />
          :
          <Button title='Add To Cart' onPress={() => handleAddToCart(item)} style={styles.btn} />
      }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    marginTop: 10
  }
})

export default Product;
