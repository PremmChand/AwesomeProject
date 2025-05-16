/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state)=>state.users.users)
    console.warn("In component", userList)
    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch])

    return (
        <View style={styles.container}>
           
           <Text>{userList.name}</Text>
                {
                    userList.length?
                    userList.map((item,index) => (
                            <Text key={index} style={{fontSize:18}}>{item.firstName}</Text>
                        ))
                        : null
                }
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UserList;
