import React, {useEffect} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {
  myFetchGetRequest,
  myFetchPostRequest,
  myFetchPutRequest,
} from './FetchApiRequest';

const UserList = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const res = await myFetchGetRequest();
    // const res = await myFetchPostRequest();
    const res = await myFetchPutRequest();
    console.log('data', res);
  };

  return <></>;
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
