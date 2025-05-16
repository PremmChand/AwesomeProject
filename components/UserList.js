import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User List:</Text>

      {userList && userList.length ? (
        userList.map((item, index) => (
          <Text key={index} style={styles.userItem}>
            {item.firstName} {item.lastName}
          </Text>
        ))
      ) : (
        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  userItem: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
});

export default UserList;
