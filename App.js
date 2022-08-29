import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/views/screens/LoginScreen';
import RegistrationScreen from '.src/views/screens/RegistrationScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import AsynStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.screen
       name='RegistrationScreen'
       component={RegistrationScreen}/>
       <Stack.screen name='LoginScreen' component={LoginScreen}/>
       <Stack.screen name='HomeScreen' component={HomeScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}