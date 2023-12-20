import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const UserList = ({navigation}) => {
  return (
    <View style={style.container}>
      <Button
        title={'Account'}
        onPress={() => navigation.navigate('UserList')}
      />

      <Button
        title={'Profile'}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default UserList;

const style = StyleSheet.create({
  container: {
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});
