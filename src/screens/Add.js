import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';

const Add = () => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const myFetchPostRequest = async () => {
    try {
      const response = await fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
          'app-id': '658aa24eaf72f37d6227df85',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      const resJson = await response.json();
      console.log('User added successfully', resJson);

      setEmail('');
      setfirstName('');
      setlastName('');

      Alert.alert('Success', 'User added sucessfully');
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user. Please try again.');
    }
    //   return resJson;
    // } catch (error) {
    //   console.log(error);
    // }
    // };
  };
  useEffect(() => {
    myFetchPostRequest();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Add User</Text>
        <Text style={styles.inputText}>Email Adress: </Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder={'Enter Your Email Address'}
          onChangeText={text => setEmail(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.inputText}>First Name: </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder={'Enter Your First Name'}
          onChangeText={text => setfirstName(text)}
          autoCapitalize={'none'}
          // keyboardType={'default'}
        />
        <Text style={styles.inputText}>Last Name: </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder={'Enter Your Last Name'}
          onChangeText={text => setlastName(text)}
          autoCapitalize={'none'}
          // keyboardType={'default'}
        />
        <Button title={'Submit'} onPress={myFetchPostRequest} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  main: {
    width: '100%',
    height: 'auto',
    padding: 40,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 15,
  },
  inputText: {
    marginBottom: 6,
    fontWeight: 'bold',
  },
});
export default Add;
