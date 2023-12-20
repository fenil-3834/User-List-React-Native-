import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
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
          title={'Sign In'}
          onPress={() => props.navigation.navigate('home')}
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
export default LoginScreen;
