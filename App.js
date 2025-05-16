/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View, ScrollView, StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer style={styles.container}  >
      <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {ProductWrapper}/>
        <Stack.Screen name = 'User' component = {UserList}/>
        
      </Stack.Navigator>
    </NavigationContainer>
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
export default App;
