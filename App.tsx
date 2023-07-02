/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen';
import Screen from './components/Screen';
import SignIn from './components/SignIn';
import Provider from './globalState/Provider';
export type RootStack = {
  LoginScreen: undefined,
  Screen: {
    id: number,
    username: string,
    password: string
  },
  SignIn: undefined,
}

const stack = createNativeStackNavigator<RootStack>();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <stack.Navigator 
        initialRouteName='LoginScreen'
        screenOptions={{
          headerShown: false
        }}
        >
        <stack.Screen name='LoginScreen' component={LoginScreen} />
        <stack.Screen name='SignIn' component={SignIn} />
        <stack.Screen name= 'Screen' component={Screen} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
