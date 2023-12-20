import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';

const RegisterScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={'Username'}
          onChangeText={text => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Button
          title={'Sign Up'}
          onPress={() => props.navigation.navigate('login')}
        />
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
});

export default RegisterScreen;
