/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View, ScrollView, StyleSheet,
  Button,
} from 'react-native';

import Product from './Product';
import Header from './Header'
const ProductWrapper = ({navigation}) => {

  const products = [
    {
      name: 'samsung galaxy',
      color: 'white',
      price: 30000,
      image: 'https://th.bing.com/th/id/OIP.d70cdHffTDV33-VyYfAjyAHaJo?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Vivo',
      color: 'green',
      price: 20000,
      image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1605236629873/294d9efc870dd36d8fae2687b7765e55.jpg'
    },
    {
      name: 'one plus',
      color: 'golden',
      price: 50000,
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/8/3/11-5g-b0bqjlcqd3-oneplus-original-imagmugsquuygsbg.jpeg?q=70'
    },
    {
      name: 'iphone',
      color: 'silver',
      price: 60000,
      image: 'https://media.ldlc.com/ld/products/00/04/65/15/LD0004651580_2.jpg'
    },
    {
      name: 'nokia',
      color: 'black',
      price: 25000,
      image: 'https://www.vhv.rs/dpng/d/169-1690962_nokia-android-smartphone-2019-hd-png-download.png'
    }
  ]

  return (

    <View style={styles.container}>
        <Button title='Go To UserList' onPress ={()=>navigation.navigate("User")}/>
      <Header />
      <ScrollView style={styles.scrollView}>
        {
          products.map((item ,index) =>
            <Product inde ={index} key={index} item={item} />
          )
        }
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'plum'//'pink',
  },

});
export default ProductWrapper;
