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
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartData = useSelector((state) => state.cart)
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        <View>
            <Text style={{
                fontSize: 30, textAlign: 'right',
                padding: 10, backgroundColor: 'orange'
            }}>
                <View style={{
                    backgroundColor: 'yellow',textAlign: 'center', borderRadius: 15, height: 40, width: 40
                }}>
                    <Text style={{
                        fontSize: 30, textAlign: 'center'
                    }}>{cartItems}</Text>
                </View>
            </Text>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Header;
