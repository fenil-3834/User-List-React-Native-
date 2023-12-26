import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Button,
} from 'react-native';
import Add from './Add';

const UserList = props => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://dummyapi.io/data/v1/user', {
        method: 'GET',
        headers: {'app-id': '658aa24eaf72f37d6227df85'},
      });
      const resJson = await response.json();
      console.log(resJson);
      setLoading(false);
      setData(resJson.data);
      return resJson;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.picture}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{capitalizeFirstLetter(item.title)} </Text>
        <Text style={styles.name}>{item.firstName} </Text>
        <Text style={styles.name}>{item.lastName}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.spaceBetween}>
        <Text style={styles.Title}>User List</Text>
        <Button
          title={'Add User'}
          onPress={() => props.navigation.navigate('add')}
          style={styles.addBtn}
        />
      </View>

      <View style={{padding: 20}}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#1e90ff"
            style={styles.indicator}
          />
        ) : (
          <View>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'start',
    // marginLeft: 20,
    // marginTop: 20,
    color: '#141823',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 10,
  },
  addBtn: {
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
  },
});
