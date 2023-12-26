/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Settings, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
//Navigation

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import Add from './screens/Add';

//Screens

export type RootStackParamList = {
  register: undefined;
  login: {productId: string};
  home: undefined;
  settings: undefined;
};

const stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="register">
        <stack.Screen
          name="register"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerShown: false,
          }}
        />

        <stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: false,
          }}
        />

        <stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
