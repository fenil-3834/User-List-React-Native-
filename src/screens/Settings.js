import React from 'react';
import {Text, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const AccountStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function Account() {
  return (
    <>
      <Text>Account</Text>
    </>
  );
}

function Profile() {
  return <Text>Profile</Text>;
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="A"
        component={Account}
        options={{
          tabBarLabel: 'home!',
          headerShown: false,
        }}
      />
    </AccountStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="B"
        component={Profile}
        options={{
          tabBarLabel: 'Settings!',
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const Settings = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default Settings;
