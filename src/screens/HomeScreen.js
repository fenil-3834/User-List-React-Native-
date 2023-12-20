import React from 'react';
import {Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Settings from './Settings';
import UserList from './UserList';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function Home() {
  return (
    <>
      <UserList />
    </>
  );
}

function Setting() {
  return (
    <>
      <Settings />
    </>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={Home}
        options={{
          tabBarLabel: 'home!',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={Setting}
        options={{
          tabBarLabel: 'Settings!',
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerStyle: {backgroundColor: '#1e90ff'},
          headerTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          headerStyle: {backgroundColor: '#1e90ff'},
          headerTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  Title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
});
